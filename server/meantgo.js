// Thin server-side client for the MeantGo Admin API (currently served from the
// Fydinn test deployment). Keeps the shared admin token on the server and
// caches the HttpOnly `admin_session` cookie the login returns.
//
// NOTE: the live API authenticates with a Set-Cookie session (admin_session),
// not the Bearer JWT described in the older Admin-API.md.

const MEANTGO_API = process.env.MEANTGO_API || "https://fydinn.up.railway.app";
const MEANTGO_ADMIN_TOKEN = process.env.MEANTGO_ADMIN_TOKEN || "";

let sessionCookie = null; // e.g. "admin_session=abc123"
let sessionExpiresAt = 0;

async function login(force = false) {
  if (!force && sessionCookie && Date.now() < sessionExpiresAt - 60_000) return sessionCookie;
  if (!MEANTGO_ADMIN_TOKEN) {
    throw new Error("MEANTGO_ADMIN_TOKEN is not configured on the server");
  }
  const res = await fetch(`${MEANTGO_API}/admin-old/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: MEANTGO_ADMIN_TOKEN }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.status !== "success") {
    throw new Error(body.message || `Admin API login failed (HTTP ${res.status})`);
  }

  const cookies =
    typeof res.headers.getSetCookie === "function"
      ? res.headers.getSetCookie()
      : [res.headers.get("set-cookie")].filter(Boolean);
  const sessionLine = cookies.find((c) => c?.startsWith("admin_session=")) || cookies[0];
  if (!sessionLine) {
    throw new Error("Admin API login did not return a session cookie");
  }
  sessionCookie = sessionLine.split(";")[0]; // "admin_session=<value>"

  const maxAge = /max-age=(\d+)/i.exec(sessionLine);
  const ttlSeconds = maxAge ? Number(maxAge[1]) : 43200;
  sessionExpiresAt = Date.now() + ttlSeconds * 1000;
  return sessionCookie;
}

export async function apiGet(path) {
  let cookie = await login();
  const fetchWith = (c) =>
    fetch(`${MEANTGO_API}${path}`, { headers: { Cookie: c, Accept: "application/json" } });

  let res = await fetchWith(cookie);
  if (res.status === 401) {
    // Session rejected — re-login once and retry.
    cookie = await login(true);
    res = await fetchWith(cookie);
  }
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.status !== "success") {
    throw new Error(body.message || `Admin API request failed (HTTP ${res.status})`);
  }
  return body.data;
}

export const apiConfigured = () => Boolean(MEANTGO_ADMIN_TOKEN);
export { MEANTGO_API };

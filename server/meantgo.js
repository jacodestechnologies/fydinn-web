// Thin server-side client for the MeantGo Admin API (currently served from the
// Fydinn test deployment). Keeps the shared admin token on the server and
// caches the short-lived Bearer JWT it returns.

const MEANTGO_API = process.env.MEANTGO_API || "https://fydinn.up.railway.app";
const MEANTGO_ADMIN_TOKEN = process.env.MEANTGO_ADMIN_TOKEN || "";

let jwt = null;
let jwtExpiresAt = 0;

async function getJwt(force = false) {
  if (!force && jwt && Date.now() < jwtExpiresAt - 60_000) return jwt;
  if (!MEANTGO_ADMIN_TOKEN) {
    throw new Error("MEANTGO_ADMIN_TOKEN is not configured on the server");
  }
  const res = await fetch(`${MEANTGO_API}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: MEANTGO_ADMIN_TOKEN }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.status !== "success") {
    throw new Error(body.message || `Admin API login failed (HTTP ${res.status})`);
  }
  jwt = body.data.token;
  jwtExpiresAt = Date.now() + (body.data.expiresIn ?? 43200) * 1000;
  return jwt;
}

export async function apiGet(path) {
  let token = await getJwt();
  let res = await fetch(`${MEANTGO_API}${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  if (res.status === 401) {
    // Token rejected — re-login once and retry.
    token = await getJwt(true);
    res = await fetch(`${MEANTGO_API}${path}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });
  }
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.status !== "success") {
    throw new Error(body.message || `Admin API request failed (HTTP ${res.status})`);
  }
  return body.data;
}

export const apiConfigured = () => Boolean(MEANTGO_ADMIN_TOKEN);
export { MEANTGO_API };

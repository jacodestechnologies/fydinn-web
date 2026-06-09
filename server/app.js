import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findAdmin, recordLogin, recentLogins, loginStats } from "./db.js";
import { apiGet, apiConfigured } from "./meantgo.js";

const JWT_SECRET = process.env.JWT_SECRET || "dev-admin-secret-change-me";
const SESSION_TTL = 12 * 60 * 60; // 12 hours, in seconds

const app = express();
app.use(cors());
app.use(express.json());

function clientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length) return fwd.split(",")[0].trim();
  return (req.socket?.remoteAddress || "").replace("::ffff:", "");
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) {
    return res.status(401).json({ status: "error", message: "Authentication required" });
  }
  try {
    req.admin = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ status: "error", message: "Invalid or expired session" });
  }
}

async function proxy(res, fetcher) {
  if (!apiConfigured()) {
    return res.status(503).json({
      status: "error",
      message: "Admin API is not configured (set MEANTGO_ADMIN_TOKEN).",
    });
  }
  try {
    res.json({ status: "success", data: await fetcher() });
  } catch (e) {
    res.status(502).json({ status: "error", message: e.message });
  }
}

// ── Local admin authentication (Postgres-backed) ──
app.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body || {};
  const ip = clientIp(req);
  const userAgent = req.headers["user-agent"] || "";
  const admin = username ? await findAdmin(username) : null;
  const ok = Boolean(admin) && bcrypt.compareSync(password || "", admin.password_hash);

  await recordLogin({ username: username || "(blank)", success: ok, ip, userAgent });

  if (!ok) {
    return res.status(401).json({ status: "error", message: "Invalid username or password" });
  }
  const token = jwt.sign(
    { sub: admin.id, username: admin.username, role: admin.role },
    JWT_SECRET,
    { expiresIn: SESSION_TTL },
  );
  res.json({
    status: "success",
    data: {
      token,
      tokenType: "Bearer",
      expiresIn: SESSION_TTL,
      username: admin.username,
      role: admin.role,
    },
  });
});

app.get("/api/admin/me", requireAuth, (req, res) => {
  res.json({
    status: "success",
    data: {
      username: req.admin.username,
      role: req.admin.role ?? null,
      apiConfigured: apiConfigured(),
    },
  });
});

app.get("/api/admin/login-logs", requireAuth, async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 100, 500);
  const [logs, stats] = await Promise.all([recentLogins(limit), loginStats()]);
  res.json({ status: "success", data: { logs, stats } });
});

// ── MeantGo Admin API proxies (token stays server-side) ──
app.get("/api/admin/health", requireAuth, (req, res) => proxy(res, () => apiGet("/admin/health")));

app.get("/api/admin/metrics", requireAuth, (req, res) =>
  proxy(res, () => apiGet("/admin/metrics")),
);

app.get("/api/admin/users", requireAuth, (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 100, 250);
  const offset = Math.max(Number(req.query.offset) || 0, 0);
  proxy(res, () => apiGet(`/admin/users?limit=${limit}&offset=${offset}`));
});

app.get("/api/admin/ping", (req, res) => res.json({ status: "success", data: { ok: true } }));

export default app;

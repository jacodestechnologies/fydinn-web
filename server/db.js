// Picks the DB driver at runtime: Postgres when a connection string is present
// (Neon/Supabase/prod), otherwise SQLite for zero-setup local development.
// Drivers are dynamically imported so the unused one (and its native binding)
// is never loaded.

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "meantgo-admin";
const seed = { seedUser: ADMIN_USERNAME, seedPass: ADMIN_PASSWORD };

const DATABASE_URL =
  process.env.DATABASE_URL ||
  process.env.MEANTGO_POSTGRES_URL ||
  process.env.MEANTGO_POSTGRES_URL_NON_POOLING;

let impl;
if (DATABASE_URL) {
  const { createPostgres } = await import("./db.postgres.js");
  impl = await createPostgres(DATABASE_URL, seed);
  console.log("[db] Using Postgres");
} else {
  const { createSqlite } = await import("./db.sqlite.js");
  impl = createSqlite(seed);
  console.log("[db] Using SQLite (set DATABASE_URL for Postgres)");
}

export const findAdmin = (username) => impl.findAdmin(username);
export const recordLogin = (entry) => impl.recordLogin(entry);
export const recentLogins = (limit = 100) => impl.recentLogins(limit);
export const loginStats = () => impl.loginStats();

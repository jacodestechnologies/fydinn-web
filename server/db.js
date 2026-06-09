// Admin DB layer. Always Postgres (Supabase) — local and production alike.
// Set DATABASE_URL (or MEANTGO_POSTGRES_URL) to the Supabase connection string.

import { createPostgres } from "./db.postgres.js";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "meantgo-admin";
const seed = { seedUser: ADMIN_USERNAME, seedPass: ADMIN_PASSWORD };

const DATABASE_URL =
  process.env.DATABASE_URL ||
  process.env.MEANTGO_POSTGRES_URL ||
  process.env.MEANTGO_POSTGRES_URL_NON_POOLING;

if (!DATABASE_URL) {
  throw new Error(
    "[db] DATABASE_URL is not set. Add your Supabase Postgres connection string to .env",
  );
}

const impl = await createPostgres(DATABASE_URL, seed);
console.log("[db] Using Postgres");

export const findAdmin = (username) => impl.findAdmin(username);
export const recordLogin = (entry) => impl.recordLogin(entry);
export const recentLogins = (limit = 100) => impl.recentLogins(limit);
export const loginStats = () => impl.loginStats();

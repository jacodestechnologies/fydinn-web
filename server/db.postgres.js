import pg from "pg";
import bcrypt from "bcryptjs";

// Production driver (Neon / Supabase / any Postgres). Used when DATABASE_URL is set.
export async function createPostgres(connectionString, { seedUser, seedPass }) {
  // Drop sslmode/ssl from the URL and force a relaxed SSL object so managed
  // providers (Supabase/Neon) with self-signed cert chains connect cleanly.
  const url = new URL(connectionString);
  url.searchParams.delete("sslmode");
  url.searchParams.delete("ssl");

  const pool = new pg.Pool({
    connectionString: url.toString(),
    ssl: { rejectUnauthorized: false },
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id SERIAL PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    ALTER TABLE admins ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'admin';
    CREATE TABLE IF NOT EXISTS login_logs (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      success BOOLEAN NOT NULL,
      ip TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    -- Lock these tables down: enable RLS with no policies so they are NOT
    -- reachable through Supabase's public REST API (anon/authenticated keys).
    -- Our backend connects as the table owner, which bypasses RLS, so direct
    -- queries keep working. Password hashes never leak via PostgREST.
    ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
    ALTER TABLE login_logs ENABLE ROW LEVEL SECURITY;
  `);

  // Bootstrap ONLY when the admins table is empty. After that, admin accounts
  // are managed directly in Supabase (the table is the source of truth, not env).
  const { rows: existing } = await pool.query("SELECT COUNT(*)::int AS n FROM admins");
  if (existing[0].n === 0) {
    await pool.query(
      "INSERT INTO admins (username, password_hash, role) VALUES ($1, $2, 'superadmin')",
      [seedUser, bcrypt.hashSync(seedPass, 10)],
    );
    console.log(`[db] Bootstrapped first admin "${seedUser}" (role: superadmin)`);
  }

  return {
    findAdmin: async (username) => {
      const res = await pool.query(
        "SELECT id, username, password_hash, role, created_at FROM admins WHERE username = $1",
        [username],
      );
      return res.rows[0] || null;
    },
    recordLogin: ({ username, success, ip, userAgent }) =>
      pool.query(
        "INSERT INTO login_logs (username, success, ip, user_agent) VALUES ($1, $2, $3, $4)",
        [username, success, ip ?? null, userAgent ?? null],
      ),
    recentLogins: async (limit = 100) => {
      const res = await pool.query(
        `SELECT id, username, success, ip, user_agent AS "userAgent", created_at AS "createdAt"
         FROM login_logs ORDER BY id DESC LIMIT $1`,
        [limit],
      );
      return res.rows;
    },
    loginStats: async () => {
      const res = await pool.query(
        `SELECT COUNT(*)::int AS total,
                COUNT(*) FILTER (WHERE success)::int AS successes,
                COUNT(*) FILTER (WHERE NOT success)::int AS failures
         FROM login_logs`,
      );
      return res.rows[0];
    },
  };
}

import Database from "better-sqlite3";
import bcrypt from "bcryptjs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Local-development driver. Used when DATABASE_URL is not set.
export function createSqlite({ seedUser, seedPass }) {
  const db = new Database(join(__dirname, "admin.db"));
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS login_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      success INTEGER NOT NULL,
      ip TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  const existing = db.prepare("SELECT id FROM admins WHERE username = ?").get(seedUser);
  if (!existing) {
    db.prepare("INSERT INTO admins (username, password_hash) VALUES (?, ?)").run(
      seedUser,
      bcrypt.hashSync(seedPass, 10),
    );
    console.log(`[db] Seeded admin user "${seedUser}"`);
  }

  return {
    findAdmin: (username) => db.prepare("SELECT * FROM admins WHERE username = ?").get(username),
    recordLogin: ({ username, success, ip, userAgent }) =>
      db
        .prepare("INSERT INTO login_logs (username, success, ip, user_agent) VALUES (?, ?, ?, ?)")
        .run(username, success ? 1 : 0, ip ?? null, userAgent ?? null),
    recentLogins: (limit = 100) =>
      db
        .prepare(
          `SELECT id, username, success, ip, user_agent AS userAgent, created_at AS createdAt
           FROM login_logs ORDER BY id DESC LIMIT ?`,
        )
        .all(limit)
        .map((r) => ({ ...r, success: Boolean(r.success) })),
    loginStats: () => {
      const row = db
        .prepare(
          `SELECT COUNT(*) AS total,
                  SUM(success) AS successes,
                  SUM(CASE WHEN success = 0 THEN 1 ELSE 0 END) AS failures
           FROM login_logs`,
        )
        .get();
      return {
        total: row.total ?? 0,
        successes: row.successes ?? 0,
        failures: row.failures ?? 0,
      };
    },
  };
}

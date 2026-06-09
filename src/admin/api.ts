// Browser client for the local admin backend (/api/admin/*).

const TOKEN_KEY = "meantgo_admin_jwt";

export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const setToken = (t: string) => sessionStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => sessionStorage.removeItem(TOKEN_KEY);

export class AuthError extends Error {}

type Envelope<T> = { status: "success"; data: T } | { status: "error"; message: string };

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getToken();
  const res = await fetch(`/api/admin${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers || {}),
    },
  });
  const body: Envelope<T> = await res
    .json()
    .catch(() => ({ status: "error", message: "Invalid server response" }));
  if (res.status === 401) {
    clearToken();
    throw new AuthError(body.status === "error" ? body.message : "Session expired");
  }
  if (body.status !== "success") {
    throw new Error(body.status === "error" ? body.message : `Request failed (${res.status})`);
  }
  return body.data;
}

export async function loginRequest(username: string, password: string) {
  const data = await request<{ token: string; username: string }>("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  setToken(data.token);
  return data;
}

export const adminGet = <T>(path: string) => request<T>(path);

/* ── Response types ── */

export type CoreDep = { ok: boolean; latencyMs: number; error: string | null };
export type HealthSection = {
  key: string;
  name: string;
  description: string;
  icon: string;
  status: "operational" | "degraded" | "down";
  dependencies: { name: string; type: string; ok: boolean; latencyMs: number; detail: string }[];
  routes: {
    method: string;
    path: string;
    status: string;
    httpStatus: number | null;
    latencyMs: number;
    note: string;
  }[];
  metrics: { label: string; value: number | string }[];
};
export type Health = {
  checkedAt: string;
  core: { server: { ok: boolean; uptimeSeconds: number }; database: CoreDep; redis: CoreDep };
  sections: HealthSection[];
  summary: { operational: number; degraded: number; down: number };
};

export type Metrics = {
  uptimeSeconds: number;
  memory: { rss: number; heapUsed: number; heapTotal: number };
  runtime: { bun: string; platform: string; arch: string; env: string };
  logging?: Record<string, unknown>;
};

export type AdminUser = {
  id: string;
  phone: string;
  phoneVerifiedAt: string | null;
  firstName: string | null;
  lastName: string | null;
  accountStatus: string;
  onboardingStep: number;
  lastActiveAt: string | null;
  createdAt: string;
  otp?: { code: string | null; codeTtlSeconds: number } & Record<string, unknown>;
};
export type UsersPage = { total: number; limit: number; offset: number; users: AdminUser[] };

export type LoginLog = {
  id: number;
  username: string;
  success: boolean;
  ip: string | null;
  userAgent: string | null;
  createdAt: string;
};
export type LoginLogsData = {
  logs: LoginLog[];
  stats: { total: number; successes: number; failures: number };
};

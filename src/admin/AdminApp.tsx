import { useState } from "react";
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Activity,
  ChevronRight,
  LayoutDashboard,
  Loader2,
  LogOut,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { AdminAuthProvider, useAdminAuth } from "./auth";
import { Overview } from "./views/Overview";
import { Monitoring } from "./views/Monitoring";
import { Moderation } from "./views/Moderation";
import { LoginLogs } from "./views/LoginLogs";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/monitoring", label: "Monitoring", icon: Activity, end: false },
  { to: "/admin/users", label: "Users", icon: Users, end: false },
  { to: "/admin/logs", label: "Login Logs", icon: ScrollText, end: false },
];

export default function AdminApp() {
  return (
    <AdminAuthProvider>
      <Gate />
    </AdminAuthProvider>
  );
}

function Gate() {
  const { authed } = useAdminAuth();
  return authed ? <Shell /> : <LoginScreen />;
}

/* ── Authenticated shell ── */

function Shell() {
  const { username, role, logout } = useAdminAuth();
  const { pathname } = useLocation();
  const current = [...NAV].sort((a, b) => b.to.length - a.to.length).find((n) =>
    n.end ? pathname === n.to : pathname.startsWith(n.to),
  );

  return (
    <div className="flex min-h-dvh bg-[#0B0A12] text-white">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-white/8 bg-[#0E0C16] p-4 md:flex">
        <Brand />
        <p className="mt-7 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/30">
          Menu
        </p>
        <nav className="mt-2 flex flex-1 flex-col gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand/15 text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white/90"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`size-4.5 ${isActive ? "text-brand-light" : "text-white/45 group-hover:text-white/70"}`}
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-white/55 hover:bg-white/5 hover:text-rose-300"
        >
          <LogOut className="size-4" /> Sign out
        </button>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top header bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/8 bg-[#0B0A12]/80 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="hidden text-white/40 sm:inline">Admin</span>
            <ChevronRight className="hidden size-3.5 text-white/25 sm:inline" />
            <span className="font-semibold text-white">{current?.label ?? "Dashboard"}</span>
          </div>
          <UserChip username={username} role={role} onSignOut={logout} />
        </header>

        {/* Mobile nav */}
        <nav className="flex gap-1 overflow-x-auto border-b border-white/8 bg-[#0E0C16] px-2 py-2 md:hidden">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ${
                  isActive ? "bg-brand/15 text-white" : "text-white/55"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <main className="mx-auto w-full max-w-6xl flex-1 p-5 sm:p-8">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="users" element={<Moderation />} />
            <Route path="logs" element={<LoginLogs />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-2.5 px-1">
      <div className="grid size-9 place-items-center rounded-xl bg-brand text-white">
        <ShieldCheck className="size-5" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-bold text-white">MeantGo</p>
        <p className="text-xs text-white/40">Admin Console</p>
      </div>
    </div>
  );
}

function UserChip({
  username,
  role,
  onSignOut,
}: {
  username: string | null;
  role: string | null;
  onSignOut: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden text-right sm:block">
        <p className="text-sm font-semibold leading-tight text-white">{username ?? "Admin"}</p>
        <p className="text-xs capitalize leading-tight text-white/40">{role ?? "Administrator"}</p>
      </div>
      <div className="grid size-9 place-items-center rounded-full bg-brand/20 text-xs font-bold text-brand-light">
        {(username ?? "AD").slice(0, 2).toUpperCase()}
      </div>
      <button
        onClick={onSignOut}
        title="Sign out"
        className="rounded-lg p-1.5 text-white/45 hover:bg-white/10 hover:text-rose-300 md:hidden"
      >
        <LogOut className="size-5" />
      </button>
    </div>
  );
}

/* ── Login screen ── */

function LoginScreen() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await login(username.trim(), password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-dvh place-items-center bg-[#0B0A12] px-4 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <form
        onSubmit={submit}
        className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
      >
        <div className="mb-7 flex flex-col items-center text-center">
          <div className="grid size-12 place-items-center rounded-2xl bg-brand text-white">
            <ShieldCheck className="size-6" />
          </div>
          <h1 className="mt-4 text-xl font-bold">MeantGo Admin</h1>
          <p className="mt-1 text-sm text-white/50">Sign in to the admin console</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-rose-400/30 bg-rose-400/10 px-3.5 py-2.5 text-sm text-rose-200">
            {error}
          </div>
        )}

        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/45">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
          autoComplete="username"
          className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-brand/60 focus:outline-none"
          placeholder="admin"
        />

        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/45">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="mb-6 w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-brand/60 focus:outline-none"
          placeholder="••••••••"
        />

        <button
          type="submit"
          disabled={busy || !username || !password}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand/90 disabled:opacity-50"
        >
          {busy && <Loader2 className="size-4 animate-spin" />}
          {busy ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

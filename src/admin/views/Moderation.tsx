import { useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Search,
  ShieldCheck,
  X,
  XCircle,
} from "lucide-react";
import { useAdminData } from "../auth";
import type { AdminUser, UsersPage } from "../api";
import { Card, ErrorState, PageHeader, Spinner, timeAgo } from "../components";

const PAGE_SIZE = 25;

const STATUS_TINT: Record<string, string> = {
  active: "bg-emerald-400/10 text-emerald-300",
  deactivated: "bg-rose-400/10 text-rose-300",
  suspended: "bg-amber-400/10 text-amber-300",
};

const STATUSES = ["all", "active", "deactivated", "suspended"] as const;

export function Moderation() {
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("all");
  const [selected, setSelected] = useState<AdminUser | null>(null);
  const { data, error, loading, reload } = useAdminData<UsersPage>(
    `/users?limit=${PAGE_SIZE}&offset=${offset}`,
  );

  const users = (data?.users ?? []).filter((u) => {
    if (status !== "all" && u.accountStatus !== status) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      `${u.firstName ?? ""} ${u.lastName ?? ""}`.toLowerCase().includes(q) ||
      (u.phone ?? "").includes(q)
    );
  });

  const total = data?.total ?? 0;
  const page = Math.floor(offset / PAGE_SIZE) + 1;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div>
      <PageHeader
        title="User Management"
        subtitle={total ? `${total.toLocaleString()} registered users` : "User accounts"}
        action={
          <button
            onClick={reload}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <RefreshCw className="size-4" /> Refresh
          </button>
        }
      />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex min-w-56 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <Search className="size-4 text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter this page by name or phone..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
          />
        </div>
        <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                status === s ? "bg-brand/20 text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {error ? (
        <ErrorState message={error} onRetry={reload} />
      ) : loading || !data ? (
        <Spinner />
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8 text-left text-xs uppercase tracking-wider text-white/40">
                  <th className="px-5 py-3 font-semibold">User</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Verified</th>
                  <th className="px-5 py-3 font-semibold">Onboarding</th>
                  <th className="px-5 py-3 font-semibold">Last active</th>
                  <th className="px-5 py-3 font-semibold">Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <UserRow key={u.id} user={u} onClick={() => setSelected(u)} />
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-10 text-center text-white/40">
                      No users match this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-white/8 px-5 py-3 text-sm text-white/50">
            <span>
              Page {page} of {pages}
            </span>
            <div className="flex gap-2">
              <button
                disabled={offset === 0}
                onClick={() => setOffset(Math.max(0, offset - PAGE_SIZE))}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 font-semibold text-white/80 hover:bg-white/10 disabled:opacity-30"
              >
                <ChevronLeft className="size-4" /> Prev
              </button>
              <button
                disabled={offset + PAGE_SIZE >= total}
                onClick={() => setOffset(offset + PAGE_SIZE)}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 font-semibold text-white/80 hover:bg-white/10 disabled:opacity-30"
              >
                Next <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </Card>
      )}

      {selected && <UserDrawer user={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function UserRow({ user, onClick }: { user: AdminUser; onClick: () => void }) {
  const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Unnamed";
  const tint = STATUS_TINT[user.accountStatus] ?? "bg-white/10 text-white/60";
  return (
    <tr
      onClick={onClick}
      className="cursor-pointer border-b border-white/5 last:border-0 hover:bg-white/[0.03]"
    >
      <td className="px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-brand/20 text-xs font-bold text-brand-light">
            {name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="font-medium text-white">{name}</p>
            <p className="text-xs text-white/40">{user.phone}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-3.5">
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${tint}`}>
          {user.accountStatus}
        </span>
      </td>
      <td className="px-5 py-3.5">
        {user.phoneVerifiedAt ? (
          <CheckCircle2 className="size-4 text-emerald-400" />
        ) : (
          <XCircle className="size-4 text-white/25" />
        )}
      </td>
      <td className="px-5 py-3.5 text-white/60">Step {user.onboardingStep}</td>
      <td className="px-5 py-3.5 text-white/60">{timeAgo(user.lastActiveAt)}</td>
      <td className="px-5 py-3.5 text-white/60">{timeAgo(user.createdAt)}</td>
    </tr>
  );
}

/* ── Detail drawer: every field the API exposes for one user ── */

function UserDrawer({ user, onClose }: { user: AdminUser; onClose: () => void }) {
  const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Unnamed";
  const tint = STATUS_TINT[user.accountStatus] ?? "bg-white/10 text-white/60";
  const otp = user.otp;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <aside className="relative h-full w-full max-w-md overflow-y-auto border-l border-white/10 bg-[#0E0C16] p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-full bg-brand/20 text-base font-bold text-brand-light">
              {name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">{name}</h2>
              <span
                className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${tint}`}
              >
                {user.accountStatus}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        <Section title="Account">
          <Field label="User ID" value={user.id} mono />
          <Field label="Phone" value={user.phone} mono />
          <Field
            label="Phone verified"
            value={user.phoneVerifiedAt ? fullDate(user.phoneVerifiedAt) : "Not verified"}
            badge={user.phoneVerifiedAt ? "ok" : "muted"}
          />
          <Field label="Onboarding step" value={`Step ${user.onboardingStep}`} />
          <Field label="Last active" value={fullDate(user.lastActiveAt)} />
          <Field label="Joined" value={fullDate(user.createdAt)} />
        </Section>

        {otp && (
          <Section title="Authentication (OTP)">
            <Field
              label="Active code"
              value={otp.code ?? "None"}
              mono={Boolean(otp.code)}
              badge={otp.code ? "warn" : "muted"}
            />
            <Field
              label="Code expires in"
              value={otp.codeTtlSeconds ? `${otp.codeTtlSeconds}s` : "—"}
            />
            {typeof otp.sendAttempts === "number" && (
              <Field label="Send attempts" value={String(otp.sendAttempts)} />
            )}
            {typeof otp.verifyAttempts === "number" && (
              <Field label="Verify attempts" value={String(otp.verifyAttempts)} />
            )}
          </Section>
        )}

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-3 text-xs text-white/45">
          <ShieldCheck className="size-4 shrink-0 text-white/40" />
          Read-only view. Account actions (suspend, delete) require write endpoints on the MeantGo
          API.
        </div>
      </aside>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">{title}</p>
      <div className="space-y-3 rounded-xl border border-white/8 bg-white/[0.02] p-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  mono,
  badge,
}: {
  label: string;
  value: string;
  mono?: boolean;
  badge?: "ok" | "warn" | "muted";
}) {
  const badgeCls =
    badge === "ok"
      ? "text-emerald-300"
      : badge === "warn"
        ? "text-amber-300"
        : badge === "muted"
          ? "text-white/40"
          : "text-white/85";
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <span className="shrink-0 text-white/45">{label}</span>
      <span className={`text-right ${mono ? "font-mono text-xs" : ""} ${badgeCls}`}>{value}</span>
    </div>
  );
}

function fullDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

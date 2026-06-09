import { useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw, Search } from "lucide-react";
import { useAdminData } from "../auth";
import type { AdminUser, UsersPage } from "../api";
import { Card, ErrorState, PageHeader, Spinner, timeAgo } from "../components";

const PAGE_SIZE = 25;

const STATUS_TINT: Record<string, string> = {
  active: "bg-emerald-400/10 text-emerald-300",
  deactivated: "bg-rose-400/10 text-rose-300",
  suspended: "bg-amber-400/10 text-amber-300",
};

export function Moderation() {
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("");
  const { data, error, loading, reload } = useAdminData<UsersPage>(
    `/users?limit=${PAGE_SIZE}&offset=${offset}`,
  );

  const users = (data?.users ?? []).filter((u) => {
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
        title="Moderation"
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

      <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        <Search className="size-4 text-white/40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter this page by name or phone..."
          className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
        />
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
                  <th className="px-5 py-3 font-semibold">Onboarding</th>
                  <th className="px-5 py-3 font-semibold">Last active</th>
                  <th className="px-5 py-3 font-semibold">Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <UserRow key={u.id} user={u} />
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-white/40">
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
    </div>
  );
}

function UserRow({ user }: { user: AdminUser }) {
  const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Unnamed";
  const tint = STATUS_TINT[user.accountStatus] ?? "bg-white/10 text-white/60";
  return (
    <tr className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
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
      <td className="px-5 py-3.5 text-white/60">Step {user.onboardingStep}</td>
      <td className="px-5 py-3.5 text-white/60">{timeAgo(user.lastActiveAt)}</td>
      <td className="px-5 py-3.5 text-white/60">{timeAgo(user.createdAt)}</td>
    </tr>
  );
}

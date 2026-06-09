import { Link } from "react-router-dom";
import { Activity, ArrowRight, RefreshCw, ShieldCheck, UserCheck, Users } from "lucide-react";
import { useAdminData } from "../auth";
import type { Health, LoginLogsData, Metrics, UsersPage } from "../api";
import {
  Card,
  Dot,
  ErrorState,
  GradientStatCard,
  PageHeader,
  Spinner,
  StatCard,
  timeAgo,
} from "../components";
import { ApexCard, CHART_PALETTE, areaOptions, barOptions, donutOptions } from "../charts";

export function Overview() {
  const users = useAdminData<UsersPage>("/users?limit=250&offset=0");
  const health = useAdminData<Health>("/health");
  const metrics = useAdminData<Metrics>("/metrics");
  const logs = useAdminData<LoginLogsData>("/login-logs?limit=6");

  const reloadAll = () => {
    users.reload();
    health.reload();
    metrics.reload();
    logs.reload();
  };

  if (users.error)
    return wrap(reloadAll, <ErrorState message={users.error} onRetry={users.reload} />);
  if (!users.data || !logs.data) return wrap(reloadAll, <Spinner />);

  const sample = users.data.users;
  const statusCounts = countBy(sample, (u) => u.accountStatus || "unknown");
  const verified = sample.filter((u) => u.phoneVerifiedAt).length;
  const verifiedPct = sample.length ? Math.round((verified / sample.length) * 100) : 0;
  const newThisMonth = signupsThisMonth(sample.map((u) => u.createdAt));
  const growth = cumulativeByMonth(sample.map((u) => u.createdAt));

  const stepCounts = countBy(sample, (u) => String(u.onboardingStep));
  const steps = Object.keys(stepCounts)
    .map(Number)
    .sort((a, b) => a - b);

  const statusNames = Object.keys(statusCounts);
  const statusValues = Object.values(statusCounts);
  const summary = health.data?.summary;

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Key metrics and platform activity at a glance"
        action={
          <button
            onClick={reloadAll}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <RefreshCw className="size-4" /> Refresh
          </button>
        }
      />

      {/* Headline stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <GradientStatCard
          label="Total Users"
          value={users.data.total.toLocaleString()}
          icon={<Users className="size-5" />}
          delta={newThisMonth || undefined}
          sub={newThisMonth ? "new this month" : "all time"}
        />
        <StatCard
          label="Phone Verified"
          value={`${verifiedPct}%`}
          sub={`${verified} of ${sample.length} sampled`}
          icon={<UserCheck className="size-5" />}
          accent="text-emerald-300"
        />
        <StatCard
          label="Active Accounts"
          value={statusCounts.active ?? 0}
          sub={`${sample.length} sampled`}
          icon={<Activity className="size-5" />}
          accent="text-emerald-300"
        />
        <StatCard
          label="Admin Logins"
          value={logs.data.stats.total}
          sub={`${logs.data.stats.failures} failed`}
          icon={<ShieldCheck className="size-5" />}
        />
      </div>

      {/* Growth + system status */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <ApexCard
          title="User Growth (cumulative)"
          type="area"
          height={300}
          series={[{ name: "Users", data: growth.map((g) => g.total) }]}
          options={areaOptions(growth.map((g) => g.name))}
        />
        <SystemStatusCard
          summary={summary}
          loading={!health.data && !health.error}
          error={health.error}
        />
      </div>

      {/* Distributions + recent activity */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <ApexCard
          title="Account Status"
          type="donut"
          height={280}
          series={statusValues}
          options={donutOptions(statusNames, CHART_PALETTE)}
        />
        <ApexCard
          title="Phone Verification"
          type="donut"
          height={280}
          series={[verified, sample.length - verified]}
          options={donutOptions(["Verified", "Unverified"], ["#22C55E", "#6B7280"])}
        />
        <RecentLogins logs={logs.data} />
      </div>

      {/* Onboarding funnel */}
      <div className="mt-6">
        <ApexCard
          title="Onboarding Progress"
          type="bar"
          height={300}
          wide
          series={[{ name: "Users", data: steps.map((s) => stepCounts[String(s)]) }]}
          options={barOptions(steps.map((s) => `Step ${s}`), "#7C3AED")}
        />
      </div>
    </div>
  );
}

/* ── Side cards ── */

function SystemStatusCard({
  summary,
  loading,
  error,
}: {
  summary?: { operational: number; degraded: number; down: number };
  loading: boolean;
  error: string | null;
}) {
  return (
    <Card className="flex flex-col p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">System Status</h2>
        <Link
          to="/admin/monitoring"
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-light hover:text-white"
        >
          Monitoring <ArrowRight className="size-3.5" />
        </Link>
      </div>

      {error ? (
        <p className="text-sm text-rose-300/80">{error}</p>
      ) : loading || !summary ? (
        <div className="flex flex-1 items-center justify-center py-6 text-white/40">
          <RefreshCw className="size-5 animate-spin" />
        </div>
      ) : (
        <div className="grid flex-1 grid-cols-3 gap-3">
          <StatusTile label="Operational" value={summary.operational} tone="emerald" />
          <StatusTile label="Degraded" value={summary.degraded} tone="amber" />
          <StatusTile label="Down" value={summary.down} tone="rose" />
        </div>
      )}
    </Card>
  );
}

function StatusTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "emerald" | "amber" | "rose";
}) {
  const map = {
    emerald: "text-emerald-300 bg-emerald-400/10",
    amber: "text-amber-300 bg-amber-400/10",
    rose: "text-rose-300 bg-rose-400/10",
  } as const;
  return (
    <div className={`flex flex-col items-center justify-center rounded-xl px-2 py-5 ${map[tone]}`}>
      <span className="text-3xl font-bold">{value}</span>
      <span className="mt-1 text-center text-[11px] font-semibold uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}

function RecentLogins({ logs }: { logs: LoginLogsData }) {
  return (
    <Card className="p-6">
      <h2 className="mb-5 text-sm font-semibold text-white">Recent Admin Logins</h2>
      {logs.logs.length === 0 ? (
        <p className="py-6 text-sm text-white/40">No logins recorded yet.</p>
      ) : (
        <div className="space-y-3.5">
          {logs.logs.map((log) => (
            <div key={log.id} className="flex items-center justify-between gap-3 text-sm">
              <div className="flex min-w-0 items-center gap-2.5">
                <Dot ok={log.success} />
                <span className="truncate font-medium text-white/85">{log.username}</span>
                <span className="shrink-0 text-xs text-white/35">{log.ip || ""}</span>
              </div>
              <span className="shrink-0 text-xs text-white/40">{timeAgo(log.createdAt)}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

/* ── Helpers ── */

function wrap(reload: () => void, node: React.ReactNode) {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Key metrics and platform activity at a glance"
        action={
          <button
            onClick={reload}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <RefreshCw className="size-4" /> Refresh
          </button>
        }
      />
      {node}
    </div>
  );
}

function countBy<T>(arr: T[], key: (x: T) => string): Record<string, number> {
  return arr.reduce<Record<string, number>>((acc, item) => {
    const k = key(item);
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
}

function cumulativeByMonth(dates: (string | null)[]): { name: string; total: number }[] {
  const buckets = new Map<string, { sort: number; count: number }>();
  for (const iso of dates) {
    if (!iso) continue;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) continue;
    const key = d.toLocaleString(undefined, { month: "short", year: "numeric" });
    const sort = d.getFullYear() * 12 + d.getMonth();
    const existing = buckets.get(key);
    if (existing) existing.count += 1;
    else buckets.set(key, { sort, count: 1 });
  }
  let running = 0;
  return [...buckets.entries()]
    .sort((a, b) => a[1].sort - b[1].sort)
    .map(([name, { count }]) => ({ name, total: (running += count) }));
}

function signupsThisMonth(dates: (string | null)[]): number {
  const now = new Date();
  return dates.filter((iso) => {
    if (!iso) return false;
    const d = new Date(iso);
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  }).length;
}

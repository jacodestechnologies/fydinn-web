import type { ApexOptions } from "apexcharts";
import { Activity, ShieldCheck, UserCheck, Users } from "lucide-react";
import { useAdminData } from "../auth";
import type { Health, LoginLogsData, UsersPage } from "../api";
import { ErrorState, GradientStatCard, PageHeader, Spinner, StatCard } from "../components";
import { ApexCard, CHART_PALETTE, chartBase, gridBase } from "../charts";

export function Analytics() {
  const users = useAdminData<UsersPage>("/users?limit=250&offset=0");
  const health = useAdminData<Health>("/health");
  const logs = useAdminData<LoginLogsData>("/login-logs?limit=500");

  if (users.error) return wrap(<ErrorState message={users.error} onRetry={users.reload} />);
  if (!users.data || !logs.data) return wrap(<Spinner />);

  const sample = users.data.users;

  // Account status distribution
  const statusCounts = countBy(sample, (u) => u.accountStatus || "unknown");
  const statusNames = Object.keys(statusCounts);
  const statusValues = Object.values(statusCounts);

  // Onboarding step distribution (sorted by step)
  const stepCounts = countBy(sample, (u) => String(u.onboardingStep));
  const steps = Object.keys(stepCounts)
    .map(Number)
    .sort((a, b) => a - b);
  const stepValues = steps.map((s) => stepCounts[String(s)]);

  // Phone verification
  const verified = sample.filter((u) => u.phoneVerifiedAt).length;
  const unverified = sample.length - verified;
  const verifiedPct = sample.length ? Math.round((verified / sample.length) * 100) : 0;

  // Cumulative signups over time (by month, from createdAt)
  const growth = cumulativeByMonth(sample.map((u) => u.createdAt));
  const newThisMonth = signupsThisMonth(sample.map((u) => u.createdAt));

  // Section activeness (numeric metrics flattened from /health)
  const sectionMetrics =
    health.data?.sections.flatMap((s) =>
      s.metrics
        .filter((m) => typeof m.value === "number")
        .map((m) => ({ name: m.label, value: Number(m.value) })),
    ) ?? [];

  return (
    <div>
      <PageHeader title="Analytics" subtitle={`Based on the latest ${sample.length} users`} />

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
          icon={<Activity className="size-5" />}
          accent="text-emerald-300"
        />
        <StatCard
          label="Admin Logins"
          value={logs.data.stats.total}
          icon={<ShieldCheck className="size-5" />}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ApexCard
          title="User Growth (cumulative)"
          type="area"
          wide
          height={300}
          series={[{ name: "Users", data: growth.map((g) => g.total) }]}
          options={areaOptions(growth.map((g) => g.name))}
        />

        <ApexCard
          title="Account Status"
          type="donut"
          height={300}
          series={statusValues}
          options={donutOptions(statusNames, CHART_PALETTE)}
        />

        <ApexCard
          title="Phone Verification"
          type="donut"
          height={300}
          series={[verified, unverified]}
          options={donutOptions(["Verified", "Unverified"], ["#22C55E", "#6B7280"])}
        />

        <ApexCard
          title="Onboarding Progress"
          type="bar"
          wide
          height={300}
          series={[{ name: "Users", data: stepValues }]}
          options={barOptions(steps.map((s) => `Step ${s}`), "#7C3AED")}
        />

        {sectionMetrics.length > 0 && (
          <ApexCard
            title="Section Activeness"
            type="bar"
            wide
            height={300}
            series={[{ name: "Value", data: sectionMetrics.map((m) => m.value) }]}
            options={barOptions(sectionMetrics.map((m) => m.name), "#A78BFA", true)}
          />
        )}
      </div>
    </div>
  );
}

/* ── Chart option builders ── */

function areaOptions(categories: string[]): ApexOptions {
  return {
    chart: { ...chartBase, type: "area", sparkline: { enabled: false } },
    colors: ["#A78BFA"],
    stroke: { curve: "smooth", width: 2.5 },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0, stops: [0, 100] },
    },
    grid: gridBase,
    dataLabels: { enabled: false },
    tooltip: { theme: "dark" },
    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { fontSize: "11px" } },
    },
    yaxis: { labels: { style: { fontSize: "11px" } } },
  };
}

function donutOptions(labels: string[], colors: string[]): ApexOptions {
  return {
    chart: { ...chartBase, type: "donut" },
    labels,
    colors,
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: {
      position: "bottom",
      labels: { colors: "rgba(255,255,255,0.6)" },
      fontSize: "12px",
      markers: { strokeWidth: 0 },
    },
    tooltip: { theme: "dark" },
    plotOptions: {
      pie: {
        donut: {
          size: "68%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              color: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              formatter: (w) =>
                String(w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)),
            },
            value: { color: "#fff", fontSize: "22px", fontWeight: 700 },
          },
        },
      },
    },
  };
}

function barOptions(categories: string[], color: string, rotate = false): ApexOptions {
  return {
    chart: { ...chartBase, type: "bar" },
    colors: [color],
    plotOptions: { bar: { borderRadius: 6, columnWidth: "55%", borderRadiusApplication: "end" } },
    grid: gridBase,
    dataLabels: { enabled: false },
    tooltip: { theme: "dark" },
    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { fontSize: rotate ? "10px" : "11px" },
        rotate: rotate ? -15 : 0,
        hideOverlappingLabels: false,
      },
    },
    yaxis: { labels: { style: { fontSize: "11px" } }, forceNiceScale: true },
  };
}

/* ── Helpers ── */

function wrap(node: React.ReactNode) {
  return (
    <div>
      <PageHeader title="Analytics" />
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

/* Cumulative signups bucketed by "Mon YYYY", chronological. */
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

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAdminData } from "../auth";
import type { Health, LoginLogsData, UsersPage } from "../api";
import { Card, ErrorState, PageHeader, Spinner, StatCard } from "../components";

const PIE_COLORS = ["#7C3AED", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4", "#A78BFA"];

const tooltipStyle = {
  background: "#15131F",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  color: "#fff",
  fontSize: 12,
};

export function Analytics() {
  const users = useAdminData<UsersPage>("/users?limit=250&offset=0");
  const health = useAdminData<Health>("/health");
  const logs = useAdminData<LoginLogsData>("/login-logs?limit=500");

  if (users.error) return wrap(<ErrorState message={users.error} onRetry={users.reload} />);
  if (!users.data || !logs.data) return wrap(<Spinner />);

  const sample = users.data.users;

  // Account status distribution
  const statusCounts = countBy(sample, (u) => u.accountStatus || "unknown");
  const statusData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

  // Onboarding step distribution
  const stepCounts = countBy(sample, (u) => `Step ${u.onboardingStep}`);
  const stepData = Object.entries(stepCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => parseInt(a.name.replace(/\D/g, "")) - parseInt(b.name.replace(/\D/g, "")));

  // Verified vs unverified
  const verified = sample.filter((u) => u.phoneVerifiedAt).length;

  // Section metrics (flattened)
  const sectionMetrics =
    health.data?.sections.flatMap((s) =>
      s.metrics
        .filter((m) => typeof m.value === "number")
        .map((m) => ({ name: m.label, value: Number(m.value) })),
    ) ?? [];

  const loginData = [
    { name: "Success", value: logs.data.stats.successes },
    { name: "Failed", value: logs.data.stats.failures },
  ];

  return (
    <div>
      <PageHeader title="Analytics" subtitle={`Based on the latest ${sample.length} users`} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Users" value={users.data.total.toLocaleString()} />
        <StatCard
          label="Phone Verified"
          value={`${sample.length ? Math.round((verified / sample.length) * 100) : 0}%`}
          sub={`${verified} of ${sample.length} sampled`}
        />
        <StatCard label="Admin Logins" value={logs.data.stats.total} />
        <StatCard
          label="Failed Logins"
          value={logs.data.stats.failures}
          accent="text-rose-300"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ChartCard title="Account Status">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={95}
                paddingAngle={3}
                stroke="none"
              >
                {statusData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <Legend data={statusData} />
        </ChartCard>

        <ChartCard title="Admin Login Outcomes">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={loginData}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={95}
                paddingAngle={3}
                stroke="none"
              >
                <Cell fill="#22C55E" />
                <Cell fill="#EF4444" />
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <Legend data={loginData} colors={["#22C55E", "#EF4444"]} />
        </ChartCard>

        <ChartCard title="Onboarding Progress" wide>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={stepData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
              <Bar dataKey="value" fill="#7C3AED" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {sectionMetrics.length > 0 && (
          <ChartCard title="Section Activeness" wide>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={sectionMetrics} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} interval={0} angle={-15} height={50} textAnchor="end" />
                <YAxis tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                <Bar dataKey="value" fill="#A78BFA" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        )}
      </div>
    </div>
  );
}

function wrap(node: React.ReactNode) {
  return (
    <div>
      <PageHeader title="Analytics" />
      {node}
    </div>
  );
}

function ChartCard({
  title,
  children,
  wide,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <Card className={`p-6 ${wide ? "lg:col-span-2" : ""}`}>
      <h2 className="mb-4 text-sm font-semibold text-white">{title}</h2>
      {children}
    </Card>
  );
}

function Legend({
  data,
  colors = PIE_COLORS,
}: {
  data: { name: string; value: number }[];
  colors?: string[];
}) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
      {data.map((d, i) => (
        <span key={d.name} className="flex items-center gap-2 text-xs text-white/60">
          <span className="size-2.5 rounded-full" style={{ background: colors[i % colors.length] }} />
          <span className="capitalize">{d.name}</span>
          <span className="font-semibold text-white/80">{d.value}</span>
        </span>
      ))}
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

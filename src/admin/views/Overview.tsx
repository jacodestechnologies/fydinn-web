import { Activity, Database, RefreshCw, Server, Zap } from "lucide-react";
import { useAdminData } from "../auth";
import type { Health, LoginLogsData, Metrics } from "../api";
import {
  Card,
  Dot,
  ErrorState,
  PageHeader,
  Spinner,
  StatCard,
  StatusBadge,
  formatBytes,
  formatUptime,
  timeAgo,
} from "../components";

export function Overview() {
  const health = useAdminData<Health>("/health");
  const metrics = useAdminData<Metrics>("/metrics");
  const logs = useAdminData<LoginLogsData>("/login-logs?limit=6");

  const reloadAll = () => {
    health.reload();
    metrics.reload();
    logs.reload();
  };

  return (
    <div>
      <PageHeader
        title="Overview"
        subtitle="System health and activity at a glance"
        action={
          <button
            onClick={reloadAll}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <RefreshCw className="size-4" /> Refresh
          </button>
        }
      />

      {/* Summary stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Operational"
          value={health.data?.summary.operational ?? "—"}
          sub="sections healthy"
          icon={<Activity className="size-5" />}
          accent="text-emerald-300"
        />
        <StatCard
          label="Degraded"
          value={health.data?.summary.degraded ?? "—"}
          sub="need attention"
          icon={<Activity className="size-5" />}
          accent="text-amber-300"
        />
        <StatCard
          label="Down"
          value={health.data?.summary.down ?? "—"}
          sub="sections offline"
          icon={<Activity className="size-5" />}
          accent="text-rose-300"
        />
        <StatCard
          label="API Uptime"
          value={metrics.data ? formatUptime(metrics.data.uptimeSeconds) : "—"}
          sub={metrics.data ? `${metrics.data.runtime.env} · ${metrics.data.runtime.platform}` : ""}
          icon={<Server className="size-5" />}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Core infra */}
        <Card className="p-6">
          <h2 className="mb-5 text-sm font-semibold text-white">Core Infrastructure</h2>
          {health.error ? (
            <ErrorState message={health.error} onRetry={health.reload} />
          ) : !health.data ? (
            <Spinner />
          ) : (
            <div className="space-y-3">
              <CoreRow
                icon={<Server className="size-4" />}
                label="API Server"
                ok={health.data.core.server.ok}
                detail={`up ${formatUptime(health.data.core.server.uptimeSeconds)}`}
              />
              <CoreRow
                icon={<Database className="size-4" />}
                label="Database"
                ok={health.data.core.database.ok}
                detail={
                  health.data.core.database.error ?? `${health.data.core.database.latencyMs}ms`
                }
              />
              <CoreRow
                icon={<Zap className="size-4" />}
                label="Redis"
                ok={health.data.core.redis.ok}
                detail={health.data.core.redis.error ?? `${health.data.core.redis.latencyMs}ms`}
              />
              <p className="pt-2 text-xs text-white/35">
                Checked {timeAgo(health.data.checkedAt)}
              </p>
            </div>
          )}
        </Card>

        {/* Recent logins */}
        <Card className="p-6">
          <h2 className="mb-5 text-sm font-semibold text-white">Recent Admin Logins</h2>
          {logs.error ? (
            <ErrorState message={logs.error} onRetry={logs.reload} />
          ) : !logs.data ? (
            <Spinner />
          ) : logs.data.logs.length === 0 ? (
            <p className="py-6 text-sm text-white/40">No logins recorded yet.</p>
          ) : (
            <div className="space-y-3">
              {logs.data.logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-2.5">
                    <Dot ok={log.success} />
                    <span className="font-medium text-white/85">{log.username}</span>
                    <span className="text-white/35">{log.ip || ""}</span>
                  </div>
                  <span className="shrink-0 text-xs text-white/40">{timeAgo(log.createdAt)}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Section status strip */}
      {health.data && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {health.data.sections.map((section) => (
            <Card key={section.key} className="flex items-center justify-between gap-3 p-5">
              <div>
                <p className="font-semibold text-white">{section.name}</p>
                <p className="mt-0.5 line-clamp-1 text-xs text-white/45">{section.description}</p>
              </div>
              <StatusBadge status={section.status} />
            </Card>
          ))}
        </div>
      )}

      {/* Memory */}
      {metrics.data && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <StatCard label="RSS Memory" value={formatBytes(metrics.data.memory.rss)} />
          <StatCard label="Heap Used" value={formatBytes(metrics.data.memory.heapUsed)} />
          <StatCard label="Heap Total" value={formatBytes(metrics.data.memory.heapTotal)} />
        </div>
      )}
    </div>
  );
}

function CoreRow({
  icon,
  label,
  ok,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  ok: boolean;
  detail: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="text-white/50">{icon}</span>
        <span className="text-sm font-medium text-white/85">{label}</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="text-xs text-white/45">{detail}</span>
        <Dot ok={ok} />
      </div>
    </div>
  );
}

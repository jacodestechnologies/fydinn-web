import { useState } from "react";
import { Database, RefreshCw, Server, Zap } from "lucide-react";
import { useAdminData } from "../auth";
import type { Health, HealthSection, Metrics } from "../api";
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

type Tab = "infrastructure" | "sections";

export function Monitoring() {
  const [tab, setTab] = useState<Tab>("infrastructure");
  const health = useAdminData<Health>("/health");
  const metrics = useAdminData<Metrics>("/metrics");

  const reloadAll = () => {
    health.reload();
    metrics.reload();
  };

  return (
    <div>
      <PageHeader
        title="Monitoring"
        subtitle="Core infrastructure and per-section liveliness"
        action={
          <button
            onClick={reloadAll}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <RefreshCw className="size-4" /> Refresh
          </button>
        }
      />

      <div className="mb-6 flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1 sm:inline-flex">
        <TabButton active={tab === "infrastructure"} onClick={() => setTab("infrastructure")}>
          Infrastructure
        </TabButton>
        <TabButton active={tab === "sections"} onClick={() => setTab("sections")}>
          Sections
        </TabButton>
      </div>

      {health.error ? (
        <ErrorState message={health.error} onRetry={reloadAll} />
      ) : !health.data ? (
        <Spinner />
      ) : tab === "infrastructure" ? (
        <Infrastructure health={health.data} metrics={metrics.data} />
      ) : (
        <div className="space-y-5">
          {health.data.sections.map((section) => (
            <SectionCard key={section.key} section={section} />
          ))}
        </div>
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-colors ${
        active ? "bg-brand/20 text-white" : "text-white/50 hover:text-white/80"
      }`}
    >
      {children}
    </button>
  );
}

/* ── Infrastructure tab ── */

function Infrastructure({ health, metrics }: { health: Health; metrics: Metrics | null }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        <CoreCard
          icon={<Server className="size-5" />}
          label="API Server"
          ok={health.core.server.ok}
          detail={`Up ${formatUptime(health.core.server.uptimeSeconds)}`}
        />
        <CoreCard
          icon={<Database className="size-5" />}
          label="Database"
          ok={health.core.database.ok}
          detail={health.core.database.error ?? `${health.core.database.latencyMs}ms latency`}
        />
        <CoreCard
          icon={<Zap className="size-5" />}
          label="Redis"
          ok={health.core.redis.ok}
          detail={health.core.redis.error ?? `${health.core.redis.latencyMs}ms latency`}
        />
      </div>

      <p className="text-xs text-white/35">Last checked {timeAgo(health.checkedAt)}</p>

      {metrics && (
        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">Runtime &amp; Memory</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Uptime"
              value={formatUptime(metrics.uptimeSeconds)}
              sub={`${metrics.runtime.env} · ${metrics.runtime.platform}`}
            />
            <StatCard label="RSS Memory" value={formatBytes(metrics.memory.rss)} />
            <StatCard label="Heap Used" value={formatBytes(metrics.memory.heapUsed)} />
            <StatCard label="Heap Total" value={formatBytes(metrics.memory.heapTotal)} />
          </div>
        </div>
      )}
    </div>
  );
}

function CoreCard({
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
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <span
          className={`grid size-10 place-items-center rounded-xl ${
            ok ? "bg-emerald-400/10 text-emerald-300" : "bg-rose-400/10 text-rose-300"
          }`}
        >
          {icon}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
            ok ? "bg-emerald-400/10 text-emerald-300" : "bg-rose-400/10 text-rose-300"
          }`}
        >
          <span className={`size-1.5 rounded-full ${ok ? "bg-emerald-400" : "bg-rose-400"}`} />
          {ok ? "Healthy" : "Down"}
        </span>
      </div>
      <p className="mt-4 text-lg font-bold text-white">{label}</p>
      <p className="mt-0.5 text-sm text-white/50">{detail}</p>
    </Card>
  );
}

/* ── Sections tab ── */

function SectionCard({ section }: { section: HealthSection }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 px-6 py-4">
        <div>
          <h2 className="font-semibold text-white">{section.name}</h2>
          <p className="mt-0.5 text-xs text-white/45">{section.description}</p>
        </div>
        <StatusBadge status={section.status} />
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-3">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
            Activeness
          </p>
          <div className="space-y-2">
            {section.metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between text-sm">
                <span className="text-white/55">{m.label}</span>
                <span className="font-semibold text-white">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
            Dependencies
          </p>
          <div className="space-y-2">
            {section.dependencies.map((d) => (
              <div key={d.name} className="flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2 text-white/70">
                  <Dot ok={d.ok} />
                  {d.name}
                </span>
                <span className="shrink-0 text-xs text-white/40">{d.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Routes</p>
          <div className="space-y-2">
            {section.routes.map((r) => (
              <div key={r.method + r.path} className="flex items-center justify-between gap-2 text-sm">
                <span className="truncate font-mono text-xs text-white/65">
                  <span className="text-brand-light">{r.method}</span> {r.path}
                </span>
                <span className="shrink-0">
                  <StatusBadge status={r.status} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

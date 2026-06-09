import { RefreshCw } from "lucide-react";
import { useAdminData } from "../auth";
import type { Health, HealthSection } from "../api";
import { Card, ErrorState, PageHeader, Spinner, StatusBadge } from "../components";

export function Monitoring() {
  const { data, error, loading, reload } = useAdminData<Health>("/health");

  return (
    <div>
      <PageHeader
        title="Monitoring"
        subtitle="Liveliness and activeness of every functional section"
        action={
          <button
            onClick={reload}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <RefreshCw className="size-4" /> Refresh
          </button>
        }
      />

      {error ? (
        <ErrorState message={error} onRetry={reload} />
      ) : loading || !data ? (
        <Spinner />
      ) : (
        <div className="space-y-5">
          {data.sections.map((section) => (
            <SectionCard key={section.key} section={section} />
          ))}
        </div>
      )}
    </div>
  );
}

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
        {/* Metrics */}
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

        {/* Dependencies */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
            Dependencies
          </p>
          <div className="space-y-2">
            {section.dependencies.map((d) => (
              <div key={d.name} className="flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2 text-white/70">
                  <span className={`size-1.5 rounded-full ${d.ok ? "bg-emerald-400" : "bg-rose-400"}`} />
                  {d.name}
                </span>
                <span className="shrink-0 text-xs text-white/40">{d.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Routes */}
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

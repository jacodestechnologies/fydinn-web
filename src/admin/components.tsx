import type { ReactNode } from "react";
import { AlertTriangle, Loader2, TrendingDown, TrendingUp } from "lucide-react";

/* ── Formatting helpers ── */

export function formatUptime(seconds: number): string {
  const s = Math.floor(seconds);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const parts = [];
  if (d) parts.push(`${d}d`);
  if (h) parts.push(`${h}h`);
  parts.push(`${m}m`);
  return parts.join(" ");
}

export function formatBytes(bytes: number): string {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i ? 1 : 0)} ${units[i]}`;
}

export function timeAgo(iso: string | null): string {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

/* ── Status styling ── */

export const STATUS_STYLES: Record<string, { dot: string; text: string; bg: string; label: string }> = {
  operational: { dot: "bg-emerald-400", text: "text-emerald-300", bg: "bg-emerald-400/10", label: "Operational" },
  alive: { dot: "bg-emerald-400", text: "text-emerald-300", bg: "bg-emerald-400/10", label: "Alive" },
  degraded: { dot: "bg-amber-400", text: "text-amber-300", bg: "bg-amber-400/10", label: "Degraded" },
  down: { dot: "bg-rose-400", text: "text-rose-300", bg: "bg-rose-400/10", label: "Down" },
};

export function StatusBadge({ status }: { status: string }) {
  const s = STATUS_STYLES[status] ?? STATUS_STYLES.degraded;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.bg} ${s.text}`}
    >
      <span className={`size-1.5 rounded-full ${s.dot}`} />
      {s.label ?? status}
    </span>
  );
}

export function Dot({ ok }: { ok: boolean }) {
  return <span className={`size-2 rounded-full ${ok ? "bg-emerald-400" : "bg-rose-400"}`} />;
}

/* ── Layout primitives ── */

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-2xl border border-white/8 bg-white/[0.035] ${className}`}>{children}</div>
  );
}

export function DeltaPill({ delta, suffix = "" }: { delta: number; suffix?: string }) {
  const up = delta >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
        up ? "bg-emerald-400/10 text-emerald-300" : "bg-rose-400/10 text-rose-300"
      }`}
    >
      {up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
      {up ? "+" : ""}
      {delta}
      {suffix}
    </span>
  );
}

export function StatCard({
  label,
  value,
  sub,
  icon,
  accent = "text-brand-light",
  delta,
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  accent?: string;
  delta?: number;
}) {
  const hasTop = Boolean(icon) || typeof delta === "number";
  return (
    <Card className="p-5">
      {hasTop && (
        <div className="mb-4 flex items-start justify-between">
          {icon ? (
            <span className={`grid size-10 place-items-center rounded-xl bg-white/[0.06] ${accent}`}>
              {icon}
            </span>
          ) : (
            <span />
          )}
          {typeof delta === "number" && <DeltaPill delta={delta} />}
        </div>
      )}
      <p className="text-3xl font-bold tracking-tight text-white">{value}</p>
      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-white/40">{label}</p>
      {sub && <p className="mt-1 text-xs text-white/45">{sub}</p>}
    </Card>
  );
}

export function GradientStatCard({
  label,
  value,
  sub,
  icon,
  delta,
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  delta?: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] p-5 text-white">
      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/15 blur-2xl" />
      <div className="relative">
        {(icon || typeof delta === "number") && (
          <div className="mb-4 flex items-start justify-between">
            {icon ? (
              <span className="grid size-10 place-items-center rounded-xl bg-white/15">{icon}</span>
            ) : (
              <span />
            )}
            {typeof delta === "number" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-xs font-semibold">
                {delta >= 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                {delta >= 0 ? "+" : ""}
                {delta}
              </span>
            )}
          </div>
        )}
        <p className="text-3xl font-bold tracking-tight">{value}</p>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">{label}</p>
        {sub && <p className="mt-1 text-xs text-white/70">{sub}</p>}
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-white/50">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Spinner() {
  return (
    <div className="flex items-center justify-center py-24 text-white/40">
      <Loader2 className="size-6 animate-spin" />
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <Card className="flex flex-col items-center gap-3 p-12 text-center">
      <AlertTriangle className="size-8 text-amber-400" />
      <p className="max-w-md text-sm text-white/60">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-1 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
        >
          Try again
        </button>
      )}
    </Card>
  );
}

import type { ReactNode } from "react";
import { AlertTriangle, Loader2 } from "lucide-react";

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

export function StatCard({
  label,
  value,
  sub,
  icon,
  accent = "text-brand-light",
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  accent?: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">{label}</p>
        {icon && <span className={accent}>{icon}</span>}
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-white">{value}</p>
      {sub && <p className="mt-1 text-xs text-white/45">{sub}</p>}
    </Card>
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

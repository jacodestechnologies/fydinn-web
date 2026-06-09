import { RefreshCw } from "lucide-react";
import { useAdminData } from "../auth";
import type { LoginLogsData } from "../api";
import { Card, ErrorState, PageHeader, Spinner, StatCard, timeAgo } from "../components";

export function LoginLogs() {
  const { data, error, loading, reload } = useAdminData<LoginLogsData>("/login-logs?limit=200");

  return (
    <div>
      <PageHeader
        title="Login Logs"
        subtitle="Admin authentication attempts (stored locally)"
        action={
          <button
            onClick={reload}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <RefreshCw className="size-4" /> Refresh
          </button>
        }
      />

      {data && (
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <StatCard label="Total Attempts" value={data.stats.total} />
          <StatCard label="Successful" value={data.stats.successes} accent="text-emerald-300" />
          <StatCard label="Failed" value={data.stats.failures} accent="text-rose-300" />
        </div>
      )}

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
                  <th className="px-5 py-3 font-semibold">Result</th>
                  <th className="px-5 py-3 font-semibold">Username</th>
                  <th className="px-5 py-3 font-semibold">IP</th>
                  <th className="px-5 py-3 font-semibold">Device</th>
                  <th className="px-5 py-3 font-semibold">When</th>
                </tr>
              </thead>
              <tbody>
                {data.logs.map((log) => (
                  <tr key={log.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                          log.success
                            ? "bg-emerald-400/10 text-emerald-300"
                            : "bg-rose-400/10 text-rose-300"
                        }`}
                      >
                        <span className={`size-1.5 rounded-full ${log.success ? "bg-emerald-400" : "bg-rose-400"}`} />
                        {log.success ? "Success" : "Failed"}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-medium text-white/85">{log.username}</td>
                    <td className="px-5 py-3 font-mono text-xs text-white/55">{log.ip || "—"}</td>
                    <td className="max-w-xs truncate px-5 py-3 text-xs text-white/45">
                      {log.userAgent || "—"}
                    </td>
                    <td className="px-5 py-3 text-white/55">{timeAgo(log.createdAt)}</td>
                  </tr>
                ))}
                {data.logs.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-white/40">
                      No login attempts recorded yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}

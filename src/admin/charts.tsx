import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Card } from "./components";

export const CHART_PALETTE = ["#7C3AED", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4", "#A78BFA"];

// Shared chart-level defaults for the dark admin theme.
export const chartBase: ApexOptions["chart"] = {
  toolbar: { show: false },
  zoom: { enabled: false },
  fontFamily: "inherit",
  foreColor: "rgba(255,255,255,0.45)",
  background: "transparent",
  parentHeightOffset: 0,
  animations: { speed: 450 },
};

export const gridBase: ApexOptions["grid"] = {
  borderColor: "rgba(255,255,255,0.06)",
  strokeDashArray: 4,
  padding: { left: 8, right: 8 },
};

type ApexCardProps = {
  title: string;
  type: "area" | "bar" | "donut" | "radialBar" | "line";
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | number[];
  options: ApexOptions;
  height?: number;
  wide?: boolean;
};

export function ApexCard({ title, type, series, options, height = 280, wide }: ApexCardProps) {
  return (
    <Card className={`p-6 ${wide ? "lg:col-span-2" : ""}`}>
      <h2 className="mb-4 text-sm font-semibold text-white">{title}</h2>
      <Chart type={type} series={series} options={options} height={height} width="100%" />
    </Card>
  );
}

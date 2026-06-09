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

type ApexSeries = number[] | { name?: string; data: number[] }[];

type ApexCardProps = {
  title: string;
  type: "area" | "bar" | "donut" | "radialBar" | "line";
  series: ApexSeries;
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

/* ── Shared option builders (dark theme) ── */

export function areaOptions(categories: string[], color = "#A78BFA"): ApexOptions {
  return {
    chart: { ...chartBase, type: "area" },
    colors: [color],
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

export function donutOptions(labels: string[], colors: string[]): ApexOptions {
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

export function barOptions(categories: string[], color: string, rotate = false): ApexOptions {
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

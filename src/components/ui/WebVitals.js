"use client";

import { useReportWebVitals } from "next/web-vitals";

function reportMetric(metric) {
  const unit = metric.name === "CLS" ? "" : "ms";
  console.info(`[Metric] ${metric.name}: ${metric.value.toFixed(2)}${unit}`);
}

export default function WebVitals() {
  useReportWebVitals(reportMetric);
  return null;
}

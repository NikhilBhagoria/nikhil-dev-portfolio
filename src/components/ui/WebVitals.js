"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Production-level Core Web Vitals monitor.
 * Reports real-time performance metrics (LCP, FID, CLS, TTFB) directly in the console.
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Format metrics beautifully in the developer console
    const colors = {
      LCP: "color: #00d1ff; font-weight: bold;",
      FCP: "color: #ffbd2e; font-weight: bold;",
      CLS: "color: #27c93f; font-weight: bold;",
      TBT: "color: #ff5f56; font-weight: bold;",
      TTFB: "color: #b57cff; font-weight: bold;"
    };
    
    const style = colors[metric.name] || "color: gray;";
    console.log(
      `%c[Metric] ${metric.name}: %c${metric.value.toFixed(2)}ms`, 
      "color: white; font-weight: normal;", 
      style
    );
  });
  return null;
}

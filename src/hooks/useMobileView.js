"use client";

import { useSyncExternalStore } from "react";

// Match Tailwind's md breakpoint, including fractional viewport widths.
const query = "(width < 48rem)";
function subscribe(onChange) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
const getSnapshot = () => window.matchMedia(query).matches;
const getServerSnapshot = () => true;

export function useMobileView() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

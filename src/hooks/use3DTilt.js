"use client";

import { useEffect, useRef } from "react";

/** Update the DOM at most once per frame without re-rendering card content. */
export function use3DTilt(maxTilt = 8, scale = 1.02) {
  const frame = useRef(null);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onMouseMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const rotateX = -((clientY - rect.top - rect.height / 2) / (rect.height / 2)) * maxTilt;
      const rotateY = ((clientX - rect.left - rect.width / 2) / (rect.width / 2)) * maxTilt;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });
  };

  const onMouseLeave = (event) => {
    cancelAnimationFrame(frame.current);
    event.currentTarget.style.transform = "none";
  };

  return {
    onMouseMove,
    onMouseLeave,
    style: {
      transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out",
    },
  };
}
export default use3DTilt;

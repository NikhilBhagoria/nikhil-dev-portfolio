"use client";

import { useState } from "react";

/**
 * Reusable React hook to apply a premium 3D tilt hover effect to any element/card.
 * Calculates cursor position relative to card center and returns handlers and style.
 * 
 * @param {number} maxTilt - The maximum tilt angle in degrees (default: 8)
 * @param {number} scale - The scale factor on hover (default: 1.02)
 */
export function use3DTilt(maxTilt = 8, scale = 1.02) {
  const [transform, setTransform] = useState("perspective(600px) translateZ(0) rotateX(0deg) rotateY(0deg) scale(1)");

  const onMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate tilt angles based on cursor position relative to card center
    const rotateX = (-y / (rect.height / 2)) * maxTilt;
    const rotateY = (x / (rect.width / 2)) * maxTilt;
    
    setTransform(`perspective(600px) translateZ(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
  };

  const onMouseLeave = () => {
    setTransform("perspective(600px) translateZ(0) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return {
    onMouseMove,
    onMouseLeave,
    style: {
      transform,
      transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out",
      willChange: "transform",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      isolation: "isolate"
    }
  };
}
export default use3DTilt;

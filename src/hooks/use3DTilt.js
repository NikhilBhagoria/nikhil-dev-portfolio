"use client";

/** A subtle hover tilt without layout measurements or React re-renders. */
export function use3DTilt(maxTilt = 8, scale = 1.02) {
  const onMouseEnter = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.currentTarget.style.transform = `perspective(600px) rotateX(${-maxTilt / 3}deg) rotateY(${maxTilt / 3}deg) scale(${scale})`;
  };
  const onMouseLeave = (event) => {
    event.currentTarget.style.transform = "none";
  };
  return {
    onMouseEnter,
    onMouseLeave,
    style: { transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out" },
  };
}
export default use3DTilt;

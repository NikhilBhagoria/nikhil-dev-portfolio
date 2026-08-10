"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BEATS = [
  { label: 'Run a task', detail: 'one, to completion', angle: -90 },
  { label: 'Drain microtasks', detail: 'all of them', angle: 0 },
  { label: 'Render', detail: 'if the frame is due', angle: 90 },
  { label: 'Wait', detail: 'for the next event', angle: 180 }
];

const RADIUS = 104;
const CENTER = 150;

function polar(angle, radius) {
  const radians = (angle * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(radians), y: CENTER + radius * Math.sin(radians) };
}

export function LoopDiagram() {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-10">
      <svg
        viewBox="0 0 300 300"
        className="h-[264px] w-[264px] shrink-0"
        role="img"
        aria-label="A circular diagram of the four beats of the event loop: run a task, drain microtasks, render, then wait."
      >
        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="var(--color-elp-rule)" strokeWidth={1.5} />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--color-elp-flame)"
          strokeWidth={1.5}
          strokeDasharray="4 10"
          strokeLinecap="round"
          opacity={0.5}
        />

        {BEATS.map((beat) => {
          const point = polar(beat.angle, RADIUS);
          return (
            <circle
              key={beat.label}
              cx={point.x}
              cy={point.y}
              r={5}
              fill="var(--color-elp-paper)"
              stroke="var(--color-elp-ink)"
              strokeWidth={1.5}
            />
          );
        })}

        <motion.g
          style={{ originX: `${CENTER}px`, originY: `${CENTER}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 9, ease: 'linear', repeat: Infinity }}
        >
          <circle cx={CENTER} cy={CENTER - RADIUS} r={7} fill="var(--color-elp-flame)" />
          <circle cx={CENTER} cy={CENTER - RADIUS} r={13} fill="var(--color-elp-flame)" opacity={0.16} />
        </motion.g>

        <text
          x={CENTER}
          y={CENTER - 6}
          textAnchor="middle"
          className="fill-elp-ink font-serif"
          style={{ fontSize: 19, fontStyle: 'italic' }}
        >
          one turn
        </text>
        <text
          x={CENTER}
          y={CENTER + 14}
          textAnchor="middle"
          className="fill-elp-ink-faint font-mono"
          style={{ fontSize: 9, letterSpacing: '0.16em' }}
        >
          OF THE LOOP
        </text>
      </svg>

      <ol className="w-full space-y-3">
        {BEATS.map((beat, index) => (
          <li key={beat.label} className="flex gap-3 border-l-2 border-elp-rule pl-4">
            <span className="mt-[3px] font-mono text-[10px] text-elp-flame">{String(index + 1).padStart(2, '0')}</span>
            <span>
              <span className="block font-serif text-[17px] text-elp-ink">{beat.label}</span>
              <span className="block font-sans text-xs text-elp-ink-faint">{beat.detail}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

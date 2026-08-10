"use client";

import React from 'react';

const BEATS = [
  { label: 'Run a task', detail: 'one, to completion', angle: -90, color: 'var(--color-elp-flame)' },
  { label: 'Drain microtasks', detail: 'all of them', angle: 0, color: 'var(--color-elp-pine)' },
  { label: 'Render', detail: 'if the frame is due', angle: 90, color: 'var(--color-elp-iris)' },
  { label: 'Wait', detail: 'for the next event', angle: 180, color: 'var(--color-elp-ochre)' }
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
      {/* Inject local CSS animations to guarantee 100% perfect synchronization */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes elp-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes elp-dot-color {
          0%, 100% { fill: var(--color-elp-flame); }
          25% { fill: var(--color-elp-pine); }
          50% { fill: var(--color-elp-iris); }
          75% { fill: var(--color-elp-ochre); }
        }
        @keyframes elp-step-0 {
          0%, 100% { opacity: 1; border-color: var(--color-elp-flame); transform: translateX(4px); }
          12.5%, 87.5% { opacity: 0.45; border-color: var(--color-elp-rule); transform: translateX(0); }
        }
        @keyframes elp-step-1 {
          25% { opacity: 1; border-color: var(--color-elp-pine); transform: translateX(4px); }
          0%, 12.5% { opacity: 0.45; border-color: var(--color-elp-rule); transform: translateX(0); }
          37.5%, 100% { opacity: 0.45; border-color: var(--color-elp-rule); transform: translateX(0); }
        }
        @keyframes elp-step-2 {
          50% { opacity: 1; border-color: var(--color-elp-iris); transform: translateX(4px); }
          0%, 37.5% { opacity: 0.45; border-color: var(--color-elp-rule); transform: translateX(0); }
          62.5%, 100% { opacity: 0.45; border-color: var(--color-elp-rule); transform: translateX(0); }
        }
        @keyframes elp-step-3 {
          75% { opacity: 1; border-color: var(--color-elp-ochre); transform: translateX(4px); }
          0%, 62.5% { opacity: 0.45; border-color: var(--color-elp-rule); transform: translateX(0); }
          87.5%, 100% { opacity: 0.45; border-color: var(--color-elp-rule); transform: translateX(0); }
        }
      `}} />

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
              r={6}
              fill={beat.color}
              stroke="var(--color-elp-paper)"
              strokeWidth={2}
            />
          );
        })}

        <g
          style={{
            transformOrigin: '150px 150px',
            animation: 'elp-rotate 9s linear infinite'
          }}
        >
          {/* Invisible element spanning full viewBox to force group bounding box center to (150, 150) */}
          <rect x={0} y={0} width={300} height={300} fill="none" pointerEvents="none" />
          
          <circle
            cx={CENTER}
            cy={CENTER - RADIUS}
            r={7}
            style={{ animation: 'elp-dot-color 9s linear infinite' }}
          />
          <circle
            cx={CENTER}
            cy={CENTER - RADIUS}
            r={13}
            opacity={0.16}
            style={{ animation: 'elp-dot-color 9s linear infinite' }}
          />
        </g>

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
        {BEATS.map((beat, index) => {
          return (
            <li
              key={beat.label}
              className="flex gap-3 border-l-2 pl-4 transition-all"
              style={{
                animation: `elp-step-${index} 9s linear infinite`,
                willChange: 'transform, opacity, border-color'
              }}
            >
              <span className="mt-[3px] font-mono text-[10px]" style={{ color: beat.color }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="block font-serif text-[17px] text-elp-ink">{beat.label}</span>
                <span className="block font-sans text-xs text-elp-ink-faint">{beat.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}


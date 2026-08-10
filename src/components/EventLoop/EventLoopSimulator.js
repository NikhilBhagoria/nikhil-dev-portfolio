"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon, RotateCcwIcon, TerminalIcon } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { QueuePanel } from './QueuePanel';
import { DEMO_CODE, DEMO_STEPS } from '@/data/eventLoopDemo';

const PHASE_LABEL = {
  idle: 'Loop idle',
  script: 'Running script task',
  microtask: 'Microtask checkpoint',
  macrotask: 'Macrotask'
};

const PHASE_TONE = {
  idle: 'border-elp-rule text-elp-ink-faint',
  script: 'border-elp-flame/40 text-elp-flame',
  microtask: 'border-elp-pine/40 text-elp-pine',
  macrotask: 'border-elp-ochre/40 text-elp-ochre'
};

export function EventLoopSimulator() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const step = DEMO_STEPS[index];
  const isLast = index === DEMO_STEPS.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (isLast) {
      setPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => setIndex((current) => current + 1), 1500);
    return () => window.clearTimeout(timer);
  }, [playing, index, isLast]);

  const reset = useCallback(() => {
    setPlaying(false);
    setIndex(0);
  }, []);

  const togglePlay = useCallback(() => {
    if (isLast) {
      setIndex(0);
      setPlaying(true);
      return;
    }
    setPlaying((current) => !current);
  }, [isLast]);

  return (
    <div className="rounded-xl border border-elp-rule bg-elp-paper p-4 sm:p-6 text-elp-ink">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-label ${PHASE_TONE[step.phase]}`}
          >
            {PHASE_LABEL[step.phase]}
          </span>
          <span className="font-mono text-[11px] text-elp-ink-faint">
            {String(index + 1).padStart(2, '0')} / {DEMO_STEPS.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-elp-rule bg-elp-surface text-elp-ink-soft transition-colors hover:border-elp-ink hover:text-elp-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-elp-flame focus-visible:ring-offset-2 focus-visible:ring-offset-elp-paper"
            aria-label="Reset simulation"
          >
            <RotateCcwIcon size={15} />
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              setIndex((current) => Math.max(0, current - 1));
            }}
            disabled={index === 0}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-elp-rule bg-elp-surface text-elp-ink-soft transition-colors hover:border-elp-ink hover:text-elp-ink disabled:cursor-not-allowed disabled:opacity-35 focus:outline-none focus-visible:ring-2 focus-visible:ring-elp-flame focus-visible:ring-offset-2 focus-visible:ring-offset-elp-paper"
            aria-label="Previous step"
          >
            <ChevronLeftIcon size={16} />
          </button>
          <button
            type="button"
            onClick={togglePlay}
            className="flex h-9 items-center gap-2 rounded-md bg-elp-ink px-4 font-mono text-[11px] uppercase tracking-label text-elp-paper transition-colors hover:bg-elp-flame focus:outline-none focus-visible:ring-2 focus-visible:ring-elp-flame focus-visible:ring-offset-2 focus-visible:ring-offset-elp-paper"
          >
            {playing ? <PauseIcon size={13} /> : <PlayIcon size={13} />}
            {playing ? 'Pause' : isLast ? 'Replay' : 'Play'}
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              setIndex((current) => Math.min(DEMO_STEPS.length - 1, current + 1));
            }}
            disabled={isLast}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-elp-rule bg-elp-surface text-elp-ink-soft transition-colors hover:border-elp-ink hover:text-elp-ink disabled:cursor-not-allowed disabled:opacity-35 focus:outline-none focus-visible:ring-2 focus-visible:ring-elp-flame focus-visible:ring-offset-2 focus-visible:ring-offset-elp-paper"
            aria-label="Next step"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>

      <div className="mb-5 h-[2px] w-full overflow-hidden rounded-full bg-elp-rule">
        <motion.div
          className="h-full bg-elp-flame"
          animate={{ width: `${((index + 1) / DEMO_STEPS.length) * 100}%` }}
          transition={{ type: 'spring', stiffness: 180, damping: 28 }}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          <CodeBlock lines={DEMO_CODE} activeLine={step.activeLine} label="demo.js" />

          <div className="min-h-[86px] rounded-lg border border-elp-rule bg-elp-surface p-4">
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-label text-elp-ink-faint">What just happened</p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="font-serif text-[17px] leading-[1.6] text-elp-ink"
              >
                {step.note}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <QueuePanel
              title="Call stack"
              hint="One thread. Top frame runs."
              items={step.stack}
              tone="flame"
              emptyLabel="empty"
              reverse
            />
            <QueuePanel
              title="Microtask queue"
              hint="Drained completely, every turn."
              items={step.microtasks}
              tone="pine"
              emptyLabel="empty"
            />
          </div>

          <QueuePanel
            title="Macrotask queue"
            hint="One per turn of the loop."
            items={step.macrotasks}
            tone="ochre"
            emptyLabel="empty"
          />

          <section className="flex-1 overflow-hidden rounded-lg border border-elp-night-rule bg-elp-night p-4">
            <h4 className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-elp-night-rule">
              <TerminalIcon size={12} />
              Console
            </h4>
            <ul className="space-y-1.5 font-mono text-[12px] text-elp-paper/85">
              {step.output.length === 0 ? (
                <li className="text-elp-paper/30">no output yet</li>
              ) : (
                step.output.map((line) => (
                  <motion.li
                    key={line}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-2"
                  >
                    <span className="text-elp-flame">›</span>
                    {line}
                  </motion.li>
                ))
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

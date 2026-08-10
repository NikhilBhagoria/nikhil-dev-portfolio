"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TONE = {
  flame: { chip: 'border-elp-flame/30 bg-elp-flame/10', dot: 'bg-elp-flame', text: 'text-elp-flame' },
  pine: { chip: 'border-elp-pine/30 bg-elp-pine/10', dot: 'bg-elp-pine', text: 'text-elp-pine' },
  ochre: { chip: 'border-elp-ochre/30 bg-elp-ochre/10', dot: 'bg-elp-ochre', text: 'text-elp-ochre' },
  ink: { chip: 'border-elp-rule bg-elp-paper', dot: 'bg-elp-ink-faint', text: 'text-elp-ink-soft' }
};

export function QueuePanel({ title, hint, items, tone, emptyLabel, reverse = false }) {
  const tokens = TONE[tone];
  const ordered = reverse ? [...items].reverse() : items;

  return (
    <section className="flex min-h-[148px] flex-col rounded-lg border border-elp-rule bg-elp-surface p-4">
      <header className="mb-1 flex items-baseline justify-between gap-3">
        <h4 className={`font-mono text-[10px] uppercase tracking-label ${tokens.text}`}>{title}</h4>
        <span className="font-mono text-[10px] text-elp-ink-faint">{items.length}</span>
      </header>
      <p className="mb-3 font-sans text-[11px] leading-snug text-elp-ink-faint">{hint}</p>

      <ul className="flex flex-col gap-1.5">
        <AnimatePresence initial={false} mode="popLayout">
          {ordered.length === 0 ? (
            <motion.li
              key="empty"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded border border-dashed border-elp-rule px-2.5 py-2 font-mono text-[11px] text-elp-ink-faint/70"
            >
              {emptyLabel}
            </motion.li>
          ) : (
            ordered.map((item, index) => (
              <motion.li
                key={`${item}-${index}`}
                layout
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 460, damping: 34 }}
                className={`flex items-center gap-2 rounded border px-2.5 py-2 font-mono text-[11px] text-elp-ink ${tokens.chip}`}
              >
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tokens.dot}`} aria-hidden="true" />
                {item}
              </motion.li>
            ))
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}

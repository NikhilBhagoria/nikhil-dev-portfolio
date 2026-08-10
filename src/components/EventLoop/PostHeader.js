"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function PostHeader() {
  return (
    <header className="relative mx-auto max-w-3xl px-6 pb-10 pt-16 sm:pt-24 text-elp-ink">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-mono text-[10px] uppercase tracking-label text-elp-flame"
      >
        Concept · Runtime internals
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="font-serif text-[2.75rem] font-normal leading-[1.05] tracking-tight text-elp-ink sm:text-[4rem]"
      >
        The JavaScript
        <br />
        <span className="italic">event loop</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-7 max-w-2xl font-serif text-xl leading-[1.55] text-elp-ink-soft sm:text-[1.4rem]"
      >
        JavaScript runs your code on a single thread — and still manages to feel concurrent. The trick isn't
        parallelism. It's a queue, a stack, and a very disciplined scheduler.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-elp-rule pt-5 font-mono text-[11px] text-elp-ink-faint"
      >
        <span className="text-elp-ink font-bold">Nikhil Bhagoria</span>
        <span aria-hidden="true">·</span>
        <time dateTime="2026-08-10">Aug 10, 2026</time>
        <span aria-hidden="true">·</span>
        <span>9 min read</span>
        <span aria-hidden="true">·</span>
        <span>Interactive</span>
      </motion.div>
    </header>
  );
}

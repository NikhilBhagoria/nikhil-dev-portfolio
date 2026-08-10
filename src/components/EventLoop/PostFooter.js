import React from 'react';

const TAGS = ['javascript', 'concurrency', 'browser', 'fundamentals'];

export function PostFooter() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-24 text-elp-ink">
      <div className="border-t border-elp-rule pt-8">
        <ul className="mb-10 flex flex-wrap gap-2" aria-label="Tags">
          {TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-elp-rule bg-elp-surface px-3 py-1 font-mono text-[11px] text-elp-ink-soft"
            >
              #{tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 rounded-lg border border-elp-rule bg-elp-surface p-6 sm:flex-row sm:items-center sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-elp-ink font-serif text-xl italic text-elp-paper font-bold"
            aria-hidden="true"
          >
            NB
          </div>
          <div>
            <p className="font-serif text-lg text-elp-ink font-bold">Nikhil Bhagoria</p>
            <p className="mt-1 font-serif text-[16px] leading-[1.6] text-elp-ink-soft">
              Full-Stack Developer passionate about system internals, rendering performance, and building interactive developer tooling. Likes explaining complex mechanics that cause large production bugs.
            </p>
          </div>
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-label text-elp-ink-faint">
          Next in this series · Rendering, paint, and the frame budget
        </p>
      </div>
    </footer>
  );
}

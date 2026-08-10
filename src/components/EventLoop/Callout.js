import React from 'react';

export function Callout({ kind, title, children }) {
  return (
    <aside className="my-8 rounded-lg border border-elp-rule bg-elp-surface p-5 sm:p-6">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-label text-elp-flame">{kind}</p>
      <h3 className="mb-2 font-serif text-xl leading-snug text-elp-ink">{title}</h3>
      <div className="font-serif text-[17px] leading-[1.7] text-elp-ink-soft">{children}</div>
    </aside>
  );
}

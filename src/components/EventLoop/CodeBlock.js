import React from 'react';

const TOKEN_PATTERN =
  /(\/\/[^\n]*)|('[^']*'|"[^"]*"|`[^`]*`)|\b(const|let|var|function|return|await|async|new|for|while|if|else)\b|\b(console|setTimeout|setInterval|Promise|queueMicrotask|requestAnimationFrame|document|window|resolve|then|log)\b|\b(\d+)\b/g;

const CLASS_BY_GROUP = {
  1: 'text-elp-night-rule italic',
  2: 'text-[#7fb98b]',
  3: 'text-[#c98bd6]',
  4: 'text-[#e08a5e]',
  5: 'text-[#d9c46a]'
};

function highlight(line) {
  const nodes = [];
  let lastIndex = 0;
  let key = 0;
  const regex = new RegExp(TOKEN_PATTERN);
  let match;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<span key={key++}>{line.slice(lastIndex, match.index)}</span>);
    }
    const groupIndex = [1, 2, 3, 4, 5].find((g) => match?.[g] !== undefined) ?? 0;
    nodes.push(
      <span key={key++} className={CLASS_BY_GROUP[groupIndex] ?? ''}>
        {match[0]}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < line.length) {
    nodes.push(<span key={key++}>{line.slice(lastIndex)}</span>);
  }

  return nodes;
}

export function CodeBlock({ lines, activeLine = null, label, showLineNumbers = true }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-elp-night-rule bg-elp-night">
      {label ? (
        <div className="flex items-center gap-2 border-b border-elp-night-rule px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-elp-flame" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-label text-elp-night-rule">{label}</span>
        </div>
      ) : null}
      <pre className="overflow-x-auto py-3 font-mono text-[13px] leading-[1.85] text-elp-paper/90">
        <code>
          {lines.map((line, index) => {
            const isActive = activeLine === index;
            return (
              <div
                key={index}
                className={[
                  'flex px-4 transition-colors duration-200',
                  isActive ? 'bg-elp-flame/20' : 'bg-transparent'
                ].join(' ')}
                aria-current={isActive ? 'step' : undefined}
              >
                <span
                  className={[
                    '-ml-4 mr-3 w-[3px] shrink-0 rounded-full transition-colors duration-200',
                    isActive ? 'bg-elp-flame' : 'bg-transparent'
                  ].join(' ')}
                  aria-hidden="true"
                />
                {showLineNumbers ? (
                  <span className="mr-4 w-5 shrink-0 select-none text-right text-elp-paper/25">{index + 1}</span>
                ) : null}
                <span className="whitespace-pre">{line === '' ? ' ' : highlight(line)}</span>
              </div>
            );
          })}
        </code>
      </pre>
    </figure>
  );
}

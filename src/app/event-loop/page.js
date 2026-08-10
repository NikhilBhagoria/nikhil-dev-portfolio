import React from 'react';
import { Callout } from '@/components/EventLoop/Callout';
import { CodeBlock } from '@/components/EventLoop/CodeBlock';
import { EventLoopSimulator } from '@/components/EventLoop/EventLoopSimulator';
import { LoopDiagram } from '@/components/EventLoop/LoopDiagram';
import { PostFooter } from '@/components/EventLoop/PostFooter';
import { PostHeader } from '@/components/EventLoop/PostHeader';
import { ORDERING_ROWS } from '@/data/eventLoopDemo';

export const metadata = {
  title: "The JavaScript Event Loop Playground",
  description: "An interactive visualizer simulating the JavaScript Event Loop. Step through Call Stack, Microtasks, and Macrotasks live.",
  keywords: ["JavaScript", "Event Loop", "Call Stack", "Microtasks", "Macrotasks", "Queue", "Concurrency", "Interactive Visualizer"]
};

const PARAGRAPH = 'mb-6 font-serif text-[19px] leading-[1.72] text-elp-ink-soft';
const HEADING = 'mb-5 mt-16 font-serif text-[2rem] leading-tight text-elp-ink font-bold';

function Mono({ children }) {
  return (
    <code className="rounded bg-elp-surface px-1.5 py-0.5 font-mono text-[0.82em] text-elp-ink ring-1 ring-elp-rule">
      {children}
    </code>
  );
}

const TAKEAWAYS = [
  'Synchronous code always finishes before any callback runs.',
  'Microtasks run before the next macrotask — and the queue is drained fully, not one at a time.',
  'setTimeout(fn, 0) means “as soon as the stack is clear”, never “now”.',
  'A long synchronous function blocks input, animation, and paint. There is nowhere else for them to run.'
];

export default function EventLoopPost() {
  return (
    <div className="w-full bg-elp-paper relative selection:bg-elp-flame selection:text-elp-paper">
      {/* Background grain texture */}
      <div className="pointer-events-none absolute inset-0 paper-grain" aria-hidden="true" />

      <div className="relative">
        <PostHeader />

        <main className="mx-auto max-w-3xl px-6">
          <p className={`${PARAGRAPH} drop-first`}>
            Most explanations of the event loop start with a diagram and end with a shrug. The diagram is fine, but it
            tends to skip the part that actually bites you in production: <em>ordering</em>. Why a promise resolves
            before a zero-delay timer. Why a click feels laggy while a loop is running. Why your loading spinner never
            appears.
          </p>

          <p className={PARAGRAPH}>
            All of it comes from one constraint. JavaScript has exactly one call stack, and only one thing can be on top
            of it. Everything else — timers, network responses, clicks, promise reactions — has to wait its turn in a
            line. The event loop is the rule that decides whose turn it is.
          </p>

          <h2 className={HEADING}>One thread, one stack</h2>

          <p className={PARAGRAPH}>
            When a function is called, a frame goes on the stack. When it returns, the frame comes off. That's the whole
            model, and it's strictly sequential: nothing interrupts a function halfway through to run something else.
            There is no preemption in JavaScript.
          </p>

          <p className={PARAGRAPH}>
            Which raises an obvious question. If nothing can interrupt, how does a <Mono>setTimeout</Mono> callback ever
            run? The answer is that <Mono>setTimeout</Mono> isn't part of the language. It's part of the{' '}
            <em>host</em> — the browser or Node — which happily does work on other threads and then hands results back
            to JavaScript through a queue.
          </p>

          <Callout kind="Mental model" title="The engine runs code. The host schedules it.">
            Your JavaScript engine only knows how to execute a stack of frames. Timers, sockets, and the DOM live
            outside it. They don't run your callbacks — they <em>enqueue</em> them, and then wait for the stack to
            empty.
          </Callout>

          <h2 className={HEADING}>One turn, four beats</h2>

          <p className={PARAGRAPH}>
            The loop itself is almost boring. It repeats the same short routine forever, and the ordering rules you care
            about fall directly out of that routine.
          </p>

          <div className="my-9 rounded-xl border border-elp-rule bg-elp-surface p-6 sm:p-8">
            <LoopDiagram />
          </div>

          <p className={PARAGRAPH}>
            Two details in there do most of the work. First, a task runs <strong className="text-elp-ink font-bold">to
            completion</strong> — the loop can't take the thread back mid-function. Second, the microtask queue is
            drained <strong className="text-elp-ink font-bold">entirely</strong> before the loop moves on, while only{' '}
            <strong className="text-elp-ink font-bold">one</strong> macrotask runs per turn.
          </p>

          <h2 className={HEADING}>Two queues, not one</h2>

          <p className={PARAGRAPH}>
            Almost every confusing ordering bug is really a question of which of two lines your callback joined. They
            look identical from the outside and have completely different priorities.
          </p>

          <div className="my-9 overflow-hidden rounded-lg border border-elp-rule bg-elp-surface">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Which queue common asynchronous sources use</caption>
              <thead>
                <tr className="border-b border-elp-rule">
                  <th scope="col" className="px-5 py-3 font-mono text-[10px] uppercase tracking-label text-elp-ink-faint">
                    Source
                  </th>
                  <th scope="col" className="px-5 py-3 font-mono text-[10px] uppercase tracking-label text-elp-ink-faint">
                    Queue
                  </th>
                  <th
                    scope="col"
                    className="hidden px-5 py-3 font-mono text-[10px] uppercase tracking-label text-elp-ink-faint sm:table-cell"
                  >
                    Examples
                  </th>
                </tr>
              </thead>
              <tbody>
                {ORDERING_ROWS.map((row) => (
                  <tr key={row.source} className="border-b border-elp-rule last:border-b-0">
                    <th scope="row" className="px-5 py-3.5 font-serif text-[17px] font-normal text-elp-ink">
                      {row.source}
                    </th>
                    <td className="px-5 py-3.5">
                      <span
                        className={[
                          'rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-label',
                          row.queue === 'Microtask' ? 'border-elp-pine/40 text-elp-pine' : 'border-elp-ochre/40 text-elp-ochre'
                        ].join(' ')}
                      >
                        {row.queue}
                      </span>
                    </td>
                    <td className="hidden px-5 py-3.5 font-mono text-[12px] text-elp-ink-faint sm:table-cell">
                      {row.examples}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={PARAGRAPH}>
            Microtasks win. Always. A promise reaction queued during a task will run before a timer callback that has
            been waiting since before your script even started.
          </p>
        </main>

        <section className="mx-auto mt-16 max-w-5xl px-6" aria-labelledby="watch-it-run">
          <h2 id="watch-it-run" className="mb-3 font-serif text-[2rem] leading-tight text-elp-ink font-bold">
            Watch it run
          </h2>
          <p className="mb-8 max-w-2xl font-serif text-[19px] leading-[1.72] text-elp-ink-soft">
            Here is the classic four-line puzzle. Step through it and watch where each callback goes — the printed order
            is 1, 2, 3, 4, which is not the order the code is written in.
          </p>
          <EventLoopSimulator />
        </section>

        <main className="mx-auto max-w-3xl px-6">
          <h2 className={HEADING}>Where it goes wrong</h2>

          <p className={PARAGRAPH}>
            Once the ordering clicks, a whole category of bugs stops being mysterious. Three of them account for most of
            what you'll actually hit.
          </p>

          <h3 className="mb-3 mt-10 font-serif text-[1.4rem] text-elp-ink font-bold">1. Blocking the only thread</h3>
          <p className={PARAGRAPH}>
            While a task runs, nothing else can: no clicks, no scrolling, no paint. Setting a loading flag and then
            immediately doing heavy synchronous work means the spinner never renders — the render beat comes after your
            task finishes.
          </p>

          <div className="my-8">
            <CodeBlock
              label="blocking.js"
              lines={[
                'setLoading(true);          // state updated…',
                'const rows = crunch(1e8);  // …but the frame never painted',
                'setLoading(false);'
              ]}
            />
          </div>

          <h3 className="mb-3 mt-10 font-serif text-[1.4rem] text-elp-ink font-bold">2. Starving the loop with microtasks</h3>
          <p className={PARAGRAPH}>
            Because the microtask queue is drained completely, a microtask that queues another microtask can loop
            forever without ever yielding. The page freezes and no timer will ever fire again.
          </p>

          <div className="my-8">
            <CodeBlock
              label="starvation.js"
              lines={[
                'function spin() {',
                '  queueMicrotask(spin); // never yields to render or timers',
                '}',
                'spin();'
              ]}
            />
          </div>

          <h3 className="mb-3 mt-10 font-serif text-[1.4rem] text-elp-ink font-bold">
            3. Reading <span className="font-mono text-[0.85em]">0</span> as “immediately”
          </h3>
          <p className={PARAGRAPH}>
            <Mono>setTimeout(fn, 0)</Mono> means “queue this as a macrotask”. The delay is a minimum, not a promise, and
            it competes with everything else in that queue. If you need to run after the current stack unwinds but
            before the browser does anything else, you want a microtask — <Mono>queueMicrotask(fn)</Mono>. If you need
            to run just before paint, you want <Mono>requestAnimationFrame(fn)</Mono>.
          </p>

          <Callout kind="Rule of thumb" title="Pick the queue that matches your intent.">
            Microtask for “finish this logical operation.” Animation frame for “right before the pixels.” Macrotask for
            “yield the thread so the browser can breathe.” Reaching for a timer by default is how you get jank you
            can't explain.
          </Callout>

          <h2 className={HEADING}>Takeaways</h2>

          <ol className="mb-6 space-y-4">
            {TAKEAWAYS.map((item, index) => (
              <li key={item} className="flex gap-4 border-l-2 border-elp-flame/40 pl-5">
                <span className="mt-1.5 font-mono text-[11px] text-elp-flame">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-serif text-[19px] leading-[1.65] text-elp-ink">{item}</span>
              </li>
            ))}
          </ol>

          <p className={PARAGRAPH}>
            None of this is exotic machinery. It's a stack, two queues, and a scheduler that never rushes. Once you can
            picture where a callback is sitting and what has to finish before it, asynchronous JavaScript stops feeling
            like guesswork and starts reading like a schedule.
          </p>
        </main>

        <PostFooter />
      </div>
    </div>
  );
}

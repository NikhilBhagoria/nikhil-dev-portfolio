export const DEMO_CODE = [
  "console.log('1: script start');",
  "",
  "setTimeout(() => {",
  "  console.log('4: timeout');",
  "}, 0);",
  "",
  "Promise.resolve().then(() => {",
  "  console.log('3: promise');",
  "});",
  "",
  "console.log('2: script end');"
];

export const DEMO_STEPS = [
  {
    phase: "idle",
    activeLine: null,
    stack: [],
    microtasks: [],
    macrotasks: [],
    output: [],
    note: "Nothing has run yet. The call stack is empty and both queues are cold."
  },
  {
    phase: "script",
    activeLine: null,
    stack: ["script"],
    microtasks: [],
    macrotasks: [],
    output: [],
    note: "Loading the script is itself a task. It claims the stack and holds the only thread until it returns."
  },
  {
    phase: "script",
    activeLine: 0,
    stack: ["script", "console.log()"],
    microtasks: [],
    macrotasks: [],
    output: [],
    note: "console.log is ordinary synchronous work: push a frame, do the thing, pop."
  },
  {
    phase: "script",
    activeLine: 0,
    stack: ["script"],
    microtasks: [],
    macrotasks: [],
    output: ["1: script start"],
    note: "First line printed. Still inside the same task."
  },
  {
    phase: "script",
    activeLine: 2,
    stack: ["script", "setTimeout()"],
    microtasks: [],
    macrotasks: [],
    output: ["1: script start"],
    note: "setTimeout hands the callback to the host — the browser — not to the JavaScript engine. The timer ticks outside your code."
  },
  {
    phase: "script",
    activeLine: 2,
    stack: ["script"],
    microtasks: [],
    macrotasks: ["timeout callback"],
    output: ["1: script start"],
    note: "A 0 ms timer expires immediately, so the host drops the callback into the macrotask queue. It has to wait — the stack is busy."
  },
  {
    phase: "script",
    activeLine: 6,
    stack: ["script", "Promise.then()"],
    microtasks: [],
    macrotasks: ["timeout callback"],
    output: ["1: script start"],
    note: "The promise is already resolved, so .then() schedules its reaction right away."
  },
  {
    phase: "script",
    activeLine: 6,
    stack: ["script"],
    microtasks: ["promise reaction"],
    macrotasks: ["timeout callback"],
    output: ["1: script start"],
    note: "The reaction joins the microtask queue — a separate, higher-priority line than the timer callback."
  },
  {
    phase: "script",
    activeLine: 10,
    stack: ["script", "console.log()"],
    microtasks: ["promise reaction"],
    macrotasks: ["timeout callback"],
    output: ["1: script start"],
    note: "Back to synchronous work at the bottom of the file."
  },
  {
    phase: "script",
    activeLine: 10,
    stack: ["script"],
    microtasks: ["promise reaction"],
    macrotasks: ["timeout callback"],
    output: ["1: script start", "2: script end"],
    note: "Printed before either callback — even though the timer was scheduled first."
  },
  {
    phase: "idle",
    activeLine: null,
    stack: [],
    microtasks: ["promise reaction"],
    macrotasks: ["timeout callback"],
    output: ["1: script start", "2: script end"],
    note: "The script returns and the stack empties. Only now does the event loop get a turn."
  },
  {
    phase: "microtask",
    activeLine: 7,
    stack: ["promise reaction"],
    microtasks: [],
    macrotasks: ["timeout callback"],
    output: ["1: script start", "2: script end"],
    note: "Microtasks go first — and the loop drains the whole microtask queue before it looks at anything else."
  },
  {
    phase: "microtask",
    activeLine: null,
    stack: [],
    microtasks: [],
    macrotasks: ["timeout callback"],
    output: ["1: script start", "2: script end", "3: promise"],
    note: "Third line. Microtask queue is now empty, so this checkpoint is done."
  },
  {
    phase: "macrotask",
    activeLine: 3,
    stack: ["timeout callback"],
    microtasks: [],
    macrotasks: [],
    output: ["1: script start", "2: script end", "3: promise"],
    note: "The loop takes exactly one macrotask and runs it to completion."
  },
  {
    phase: "macrotask",
    activeLine: null,
    stack: [],
    microtasks: [],
    macrotasks: [],
    output: ["1: script start", "2: script end", "3: promise", "4: timeout"],
    note: "The timer callback finally prints — last, despite a delay of zero."
  },
  {
    phase: "idle",
    activeLine: null,
    stack: [],
    microtasks: [],
    macrotasks: [],
    output: ["1: script start", "2: script end", "3: promise", "4: timeout"],
    note: "Stack empty, queues empty. The loop idles, waiting for the next click, timer, or response."
  }
];

export const ORDERING_ROWS = [
  { source: "Timers", queue: "Macrotask", examples: "setTimeout, setInterval" },
  { source: "User input & events", queue: "Macrotask", examples: "click, scroll, keydown" },
  { source: "Network & I/O", queue: "Macrotask", examples: "fetch response arriving, message" },
  { source: "Promise reactions", queue: "Microtask", examples: ".then, .catch, await resumption" },
  { source: "Explicit scheduling", queue: "Microtask", examples: "queueMicrotask" },
  { source: "DOM observation", queue: "Microtask", examples: "MutationObserver" }
];

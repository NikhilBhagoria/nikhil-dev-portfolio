"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-8 bg-background relative overflow-hidden select-none">
      
      {/* Encapsulated styling for blink animations */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      {/* Decorative background glow behind 404 */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-64 md:w-80 h-64 md:h-80 bg-primary-container/15 rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        {/* Glow-enhanced 404 text */}
        <div className="relative mb-4 select-none">
          <h1 className="text-6xl md:text-[110px] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#00d1ff] to-[#008fb3] select-none leading-none drop-shadow-[0_0_60px_rgba(0,209,255,0.2)]">
            404
          </h1>
        </div>

        {/* Terminal Window Mockup */}
        <div className="w-full max-w-xl bg-[#14161a] border border-outline-variant/30 rounded-xl p-3.5 font-mono text-left text-xs md:text-sm shadow-2xl relative overflow-hidden backdrop-blur-md mb-6">
          {/* Top window bar */}
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 mb-2.5">
            <div className="flex items-center gap-1.5 select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-[10px] text-on-surface-variant font-medium select-none">
              ~/nikhil-portfolio - zsh
            </div>
            <div className="w-12" />
          </div>
          
          {/* Codebase terminal content */}
          <div className="space-y-1 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-[#27c93f]">$</span>
              <span className="text-on-surface select-all">nikhil-portfolio.dev/???</span>
              <span className="inline-block w-1.5 h-3.5 bg-[#00d1ff] animate-blink" />
            </div>
            <div className="text-rose-500 font-bold">
              Error: Page not found (404)
            </div>
            <div className="text-on-surface-variant text-[11px] pt-0.5 select-none">
              Suggestion: Try one of these routes →
            </div>
          </div>
        </div>

        {/* Heading and Description */}
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-on-surface font-headline select-none">
          Looks like you got lost in the codebase.
        </h2>
        <p className="text-on-surface-variant text-xs md:text-sm mt-1 max-w-lg select-none">
          The page you're looking for has been refactored, renamed, or never existed in this repo. Let's get you back on track.
        </p>

        {/* Navigation Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6">
          
          {/* Card 1: Home */}
          <Link
            href="/"
            className="group relative flex flex-col text-left p-5 bg-[#16181c] border border-outline-variant/20 hover:border-[#00d1ff]/40 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_30px_rgba(0,209,255,0.08)]"
          >
            <div className="w-9 h-9 rounded-lg bg-[#00d1ff]/10 flex items-center justify-center text-[#00d1ff] mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-on-surface font-headline">Home</h3>
            <p className="text-[11px] text-on-surface-variant mt-0.5 mb-3">Back to the start</p>
            <span className="text-xs font-bold text-[#00d1ff] flex items-center gap-1 group-hover:underline mt-auto">
              Go home <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </Link>

          {/* Card 2: Portfolio */}
          <Link
            href="/projects"
            className="group relative flex flex-col text-left p-5 bg-[#16181c] border border-outline-variant/20 hover:border-[#00d1ff]/40 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_30px_rgba(0,209,255,0.08)]"
          >
            <div className="w-9 h-9 rounded-lg bg-[#00d1ff]/10 flex items-center justify-center text-[#00d1ff] mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-on-surface font-headline">Portfolio</h3>
            <p className="text-[11px] text-on-surface-variant mt-0.5 mb-3">See my work</p>
            <span className="text-xs font-bold text-[#00d1ff] flex items-center gap-1 group-hover:underline mt-auto">
              View projects <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </Link>

          {/* Card 3: Contact */}
          <Link
            href="/contact"
            className="group relative flex flex-col text-left p-5 bg-[#16181c] border border-outline-variant/20 hover:border-[#00d1ff]/40 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_30px_rgba(0,209,255,0.08)]"
          >
            <div className="w-9 h-9 rounded-lg bg-[#00d1ff]/10 flex items-center justify-center text-[#00d1ff] mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-on-surface font-headline">Contact</h3>
            <p className="text-[11px] text-on-surface-variant mt-0.5 mb-3">Get in touch</p>
            <span className="text-xs font-bold text-[#00d1ff] flex items-center gap-1 group-hover:underline mt-auto">
              Say hello <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </Link>

        </div>

        {/* Footer Back Action */}
        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="flex items-center gap-2 text-xs md:text-sm text-on-surface-variant hover:text-[#00d1ff] transition-colors duration-200 mt-8 cursor-pointer font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Go Back
        </button>

        <p className="text-[10px] text-on-surface-variant/50 mt-1 select-none">
          (Or just enjoy the void 🌌)
        </p>

      </div>

    </div>
  );
}

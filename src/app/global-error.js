"use client";

import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function GlobalError({ error, reset }) {
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error("Critical root-level unhandled error:", error);
  }, [error]);

  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-on-surface font-sans">
        <div className="min-h-screen flex-1 flex flex-col items-center justify-center text-center px-4 py-8 bg-background relative overflow-hidden select-none">
          {/* Encapsulated styling for animations */}
          <style>{`
            @keyframes blink {
              50% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s step-end infinite;
            }
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); }
              50% { opacity: 0.25; transform: translate(-50%, -50%) scale(1.1); }
            }
            .animate-pulse-slow {
              animation: pulse-slow 4s ease-in-out infinite;
            }
          `}</style>

          {/* Decorative background glow behind Error */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-64 md:w-80 h-64 md:h-80 bg-rose-500 rounded-full blur-[90px] pointer-events-none z-0 animate-pulse-slow" />

          <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
            {/* Glow-enhanced Error text */}
            <div className="relative mb-4">
              <h1 className="text-6xl md:text-[100px] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ff4d4d] to-[#b30000] select-none leading-none drop-shadow-[0_0_60px_rgba(255,77,77,0.25)]">
                500
              </h1>
            </div>

            {/* Terminal Window Mockup */}
            <div className="w-full max-w-xl bg-[#14161a] border border-rose-950/40 rounded-xl p-3.5 font-mono text-left text-xs md:text-sm shadow-2xl relative overflow-hidden backdrop-blur-md mb-6">
              {/* Top window bar */}
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/10 mb-2.5">
                <div className="flex items-center gap-1.5 select-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[10px] text-on-surface-variant font-medium select-none">
                  root-diagnostics@nikhil-portfolio: ~
                </div>
                <div className="w-12" />
              </div>

              {/* System Diagnostic Content */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">[CRITICAL_ROOT_FAIL]</span>
                  <span className="text-on-surface">Application shell crashed.</span>
                </div>
                <div className="text-on-surface-variant text-[11px] select-none">
                  LOG LEVEL: critical | STAGE: root_layout_render
                </div>
                <div className="text-rose-400 font-bold border-l-2 border-rose-500/50 pl-2 my-2 py-0.5">
                  Error: A root layout crash occurred. The system could not initialize the global layout.
                </div>

                {/* Collapsible Details */}
                {mounted && (
                  <div className="mt-2">
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-[11px] text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors duration-150"
                    >
                      <span>{showDetails ? "▼ Hide" : "▶ Show"} Technical Details</span>
                    </button>

                    {showDetails && (
                      <div className="mt-2 p-2 bg-black/30 border border-rose-950/50 rounded text-[11px] text-rose-300/90 overflow-x-auto space-y-1 select-text">
                        <p><span className="text-rose-500">Message:</span> {error?.message || "No message provided."}</p>
                        {error?.digest && (
                          <p><span className="text-rose-500">Digest:</span> {error.digest}</p>
                        )}
                        <p className="text-[10px] text-on-surface-variant/70 mt-1">
                          ENVIRONMENT: {process.env.NODE_ENV}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Heading and Description */}
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-on-surface font-headline select-none">
              Root Level Exception.
            </h2>
            <p className="text-on-surface-variant text-xs md:text-sm mt-1 max-w-lg select-none">
              A critical exception prevented the application shell from rendering. You can try to reset execution or return home.
            </p>

            {/* Action Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 w-full max-w-md">
              {/* Action 1: Reset / Retry */}
              <button
                onClick={() => reset()}
                className="flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs md:text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer shadow-lg shadow-rose-900/20 active:scale-95"
                title="Retry rendering the root layout"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-slow">
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.72 2.78L21 8" />
                  <polyline points="21 3 21 8 16 8" />
                </svg>
                Retry Execution
              </button>

              {/* Action 2: Go Home */}
              <a
                href="/"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#16181c] border border-outline-variant/20 hover:border-rose-500/40 text-on-surface text-xs md:text-sm font-bold rounded-lg transition-all duration-200 shadow-md active:scale-95"
                title="Return to Home page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Back to Safety
              </a>
            </div>

            <p className="text-[10px] text-on-surface-variant/40 mt-8 select-none">
              (Global Fallback Shell Active)
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ----------------------------------------------------
// Typewriter Cursor Animation Helper
// ----------------------------------------------------
function LiveTypewriter() {
  const words = ["Nikhil Bhagoria ", "Web Dev & Designer ", "Interaction Engineer "];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  // Cursor blink
  useEffect(() => {
    const cursorTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(cursorTimeout);
  }, [blink]);

  return (
    <div className="font-mono text-base md:text-lg text-on-surface font-semibold py-4 selection:bg-[#00d1ff]/20">
      Hello, I'm <span className="text-[#00d1ff]">{words[index].substring(0, subIndex)}</span>
      <span className={`inline-block w-[3px] h-5 bg-[#00d1ff] ml-1 transition-opacity ${blink ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}

// ----------------------------------------------------
// Live Showcase Widgets & Categories
// ----------------------------------------------------
export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCode, setSelectedCode] = useState(null);

  // Interactive State for widgets
  const [toggleState, setToggleState] = useState(false);
  const [progressVal, setProgressVal] = useState(70);
  const [bellShake, setBellShake] = useState(false);
  const [bellCount, setBellCount] = useState(3);
  const [fabRipples, setFabRipples] = useState([]);
  
  // Progress Ring Auto-updater
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressVal((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  // Bell click handler
  const triggerBell = () => {
    setBellShake(true);
    setBellCount((prev) => prev + 1);
    setTimeout(() => setBellShake(false), 500);
  };

  // FAB click ripple generator
  const triggerFAB = (e) => {
    const id = Date.now();
    setFabRipples((prev) => [...prev, id]);
    setTimeout(() => {
      setFabRipples((prev) => prev.filter((r) => r !== id));
    }, 1200);
  };

  // Card Lift Hover 3D effect
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(600px) rotateX(${-y / 8}deg) rotateY(${x / 8}deg) scale(1.05)`;
  };

  const resetCardTransform = (e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  // Code snippets data bank
  const codeSnippets = {
    "Shimmer Button": {
      tech: "CSS / Tailwind",
      code: `/* Shimmer Sweep Animation CSS */
.shimmer-effect {
  position: relative;
  overflow: hidden;
}
.shimmer-effect::after {
  content: '';
  position: absolute;
  top: 0; left: -150%;
  width: 50%; height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.35),
    transparent
  );
  transform: skewX(-20deg);
  transition: 0.75s cubic-bezier(0.19, 1, 0.22, 1);
}
.shimmer-effect:hover::after {
  left: 150%;
}`
    },
    "Skeleton Loader": {
      tech: "CSS Keyframes",
      code: `/* Skeleton Loader Pulse Wave CSS */
@keyframes skeleton-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton-item {
  background: linear-gradient(
    90deg,
    #1e2024 25%,
    #2a2d32 37%,
    #1e2024 63%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s infinite linear;
}`
    },
    "Card Lift": {
      tech: "React 3D Rotate / CSS Transition",
      code: `// Dynamic 3D mouse rotate logic in React
const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  // Custom 3D rotate perspective values
  card.style.transform = \`perspective(600px) rotateX(\${-y / 8}deg) rotateY(\${x / 8}deg) scale(1.05)\`;
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
};`
    },
    "Progress Ring": {
      tech: "SVG Stroke Dasharray",
      code: `// SVG Arc circumference formula: 2 * Math.PI * radius
const radius = 34;
const circumference = 2 * Math.PI * radius; // ~213.6

<svg className="w-20 h-20 transform -rotate-90">
  <circle
    cx="40" cy="40" r={radius}
    stroke="rgba(255,255,255,0.05)" strokeWidth="5"
    fill="transparent"
  />
  <circle
    cx="40" cy="40" r={radius}
    stroke="#00d1ff" strokeWidth="5"
    fill="transparent"
    strokeDasharray={circumference}
    strokeDashoffset={circumference * (1 - progress / 100)}
    className="transition-all duration-300 ease-out"
  />
</svg>`
    },
    "Toggle Switch": {
      tech: "Tailwind / React State",
      code: `// Animated toggle button switch container
<div 
  onClick={() => setOn(!on)}
  className={\`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 relative \${
    on ? 'bg-[#00d1ff]' : 'bg-[#2a2d32]'
  }\`}
>
  <div 
    className={\`w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 transform \${
      on ? 'translate-x-6' : 'translate-x-0'
    }\`} 
  />
</div>`
    },
    "Notification Ping": {
      tech: "Tailwind CSS Animations",
      code: `/* Radiating concentrics ping badges */
<span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
</span>`
    },
    "Typewriter Cursor": {
      tech: "React Typing Effects hooks",
      code: `// Dynamic text sequence eraser and writer in React
useEffect(() => {
  if (subIndex === words[index].length + 1 && !reverse) {
    setTimeout(() => setReverse(true), 1500);
    return;
  }
  if (subIndex === 0 && reverse) {
    setReverse(false);
    setIndex((prev) => (prev + 1) % words.length);
    return;
  }
  
  const timer = setTimeout(() => {
    setSubIndex(prev => prev + (reverse ? -1 : 1));
  }, reverse ? 40 : 80);
  
  return () => clearTimeout(timer);
}, [subIndex, reverse, index]);`
    },
    "Ripple FAB": {
      tech: "CSS Concentric Waves Keyframe",
      code: `/* Ripple Expansion concentric rings */
@keyframes fab-ripple {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
}

.ripple-ring {
  position: absolute;
  border: 2px solid #00d1ff;
  border-radius: 50%;
  animation: fab-ripple 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}`
    }
  };

  const showcaseItems = [
    {
      title: "Shimmer Button",
      category: "Hover States",
      tech: "CSS / Tailwind",
      techBadge: "CSS / Tailwind",
      description: "A subtle light sweep across the button surface on hover to draw the eye to your CTA.",
      tag: "Hover",
      renderWidget: () => (
        <button className="shimmer-effect px-6 py-2.5 rounded-lg bg-[#00d1ff] text-[#00566a] font-bold text-sm tracking-tight scale-100 active:scale-95 transition-transform cursor-pointer relative overflow-hidden shadow-[0_4px_20px_rgba(0,209,255,0.2)]">
          <style>{`
            .shimmer-effect::after {
              content: '';
              position: absolute;
              top: 0; left: -150%;
              width: 50%; height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
              transform: skewX(-20deg);
              transition: 0.65s cubic-bezier(0.19, 1, 0.22, 1);
            }
            .shimmer-effect:hover::after {
              left: 150%;
            }
          `}</style>
          <span className="flex items-center gap-2 select-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m5 3 3.057 3.057a1.98 1.98 0 0 0 2.8 0l1.458-1.458a1.98 1.98 0 0 1 2.8 0L21 10.435"></path><path d="m19 21-3.057-3.057a1.98 1.98 0 0 0-2.8 0l-1.458 1.458a1.98 1.98 0 0 1-2.8 0L3 13.565"></path></svg>
            Click Me
          </span>
        </button>
      )
    },
    {
      title: "Skeleton Loader",
      category: "Loading",
      tech: "CSS",
      techBadge: "CSS",
      description: "Animated gradient bars communicate progress while content streams in from the server.",
      tag: "Loading",
      renderWidget: () => (
        <div className="w-48 space-y-2.5">
          <div className="h-4 w-1/3 rounded bg-gradient-to-r from-outline-variant/15 via-outline-variant/30 to-outline-variant/15 bg-[length:200%_100%] animate-shimmer" />
          <div className="h-2.5 w-full rounded bg-gradient-to-r from-outline-variant/15 via-outline-variant/30 to-outline-variant/15 bg-[length:200%_100%] animate-shimmer" />
          <div className="h-2.5 w-5/6 rounded bg-gradient-to-r from-outline-variant/15 via-outline-variant/30 to-outline-variant/15 bg-[length:200%_100%] animate-shimmer" />
          <div className="h-2.5 w-2/3 rounded bg-gradient-to-r from-outline-variant/15 via-outline-variant/30 to-outline-variant/15 bg-[length:200%_100%] animate-shimmer" />
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            .animate-shimmer {
              animation: shimmer 1.6s infinite linear;
            }
          `}</style>
        </div>
      )
    },
    {
      title: "Card Lift",
      category: "Hover States",
      tech: "JS / CSS",
      techBadge: "JS / CSS",
      description: "Cards lift on hover with a soft elevation shadow that signals interactivity.",
      tag: "Hover",
      renderWidget: () => (
        <div
          onMouseMove={handleCardMouseMove}
          onMouseLeave={resetCardTransform}
          className="w-48 p-4 bg-[#1e2024] border border-outline-variant/20 rounded-xl shadow-lg cursor-pointer transform transition-transform duration-200 ease-out select-none"
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-6 h-6 rounded bg-[#00d1ff]/10 flex items-center justify-center text-[#00d1ff]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <div className="h-3 w-16 rounded bg-on-surface/80" />
          </div>
          <div className="h-1.5 w-full rounded bg-outline-variant/30 mb-1.5" />
          <div className="h-1.5 w-3/4 rounded bg-outline-variant/30" />
        </div>
      )
    },
    {
      title: "Progress Ring",
      category: "Loading",
      tech: "SVG / React",
      techBadge: "SVG / React",
      description: "An animated SVG stroke that fills as progress increases—perfect for uploads and timers.",
      tag: "Loading",
      renderWidget: () => {
        const radius = 34;
        const circumference = 2 * Math.PI * radius; // ~213.6
        return (
          <div className="flex flex-col items-center justify-center relative select-none">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="5"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="#00d1ff"
                strokeWidth="5"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - progressVal / 100)}
                className="transition-all duration-150 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-on-surface leading-none">{progressVal}%</span>
              <span className="text-[8px] text-on-surface-variant leading-none mt-0.5">Loaded</span>
            </div>
          </div>
        );
      }
    },
    {
      title: "Toggle Switch",
      category: "Transitions",
      tech: "Tailwind / React",
      techBadge: "Tailwind / React",
      description: "A spring-physics thumb slide with synchronized color and shadow transitions on state change.",
      tag: "Transition",
      renderWidget: () => (
        <div className="flex items-center gap-5 select-none">
          <div
            onClick={() => setToggleState(!toggleState)}
            className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-all duration-300 relative ${
              toggleState ? "bg-[#00d1ff] shadow-[0_0_15px_rgba(0,209,255,0.4)]" : "bg-[#2a2d32]"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 transform ${
                toggleState ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      )
    },
    {
      title: "Notification Ping",
      category: "Scroll",
      tech: "CSS",
      techBadge: "CSS",
      description: "A pulsing badge that radiates outward to draw attention to new activity without being noisy.",
      tag: "Scroll",
      renderWidget: () => (
        <div 
          onClick={triggerBell}
          className="relative w-14 h-14 bg-[#1e2024] hover:bg-[#25282e] border border-outline-variant/20 hover:border-outline-variant/40 rounded-xl flex items-center justify-center cursor-pointer transition-colors duration-200 select-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`size-6 text-on-surface ${bellShake ? "animate-bell-shake" : ""}`}
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-extrabold text-white">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 rounded-full" />
            {bellCount}
          </span>
          <style>{`
            @keyframes bell-shake {
              0%, 100% { transform: rotate(0); }
              20%, 60% { transform: rotate(15deg); }
              40%, 80% { transform: rotate(-15deg); }
            }
            .animate-bell-shake {
              animation: bell-shake 0.4s ease-in-out;
            }
          `}</style>
        </div>
      )
    },
    {
      title: "Typewriter Cursor",
      category: "Loading",
      tech: "React Hooks",
      techBadge: "React Hooks",
      description: "Characters type out one-by-one with a blinking cursor—great for hero headers and storytelling.",
      tag: "Loading",
      renderWidget: () => <LiveTypewriter />
    },
    {
      title: "Ripple FAB",
      category: "Hover States",
      tech: "CSS Animation",
      techBadge: "CSS Animation",
      description: "Concentric rings ripple outward from the floating action button, signaling tap affordance.",
      tag: "Hover",
      renderWidget: () => (
        <div className="relative flex items-center justify-center w-24 h-24 select-none">
          {/* Custom concentric rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full border border-[#00d1ff]/40 animate-pulse-ring" />
            <div className="w-16 h-16 rounded-full border border-[#00d1ff]/20 animate-pulse-ring delay-300" />
          </div>

          <button
            onClick={triggerFAB}
            className="w-12 h-12 bg-[#00d1ff] text-[#00566a] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,209,255,0.3)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer relative z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
          
          {/* Dynamic Click Ripples */}
          {fabRipples.map((rippleId) => (
            <span
              key={rippleId}
              className="absolute inline-flex rounded-full border-2 border-[#00d1ff] w-12 h-12 animate-fab-ripple pointer-events-none"
            />
          ))}

          <style>{`
            @keyframes pulse-ring {
              0% { transform: scale(0.85); opacity: 0.8; }
              100% { transform: scale(1.4); opacity: 0; }
            }
            .animate-pulse-ring {
              animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            @keyframes fab-ripple {
              0% { transform: scale(1); opacity: 1; }
              100% { transform: scale(2.4); opacity: 0; }
            }
            .animate-fab-ripple {
              animation: fab-ripple 1.1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
            }
          `}</style>
        </div>
      )
    }
  ];

  // Filtering filter logic
  const filteredItems = showcaseItems.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  return (
    <div className="bg-background text-on-surface min-h-screen py-16 px-4 selection:bg-[#00d1ff]/20">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <span className="text-[#00d1ff] text-xs font-black tracking-[0.25em] uppercase select-none mb-3">
          Motion Design
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center font-headline max-w-2xl select-none">
          Interactions That Feel Alive
        </h1>
        <p className="text-on-surface-variant text-sm md:text-base text-center mt-3 max-w-xl leading-relaxed select-none">
          A curated collection of the micro-animations and motion patterns I use to bring interfaces to life — without sacrificing performance or accessibility.
        </p>

        {/* Categories Tab Navigation Bar */}
        <div className="flex items-center gap-1.5 md:gap-4 overflow-x-auto w-full max-w-xl border-b border-outline-variant/20 mt-10 pb-1 scrollbar-none select-none">
          {["All", "Hover States", "Loading", "Transitions", "Scroll"].map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`py-2 px-3 text-xs md:text-sm font-semibold tracking-tight transition-all duration-300 relative whitespace-nowrap cursor-pointer ${
                  isActive ? "text-[#00d1ff]" : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {filter}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#00d1ff] shadow-[0_-2px_10px_rgba(0,209,255,0.8)] rounded-t" />
                )}
              </button>
            );
          })}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#111318] border border-outline-variant/10 hover:border-outline-variant/35 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] group"
            >
              
              {/* Interaction Demonstration Area */}
              <div className="h-44 bg-[#16181c] border border-outline-variant/10 rounded-xl flex items-center justify-center relative overflow-hidden mb-4 shadow-inner">
                {item.renderWidget()}

                {/* Subtag badge inside container */}
                <span className="absolute bottom-2.5 right-2.5 text-[9px] font-black uppercase tracking-widest bg-surface-container-lowest/80 text-on-surface-variant/80 border border-outline-variant/20 px-2 py-0.5 rounded select-none">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description Info */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-on-surface group-hover:text-[#00d1ff] transition-colors duration-200 font-headline">
                  {item.title}
                </h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                  item.tech.includes("React") || item.tech.includes("Hooks")
                    ? "bg-[#00d1ff]/10 text-[#a4e6ff] border-[#00d1ff]/30" 
                    : item.tech.includes("JS")
                    ? "bg-[#7000ff]/10 text-[#d1bcff] border-[#7000ff]/30"
                    : "bg-[#ffd59c]/10 text-[#ffd59c] border-[#ffd59c]/30"
                }`}>
                  {item.techBadge}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4 flex-grow">
                {item.description}
              </p>

              {/* View Code Trigger */}
              <button
                onClick={() => setSelectedCode({ title: item.title, ...codeSnippets[item.title] })}
                className="text-xs font-bold text-[#00d1ff] flex items-center gap-1 hover:underline cursor-pointer w-fit mt-auto select-none"
              >
                View Code <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

            </div>
          ))}
        </div>

        {/* Bottom Giant CTA Card */}
        <div className="w-full bg-gradient-to-br from-[#16181c] to-[#0c0e12] border border-outline-variant/20 rounded-3xl p-8 md:p-12 text-center mt-20 relative overflow-hidden shadow-2xl">
          {/* Radial decorative background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,209,255,0.06),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(112,0,255,0.04),transparent_60%)]" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[#00d1ff] text-[10px] font-black uppercase tracking-[0.3em] bg-[#00d1ff]/10 border border-[#00d1ff]/20 px-3 py-1 rounded-full mb-4 select-none">
              ⚡ Bring to Life
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-on-surface font-headline select-none">
              Want These in Your Project?
            </h2>
            <p className="text-on-surface-variant text-xs md:text-sm mt-3 max-w-xl leading-relaxed select-none">
              I'll integrate production-ready, accessible micro-animations into your product — fully typed, performant, and reduced-motion safe.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00d1ff] text-[#00566a] font-bold text-sm tracking-tight scale-100 hover:scale-105 active:scale-95 transition-all shadow-[0_4px_25px_rgba(0,209,255,0.3)] cursor-pointer flex items-center justify-center gap-2 select-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  Hire Me
                </button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-transparent border border-outline-variant/50 hover:border-on-surface hover:bg-on-surface/5 text-on-surface font-bold text-sm tracking-tight scale-100 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 select-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Code Drawer/Modal Overlay */}
      {selectedCode && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#14161a] border border-outline-variant/30 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-modal-in">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-outline-variant/20 bg-surface-container-lowest/50">
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-on-surface font-headline">{selectedCode.title}</h3>
                <span className="text-[10px] text-[#00d1ff] font-bold mt-0.5 tracking-wider uppercase">{selectedCode.tech} implementation</span>
              </div>
              <button
                onClick={() => setSelectedCode(null)}
                className="w-8 h-8 rounded-lg bg-outline-variant/10 hover:bg-outline-variant/25 flex items-center justify-center text-on-surface transition-colors cursor-pointer select-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Code Body */}
            <div className="p-5 overflow-y-auto flex-grow bg-surface-container-lowest/30">
              <pre className="font-mono text-xs md:text-sm text-[#a4e6ff] bg-[#0c0e12] border border-outline-variant/10 p-4 rounded-xl overflow-x-auto whitespace-pre select-all">
                {selectedCode.code}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-surface-container-lowest/50 border-t border-outline-variant/20 flex justify-end">
              <button
                onClick={() => setSelectedCode(null)}
                className="px-4 py-2 rounded-lg bg-outline-variant/25 hover:bg-outline-variant/45 text-on-surface text-xs font-bold transition-all cursor-pointer select-none"
              >
                Close View
              </button>
            </div>

          </div>
          
          <style>{`
            @keyframes modal-in {
              0% { transform: scale(0.95); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-modal-in {
              animation: modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>
        </div>
      )}

    </div>
  );
}

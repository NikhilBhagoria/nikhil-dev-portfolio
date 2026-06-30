"use client";

import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";

/**
 * Enterprise Production-level Hero Section.
 * Includes interactive dev console dashboard to impress HRs, CEOs and Clients.
 */
export default function Hero() {
  const [activeTech, setActiveTech] = useState("nextjs");
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 0;
    }
  }, [activeTech]);

  const techSnippets = {
    nextjs: {
      title: "createProject.ts",
      lang: "TypeScript",
      code: `// Next.js 14+ Server Action
export async function createProject(data: ProjectInput) {
  "use server";
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  
  return db.project.create({
    data: {
      ...data,
      userId: session.user.id,
      status: "PRODUCTION_READY"
    }
  });
}`,
      metrics: { lcp: "0.8s", performance: "100%", seo: "100%", security: "A+" }
    },
    react: {
      title: "useIntersection.js",
      lang: "React/JS",
      code: `// Performance Optimized Hook
export function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
}`,
      metrics: { lcp: "0.9s", performance: "99%", seo: "100%", security: "A" }
    },
    nodejs: {
      title: "server.js",
      lang: "Express",
      code: `// High-Performance Cached Endpoint
app.get("/api/v1/projects", cache(300), async (req, res) => {
  try {
    const data = await Project.find().lean();
    res.status(200).json({ 
      success: true, 
      count: data.length,
      data 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`,
      metrics: { lcp: "1.1s", performance: "98%", seo: "98%", security: "A+" }
    },
    mongodb: {
      title: "Project.schema.js",
      lang: "Mongoose",
      code: `// Optimized Schema & Indexed Fields
const ProjectSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ type: String, index: true }],
  status: { type: String, default: "active" }
}, { timestamps: true });

// High-speed sorting query index
ProjectSchema.index({ createdAt: -1 });`,
      metrics: { lcp: "0.6s", performance: "100%", seo: "99%", security: "A+" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-8 pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-6 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 hover:bg-[#10b981]/20 transition-all duration-300 backdrop-blur-md mb-6 w-fit cursor-default select-none animate-in fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span className="font-label text-[10px] text-white font-bold uppercase tracking-widest leading-none">
              Available for new opportunities
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
            Nikhil Bhagoria
          </h1>

          <p className="font-headline text-2xl md:text-3xl text-on-surface-variant font-medium mb-4">
            Next.JS Developer |{" "}
            <span className="gradient-text">
              MERN Stack Developer
            </span>
          </p>

          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
            Crafting high-performance, scalable web applications with 2+ years
            of engineering excellence. Bridging the gap between complex logic and
            seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="/projects"
              variant="gradient"
              size="md"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              }
              iconPosition="end"
            >
              View Projects
            </Button>

            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              }
              iconPosition="start"
            >
              Contact Me
            </Button>

            <Button
              href="/Nikhil_Bhagoria_2+_Yrs.pdf"
              download
              variant="secondary"
              size="md"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              }
              iconPosition="start"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Right Dashboard Console (Instead of basic photo) */}
        <div className="md:col-span-6 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10"></div>

          {/* Interactive Window Chrome */}
          <div className="relative rounded-3xl overflow-hidden glass-card border border-outline-variant/20 shadow-2xl p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/30">
            
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
              </div>
              <div className="font-mono text-xs text-on-surface-variant font-bold">
                nikhil-bhagoria ~ {techSnippets[activeTech].title}
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                <span className="font-label text-[9px] uppercase tracking-wider text-[#10b981]">PROD</span>
              </div>
            </div>

            {/* Code Block Terminal */}
            <style>{`
              .custom-terminal-scrollbar::-webkit-scrollbar {
                width: 6px;
                height: 6px;
              }
              .custom-terminal-scrollbar::-webkit-scrollbar-track {
                background: #0b0f19;
                border-radius: 9999px;
              }
              .custom-terminal-scrollbar::-webkit-scrollbar-thumb {
                background: #27354a;
                border-radius: 9999px;
                border: 1px solid #0b0f19;
              }
              .custom-terminal-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #3c494e;
              }
              .custom-terminal-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: #27354a #0b0f19;
              }
            `}</style>
            <div
              ref={terminalRef}
              className="bg-[#0b0f19] rounded-xl border border-outline-variant/10 p-4 font-mono text-[10px] sm:text-xs leading-relaxed text-[#a9b1d6] h-[220px] overflow-y-auto custom-terminal-scrollbar mb-4 select-all shadow-inner"
            >
              <span className="text-on-surface-variant select-none">// Active Technology: {techSnippets[activeTech].lang}</span>
              <pre className="mt-2 whitespace-pre-wrap font-mono">
                {techSnippets[activeTech].code}
              </pre>
            </div>

            {/* Tab Selectors (Interactive Pillars) */}
            <div className="flex gap-2 mb-4 overflow-x-auto custom-terminal-scrollbar pb-1">
              {[
                { id: "nextjs", label: "Next.js" },
                { id: "react", label: "React" },
                { id: "nodejs", label: "Node.js" },
                { id: "mongodb", label: "MongoDB" }
              ].map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTech(tech.id)}
                  className={`px-3 py-1.5 rounded-lg font-label text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                    activeTech === tech.id
                      ? "bg-primary-container border-primary text-primary"
                      : "border-outline-variant/20 bg-surface-container-low text-on-surface-variant hover:border-outline-variant/40 hover:text-on-surface"
                  }`}
                >
                  {tech.label}
                </button>
              ))}
            </div>

            {/* Google Lighthouse Optimization Scorecard */}
            <div className="flex items-center justify-between p-4 bg-[#10b981]/5 rounded-2xl border border-[#10b981]/25">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="24" cy="24" r="20" className="text-surface-container-highest" strokeWidth="4" stroke="currentColor" fill="transparent" />
                    <circle cx="24" cy="24" r="20" className="text-[#10b981] drop-shadow-[0_0_8px_#10b981]" strokeWidth="4" strokeDasharray="125" strokeDashoffset="0" strokeLinecap="round" stroke="currentColor" fill="transparent" />
                  </svg>
                  <span className="absolute font-headline font-black text-xs text-white">100</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-xs text-white">Lighthouse Standard</h4>
                  <p className="text-[9px] text-on-surface-variant">Performance metrics fully verified</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-[#10b981]/20 border border-[#10b981]/40 text-[#10b981] text-[9px] font-bold uppercase tracking-widest">
                OPTIMIZED
              </span>
            </div>

            {/* Specs Detail Badges */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[
                { label: "LCP Speed", val: techSnippets[activeTech].metrics.lcp, color: "text-primary" },
                { label: "SEO standard", val: techSnippets[activeTech].metrics.seo, color: "text-[#10b981]" },
                { label: "Performance", val: techSnippets[activeTech].metrics.performance, color: "text-[#10b981]" },
                { label: "Security", val: techSnippets[activeTech].metrics.security, color: "text-tertiary" }
              ].map((spec, i) => (
                <div key={i} className="glass-card p-2 rounded-xl border border-outline-variant/10 text-center">
                  <p className="font-label text-[8px] text-on-surface-variant uppercase tracking-wider mb-0.5">
                    {spec.label}
                  </p>
                  <p className={`font-headline font-bold text-xs ${spec.color}`}>
                    {spec.val}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-label uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}

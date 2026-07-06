"use client";

import { useState } from "react";
import { skills } from "@/data/skills";
import { use3DTilt } from "@/hooks/use3DTilt";

/**
 * Enterprise Production-level Skills Section.
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "languages", label: "Languages" },
    { id: "devops", label: "DevOps & Tools" },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  return (
    <section className="py-24 bg-[#0c0e12] relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-container/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] block mb-2">
              Technical Arsenal
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white">
              Core Expertise
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-sm">
            Specialized in the modern web ecosystem, focusing on performance,
            maintainability, and elegant architectures.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all border duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary border-primary text-background shadow-[0_2px_12px_rgba(164,230,255,0.25)] scale-[1.02]"
                  : "glass-card border-[#1f2438]/50 text-on-surface-variant hover:border-[#00d1ff]/30 hover:text-on-surface"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 min-h-[120px]">
          {filteredSkills.map((skill) => (
            <HomeSkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for Home Skill Cards with 3D Tilt Effect
function HomeSkillCard({ skill }) {
  const tilt = use3DTilt(6, 1.05);
  return (
    <div
      {...tilt}
      className="bg-[#121420] p-6 rounded-[1.5rem] flex flex-col items-center justify-center gap-3 hover:border-[#00d1ff]/40 transition-all duration-300 group border border-[#1f2438]/50 hover:shadow-[0_4px_20px_rgba(0,209,255,0.04)] cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-[#1b2030]/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner border border-[#2e3752]/20">
        {skill.svg}
      </div>
      <span className="font-headline font-semibold text-sm text-white text-center group-hover:text-[#00d1ff] transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

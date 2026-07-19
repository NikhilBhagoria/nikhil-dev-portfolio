"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { skills } from "@/data/skills";
import { use3DTilt } from "@/hooks/use3DTilt";

export default function About() {
  const experiences = [
    {
      role: "Next.js Developer",
      company: "HORNET DYNAMICS PVT. LTD.",
      companyUrl: "https://hornetdynamics.com/",
      period: "Dec 2025 - Present",
      highlights: [
        "Implemented end-to-end Excel export functionality across 10+ modules, enabling download of complete records, relational data, notes, addresses, and associated business information.",
        "Engineered advanced reporting capabilities with 15+ filter criteria, ensuring exported reports accurately matched user-selected search and filtering conditions.",
        "Streamlined data management workflows by introducing CSV and Excel bulk import capabilities across multiple modules, reducing manual data entry efforts by approximately 70%.",
        "Developed and maintained 5+ production applications, including a customer-facing platform, advertisement portals, and an administrative dashboard.",
      ],
    },
    {
      role: "React.js Developer",
      company: "EXTENSIVE HOST PVT. LTD.",
      period: "Sep 2023 - Oct 2024",
      highlights: [
        "Developed and maintained multiple complex React.js and Next.js web applications with modern frontend architectures.",
        "Implemented secure and highly optimized state management solutions using Redux Toolkit.",
        "Designed and built modular, responsive UI systems with focus on code reuse and performance.",
        "Integrated RESTful APIs and GraphQL endpoints for real-time and dynamic data delivery.",
      ],
    },
    {
      role: "ReactJS Developer Intern",
      company: "NEERJA SOFTWARES",
      companyUrl: "https://www.neerjasoftwares.com/",
      period: "Feb 2023 - Jul 2023",
      highlights: [
        "Assisted in developing and wireframing user interface components using React.js.",
        "Created beautiful, mobile-first layouts with Material UI and Tailwind CSS.",
        "Integrated client-side forms and handled user input validation using Formik.",
        "Collaborated with senior engineers and product managers using Git / GitHub workflows.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "JECRC UNIVERSITY",
      period: "Jul 2021 - Apr 2023",
      highlights: [
        "Acquired deep theoretical and practical understanding of Advanced Web Technologies, Database Management Systems, and Software Engineering methodologies.",
        "Focused on full-stack application design, responsive frontend architecture, and performance optimization techniques.",
      ],
    },
  ];

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "20+", label: "Tech Mastered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  // We filter the main skills to display a clean showcase
  const primarySkillNames = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "GraphQL",
    "PostgreSQL",
    "Hono",
    "Docker",
    "Git",
    "GitHub",
  ];

  const featuredSkills = skills.filter((skill) =>
    primarySkillNames.includes(skill.name)
  );

  // Biography card tilt
  const bioTilt = use3DTilt(4, 1.01);
  // CTA card tilt
  const ctaTilt = use3DTilt(4, 1.01);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Page Title & Intro */}
        <div className="text-center mb-16">
          <span className="font-label text-xs text-primary uppercase tracking-[0.2em] block mb-3">
            👨‍💻 MY JOURNEY
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            About <span className="gradient-text">Nikhil Bhagoria</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            I am a passionate software engineer specializing in frontend architecture, MERN stack, and high-performance interactive interfaces.
          </p>
        </div>

        {/* Biography & Quick Info Row */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Left Column: Info Card */}
          <div
            {...bioTilt}
            className="lg:col-span-4 bg-[#121420] rounded-[1.75rem] p-8 border border-[#1f2438]/50 hover:border-[#00d1ff]/40 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.06)]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 blur-xl rounded-full" />

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#00d1ff] to-[#7000ff] p-1 mb-6 shadow-[0_0_30px_rgba(0,209,255,0.25)]">
                <div className="w-full h-full bg-[#14161a] rounded-full flex items-center justify-center font-headline text-2xl font-bold text-[#00d1ff]">
                  NB
                </div>
              </div>

              <h2 className="text-xl font-bold text-white">Nikhil Bhagoria</h2>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-1">
                React & MERN Developer
              </p>

              <div className="w-full border-t border-[#1f2438]/60 my-6" />

              <div className="space-y-4 w-full text-left">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#bbc9cf]">📍 LOCATION</span>
                  <span className="text-white font-medium">India</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#bbc9cf]">📧 EMAIL</span>
                  <a
                    href="mailto:nikhilkumar2450@gmail.com"
                    className="text-[#00d1ff] hover:underline font-medium"
                    title="Send email to Nikhil"
                  >
                    nikhilkumar2450@gmail
                  </a>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#bbc9cf]">💼 ROLE</span>
                  <span className="text-white font-medium">Remote Ready</span>
                </div>
              </div>

              <div className="w-full border-t border-[#1f2438]/60 my-6" />

              <div className="flex gap-4">
                <a
                  href="https://github.com/NikhilBhagoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#1b2030]/60 flex items-center justify-center text-white hover:text-[#00d1ff] transition-colors border border-[#2e3752]/30"
                  title="Nikhil's GitHub Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhilbhagoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#1b2030]/60 flex items-center justify-center text-white hover:text-[#00d1ff] transition-colors border border-[#2e3752]/30"
                  title="Nikhil's LinkedIn Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Statistics */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-headline font-extrabold text-white">
                My Story
              </h2>
              <p className="text-[#bbc9cf] text-base leading-relaxed">
                I am a passionate Next.js and MERN Stack Developer with hands-on experience in building modern, efficient, scalable, and user-friendly web applications. From engineering advanced reporting capabilities and bulk data import/export systems to crafting smooth interactive interfaces, my journey is dedicated to delivering high-quality web solutions that prioritize performance and user experience.
              </p>
              <p className="text-[#bbc9cf] text-base leading-relaxed">
                Throughout my career, I've developed a strong foundation in front-end development, with expertise in React.js and its ecosystem. I specialize in building responsive user interfaces, implementing state management solutions with Redux Toolkit, and creating seamless user experiences.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} />
              ))}
            </div>
          </div>

        </div>

        {/* Experience / Timeline Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] block mb-3">
              💼 TIMELINE
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
              Work Experience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative border-l border-[#1f2438]/50 pl-8 ml-4 md:ml-auto space-y-12">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </div>

        {/* Education Timeline Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] block mb-3">
              🎓 ACADEMICS
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
              Education
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative border-l border-[#1f2438]/50 pl-8 ml-4 md:ml-auto space-y-12">
            {education.map((edu, idx) => (
              <EducationCard key={idx} edu={edu} />
            ))}
          </div>
        </div>

        {/* Highlighted Tech Stack Badges */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] block mb-3">
              🛠️ TECH STACK
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
              Primary Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {featuredSkills.map((skill) => (
              <TechBadgeCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>

        {/* CTA Footer Card */}
        <div
          {...ctaTilt}
          className="relative bg-[#121420] rounded-[1.75rem] p-12 overflow-hidden border border-[#1f2438]/50 hover:border-[#00d1ff]/40 text-center max-w-3xl mx-auto shadow-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.06)]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-2xl rounded-full" />
          <div className="relative z-10 space-y-6">
            <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-white">
              Interested in collaborating?
            </h3>
            <p className="text-[#bbc9cf] text-sm max-w-lg mx-auto">
              I am available for remote opportunities and high-impact development projects. Let's start a conversation.
            </p>
            <div className="flex justify-center pt-2">
              <Button href="/contact" variant="gradient" size="md">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-component for Quick Stats Cards
function StatCard({ stat }) {
  const tilt = use3DTilt(5, 1.03);
  return (
    <div
      {...tilt}
      className="bg-[#121420] rounded-2xl p-6 border border-[#1f2438]/50 hover:border-[#00d1ff]/40 text-center transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,209,255,0.04)]"
    >
      <div className="text-3xl font-extrabold text-[#00d1ff] font-headline mb-1">
        {stat.value}
      </div>
      <div className="text-xs text-[#bbc9cf] font-medium">
        {stat.label}
      </div>
    </div>
  );
}

// Sub-component for Work Experience Card
function ExperienceCard({ exp }) {
  const tilt = use3DTilt(4, 1.01);
  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#111318] border-2 border-primary flex items-center justify-center group-hover:border-[#00d1ff] transition-colors">
        <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:bg-[#00d1ff] transition-colors" />
      </div>

      {/* Timeline Box */}
      <div
        {...tilt}
        className="bg-[#121420] rounded-[1.75rem] p-8 border border-[#1f2438]/50 hover:border-[#00d1ff]/40 transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(0,209,255,0.05)]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white font-headline group-hover:text-[#00d1ff] transition-colors">
              {exp.role}
            </h3>
            <p className="text-primary text-sm font-semibold mt-0.5">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#00d1ff] transition-colors inline-flex items-center gap-1.5"
                >
                  {exp.company}
                  <svg className="w-3.5 h-3.5 inline-block opacity-75 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                exp.company
              )}
            </p>
          </div>
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#1b2030]/60 text-on-surface-variant border border-[#2e3752]/30">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-3 list-disc pl-5 text-[#bbc9cf] text-sm leading-relaxed">
          {exp.highlights.map((highlight, hIdx) => (
            <li key={hIdx}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Sub-component for Education Card
function EducationCard({ edu }) {
  const tilt = use3DTilt(4, 1.01);
  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#111318] border-2 border-primary flex items-center justify-center group-hover:border-[#00d1ff] transition-colors">
        <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:bg-[#00d1ff] transition-colors" />
      </div>

      {/* Timeline Box */}
      <div
        {...tilt}
        className="bg-[#121420] rounded-[1.75rem] p-8 border border-[#1f2438]/50 hover:border-[#00d1ff]/40 transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(0,209,255,0.05)]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white font-headline">
              {edu.degree}
            </h3>
            <p className="text-primary text-sm font-semibold mt-0.5">
              {edu.institution}
            </p>
          </div>
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#1b2030]/60 text-on-surface-variant border border-[#2e3752]/30">
            {edu.period}
          </span>
        </div>

        <ul className="space-y-3 list-disc pl-5 text-[#bbc9cf] text-sm leading-relaxed">
          {edu.highlights.map((highlight, hIdx) => (
            <li key={hIdx}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Sub-component for Tech Badge Cards
function TechBadgeCard({ skill }) {
  const tilt = use3DTilt(6, 1.05);
  return (
    <div
      {...tilt}
      className="bg-[#121420] p-6 rounded-[1.5rem] flex flex-col items-center justify-center gap-3 hover:border-[#00d1ff]/40 transition-all duration-300 group border border-[#1f2438]/50 hover:shadow-[0_4px_20px_rgba(0,209,255,0.04)]"
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

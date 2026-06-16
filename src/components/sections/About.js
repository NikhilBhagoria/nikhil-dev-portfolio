"use client";

import Button from "@/components/ui/Button";
import { skills } from "@/data/skills";

export default function About() {
  const experiences = [
    {
      role: "React Developer",
      company: "EXTENSIVE HOST PVT. LTD",
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
      company: "NEERJA SOFTWARES PVT. LTD",
      period: "Feb 2023 - Jul 2023",
      highlights: [
        "Assisted in developing and wireframing user interface components using React.js.",
        "Created beautiful, mobile-first layouts with Material UI and Tailwind CSS.",
        "Integrated client-side forms and handled user input validation using Formik.",
        "Collaborated with senior engineers and product managers using Git / GitHub workflows.",
      ],
    },
  ];

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "20+", label: "Tech Mastered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  // We filter the main skills to display a clean showcase
  const primarySkillNames = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Git",
    "GitHub",
  ];

  const featuredSkills = skills.filter((skill) =>
    primarySkillNames.includes(skill.name)
  );

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
          <div className="lg:col-span-4 glass-card rounded-[2rem] p-8 border border-outline-variant/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 blur-xl rounded-full" />
            
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#00d1ff] to-[#7000ff] p-1 mb-6 shadow-[0_0_30px_rgba(0,209,255,0.25)]">
                <div className="w-full h-full bg-[#14161a] rounded-full flex items-center justify-center font-headline text-2xl font-bold text-[#00d1ff]">
                  NB
                </div>
              </div>

              <h2 className="text-xl font-bold text-on-surface">Nikhil Bhagoria</h2>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-1">
                React & MERN Developer
              </p>
              
              <div className="w-full border-t border-outline-variant/20 my-6" />

              <div className="space-y-4 w-full text-left">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">📍 LOCATION</span>
                  <span className="text-on-surface font-medium">India</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">📧 EMAIL</span>
                  <a 
                    href="mailto:nikhilkumar2450@gmail.com" 
                    className="text-primary hover:underline font-medium"
                    title="Send email to Nikhil"
                  >
                    nikhilkumar2450@gmail
                  </a>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">💼 ROLE</span>
                  <span className="text-on-surface font-medium">Remote Ready</span>
                </div>
              </div>

              <div className="w-full border-t border-outline-variant/20 my-6" />

              <div className="flex gap-4">
                <a 
                  href="https://github.com/NikhilBhagoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-[#00d1ff] transition-colors border border-outline-variant/20"
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
                  className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-[#00d1ff] transition-colors border border-outline-variant/20"
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
              <h2 className="text-3xl font-headline font-extrabold text-on-surface">
                My Story
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed">
                I am a passionate ReactJS Developer with hands-on experience in building modern, efficient, scalable, and user-friendly web applications. My journey in web development has been dedicated to delivering high-quality front-end solutions that prioritize performance and user experience.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Throughout my career, I've developed a strong foundation in front-end development, with expertise in React.js and its ecosystem. I specialize in building responsive user interfaces, implementing state management solutions with Redux Toolkit, and creating seamless user experiences.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="glass-card rounded-2xl p-6 border border-outline-variant/15 text-center"
                >
                  <div className="text-3xl font-extrabold text-[#00d1ff] font-headline mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-on-surface-variant font-medium">
                    {stat.label}
                  </div>
                </div>
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
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
              Work Experience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative border-l border-outline-variant/30 pl-8 ml-4 md:ml-auto space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#111318] border-2 border-primary flex items-center justify-center group-hover:border-[#00d1ff] transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:bg-[#00d1ff] transition-colors" />
                </div>

                {/* Timeline Box */}
                <div className="glass-card rounded-[2rem] p-8 border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-on-surface font-headline">
                        {exp.role}
                      </h3>
                      <p className="text-primary text-sm font-semibold mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-surface-container-highest text-on-surface-variant border border-outline-variant/20">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 list-disc pl-5 text-on-surface-variant text-sm leading-relaxed">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Highlighted Tech Stack Badges */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] block mb-3">
              🛠️ TECH STACK
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
              Primary Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredSkills.map((skill) => (
              <div
                key={skill.id}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-surface-variant/20 hover:border-primary/30 transition-all duration-300 group border border-outline-variant/25"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner border border-outline-variant/10">
                  {skill.svg}
                </div>
                <span className="font-headline font-semibold text-sm text-on-surface text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer Card */}
        <div className="relative glass-card rounded-[2rem] p-12 overflow-hidden border border-primary/10 text-center max-w-3xl mx-auto shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-2xl rounded-full" />
          <div className="relative z-10 space-y-6">
            <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-on-surface">
              Interested in collaborating?
            </h3>
            <p className="text-on-surface-variant text-sm max-w-lg mx-auto">
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

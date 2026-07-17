"use client";

import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";
import { use3DTilt } from "@/hooks/use3DTilt";

/**
 * Enterprise Production-level Projects section.
 */
export default function Projects() {
  const featuredProjects = projects.filter((project) => !project.isUpcoming);
  const upcomingProjects = projects.filter((project) => project.isUpcoming);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] block mb-2">
            Portfolio
          </span>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            A selection of high-performance applications built with scalability
            and user-centric design at the core.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Upcoming Projects Pipeline */}
        {upcomingProjects.length > 0 && (
          <>
            <div className="mt-28 pt-16 border-t border-outline-variant/20 text-center mb-16">
              <span className="font-label text-[10px] text-secondary uppercase tracking-[0.2em] block mb-2">
                In the Pipeline
              </span>
              <h3 className="font-headline text-3xl font-bold tracking-tight mb-4">
                Upcoming Ventures
              </h3>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm leading-relaxed">
                A sneak peek at the tools, services, and libraries currently under active development and planning stages.
              </p>
            </div>

            {/* Upcoming Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {upcomingProjects.map((project) => (
                <UpcomingProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* View All Projects Button */}
        <div className="mt-20 text-center">
          <Button
            href="/projects"
            variant="secondary"
            size="md"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            }
            iconPosition="end"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Featured Project Card with 3D Tilt
function FeaturedProjectCard({ project }) {
  const tilt = use3DTilt(6, 1.02);

  return (
    <div
      {...tilt}
      className="flex flex-col justify-between bg-[#121420] border border-[#1f2438]/50 hover:border-[#00d1ff]/40 rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.06)] group"
    >
      <div>
        {/* Project Image */}
        <div className="aspect-video relative overflow-hidden bg-[#0b0c13] rounded-t-[1.75rem]">
          <img
            alt={project.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-[1.75rem]"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121420] via-transparent to-transparent"></div>
        </div>

        {/* Project Info */}
        <div className="p-8 pb-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded bg-[#1b2030]/60 border border-[#2e3752]/30 text-[9px] font-label text-[#00d1ff] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title and Description */}
          <h3 className="font-headline text-xl font-bold mb-3 text-white group-hover:text-[#00d1ff] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#bbc9cf] text-sm mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-8 pb-8 flex gap-4">
        <Button
          href={project.liveUrl || "#"}
          variant="primary"
          size="sm"
          className="flex-1"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
              <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L16.5 6.5c.75-.75.75-2 0-2.75s-2-.75-2.75 0z"></path>
              <path d="m12 8 4 4"></path>
              <path d="m9 11 4 4"></path>
            </svg>
          }
          iconPosition="start"
        >
          Live Demo
        </Button>

        <Button
          href={project.githubUrl || "#"}
          variant="secondary"
          size="sm"
          className="flex-1"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          }
          iconPosition="start"
        >
          GitHub
        </Button>
      </div>
    </div>
  );
}

// Sub-component for Upcoming Project Card with 3D Tilt
function UpcomingProjectCard({ project }) {
  const tilt = use3DTilt(6, 1.02);

  return (
    <div
      {...tilt}
      className="flex flex-col justify-between bg-[#121420] border border-[#1f2438]/50 hover:border-secondary/40 rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(112,0,255,0.06)] group"
    >
      <div>
        {/* Project Image - Slightly Blurred */}
        <div className="aspect-video relative overflow-hidden bg-[#0b0c13] rounded-t-[1.75rem]">
          <img
            alt={project.imageAlt}
            className="w-full h-full object-cover blur-[1px] opacity-80 group-hover:scale-103 transition-transform duration-500 rounded-t-[1.75rem]"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121420] via-background/40 to-transparent"></div>
          
          {/* Pulsating Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-[#1b2030]/90 text-secondary rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-secondary/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
            </span>
            {project.status}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-8 pb-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded bg-[#1b2030]/60 border border-[#2e3752]/30 text-[9px] font-label text-[#bbc9cf] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title and Description */}
          <h4 className="font-headline text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors">
            {project.title}
          </h4>
          <p className="text-[#bbc9cf] text-sm mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Progress Bar & Footer */}
      <div className="px-8 pb-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-[#bbc9cf]">Development Progress</span>
            <span className="text-xs font-bold text-secondary">{project.progress}%</span>
          </div>
          <div className="w-full bg-[#0b0c13] rounded-full h-2 overflow-hidden border border-[#1f2438]/40">
            <div
              className="bg-gradient-to-r from-secondary to-[#7000ff] h-full rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            href="#"
            variant="secondary"
            size="sm"
            disabled={true}
            className="flex-1 !cursor-not-allowed opacity-40 hover:bg-transparent"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            }
            iconPosition="start"
          >
            Demo Locked
          </Button>

          <Button
            href="#"
            variant="secondary"
            size="sm"
            disabled={true}
            className="flex-1 !cursor-not-allowed opacity-40 hover:bg-transparent"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            }
            iconPosition="start"
          >
            Code Locked
          </Button>
        </div>
      </div>
    </div>
  );
}

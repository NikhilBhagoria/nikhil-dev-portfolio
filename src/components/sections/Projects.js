"use client";

import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

/**
 * Enterprise Production-level Projects section.
 */
export default function Projects() {
  return (
    <section className="py-24 bg-surface">
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and Description */}
                <h3 className="font-headline text-xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
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
            </div>
          ))}
        </div>

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

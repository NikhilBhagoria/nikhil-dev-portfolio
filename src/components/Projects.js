import Link from "next/link";
import { projects } from "@/data/projects";

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
                  <button className="flex-1 bg-primary-container text-on-primary-container py-2.5 rounded-lg text-xs font-bold font-headline flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                    <span className="material-symbols-outlined text-sm">
                      rocket_launch
                    </span>
                    Live Demo
                  </button>
                  <button className="flex-1 glass-card text-on-surface py-2.5 rounded-lg text-xs font-bold font-headline flex items-center justify-center gap-2 hover:bg-surface-variant/30 transition-all">
                    <span className="material-symbols-outlined text-sm">
                      code
                    </span>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-20 text-center">
          <Link href="/projects">
            <button className="px-10 py-4 glass-card text-on-surface rounded-xl font-headline font-bold text-sm hover:bg-surface-variant/40 transition-all border border-outline-variant/20 inline-flex items-center gap-3">
              View All Projects
              <span className="material-symbols-outlined">grid_view</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

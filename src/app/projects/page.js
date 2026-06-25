"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";
import { use3DTilt } from "@/hooks/use3DTilt";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on search and selected tag
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = !selectedTag || project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Compact */}
      <section className="py-10 px-6 bg-gradient-to-b from-background via-surface to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] block mb-2">
              Portfolio
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-on-surface-variant text-base max-w-3xl mx-auto leading-relaxed">
              Explore my complete collection of high-performance web applications.
            </p>
          </div>

          {/* Stats Cards - Compact */}
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-xl border border-outline-variant/20 backdrop-blur-xl">
              <div className="text-primary font-headline text-3xl font-bold">
                {projects.length}
              </div>
              <p className="text-on-surface-variant text-xs mt-1">Projects</p>
            </div>
            <div className="glass-card p-4 rounded-xl border border-outline-variant/20 backdrop-blur-xl">
              <div className="text-secondary font-headline text-3xl font-bold">
                {allTags.length}
              </div>
              <p className="text-on-surface-variant text-xs mt-1">Technologies</p>
            </div>
            <div className="glass-card p-4 rounded-xl border border-outline-variant/20 backdrop-blur-xl">
              <div className="text-tertiary font-headline text-3xl font-bold">
                100%
              </div>
              <p className="text-on-surface-variant text-xs mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section - Compact Sticky */}
      <section className="py-6 px-6 bg-surface sticky top-0 z-40 border-b border-outline-variant/10">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                search
              </span>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-lg text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm text-sm"
              />
            </div>
          </div>

          {/* Tag Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Tag Filters - Scrollable Container with Fade Masks */}
            <div className="relative flex-1 max-w-full overflow-hidden">
              {/* Fade masks for horizontal scrolling indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10"></div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth px-8">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3.5 py-2 rounded-lg font-label text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedTag === null
                      ? "bg-primary text-background shadow-[0_2px_10px_rgba(164,230,255,0.2)] scale-[1.02]"
                      : "glass-card text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  }`}
                >
                  All
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3.5 py-2 rounded-lg font-label text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                      selectedTag === tag
                        ? "bg-secondary text-background shadow-[0_2px_10px_rgba(209,188,255,0.2)] scale-[1.02]"
                        : "glass-card text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-surface-container-low rounded-lg p-1 border border-outline-variant/20">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === "grid"
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-lg">grid_view</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === "list"
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-lg">view_list</span>
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-on-surface-variant text-xs mt-2">
            <span className="text-primary font-bold">{filteredProjects.length}</span> of{" "}
            <span className="text-on-surface font-bold">{projects.length}</span> projects
          </p>
        </div>
      </section>

      {/* Projects Grid / List */}
      <section className="py-10 px-6 bg-background pt-8">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProjects.map((project, index) => (
                    <ProjectListItem
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-surface-container-high mb-4">
                <span className="material-symbols-outlined text-on-surface-variant text-3xl">
                  search_off
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                No projects found
              </h3>
              <p className="text-on-surface-variant text-sm max-w-md mx-auto mb-4">
                Try adjusting your search query or filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
                className="px-5 py-2 bg-primary text-background rounded-lg font-headline font-bold text-xs hover:brightness-110 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Compact */}
      {filteredProjects.length > 0 && (
        <section className="py-12 px-6 bg-gradient-to-b from-background to-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold mb-4 text-on-surface">
              Interested in working together?
            </h2>
            <p className="text-on-surface-variant text-base mb-6 max-w-2xl mx-auto">
              I'm open to discussing new projects and opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Button
                href="/contact"
                variant="gradient"
                size="md"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                }
                iconPosition="start"
              >
                Get in Touch
              </Button>

              <Button
                href="/resume.pdf"
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
                Resume
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

// Project Card Component
function ProjectCard({ project, index }) {
  const isUpcoming = project.isUpcoming;
  const tilt = use3DTilt(5, 1.02);

  return (
    <div
      {...tilt}
      className={`group bg-[#121420] border border-[#1f2438]/50 hover:border-[#00d1ff]/40 rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.06)] animate-in fade-in slide-in-from-bottom-4 ${
        isUpcoming ? "flex flex-col justify-between" : ""
      }`}
      style={{
        ...tilt.style,
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <div>
        {/* Project Image */}
        <div className="aspect-video relative overflow-hidden bg-[#0b0c13] rounded-t-[1.75rem]">
          <img
            alt={project.imageAlt}
            className={`w-full h-full object-cover transition-transform duration-500 rounded-t-[1.75rem] ${
              isUpcoming ? "blur-[1px] opacity-80 group-hover:scale-103" : "group-hover:scale-105"
            }`}
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121420] via-transparent to-transparent"></div>

          {/* Tag Badge */}
          {isUpcoming ? (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-[#1b2030]/90 text-secondary rounded-md text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm border border-secondary/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
              </span>
              {project.status}
            </div>
          ) : (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-tertiary/90 text-on-tertiary-fixed rounded-md text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
              Featured
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6 pb-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
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
          <h3 className={`font-headline text-lg font-bold mb-2 text-white transition-colors ${
            isUpcoming ? "group-hover:text-secondary" : "group-hover:text-[#00d1ff]"
          }`}>
            {project.title}
          </h3>
          <p className="text-on-surface-variant/80 text-xs mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Progress & Buttons Container */}
      <div className="p-6 pt-0">
        {isUpcoming && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-semibold text-on-surface-variant/80">Progress</span>
              <span className="text-[10px] font-bold text-secondary">{project.progress}%</span>
            </div>
            <div className="w-full bg-[#0b0c13] rounded-full h-1.5 overflow-hidden border border-[#1f2438]/40">
              <div
                className="bg-gradient-to-r from-secondary to-[#7000ff] h-full rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isUpcoming ? (
            <>
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
                Locked
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
                Locked
              </Button>
            </>
          ) : (
            <>
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
                Demo
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Project List Item Component
function ProjectListItem({ project, index }) {
  const isUpcoming = project.isUpcoming;
  const tilt = use3DTilt(3, 1.01);

  return (
    <div
      {...tilt}
      className={`bg-[#121420] border border-[#1f2438]/50 hover:border-[#00d1ff]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.04)] p-4 group animate-in fade-in slide-in-from-bottom-4`}
      style={{
        ...tilt.style,
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Image */}
        <div className="md:col-span-1 aspect-square rounded-xl overflow-hidden bg-[#0b0c13] relative">
          <img
            alt={project.imageAlt}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isUpcoming ? "blur-[1px] opacity-80 group-hover:scale-103" : "group-hover:scale-105"
            }`}
            src={project.image}
          />
          {isUpcoming && (
            <div className="absolute inset-0 bg-[#121420]/50 flex items-center justify-center">
              <span className="text-[10px] font-bold text-secondary bg-[#1b2030]/90 px-2 py-0.5 rounded border border-secondary/20 uppercase tracking-wider">
                Pipeline
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <h3 className={`font-headline text-base font-bold mb-1 text-white transition-colors flex items-center gap-2 ${
            isUpcoming ? "group-hover:text-secondary" : "group-hover:text-[#00d1ff]"
          }`}>
            {project.title}
            {isUpcoming && (
              <span className="text-[9px] font-normal text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">
                {project.status} ({project.progress}%)
              </span>
            )}
          </h3>
          <p className="text-on-surface-variant/80 text-xs mb-3 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-[#1b2030]/60 border border-[#2e3752]/30 text-[9px] font-label text-[#00d1ff] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="md:col-span-1 flex flex-col gap-2">
          {isUpcoming ? (
            <>
              <Button
                href="#"
                variant="secondary"
                size="sm"
                disabled={true}
                className="w-full !cursor-not-allowed opacity-40 hover:bg-transparent"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                }
                iconPosition="start"
              >
                Locked
              </Button>
              <Button
                href="#"
                variant="secondary"
                size="sm"
                disabled={true}
                className="w-full !cursor-not-allowed opacity-40 hover:bg-transparent"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                }
                iconPosition="start"
              >
                Locked
              </Button>
            </>
          ) : (
            <>
              <Button
                href={project.liveUrl || "#"}
                variant="primary"
                size="sm"
                className="w-full"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L16.5 6.5c.75-.75.75-2 0-2.75s-2-.75-2.75 0z"></path>
                    <path d="m12 8 4 4"></path>
                    <path d="m9 11 4 4"></path>
                  </svg>
                }
                iconPosition="start"
              >
                Demo
              </Button>
              <Button
                href={project.githubUrl || "#"}
                variant="secondary"
                size="sm"
                className="w-full"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                }
                iconPosition="start"
              >
                Code
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

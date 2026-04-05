"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";

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
            {/* Tag Filters - Scrollable */}
            <div className="flex gap-2 flex-1 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 rounded-lg font-label text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedTag === null
                    ? "bg-primary text-on-primary"
                    : "glass-card text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg font-label text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedTag === tag
                      ? "bg-secondary text-on-secondary"
                      : "glass-card text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {tag}
                </button>
              ))}
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
                className="px-5 py-2 bg-primary text-on-primary rounded-lg font-headline font-bold text-xs hover:brightness-110 transition-all"
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-headline font-bold text-xs hover:brightness-110 transition-all inline-flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                Get in Touch
              </button>
              <button className="px-6 py-2.5 glass-card text-on-surface rounded-lg font-headline font-bold text-xs hover:bg-surface-variant/40 transition-all border border-outline-variant/20 inline-flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Resume
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

// Project Card Component
function ProjectCard({ project, index }) {
  return (
    <div
      className="group glass-card rounded-lg overflow-hidden border border-outline-variant/20 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-4"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Project Image */}
      <div className="aspect-video relative overflow-hidden bg-surface-container-high">
        <img
          alt={project.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

        {/* Tag Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-tertiary/90 text-on-tertiary-fixed rounded-md text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
          Featured
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-md bg-surface-container-highest text-[9px] font-label text-on-surface-variant uppercase tracking-wider border border-outline-variant/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title and Description */}
        <h3 className="font-headline text-lg font-bold mb-2 text-on-surface group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-xs mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-primary-container text-on-primary-container py-2 rounded-md text-xs font-bold font-headline flex items-center justify-center gap-1.5 hover:brightness-110 transition-all border border-primary/30">
            <span className="material-symbols-outlined text-sm">rocket_launch</span>
            Demo
          </button>
          <button className="flex-1 glass-card text-on-surface py-2 rounded-md text-xs font-bold font-headline flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-all border border-outline-variant/30">
            <span className="material-symbols-outlined text-sm">code</span>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

// Project List Item Component
function ProjectListItem({ project, index }) {
  return (
    <div
      className="glass-card rounded-lg overflow-hidden border border-outline-variant/20 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 p-4 group animate-in fade-in slide-in-from-bottom-4"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Image */}
        <div className="md:col-span-1 aspect-square rounded-lg overflow-hidden bg-surface-container-high">
          <img
            alt={project.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={project.image}
          />
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <h3 className="font-headline text-base font-bold mb-1 text-on-surface group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-on-surface-variant text-xs mb-3 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-surface-container-highest text-[9px] font-label text-on-surface-variant uppercase tracking-wider border border-outline-variant/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="md:col-span-1 flex flex-col gap-2">
          <button className="w-full bg-primary-container text-on-primary-container py-2 rounded-md text-xs font-bold font-headline flex items-center justify-center gap-1 hover:brightness-110 transition-all border border-primary/30">
            <span className="material-symbols-outlined text-sm">rocket_launch</span>
            Demo
          </button>
          <button className="w-full glass-card text-on-surface py-2 rounded-md text-xs font-bold font-headline flex items-center justify-center gap-1 hover:bg-surface-container-high transition-all border border-outline-variant/30">
            <span className="material-symbols-outlined text-sm">code</span>
            Code
          </button>
        </div>
      </div>
    </div>
  );
}

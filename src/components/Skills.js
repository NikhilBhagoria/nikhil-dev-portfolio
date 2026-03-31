import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] block mb-2">
              Technical Arsenal
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight">
              Core Expertise
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-sm">
            Specialized in the modern web ecosystem, focusing on performance,
            maintainability, and elegant architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-surface-variant/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  {skill.svg}
                </span>
              </div>
              <span className="font-headline font-semibold text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

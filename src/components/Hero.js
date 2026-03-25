"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-8 pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-7 z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest text-primary font-label text-[10px] uppercase tracking-widest mb-6 border border-outline-variant/10">
            Available for new opportunities
          </span>

          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
            Nikhil Bhagoria
          </h1>

          <p className="font-headline text-2xl md:text-3xl text-on-surface-variant font-medium mb-4">
            React Developer |{" "}
            <span className="gradient-text">
              MERN Stack Developer
            </span>
          </p>

          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
            Crafting high-performance, scalable web applications with 1.8+ years
            of engineering excellence. Bridging the gap between complex logic and
            seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-lg font-headline font-bold hero-gradient text-white shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-2">
              View Projects
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>

            <button className="px-8 py-4 rounded-lg font-headline font-bold glass-card text-on-surface hover:bg-surface-variant/40 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">download</span>
              Download Resume
            </button>

            <button className="px-6 py-4 text-primary font-headline font-bold hover:underline transition-all">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:col-span-5 relative">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>

          {/* Profile Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden glass-card p-4">
            <img
              alt="Nikhil Bhagoria Portrait"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxn2R1tQx4m6JMK8JHj5RFJq4X0FGTU8MWqW5jgTkKta3EFfw0BW2xJIfWb4Pl1m426NGR4vYFczCmdn4j9OYbxVpmfSBfsux_3dmDqCsqo9ZVa3WdQTMQAQ3btkJ6vv67ma4nlhLbHBaQs2cd85oCUKjOV5n1WW_yQbdUexpI_TobJuCEttPvIhVYgZgAflEqEYPBtscXpnZUcPBVrMERndvr88p1JT77RoZmURAViv8oKYwCv4M6I8fIerZ_RTZzpwQqrZlU-d9k"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 glass-card rounded-2xl flex items-center justify-center">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
          </div>

          <div className="absolute -bottom-6 -left-6 px-6 py-3 glass-card rounded-xl">
            <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
              Exp
            </p>
            <p className="font-headline font-bold text-xl text-primary">
              1.8+ Years
            </p>
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

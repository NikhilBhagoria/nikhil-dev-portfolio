import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative glass-card rounded-[3rem] p-12 md:p-24 overflow-hidden border border-primary/10">
          {/* Background Glow Elements */}
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-secondary-container/20 blur-[150px] rounded-full"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-primary-container/10 blur-[150px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
              Ready to build something{" "}
              <span className="gradient-text">
                extraordinary?
              </span>
            </h2>

            <p className="text-on-surface-variant text-lg mb-12">
              I'm currently looking for new opportunities and collaborations.
              Whether you have a question or just want to say hi, my inbox is
              always open.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact">
                <button className="px-10 py-5 rounded-2xl font-headline font-bold hero-gradient text-white text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                  Let's Talk Business
                </button>
              </Link>

              <button className="px-10 py-5 rounded-2xl font-headline font-bold glass-card text-on-surface text-lg hover:bg-surface-variant/40 transition-all border border-outline-variant/30">
                View My Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

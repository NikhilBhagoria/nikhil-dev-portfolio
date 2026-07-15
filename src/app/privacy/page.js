import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Nikhil Bhagoria's portfolio. Transparent information handling practices.",
  alternates: {
    canonical: "https://nikhilbhagoria.netlify.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Nikhil Bhagoria",
    description: "Privacy policy for Nikhil Bhagoria's portfolio. Transparent information handling practices.",
    url: "https://nikhilbhagoria.netlify.app/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Nikhil Bhagoria",
    description: "Privacy policy for Nikhil Bhagoria's portfolio. Transparent information handling practices.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-[10%] left-1/4 w-72 h-72 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-1/4 w-80 h-80 bg-[#7000ff]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-outline-variant/15 pb-8">
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center gap-2 text-xs md:text-sm text-on-surface-variant hover:text-[#00d1ff] transition-colors duration-200 mb-6 font-medium group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
          
          <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] block mb-2">
            Legal & Trust
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
            Privacy Policy
          </h1>
          <p className="text-on-surface-variant text-xs md:text-sm mt-3">
            Last Updated: June 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="glass-card rounded-2xl p-8 md:p-10 space-y-8 text-on-surface-variant text-sm md:text-base leading-relaxed">
          
          {/* Section 1: Intro */}
          <section className="space-y-3">
            <h2 className="font-headline text-lg md:text-xl font-bold text-on-surface">
              1. Introduction
            </h2>
            <p>
              Welcome to the personal portfolio of Nikhil Bhagoria. I respect your privacy and am committed to protecting it. This Privacy Policy details the types of information we collect, how it is handled, and how your privacy is safeguarded.
            </p>
          </section>

          {/* Section 2: Collection */}
          <section className="space-y-3">
            <h2 className="font-headline text-lg md:text-xl font-bold text-on-surface">
              2. Information Collected
            </h2>
            <p>
              As this website is primarily a static portfolio showcasing developer projects and skills, user tracking and data collection is kept to a minimum:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-on-surface">Contact Inquiries:</strong> When you message me using the Contact form, you provide your name, email address, and message content. This is used solely to respond to your inquiry and is never shared with third parties.
              </li>
              <li>
                <strong className="text-on-surface">Server Logs:</strong> Our hosting providers (such as Netlify or Vercel) log standard network request information (such as IP addresses, user agents, and request timings) for security, debugging, and traffic metrics.
              </li>
            </ul>
          </section>

          {/* Section 3: Cookies */}
          <section className="space-y-3">
            <h2 className="font-headline text-lg md:text-xl font-bold text-on-surface">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              This website does not deploy advertising, marketing, or behavioral tracking cookies. If cookies or local storage objects are utilized, they are limited strictly to essential operational tasks (such as remembering visual theme configurations).
            </p>
          </section>

          {/* Section 4: Data Security */}
          <section className="space-y-3">
            <h2 className="font-headline text-lg md:text-xl font-bold text-on-surface">
              4. Data Security
            </h2>
            <p>
              I use industry-standard HTTPS encryption across the entire application to secure communication channels. While no communication medium over the internet is completely immune, precautions are actively taken to protect your sent messages.
            </p>
          </section>

          {/* Section 5: Third-Party Links */}
          <section className="space-y-3">
            <h2 className="font-headline text-lg md:text-xl font-bold text-on-surface">
              5. External Redirect Links
            </h2>
            <p>
              This portfolio links out to external platforms, including GitHub, LinkedIn, and Twitter. Once you click these links and leave my site, I am not responsible for the privacy practices or contents of those external entities.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="space-y-3">
            <h2 className="font-headline text-lg md:text-xl font-bold text-on-surface">
              6. Contact Information
            </h2>
            <p>
              For any questions regarding this privacy statement, feel free to submit an inquiry through our{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold" prefetch={false}>
                Contact Page
              </Link>
              .
            </p>
          </section>

        </div>

        {/* Footer info */}
        <div className="mt-8 text-center text-xs text-on-surface/60">
          <p>© {new Date().getFullYear()} Nikhil Bhagoria. All rights reserved.</p>
        </div>

      </div>
    </main>
  );
}

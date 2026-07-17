"use client";

import Link from "next/link";

/**
 * Enterprise Production-level Footer layout component.
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-12 gap-6">
        
        {/* Left Section - Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-black text-on-surface font-headline uppercase tracking-tighter">
            Nikhil Bhagoria
          </div>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            © {new Date().getFullYear()} Nikhil Bhagoria. Crafted with code and soul.
          </p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-8">
          <Link
            href="https://github.com/NikhilBhagoria"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="font-label text-xs uppercase tracking-widest text-[#bbc9cf] hover:text-[#00d1ff] transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/nikhilbhagoria"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="font-label text-xs uppercase tracking-widest text-[#bbc9cf] hover:text-[#00d1ff] transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/NikhilBhagoria"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter Profile"
            className="font-label text-xs uppercase tracking-widest text-[#bbc9cf] hover:text-[#00d1ff] transition-colors duration-200"
          >
            Twitter
          </Link>
          <Link
            href="/privacy"
            title="Privacy Policy"
            prefetch={false}
            className="font-label text-xs uppercase tracking-widest text-[#bbc9cf] hover:text-[#00d1ff] transition-colors duration-200"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

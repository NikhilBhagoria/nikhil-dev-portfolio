"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/60 dark:bg-surface/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
          Nikhil Bhagoria
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="font-headline text-sm font-medium tracking-tight text-primary border-b-2 border-primary pb-1"
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-headline text-sm font-medium tracking-tight text-on-surface-variant hover:text-on-surface transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-headline text-sm font-medium tracking-tight text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="font-headline text-sm font-medium tracking-tight text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-headline font-bold text-sm scale-95 active:scale-90 transition-transform hover:backdrop-brightness-125">
          Hire Me
        </button>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-outline-variant/10 to-transparent h-[1px]"></div>
    </nav>
  );
}

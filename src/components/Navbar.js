"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar({
  logo = "My Portfolio",
  links = [],
  ctaText = "Hire Me",
  ctaLink = "/contact",
}) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
          {logo}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={`font-headline text-sm font-medium tracking-tight transition-colors ${
                  isActive
                    ? "text-[#00D1FF] border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        {ctaText && (
          <Link href={ctaLink}>
            <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-headline font-bold text-sm scale-95 active:scale-90 transition-transform hover:backdrop-brightness-125">
              {ctaText}
            </button>
          </Link>
        )}
      </div>

      <div className="bg-gradient-to-r from-transparent via-outline-variant/10 to-transparent h-[1px]" />
    </nav>
  );
}

export default function NavbarWrapper() {
  return (
    <Navbar
      logo="Nikhil Bhagoria"
      links={[
        { label: "Home", href: "/"},
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ]}
      ctaText="Hire Me"
      ctaLink="/contact"
    />
  );
}

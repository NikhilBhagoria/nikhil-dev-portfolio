"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

/**
 * Enterprise Production-level Navbar layout component.
 */
export function Navbar({
  logo = "My Portfolio",
  links = [],
  ctaText = "Hire Me",
  ctaLink = "/contact",
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">

        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline uppercase">
          {logo}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                title={link.label}
                prefetch={false}
                className={`flex items-center gap-2 font-headline text-sm font-medium tracking-tight transition-all duration-200 border-b-2 pb-1 ${
                  isActive
                    ? "text-primary-container border-primary-container border-b-2 rounded-b"
                    : "text-on-surface-variant border-transparent hover:text-primary-container hover:border-primary-container/50 hover:rounded-b hover:border-b-2"
                }`}
              >
                {link.logo}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (Desktop) */}
        {ctaText && (
          <div className="hidden md:block">
            <Button
              href={ctaLink}
              variant="primary"
              size="sm"
            >
              {ctaText}
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none cursor-pointer"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-b border-outline-variant/20 py-6 px-8 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  title={link.label}
                  prefetch={false}
                  className={`flex items-center gap-3 font-headline text-base font-semibold tracking-tight py-2 transition-all duration-200 ${
                    isActive
                      ? "text-primary-container"
                      : "text-on-surface-variant hover:text-primary-container"
                  }`}
                >
                  {link.logo}
                  {link.label}
                </Link>
              );
            })}
          </div>
          
          {ctaText && (
            <div className="pt-2 border-t border-outline-variant/10">
              <Button
                href={ctaLink}
                onClick={() => setIsMenuOpen(false)}
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      )}

      <div className="bg-gradient-to-r from-transparent via-outline-variant/10 to-transparent h-[1px]" />
    </nav>
  );
}

export default function NavbarWrapper() {
  return (
    <Navbar
      logo="Nikhil Bhagoria"
      links={[
        {
          label: "Home",
          href: "/",
          logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          )
        },
        {
          label: "Portfolio",
          href: "/projects",
          logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          )
        },
        {
          label: "Services",
          href: "/services",
          logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          )
        },
        {
          label: "About",
          href: "/about",
          logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          )
        },
        {
          label: "Contact",
          href: "/contact",
          logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
          )
        },
      ]}
      ctaText="Hire Me"
      ctaLink="/contact"
    />
  );
}

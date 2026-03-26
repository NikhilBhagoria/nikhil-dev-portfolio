import Link from "next/link";

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
            {/* current year */}
            © {new Date().getFullYear()} Nikhil Bhagoria. Crafted with code and soul.
          </p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-8">
          <Link
            href="#"
            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

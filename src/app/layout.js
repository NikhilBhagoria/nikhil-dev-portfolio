import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebVitals from "@/components/ui/WebVitals";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://nikhilbhagoria.netlify.app"),
  title: {
    default: "Nikhil Bhagoria | React Developer",
    template: "%s | Nikhil Bhagoria",
  },
  description: "React Developer & MERN Stack Developer. Crafting high-performance, scalable web applications.",
  keywords: [
    "Nikhil Bhagoria",
    "React Developer",
    "MERN Stack Developer",
    "Frontend Engineer",
    "Next.js Portfolio",
    "Software Engineer",
    "Web Developer"
  ],
  authors: [{ name: "Nikhil Bhagoria", url: "https://nikhilbhagoria.netlify.app" }],
  creator: "Nikhil Bhagoria",
  publisher: "Nikhil Bhagoria",
  alternates: {
    canonical: "https://nikhilbhagoria.netlify.app",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilbhagoria.netlify.app",
    title: "Nikhil Bhagoria | React Developer",
    description: "React Developer & MERN Stack Developer. Crafting high-performance, scalable web applications.",
    siteName: "Nikhil Bhagoria Portfolio",
    images: [
      {
        url: "/nova_ui_preview.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Bhagoria Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Bhagoria | React Developer",
    description: "React Developer & MERN Stack Developer. Crafting high-performance, scalable web applications.",
    images: ["/nova_ui_preview.png"],
    creator: "@NikhilBhagoria",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nikhil Bhagoria",
  url: "https://nikhilbhagoria.netlify.app",
  image: "https://nikhilbhagoria.netlify.app/nova_ui_preview.png",
  sameAs: [
    "https://x.com/NikhilBhagoria",
    "https://github.com/NikhilBhagoria",
    "https://linkedin.com/in/nikhilbhagoria"
  ],
  jobTitle: "React Developer & MERN Stack Developer",
  worksFor: {
    "@type": "Organization",
    "name": "Freelance"
  },
  description: "React Developer & MERN Stack Developer. Crafting high-performance, scalable web applications."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-on-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <WebVitals />
        <NavbarWrapper/>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

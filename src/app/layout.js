import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
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

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata = {
  metadataBase: new URL("https://nikhilbhagoria.netlify.app"),
  title: {
    default: "Nikhil Bhagoria | Next.js & React Developer",
    template: "%s | Nikhil Bhagoria",
  },
  description: "Frontend Developer with 2+ years of experience specializing in React.js and Next.js. Next.js Developer at Hornet Dynamics. Experienced in SSR, REST API integration, and scaling production web applications.",
  keywords: [
    "Nikhil Bhagoria",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "MERN Stack Developer",
    "ReactJS Developer",
    "React Developer Jaipur",
    "Next.js Portfolio",
    "Software Engineer Portfolio"
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
    title: "Nikhil Bhagoria | Next.js & React Developer",
    description: "Frontend Developer with 2+ years of experience specializing in React.js and Next.js. Next.js Developer at Hornet Dynamics.",
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
    title: "Nikhil Bhagoria | Next.js & React Developer",
    description: "Frontend Developer with 2+ years of experience specializing in React.js and Next.js. Next.js Developer at Hornet Dynamics.",
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
  email: "nikhilkumar2450@gmail.com",
  sameAs: [
    "https://github.com/NikhilBhagoria",
    "https://linkedin.com/in/nikhilbhagoria"
  ],
  jobTitle: "Next.js Developer & Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    "name": "Hornet Dynamics Pvt. Ltd.",
    "url": "https://hornetdynamics.com/"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    "name": "JECRC University"
  },
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "India"
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "GraphQL",
    "PostgreSQL",
    "Hono",
    "Docker",
    "Git",
    "GitHub"
  ],
  description: "Frontend Developer with 2+ years of experience building and deploying scalable web applications using React.js and Next.js. Experienced in SSR, REST API integration, payment gateway integration, and production deployments."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${plusJakartaSans.variable} ${inter.variable} ${jetbrains.variable}`}
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

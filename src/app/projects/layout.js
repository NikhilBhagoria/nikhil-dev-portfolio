export const metadata = {
  title: "Projects",
  description: "Browse the developer portfolio of Nikhil Bhagoria, featuring production-grade React, Next.js, and MERN stack applications.",
  alternates: {
    canonical: "https://nikhilbhagoria.netlify.app/projects",
  },
  openGraph: {
    title: "Projects | Nikhil Bhagoria",
    description: "Browse the developer portfolio of Nikhil Bhagoria, featuring production-grade React, Next.js, and MERN stack applications.",
    url: "https://nikhilbhagoria.netlify.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Nikhil Bhagoria",
    description: "Browse the developer portfolio of Nikhil Bhagoria, featuring production-grade React, Next.js, and MERN stack applications.",
  },
};

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}

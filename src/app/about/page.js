import About from "@/components/sections/About";

export const metadata = {
  title: "About Me",
  description: "Learn about Nikhil Bhagoria, a passionate ReactJS and MERN stack developer with 2+ years of experience building modern web solutions.",
  alternates: {
    canonical: "https://nikhilbhagoria.netlify.app/about",
  },
  openGraph: {
    title: "About | Nikhil Bhagoria",
    description: "Learn about Nikhil Bhagoria, a passionate ReactJS and MERN stack developer with 2+ years of experience building modern web solutions.",
    url: "https://nikhilbhagoria.netlify.app/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Nikhil Bhagoria",
    description: "Learn about Nikhil Bhagoria, a passionate ReactJS and MERN stack developer with 2+ years of experience building modern web solutions.",
  },
};

export default function AboutPage() {
  return (
    <>
      <main>
        <About />
      </main>
    </>
  );
}

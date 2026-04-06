import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <CTA />
      </main>
    </>
  );
}

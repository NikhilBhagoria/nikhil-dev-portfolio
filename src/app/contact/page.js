import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact",
  description: "Get in touch with me for new opportunities, collaborations, or web development inquiries.",
  alternates: {
    canonical: "https://nikhilbhagoria.netlify.app/contact",
  },
  openGraph: {
    title: "Contact | Nikhil Bhagoria",
    description: "Get in touch with me for new opportunities, collaborations, or web development inquiries.",
    url: "https://nikhilbhagoria.netlify.app/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Nikhil Bhagoria",
    description: "Get in touch with me for new opportunities, collaborations, or web development inquiries.",
  },
};

export default function ContactPage() {
  return (
    <>
      <main>
        <Contact />
      </main>
    </>
  );
}

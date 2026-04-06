import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper, { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Nikhil Bhagoria | React Developer",
  description: "React Developer & MERN Stack Developer. Crafting high-performance, scalable web applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-on-surface">
        <NavbarWrapper/>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

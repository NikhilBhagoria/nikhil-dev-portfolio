import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function EventLoopLayout({ children }) {
  return <div className={newsreader.variable}>{children}</div>;
}

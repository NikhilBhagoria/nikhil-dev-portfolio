import Link from "next/link";
import Image from "next/image";

export default function Brand({ name = "Nikhil Bhagoria" }) {
  return (
    <Link href="/" aria-label={name + " — Home"} className="inline-flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container">
      <Image src="/logo.svg" alt="" width={52} height={41} unoptimized className="h-[41px] w-[52px] shrink-0" />
      <span className="text-base tracking-tight text-[#F0E5D2] sm:text-lg" style={{ fontFamily: "Georgia, serif" }}>{name}</span>
    </Link>
  );
}

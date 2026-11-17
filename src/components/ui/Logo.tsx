import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Wordmark. Swap the SVG mark for a real logo file when available. */
/** `name` lets translated pages show the brand in their own script (e.g. テソープ・ラボ). */
export function Logo({ className, name = siteConfig.name }: { className?: string; name?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label={`${name} — ${siteConfig.name}`}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <rect width="32" height="32" rx="9" fill="#7055F7" />
        <path d="M8 21.5 13.5 15l4 3.5L24 10.5" fill="none" stroke="#B7F36B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="10.5" r="2.2" fill="#B7F36B" className="origin-center transition-transform duration-500 group-hover:scale-125" />
      </svg>
      <span className="font-display text-lg font-bold tracking-[0.04em] text-white">{name}</span>
    </Link>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Share2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; label: string };

/** Table of contents built from the article's H2s, highlighting the section in view. */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-labelledby="toc-heading" className="rounded-[var(--radius-card)] border border-line bg-ink-2 p-6">
      <p id="toc-heading" className="font-display text-xl font-semibold">Table of contents</p>
      <ol className="mt-4 space-y-1 border-l border-line">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              aria-current={active === it.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l-2 py-1.5 pl-4 text-[15px] leading-snug transition-colors",
                active === it.id ? "border-violet text-white" : "border-transparent text-violet-soft hover:text-white",
              )}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = window.location.href.split("#")[0];
    try {
      if (navigator.share) await navigator.share({ title, url });
      else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* user cancelled */
    }
  };
  return (
    <button type="button" onClick={share} className="inline-flex items-center gap-2 font-medium text-white/85 transition-colors hover:text-white">
      {copied ? <Check aria-hidden className="size-5 text-lime" /> : <Share2 aria-hidden className="size-5" />}
      {copied ? "Link copied" : "Share"}
    </button>
  );
}

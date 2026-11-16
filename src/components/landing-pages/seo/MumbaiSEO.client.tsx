"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, MapPin, TrendingUp, Star } from "lucide-react";
import { Illustrative } from "../shared";

const ease = [0.22, 1, 0.36, 1] as const;

/** Hero visual: a stacked SERP card with floating ranking chips. Illustrative only. */
export function SerpStack() {
  const reduce = useReducedMotion();
  const pop = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 20, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { delay: d, duration: 0.8, ease } });
  return (
    <div className="relative" role="img" aria-label="Illustration of a search results page with a Mumbai business climbing to the top position">
      <motion.div {...pop(0.3)} className="relative rotate-[-2deg] rounded-[28px] border border-line bg-ink-2 p-5 shadow-[0_40px_120px_-40px_rgba(112,85,247,0.6)] sm:p-6">
        <div className="flex items-center gap-3 rounded-full border border-line bg-white/[0.04] px-4 py-3">
          <Search aria-hidden className="size-4 text-muted" />
          <span className="truncate text-sm text-white/85">2 bhk ready possession powai</span>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            { t: "Your project — Powai", u: "yourbrand.in › powai", you: true },
            { t: "Property portal listing", u: "portal.com › mumbai" },
            { t: "Another developer", u: "developer.in › projects" },
          ].map((r, i) => (
            <li key={r.t} className={`rounded-2xl p-3.5 ${r.you ? "border border-lime/40 bg-lime/[0.07]" : "border border-transparent"}`}>
              <p className="font-mono text-[11px] text-muted">{r.u}</p>
              <p className={`mt-1 text-[15px] font-medium ${r.you ? "text-lime" : "text-white/70"}`}>{r.t}</p>
              <div className="mt-2 space-y-1.5">
                <span className="block h-1.5 w-[88%] rounded-full bg-white/[0.07]" />
                <span className={`block h-1.5 rounded-full bg-white/[0.07] ${i === 0 ? "w-[64%]" : "w-[52%]"}`} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end"><Illustrative /></div>
      </motion.div>

      <motion.div {...pop(0.8)} className="absolute -left-4 -top-6 sm:-left-10">
        <div className="animate-float flex items-center gap-2 rounded-full bg-lime px-4 py-2 font-mono text-sm font-medium text-ink shadow-xl">
          <TrendingUp aria-hidden className="size-4" /> #1 position
        </div>
      </motion.div>
      <motion.div {...pop(1)} className="absolute -bottom-6 right-2 sm:-right-6">
        <div className="animate-float flex items-center gap-2.5 rounded-2xl border border-line bg-ink-3/95 px-4 py-3 shadow-xl backdrop-blur [animation-delay:-2s]">
          <MapPin aria-hidden className="size-4 text-violet-soft" />
          <div>
            <p className="text-[11px] text-muted">Local pack</p>
            <p className="flex items-center gap-1 font-mono text-sm text-white">4.8 <Star aria-hidden className="size-3 fill-lime text-lime" /> · Powai</p>
          </div>
        </div>
      </motion.div>
      <motion.div {...pop(1.2)} className="absolute -right-3 top-10 hidden lg:block">
        <div className="animate-float rounded-full border border-violet/40 bg-violet/20 px-3.5 py-1.5 font-mono text-xs text-violet-soft backdrop-blur [animation-delay:-4s]">
          + locality intent
        </div>
      </motion.div>
    </div>
  );
}

/** Section visual: rotates through real-world Mumbai query patterns and shows where a well-built page can land. */
export function QueryTheatre({ queries }: { queries: { q: string; sector: string }[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % queries.length), 3200);
    return () => clearInterval(id);
  }, [queries.length, reduce]);
  const current = queries[i];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
      <div>
        <div className="flex items-center gap-4 border-b-2 border-text-dark pb-4">
          <Search aria-hidden className="size-7 shrink-0 text-violet sm:size-9" />
          <AnimatePresence mode="wait">
            <motion.p
              key={current.q}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease }}
              className="font-display text-2xl font-medium tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
              aria-live="polite"
            >
              {current.q}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Example searches">
          {queries.map((q, idx) => (
            <button
              key={q.q}
              type="button"
              role="tab"
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${idx === i ? "border-text-dark bg-text-dark text-white" : "border-line-dark text-[#4a4f63] hover:border-text-dark/40"}`}
            >
              {q.sector}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-[var(--radius-card)] border border-line-dark bg-white p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet">What the searcher wants</p>
          <span className="rounded-full bg-paper px-2.5 py-0.5 font-mono text-[10px] uppercase text-[#5b6075]">Example</span>
        </div>
        <ul className="mt-5 space-y-3 text-[15px] text-[#3c4155]">
          <li className="flex gap-3"><span className="font-mono text-violet">01</span> A specific place, not just “Mumbai”</li>
          <li className="flex gap-3"><span className="font-mono text-violet">02</span> Proof they can trust you — reviews, credentials</li>
          <li className="flex gap-3"><span className="font-mono text-violet">03</span> A clear next step: call, visit, book</li>
        </ul>
      </div>
    </div>
  );
}

type Offering = { key: string; tab: string; title: string; body: string; points: string[] };

/** Tabbed service explorer. All panels are server-rendered (inactive ones hidden) so every service stays indexable. */
export function SeoOffering({ items }: { items: Offering[] }) {
  const [active, setActive] = useState(items[0].key);
  return (
    <div className="mt-12">
      <div role="tablist" aria-label="SEO services" className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {items.map((it) => (
          <button
            key={it.key}
            type="button"
            role="tab"
            id={`tab-${it.key}`}
            aria-controls={`panel-${it.key}`}
            aria-selected={active === it.key}
            onClick={() => setActive(it.key)}
            className={`shrink-0 rounded-2xl border px-5 py-3 text-base font-medium transition-colors ${active === it.key ? "border-violet bg-violet text-white" : "border-line bg-ink-2 text-white/85 hover:border-white/30"}`}
          >
            {it.tab}
          </button>
        ))}
      </div>

      {items.map((it) => (
        <div
          key={it.key}
          role="tabpanel"
          id={`panel-${it.key}`}
          aria-labelledby={`tab-${it.key}`}
          hidden={active !== it.key}
          className="mt-8 grid gap-5 lg:grid-cols-2"
        >
          <div className="rounded-[32px] border border-line bg-ink-2 p-7 sm:p-12">
            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">{it.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-muted">{it.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {it.points.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-2xl border border-line bg-ink px-4 py-3.5">
                  <span aria-hidden className="size-2 shrink-0 rounded-full bg-violet" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[32px] bg-gradient-to-br from-violet via-violet/80 to-ink-3 p-6 sm:p-10">
            <div className="absolute right-5 top-5 z-10"><Illustrative /></div>
            <OfferingVisual kind={it.key} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl bg-ink/85 p-5 shadow-2xl backdrop-blur ${className}`}>{children}</div>;
}

function OfferingVisual({ kind }: { kind: string }) {
  if (kind === "technical")
    return (
      <div className="mt-10 grid gap-4">
        <Card>
          <p className="font-mono text-xs text-muted">Core Web Vitals</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[["LCP", "1.9s"], ["INP", "120ms"], ["CLS", "0.03"]].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-line p-3"><p className="text-xs text-muted">{k}</p><p className="mt-1 font-display text-xl font-semibold text-lime">{v}</p></div>
            ))}
          </div>
        </Card>
        <Card>
          <p className="font-mono text-xs text-muted">Crawl report</p>
          {[["Indexable pages", 86], ["Redirect chains fixed", 100], ["Schema coverage", 72]].map(([k, v]) => (
            <div key={k as string} className="mt-4">
              <div className="flex justify-between text-sm"><span>{k}</span><span className="text-muted">{v}%</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-lime" style={{ width: `${v}%` }} /></div>
            </div>
          ))}
        </Card>
      </div>
    );
  if (kind === "onpage")
    return (
      <div className="mt-10 grid gap-4">
        <Card>
          <p className="font-mono text-xs text-muted">Search preview</p>
          <p className="mt-3 text-xs text-white/60">yourbrand.com › services › seo-mumbai</p>
          <p className="mt-1 text-lg font-medium text-[#8ab4ff]">SEO Agency in Mumbai | Local &amp; Technical SEO</p>
          <p className="mt-1 text-sm text-muted">Locality-led SEO for Mumbai brands: technical fixes, neighbourhood pages and content that wins search…</p>
        </Card>
        <Card>
          <p className="font-mono text-xs text-muted">Page checklist</p>
          <ul className="mt-3 space-y-2 text-sm">
            {["One H1 with primary keyword", "Intent answered above the fold", "Internal links to related services", "FAQ schema added"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-lime text-[10px] font-bold text-ink">✓</span>{t}</li>
            ))}
          </ul>
        </Card>
      </div>
    );
  if (kind === "offpage")
    return (
      <div className="relative mt-10 h-[300px]">
        <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-lime font-display text-lg font-semibold text-ink shadow-2xl">Your site</div>
        {[["Industry press", "left-0 top-2"], ["Local directories", "right-0 top-6"], ["Partner blogs", "left-2 bottom-4"], ["Google Business", "right-2 bottom-0"]].map(([l, pos]) => (
          <div key={l} className={`absolute ${pos} rounded-full bg-ink/85 px-4 py-2 text-sm shadow-xl`}><Star aria-hidden className="mr-1.5 inline size-3.5 text-lime" />{l}</div>
        ))}
      </div>
    );
  if (kind === "keywords")
    return (
      <Card className="mt-10">
        <div className="flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm"><Search aria-hidden className="size-4 text-muted" /> office space for rent andheri</div>
        <table className="mt-4 w-full text-left text-sm">
          <thead className="text-xs text-muted"><tr><th className="py-2 font-normal">Keyword cluster</th><th className="font-normal">Intent</th><th className="font-normal">Page</th></tr></thead>
          <tbody>
            {[["office space andheri", "Buy", "Locality"], ["coworking bkc", "Compare", "Service"], ["lease vs buy office", "Learn", "Guide"], ["office near metro", "Buy", "Locality"]].map((r) => (
              <tr key={r[0]} className="border-t border-line"><td className="py-2.5">{r[0]}</td><td><span className="rounded-full bg-violet/30 px-2 py-0.5 text-xs">{r[1]}</span></td><td className="text-muted">{r[2]}</td></tr>
            ))}
          </tbody>
        </table>
      </Card>
    );
  return (
    <div className="mt-10 grid grid-cols-2 gap-3">
      {[["Pillar", "SEO in Mumbai: the complete guide", "col-span-2 bg-lime text-ink"], ["Cluster", "Local SEO checklist", ""], ["Cluster", "Choosing an SEO agency", ""], ["Refresh", "Refresh an older pricing guide", ""], ["Calendar", "4 articles / month", ""]].map(([k, t, cls]) => (
        <div key={t} className={`rounded-2xl p-4 shadow-xl ${cls || "bg-ink/85"}`}>
          <p className={`font-mono text-[11px] ${cls ? "text-ink/60" : "text-muted"}`}><TrendingUp aria-hidden className="mr-1 inline size-3" />{k}</p>
          <p className="mt-2 font-medium leading-snug">{t}</p>
        </div>
      ))}
    </div>
  );
}

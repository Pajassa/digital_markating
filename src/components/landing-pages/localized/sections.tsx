import type { ReactNode } from "react";
import { Check, Search } from "lucide-react";
import type { Lang, LocalizedPage, LocalizedUI } from "@/data/pages/i18n";
import type { CityKey } from "@/data/pages";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";

/**
 * Building blocks for the translated landing pages. Each page picks its own hero,
 * section styles and order (see recipes.ts), so no two translated pages share a design.
 * All layouts use logical properties (start/end, ps/pe) so they mirror correctly in RTL.
 */
export interface SectionProps {
  lang: Lang;
  city: CityKey;
  c: LocalizedPage;
  ui: LocalizedUI;
  href: string;
  cityName: string;
  rtl: boolean;
  crumbs: ReactNode;
}

const arabicNum = ["١", "٢", "٣", "٤", "٥", "٦"];
export const num = (lang: Lang, i: number) => (lang === "ar" ? arabicNum[i] : String(i + 1).padStart(2, "0"));
const flip = (rtl: boolean) => (rtl ? "[&_svg]:-scale-x-100" : undefined);

function Title({ c, className, accent = "text-gradient" }: { c: LocalizedPage; className?: string; accent?: string }) {
  return (
    <h1 className={cn("font-semibold", className)}>
      <span className="mb-6 block text-sm font-medium tracking-wide text-lime">{c.kicker}</span>
      {c.title}
      <br />
      <span className={accent}>{c.highlight}</span>
    </h1>
  );
}

function CtaPair({ p, faqHref = "#l10n-faq", center }: { p: SectionProps; faqHref?: string; center?: boolean }) {
  return (
    <div className={cn("mt-9 flex flex-col gap-3 sm:flex-row", center && "justify-center")}>
      <ButtonLink href={p.href} size="lg" arrow className={flip(p.rtl)}>{p.c.cta}</ButtonLink>
      <ButtonLink href={faqHref} size="lg" variant="outline">{p.ui.faq}</ButtonLink>
    </div>
  );
}

const skylines: Partial<Record<CityKey, string>> = {
  dubai: "M0 120 V92 H30 V70 H44 V92 H70 V58 H82 V40 L88 8 L94 40 V58 H106 V92 H130 V76 H150 V60 H162 V92 H190 V66 H210 V50 H222 V92 H250 V80 H270 V92 H300 V120Z",
  singapore: "M0 120 V96 H24 V80 H40 V96 H62 V70 H74 V96 H98 V46 H110 V96 H122 V46 H134 V96 H146 V46 H158 V96 H186 V64 H200 V96 H222 V76 H240 V58 H252 V96 H276 V84 H300 V120Z M90 46 H170 V39 H90Z",
};

function Skyline({ city, className }: { city: CityKey; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 300 120" preserveAspectRatio="none" className={className}>
      <path d={skylines[city] ?? skylines.dubai} fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth=".6" />
    </svg>
  );
}

/* ================================================================== */
/* HEROES (7)                                                          */
/* ================================================================== */

/** 0 — split: type + arched skyline window */
function HeroArch(p: SectionProps) {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-violet/25 blur-[160px]" />
        <div className="grid-bg noise-mask absolute inset-0" />
      </div>
      <div className="container-x relative">
        {p.crumbs}
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Title c={p.c} className="text-[2.5rem] leading-[1.15] sm:text-6xl lg:text-[4.2rem]" />
            <p className="mt-7 max-w-xl text-lg leading-[1.9] text-white/75">{p.c.lede}</p>
            <CtaPair p={p} />
          </Reveal>
          <Reveal delay={0.15} aria-hidden className="relative mx-auto w-full max-w-[400px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border border-white/15 bg-gradient-to-b from-violet/30 via-ink-2 to-ink">
              <div className="absolute inset-3 rounded-t-full border border-white/[0.07]" />
              <p className={cn("absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center font-bold leading-none text-white/[0.08]", p.cityName.length > 5 ? "text-[3.4rem]" : "text-[6rem]")}>{p.cityName}</p>
              <Skyline city={p.city} className="absolute inset-x-0 bottom-0 w-full text-white/15" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 1 — centred editorial with a hairline and a search bar */
function HeroCentred(p: SectionProps) {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet/20 blur-[160px]" />
      <div className="container-x relative">
        <div className="flex justify-center">{p.crumbs}</div>
        <Reveal className="mx-auto mt-14 max-w-4xl text-center">
          <Title c={p.c} className="text-[2.6rem] font-light leading-[1.1] sm:text-7xl" accent="font-medium text-gradient" />
          <span aria-hidden className="mx-auto mt-10 block h-14 w-px bg-gradient-to-b from-white/40 to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.9] text-white/70">{p.c.lede}</p>
          <CtaPair p={p} center />
        </Reveal>
        <Reveal delay={0.2} aria-hidden className="mx-auto mt-16 flex max-w-2xl items-center gap-3 rounded-full border border-line bg-ink-2 px-6 py-4 shadow-[0_30px_100px_-30px_rgba(112,85,247,0.6)]">
          <Search className="size-5 shrink-0 text-muted" />
          <span className="truncate text-white/80">{p.c.services[0]?.title} · {p.cityName}</span>
          <span className="ms-auto size-2 shrink-0 animate-pulse rounded-full bg-lime" />
        </Reveal>
      </div>
    </section>
  );
}

/** 2 — full-bleed violet panel with giant city watermark */
function HeroPanel(p: SectionProps) {
  return (
    <section className="pb-16 pt-24 sm:pt-28">
      <div className="container-x">
        <div className="mb-8">{p.crumbs}</div>
        <Reveal className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-violet via-violet/80 to-ink-3 px-6 py-14 sm:px-14 sm:py-20">
          <p aria-hidden className="pointer-events-none absolute -bottom-6 end-0 select-none text-[22vw] font-bold leading-none text-white/[0.07] lg:text-[13rem]">{p.cityName}</p>
          <div className="relative max-w-3xl">
            <Title c={p.c} className="text-[2.5rem] leading-[1.12] sm:text-6xl" accent="text-lime" />
            <p className="mt-7 max-w-xl text-lg leading-[1.9] text-white/85">{p.c.lede}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={p.href} size="lg" arrow className={flip(p.rtl)}>{p.c.cta}</ButtonLink>
              <ButtonLink href="#l10n-faq" size="lg" variant="dark">{p.ui.faq}</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 3 — light paper hero with service chips */
function HeroPaper(p: SectionProps) {
  return (
    <section className="pb-16 pt-24 sm:pt-28">
      <div className="container-x">
        <div className="mb-8">{p.crumbs}</div>
        <div className="grid gap-10 rounded-[36px] bg-paper p-6 text-text-dark sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <h1 className="text-[2.4rem] font-semibold leading-[1.12] sm:text-6xl">
              <span className="mb-6 block text-sm font-medium tracking-wide text-violet">{p.c.kicker}</span>
              {p.c.title}
              <br />
              <span className="text-violet">{p.c.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[1.9] text-[#3c4155]">{p.c.lede}</p>
            <ButtonLink href={p.href} size="lg" variant="violet" arrow className={cn("mt-9", flip(p.rtl))}>{p.c.cta}</ButtonLink>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-wrap gap-2.5">
            {p.c.services.map((s, i) => (
              <span key={s.title} className={cn("rounded-full px-4 py-2 text-sm font-medium", i % 2 ? "bg-ink text-white" : "border border-black/15 bg-white")}>{s.title}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 4 — oversized left type with orbit rings */
function HeroOrbit(p: SectionProps) {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
      <div aria-hidden className="pointer-events-none absolute -end-48 top-10 hidden size-[720px] lg:block">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="absolute rounded-full border border-white/10" style={{ inset: `${i * 12}%` }} />
        ))}
        <div className="absolute left-[18%] top-[20%] size-4 rounded-full bg-lime shadow-[0_0_30px_rgba(183,243,107,0.8)]" />
        <div className="absolute bottom-[30%] left-[8%] size-3 rounded-full bg-violet-soft" />
        <div className="absolute inset-[36%] rounded-full bg-violet/30 blur-2xl" />
      </div>
      <div className="container-x relative">
        {p.crumbs}
        <Reveal className="mt-14 max-w-3xl">
          <Title c={p.c} className="text-[2.6rem] leading-[1.08] tracking-tight sm:text-7xl lg:text-[5rem]" accent="text-lime" />
          <p className="mt-8 max-w-xl text-lg leading-[1.9] text-white/70">{p.c.lede}</p>
          <CtaPair p={p} />
        </Reveal>
      </div>
    </section>
  );
}

/** 5 — bento: headline card + pillar mini-cards */
function HeroBento(p: SectionProps) {
  return (
    <section className="pb-16 pt-24 sm:pt-28">
      <div className="container-x">
        <div className="mb-8">{p.crumbs}</div>
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="rounded-[32px] border border-line bg-ink-2 p-7 sm:p-10 lg:col-span-2 lg:row-span-2">
            <Title c={p.c} className="text-[2.4rem] leading-[1.12] sm:text-6xl" />
            <p className="mt-6 max-w-xl text-lg leading-[1.9] text-white/70">{p.c.lede}</p>
            <CtaPair p={p} />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-between rounded-[32px] bg-lime p-7 text-ink">
            <span className="font-mono text-xs opacity-60">{num(p.lang, 0)}</span>
            <p className="mt-6 text-2xl font-semibold leading-snug">{p.c.pillars[0]?.title}</p>
          </Reveal>
          <Reveal delay={0.2} className="relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-violet p-7">
            <span className="font-mono text-xs opacity-70">{num(p.lang, 1)}</span>
            <p className="relative mt-6 text-2xl font-semibold leading-snug">{p.c.pillars[1]?.title}</p>
            <Skyline city={p.city} className="absolute inset-x-0 bottom-0 h-16 w-full text-white/30" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 6 — headline over a moving ribbon of service names */
function HeroRibbon(p: SectionProps) {
  const words = [...p.c.services, ...p.c.services].map((s) => s.title);
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
      <div className="container-x relative">
        {p.crumbs}
        <Reveal className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Title c={p.c} className="text-[2.5rem] leading-[1.1] sm:text-7xl" accent="text-violet-soft" />
          <div>
            <p className="text-lg leading-[1.9] text-white/70">{p.c.lede}</p>
            <ButtonLink href={p.href} size="lg" arrow className={cn("mt-8", flip(p.rtl))}>{p.c.cta}</ButtonLink>
          </div>
        </Reveal>
      </div>
      <div aria-hidden className="mt-16 -rotate-2 overflow-hidden bg-lime py-4 text-ink" dir="ltr">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-2xl font-semibold">
          {[...words, ...words].map((w, i) => <span key={i} className="flex items-center gap-10">{w}<span className="size-2 rounded-full bg-ink" /></span>)}
        </div>
      </div>
    </section>
  );
}

export const heroes = [HeroArch, HeroCentred, HeroPanel, HeroPaper, HeroOrbit, HeroBento, HeroRibbon];

/* ================================================================== */
/* PILLARS (4)                                                         */
/* ================================================================== */

function PillarsColumns(p: SectionProps) {
  return (
    <section className="section-y border-y border-line" aria-labelledby="l10n-pillars">
      <div className="container-x">
        <h2 id="l10n-pillars" className="max-w-2xl text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.approach}</h2>
        <div className={cn("mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10", p.rtl && "md:divide-x-reverse")}>
          {p.c.pillars.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.08} className="md:px-8 md:first:ps-0">
              <p className="text-5xl font-light text-lime/80">{num(p.lang, i)}</p>
              <h3 className="mt-6 text-2xl font-semibold">{x.title}</h3>
              <p className="mt-3 leading-[1.9] text-muted">{x.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsStacked(p: SectionProps) {
  return (
    <section className="section-y" aria-labelledby="l10n-pillars">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <h2 id="l10n-pillars" className="text-4xl font-semibold leading-[1.3] sm:text-5xl lg:sticky lg:top-28 lg:col-span-4 lg:self-start">{p.ui.approach}</h2>
        <div className="space-y-4 lg:col-span-7 lg:col-start-6">
          {p.c.pillars.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.06} className={cn("rounded-[var(--radius-card)] p-8", ["bg-lime text-ink", "bg-violet", "border border-line bg-ink-2"][i % 3])}>
              <h3 className="text-2xl font-semibold sm:text-3xl">{x.title}</h3>
              <p className={cn("mt-3 leading-[1.9]", i === 0 ? "text-ink/75" : "text-white/75")}>{x.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsQuote(p: SectionProps) {
  return (
    <section className="section-y bg-paper text-text-dark" aria-labelledby="l10n-pillars">
      <div className="container-x">
        <h2 id="l10n-pillars" className="text-center font-mono text-xs uppercase tracking-[0.3em] text-violet">{p.ui.approach}</h2>
        <div className="mx-auto mt-12 max-w-4xl space-y-12">
          {p.c.pillars.map((x, i) => (
            <Reveal key={x.title} className="grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-[120px_1fr]">
              <p className="text-6xl font-light text-violet">{num(p.lang, i)}</p>
              <div>
                <h3 className="text-3xl font-semibold sm:text-4xl">{x.title}</h3>
                <p className="mt-3 text-lg leading-[1.9] text-[#3c4155]">{x.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsIcons(p: SectionProps) {
  return (
    <section className="section-y bg-ink-2" aria-labelledby="l10n-pillars">
      <div className="container-x">
        <h2 id="l10n-pillars" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.approach}</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {p.c.pillars.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.08} className="relative overflow-hidden rounded-[28px] border border-line bg-ink p-8">
              <div aria-hidden className="absolute -end-10 -top-10 size-36 rounded-full bg-violet/30 blur-2xl" />
              <span className="relative grid size-12 place-items-center rounded-2xl bg-lime text-ink"><Check aria-hidden className="size-6" /></span>
              <h3 className="relative mt-8 text-2xl font-semibold">{x.title}</h3>
              <p className="relative mt-3 leading-[1.9] text-muted">{x.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const pillarStyles = [PillarsColumns, PillarsStacked, PillarsQuote, PillarsIcons];

/* ================================================================== */
/* SERVICES (4)                                                        */
/* ================================================================== */

function ServicesCards(p: SectionProps) {
  return (
    <section className="section-y" aria-labelledby="l10n-services">
      <div className="container-x">
        <h2 id="l10n-services" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.services}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {p.c.services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.06} className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-ink-2 p-7 transition-colors hover:border-lime/40">
              <span className="text-xl text-lime">{num(p.lang, i)}</span>
              <div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-[1.9] text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesRows(p: SectionProps) {
  return (
    <section className="section-y" aria-labelledby="l10n-services">
      <div className="container-x">
        <h2 id="l10n-services" className="text-4xl font-semibold leading-[1.3] sm:text-6xl">{p.ui.services}<span className="text-lime">.</span></h2>
        <ul className="mt-12 border-t border-white/20">
          {p.c.services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.04} className="grid gap-3 border-b border-white/20 py-7 sm:grid-cols-12 sm:items-baseline">
              <span className="font-mono text-sm text-lime sm:col-span-1">{num(p.lang, i)}</span>
              <h3 className="text-2xl font-semibold sm:col-span-5 sm:text-3xl">{s.title}</h3>
              <p className="text-muted sm:col-span-5 sm:col-start-8">{s.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicesBento(p: SectionProps) {
  const tones = ["bg-violet md:col-span-2", "border border-line bg-ink-2", "border border-line bg-ink-2", "bg-lime text-ink md:col-span-2"];
  return (
    <section className="section-y" aria-labelledby="l10n-services">
      <div className="container-x">
        <h2 id="l10n-services" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.services}</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {p.c.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className={cn("flex min-h-52 flex-col justify-between rounded-[28px] p-8", tones[i % 4])}>
              <span className="font-mono text-xs opacity-60">{num(p.lang, i)}</span>
              <div>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className={cn("mt-2 leading-[1.8]", i % 4 === 3 ? "text-ink/75" : "text-white/75")}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSplit(p: SectionProps) {
  return (
    <section className="section-y bg-ink-2" aria-labelledby="l10n-services">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-square overflow-hidden rounded-[36px] border border-line bg-gradient-to-br from-violet/40 via-ink to-ink" aria-hidden>
          <div className="absolute inset-[18%] rounded-full border border-white/10" />
          <div className="absolute inset-[32%] rounded-full border border-lime/30" />
          <p className="absolute inset-0 grid place-items-center px-6 text-center text-4xl font-semibold text-white/80 sm:text-5xl">{p.cityName}</p>
          <Skyline city={p.city} className="absolute inset-x-0 bottom-0 h-24 w-full text-white/20" />
        </div>
        <div>
          <h2 id="l10n-services" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.services}</h2>
          <ul className="mt-10 space-y-6">
            {p.c.services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.05} className="flex gap-4">
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-lime text-sm font-semibold text-ink">{num(p.lang, i)}</span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 leading-[1.8] text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export const serviceStyles = [ServicesCards, ServicesRows, ServicesBento, ServicesSplit];

/* ================================================================== */
/* STEPS (4)                                                           */
/* ================================================================== */

function StepsRow(p: SectionProps) {
  return (
    <section className="section-y bg-ink-2" aria-labelledby="l10n-steps">
      <div className="container-x text-center">
        <h2 id="l10n-steps" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.process}</h2>
        <ol className={cn("mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-3", p.c.steps.length > 5 ? "lg:grid-cols-6" : "lg:grid-cols-5")}>
          {p.c.steps.map((s, i) => (
            <li key={s}>
              <p className="text-3xl font-light text-white/30">{num(p.lang, i)}</p>
              <p className="mt-3 text-lg">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepsRail(p: SectionProps) {
  return (
    <section className="section-y" aria-labelledby="l10n-steps">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <h2 id="l10n-steps" className="text-4xl font-semibold leading-[1.3] sm:text-5xl lg:col-span-4">{p.ui.process}</h2>
        <ol className="space-y-8 border-s-2 border-violet/40 ps-8 lg:col-span-7 lg:col-start-6">
          {p.c.steps.map((s, i) => (
            <li key={s} className="relative">
              <span aria-hidden className="absolute -start-[42px] top-1.5 size-5 rounded-full border-4 border-ink bg-violet" />
              <p className="font-mono text-xs text-muted">{num(p.lang, i)}</p>
              <p className="mt-1 text-2xl font-semibold">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepsLine(p: SectionProps) {
  return (
    <section className="section-y border-y border-line" aria-labelledby="l10n-steps">
      <div className="container-x">
        <h2 id="l10n-steps" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.process}</h2>
        <ol className="relative mt-14 grid gap-8 sm:grid-flow-col sm:auto-cols-fr sm:gap-4">
          <span aria-hidden className="absolute start-3 top-0 h-full w-1 rounded-full bg-lime/70 sm:start-0 sm:top-3 sm:h-1 sm:w-full" />
          {p.c.steps.map((s, i) => (
            <li key={s} className="relative ps-12 sm:ps-0 sm:pt-12">
              <span aria-hidden className="absolute start-0 top-0 size-7 rounded-full border-[6px] border-lime bg-ink" />
              <p className="font-mono text-xs text-muted">{num(p.lang, i)}</p>
              <p className="mt-1 text-xl font-semibold">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepsTiles(p: SectionProps) {
  return (
    <section className="section-y" aria-labelledby="l10n-steps">
      <div className="container-x">
        <h2 id="l10n-steps" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.process}</h2>
        <ol className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none">
          {p.c.steps.map((s, i) => (
            <li key={s} className={cn("flex aspect-square flex-col justify-between rounded-[24px] p-5", i === p.c.steps.length - 1 ? "bg-lime text-ink" : "border border-line bg-ink-2")}>
              <span className="text-3xl font-light opacity-50">{num(p.lang, i)}</span>
              <span className="text-lg font-semibold">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export const stepStyles = [StepsRow, StepsRail, StepsLine, StepsTiles];

/* ================================================================== */
/* FAQ (2) + CTA (4)                                                   */
/* ================================================================== */

function FaqCentred(p: SectionProps) {
  return (
    <section id="l10n-faq" className="section-y" aria-labelledby="l10n-faq-h">
      <div className="container-x max-w-3xl">
        <h2 id="l10n-faq-h" className="mb-10 text-4xl font-semibold leading-[1.3] sm:text-5xl">{p.ui.faq}</h2>
        <FAQAccordion faqs={p.c.faqs} />
      </div>
    </section>
  );
}

function FaqSplit(p: SectionProps) {
  return (
    <section id="l10n-faq" className="section-y bg-paper text-text-dark" aria-labelledby="l10n-faq-h">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <h2 id="l10n-faq-h" className="text-4xl font-semibold leading-[1.3] sm:text-5xl lg:col-span-4">{p.ui.faq}</h2>
        <div className="lg:col-span-7 lg:col-start-6"><FAQAccordion faqs={p.c.faqs} tone="light" /></div>
      </div>
    </section>
  );
}

export const faqStyles = [FaqCentred, FaqSplit];

function CtaGlow(p: SectionProps) {
  return (
    <section className="pb-20 pt-4 sm:pb-28" aria-labelledby="l10n-cta">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[32px] border border-line bg-[#0b0d15] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/40 blur-[120px]" />
          <div className="relative">
            <h2 id="l10n-cta" className="text-4xl font-semibold leading-[1.3] sm:text-6xl">{p.c.closing.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.9] text-white/70">{p.c.closing.body}</p>
            <ButtonLink href={p.href} size="lg" className={cn("mt-9", flip(p.rtl))} arrow>{p.c.cta}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaLime(p: SectionProps) {
  return (
    <section className="pb-20 pt-4 sm:pb-28" aria-labelledby="l10n-cta">
      <div className="container-x">
        <Reveal className="grid gap-8 rounded-[32px] bg-lime p-8 text-ink sm:p-14 lg:grid-cols-12 lg:items-end">
          <h2 id="l10n-cta" className="text-4xl font-semibold leading-[1.2] sm:text-6xl lg:col-span-7">{p.c.closing.title}</h2>
          <div className="lg:col-span-5">
            <p className="text-ink/70">{p.c.closing.body}</p>
            <ButtonLink href={p.href} size="lg" variant="dark" arrow className={cn("mt-5", flip(p.rtl))}>{p.c.cta}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaSplit(p: SectionProps) {
  return (
    <section className="pb-20 pt-4 sm:pb-28" aria-labelledby="l10n-cta">
      <div className="container-x">
        <Reveal className="grid overflow-hidden rounded-[32px] border border-line md:grid-cols-2">
          <div className="bg-violet p-8 sm:p-12"><h2 id="l10n-cta" className="text-4xl font-semibold leading-[1.2] sm:text-5xl">{p.c.closing.title}</h2></div>
          <div className="flex flex-col justify-between gap-8 bg-ink-2 p-8 sm:p-12">
            <p className="text-lg text-white/75">{p.c.closing.body}</p>
            <ButtonLink href={p.href} size="lg" arrow className={cn("self-start", flip(p.rtl))}>{p.c.cta}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaOutline(p: SectionProps) {
  return (
    <section className="pb-20 pt-4 sm:pb-28" aria-labelledby="l10n-cta">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[32px] border-2 border-dashed border-lime/50 px-6 py-16 sm:px-14">
          <Skyline city={p.city} className="absolute inset-x-0 bottom-0 h-20 w-full text-white/10" />
          <div className="relative max-w-2xl">
            <h2 id="l10n-cta" className="text-4xl font-semibold leading-[1.2] sm:text-6xl">{p.c.closing.title}</h2>
            <p className="mt-5 text-lg leading-[1.9] text-white/70">{p.c.closing.body}</p>
            <ButtonLink href={p.href} size="lg" className={cn("mt-9", flip(p.rtl))} arrow>{p.c.cta}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const ctaStyles = [CtaGlow, CtaLime, CtaSplit, CtaOutline];

import { singaporeDigital as c } from "@/data/pages/singapore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";

const href = contactHref("singapore", "digital-marketing-agency");
const barColors = ["bg-lime", "bg-violet", "bg-violet-soft", "bg-white/70", "bg-white/30"];

/**
 * PAGE 14 — Singapore Digital Marketing
 * Direction: regional command board — departures-board time zones, a channel-mix bar, a stepped B2B funnel.
 * Order: Hero (centred + time-zone board) → Channel mix → Funnel staircase → Sectors (tag wall) → FAQ → Split CTA
 */
export function SingaporeDigitalMarketingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 size-[520px] rounded-full bg-violet/25 blur-[150px]" />
          <div className="absolute -right-40 top-40 size-[420px] rounded-full bg-lime/10 blur-[140px]" />
        </div>
        <div className="container-x relative">
          <LandingCrumbs city="singapore" service="digital-marketing-agency" />
          <Reveal className="mx-auto mt-14 max-w-4xl text-center">
            <h1 className="text-[2.8rem] font-semibold leading-[1] tracking-[-0.035em] sm:text-7xl">
              <H1Kicker className="mb-7 font-mono text-xs font-normal tracking-normal text-lime">Digital marketing agency in Singapore</H1Kicker>
              Run Asia-Pacific growth from <span className="text-gradient">one board.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/70">{c.lede}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={href} size="lg" arrow>Book a strategy call</ButtonLink>
              <ButtonLink href="#sgdm-mix" size="lg" variant="outline">See the channel mix</ButtonLink>
            </div>
          </Reveal>

          {/* Departures board */}
          <Reveal delay={0.15} className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[24px] border border-line bg-[#0b0d15] font-mono shadow-[0_40px_120px_-40px_rgba(112,85,247,0.6)]">
            <div className="flex items-center justify-between border-b border-line px-5 py-3 text-xs text-muted">
              <span>MARKETS · TIME ZONE · STATUS</span>
              <Illustrative />
            </div>
            <ul>
              {c.zones.map((z, i) => (
                <li key={z.city} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line/60 px-5 py-3.5 last:border-0 sm:grid-cols-[1fr_120px_160px]">
                  <span className="text-sm text-white sm:text-base">{z.city.toUpperCase()}</span>
                  <span className="hidden text-sm text-muted sm:block">{z.tz}</span>
                  <span className={cn("justify-self-end rounded px-2 py-1 text-[11px]", i === 0 ? "bg-lime text-ink" : "bg-white/[0.06] text-white/70")}>{i === 0 ? "HQ · LIVE" : "PLANNED"}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CHANNEL MIX */}
      <section id="sgdm-mix" className="section-y bg-paper text-text-dark" aria-labelledby="sgdm-mix-h">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 id="sgdm-mix-h" className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">A channel mix, not a channel bet.</h2>
            <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-xs text-[#5b6075]">Example B2B split · illustrative</span>
          </div>
          <div aria-hidden className="mt-12 flex h-6 overflow-hidden rounded-full">
            {c.channels.map((ch, i) => <span key={ch.name} className={cn(barColors[i], i === 0 && "bg-[#8fd14a]")} style={{ width: `${ch.share}%` }} />)}
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {c.channels.map((ch, i) => (
              <li key={ch.name}>
                <p className="flex items-center gap-2 font-mono text-sm text-[#5b6075]"><span className={cn("size-3 rounded-sm", barColors[i], i === 0 && "bg-[#8fd14a]", i >= 3 && "bg-ink/40")} />{ch.share}%</p>
                <h3 className="mt-2 text-xl font-semibold">{ch.name}</h3>
                <p className="mt-2 text-[#3c4155]">{ch.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FUNNEL STAIRCASE */}
      <section className="section-y" aria-labelledby="sgdm-funnel">
        <div className="container-x">
          <h2 id="sgdm-funnel" className="text-4xl font-semibold tracking-tight sm:text-6xl">Measured all the way to revenue.</h2>
          <ol className="mt-14 grid gap-4 md:grid-cols-4 md:items-end">
            {c.funnel.map((f, i) => (
              <Reveal as="li" key={f.stage} delay={i * 0.08}
                className={cn("flex flex-col justify-end rounded-[var(--radius-card)] border p-6", ["md:h-56 border-line bg-ink-2", "md:h-72 border-line bg-ink-2", "md:h-88 border-violet/50 bg-violet/15", "md:h-[26rem] border-lime/40 bg-lime text-ink"][i])}>
                <span className={cn("font-mono text-xs", i === 3 ? "text-ink/60" : "text-muted")}>Step {i + 1}</span>
                <h3 className="mt-2 text-3xl font-semibold">{f.stage}</h3>
                <p className={cn("mt-2", i === 3 ? "text-ink/75" : "text-muted")}>{f.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section-y border-y border-line bg-ink-2" aria-labelledby="sgdm-sectors">
        <div className="container-x">
          <h2 id="sgdm-sectors" className="text-3xl font-semibold sm:text-4xl">Sectors we plan for in Singapore</h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {c.sectors.map((s, i) => (
              <li key={s} className={cn("rounded-full border px-5 py-2.5 text-lg", i % 3 === 0 ? "border-lime/40 text-lime" : "border-line text-white/80")}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y" aria-labelledby="sgdm-faq">
        <div className="container-x max-w-3xl">
          <h2 id="sgdm-faq" className="mb-10 text-4xl font-semibold tracking-tight sm:text-5xl">FAQs</h2>
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28" aria-labelledby="sgdm-cta">
        <div className="container-x">
          <Reveal className="grid overflow-hidden rounded-[32px] border border-line md:grid-cols-2">
            <div className="bg-violet p-8 sm:p-12">
              <h2 id="sgdm-cta" className="text-4xl font-semibold leading-[1.05] sm:text-5xl">Plan your next market.</h2>
            </div>
            <div className="flex flex-col justify-between gap-8 bg-ink-2 p-8 sm:p-12">
              <p className="text-lg text-white/75">A review of your current channels and a market-by-market plan with clear priorities.</p>
              <ButtonLink href={href} size="lg" arrow className="self-start">Book a strategy call</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

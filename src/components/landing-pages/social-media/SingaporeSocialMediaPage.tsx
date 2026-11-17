import { singaporeSocial as c } from "@/data/pages/singapore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";

const href = contactHref("singapore", "social-media-marketing");

/**
 * PAGE 15 — Singapore Social Media
 * Direction: hawker-centre menu board — stall-style numbered board, bold colour tiles, a weekly roster.
 * Order: Hero (headline + platform menu board) → Content pillars (colour tiles) → Weekly roster
 *        → Services (two-column list) → FAQ → Stall-sign CTA
 */
export function SingaporeSocialMediaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 size-[560px] rounded-full bg-violet/20 blur-[160px]" />
        </div>
        <div className="container-x relative">
          <LandingCrumbs city="singapore" service="social-media-marketing" />
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <h1 className="text-[3rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[5.4rem]">
                <H1Kicker className="mb-7 font-mono text-xs font-normal tracking-normal text-lime">Social media marketing agency in Singapore</H1Kicker>
                Something for <span className="relative inline-block"><span className="relative z-10">every</span><span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-violet/70 sm:h-6" /></span> feed.
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">{c.lede}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow>Plan my social</ButtonLink>
                <ButtonLink href="#sgsm-roster" size="lg" variant="outline">See a sample week</ButtonLink>
              </div>
            </Reveal>

            {/* Menu board */}
            <Reveal delay={0.15} className="rounded-[28px] border-[3px] border-lime/80 bg-[#0b0d15] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b-2 border-dashed border-white/15 pb-4">
                <p className="font-display text-2xl font-bold tracking-tight">Today&apos;s menu</p>
                <Illustrative />
              </div>
              <ul className="divide-y divide-white/10">
                {c.menu.map((m) => (
                  <li key={m.code} className="grid grid-cols-[auto_1fr] gap-x-4 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-baseline">
                    <span className="grid size-10 place-items-center rounded-lg bg-lime font-mono text-sm font-bold text-ink">{m.code}</span>
                    <div>
                      <p className="text-xl font-semibold">{m.platform}</p>
                      <p className="text-sm text-muted">{m.note}</p>
                    </div>
                    <p className="col-start-2 mt-1 font-mono text-sm text-lime sm:col-start-3 sm:mt-0">{m.role}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-y" aria-labelledby="sgsm-pillars">
        <div className="container-x">
          <h2 id="sgsm-pillars" className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Four content pillars, cooked to order.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className={cn("flex min-h-64 flex-col justify-between rounded-[var(--radius-card)] p-7", p.tone, i % 2 === 1 && "lg:translate-y-10")}>
                <span className="font-mono text-sm opacity-60">#{p.title.toLowerCase().replace(/\s+/g, "")}</span>
                <div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 opacity-75">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY ROSTER */}
      <section id="sgsm-roster" className="section-y bg-ink-2" aria-labelledby="sgsm-roster-h">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 id="sgsm-roster-h" className="text-4xl font-bold tracking-tight sm:text-5xl">A sample week</h2>
            <Illustrative label="Example cadence" />
          </div>
          <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {c.week.map((d) => (
              <li key={d.day} className={cn("rounded-2xl border p-4", d.post === "Rest" ? "border-dashed border-white/15 text-white/40" : "border-line bg-ink")}>
                <p className="font-mono text-xs uppercase text-muted">{d.day}</p>
                <p className="mt-6 font-semibold">{d.post}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" aria-labelledby="sgsm-services">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <h2 id="sgsm-services" className="text-4xl font-bold tracking-tight sm:text-5xl lg:col-span-4">What&apos;s included</h2>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {c.services.map((s) => (
              <li key={s.title} className="border-t border-line py-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y pt-0" aria-labelledby="sgsm-faq">
        <div className="container-x max-w-3xl">
          <h2 id="sgsm-faq" className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl">FAQs</h2>
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* CTA — stall sign */}
      <section className="pb-20 sm:pb-28" aria-labelledby="sgsm-cta">
        <div className="container-x">
          <Reveal className="rounded-[32px] border-[3px] border-lime/80 bg-[#0b0d15] p-8 text-center sm:p-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">Now serving</p>
            <h2 id="sgsm-cta" className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Your brand, on every feed.</h2>
            <ButtonLink href={href} size="lg" arrow className="mt-9">Plan my social</ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}

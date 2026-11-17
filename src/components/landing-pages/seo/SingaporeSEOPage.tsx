import { singaporeSeo as c } from "@/data/pages/singapore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";

const href = contactHref("singapore", "seo");

/**
 * PAGE 13 — Singapore SEO
 * Direction: Swiss grid + transit map — strict columns, hairlines, MRT-style lines for the SEO strategy.
 * Order: Hero (left type + line map) → Local vs regional table → Services (numbered grid rows)
 *        → Markets strip → Process (stations on a line) → FAQ (two-column) → Lime CTA band
 */
export function SingaporeSEOPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:calc(100%/12)_100%]" />
        <div className="container-x relative">
          <LandingCrumbs city="singapore" service="seo" />
          <div className="mt-12 grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h1 className="text-[3rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[5.6rem]">
                <H1Kicker className="mb-8 font-mono text-xs font-normal tracking-normal text-lime">SEO agency in Singapore · Local + APAC</H1Kicker>
                Route every search to <span className="text-lime">your door.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">{c.lede}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow>Get a free SEO audit</ButtonLink>
                <ButtonLink href="#sgseo-split" size="lg" variant="outline">Local vs regional</ButtonLink>
              </div>
            </Reveal>

            {/* Transit map */}
            <Reveal delay={0.15} className="relative rounded-[28px] border border-line bg-ink-2 p-6 sm:p-8 lg:col-span-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs text-muted">Strategy map</p>
                <Illustrative />
              </div>
              <div className="mt-8 space-y-9">
                {c.lines.map((l) => (
                  <div key={l.name}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{l.name}</p>
                    <div className="relative mt-4">
                      <span aria-hidden className={cn("absolute inset-x-2 top-[9px] h-1.5 rounded-full", l.color)} />
                      <ol className="relative grid grid-cols-4">
                        {l.stops.map((s, i) => (
                          <li key={s} className="flex flex-col items-start">
                            <span aria-hidden className={cn("size-6 rounded-full border-[5px] bg-ink", i === l.stops.length - 1 ? "border-lime" : "border-white/80")} />
                            <span className="mt-2 pr-2 text-xs leading-snug text-white/80 sm:text-sm">{s}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOCAL VS REGIONAL */}
      <section id="sgseo-split" className="section-y border-t border-line" aria-labelledby="sgseo-split-h">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 id="sgseo-split-h" className="text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-5">Two audiences. Two kinds of page.</h2>
            <p className="max-w-md text-lg text-muted lg:col-span-5 lg:col-start-8 lg:self-end">Local and regional searchers ask different questions. Each gets its own page, so they never compete.</p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-[var(--radius-card)] border border-line">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-line bg-ink-2 font-mono text-xs uppercase tracking-wider text-muted">
                  <th scope="col" className="p-5 font-normal" />
                  <th scope="col" className="p-5 font-normal"><span className="mr-2 inline-block size-2 rounded-full bg-lime" />Local · Singapore</th>
                  <th scope="col" className="p-5 font-normal"><span className="mr-2 inline-block size-2 rounded-full bg-violet" />Regional · APAC</th>
                </tr>
              </thead>
              <tbody>
                {c.split.map((r) => (
                  <tr key={r.aspect} className="border-b border-line last:border-0">
                    <th scope="row" className="p-5 align-top font-medium text-white">{r.aspect}</th>
                    <td className="p-5 align-top text-white/75">{r.local}</td>
                    <td className="p-5 align-top text-white/75">{r.regional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SERVICES — Swiss rows */}
      <section className="section-y pt-0" aria-labelledby="sgseo-services">
        <div className="container-x">
          <h2 id="sgseo-services" className="text-4xl font-semibold tracking-tight sm:text-6xl">SEO services in Singapore</h2>
          <ul className="mt-12 border-t border-white/20">
            {c.services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.04} className="group grid gap-3 border-b border-white/20 py-7 transition-colors hover:bg-white/[0.02] sm:grid-cols-12 sm:items-baseline">
                <span className="font-mono text-sm text-lime sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-semibold sm:col-span-4 sm:text-3xl">{s.title}</h3>
                <p className="text-muted sm:col-span-6 sm:col-start-7">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* MARKETS */}
      <section className="border-y border-line bg-ink-2 py-10" aria-label="Markets we can plan SEO for">
        <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Markets we plan for</p>
          {c.markets.map((m, i) => (
            <span key={m} className={cn("font-display text-xl font-semibold sm:text-2xl", i === 0 ? "text-lime" : "text-white/70")}>{m}</span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y" aria-labelledby="sgseo-process">
        <div className="container-x">
          <h2 id="sgseo-process" className="text-4xl font-semibold tracking-tight sm:text-5xl">How the work runs</h2>
          <ol className="relative mt-14 grid gap-10 sm:grid-cols-5 sm:gap-4">
            <span aria-hidden className="absolute left-3 top-0 h-full w-1 rounded-full bg-violet sm:left-0 sm:top-3 sm:h-1 sm:w-full" />
            {c.process.map((p, i) => (
              <li key={p} className="relative pl-12 sm:pl-0 sm:pt-12">
                <span aria-hidden className="absolute left-0 top-0 size-7 rounded-full border-[6px] border-violet bg-ink sm:top-0" />
                <p className="font-mono text-xs text-muted">Stop {i + 1}</p>
                <p className="mt-1 text-xl font-semibold">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y border-t border-line" aria-labelledby="sgseo-faq">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <h2 id="sgseo-faq" className="text-4xl font-semibold tracking-tight sm:text-5xl lg:col-span-4">Questions, answered.</h2>
          <div className="lg:col-span-7 lg:col-start-6"><FAQAccordion faqs={c.faqs} /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28" aria-labelledby="sgseo-cta">
        <div className="container-x">
          <Reveal className="grid gap-8 rounded-[32px] bg-lime p-8 text-ink sm:p-14 lg:grid-cols-12 lg:items-end">
            <h2 id="sgseo-cta" className="text-4xl font-semibold leading-[1] tracking-tight sm:text-6xl lg:col-span-8">Next stop: page one.</h2>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-ink/70">A free audit of your site with fixes ranked by impact.</p>
              <ButtonLink href={href} size="lg" variant="dark" arrow className="mt-5">Get a free SEO audit</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

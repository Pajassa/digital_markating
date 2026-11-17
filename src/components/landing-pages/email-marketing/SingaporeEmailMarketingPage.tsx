import { CheckCircle2, Inbox, Star } from "lucide-react";
import { singaporeEmail as c } from "@/data/pages/singapore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";

const href = contactHref("singapore", "email-marketing");

/**
 * PAGE 16 — Singapore Email Marketing
 * Direction: consent-first, calm and precise — a light paper hero with an inbox, a vertical lifecycle rail,
 *            a consent checklist card.
 * Order: Hero (paper, headline + inbox list) → Lifecycle rail → Consent checklist → Services → FAQ → Envelope CTA
 */
export function SingaporeEmailMarketingPage() {
  return (
    <>
      {/* HERO — dark top strip for nav/crumbs, then paper panel */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div className="container-x">
          <LandingCrumbs city="singapore" service="email-marketing" />
          <div className="mt-10 grid gap-10 rounded-[36px] bg-paper p-6 text-text-dark sm:p-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h1 className="text-[2.8rem] font-semibold leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                <H1Kicker className="mb-7 font-mono text-xs font-normal tracking-normal text-violet">Email marketing agency in Singapore</H1Kicker>
                Earn the inbox. <span className="text-violet">Keep it.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#3c4155]">{c.lede}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" variant="violet" arrow>Audit my email</ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(16,19,29,0.35)]">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-3">
                <span className="flex items-center gap-2 text-sm font-medium"><Inbox aria-hidden className="size-4 text-violet" /> Inbox</span>
                <Illustrative className="bg-ink/5 text-[#5b6075]" />
              </div>
              <ul>
                {c.inbox.map((m, i) => (
                  <li key={m.subject} className={cn("flex items-center gap-3 border-b border-black/5 px-5 py-3.5 last:border-0", i === 0 && "bg-violet/[0.06]")}>
                    <span className={cn("size-2 shrink-0 rounded-full", i < 2 ? "bg-violet" : "bg-transparent")} />
                    <div className="min-w-0 flex-1">
                      <p className={cn("text-sm", i < 2 ? "font-semibold" : "text-[#3c4155]")}>{m.from}</p>
                      <p className="truncate text-sm text-[#5b6075]">{m.subject}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[10px] text-[#5b6075]">{m.tag}</span>
                    {i === 2 && <Star aria-hidden className="size-4 shrink-0 fill-lime text-[#8fd14a]" />}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="section-y pt-0" aria-labelledby="sgem-life">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <h2 id="sgem-life" className="text-4xl font-semibold tracking-tight sm:text-5xl">One subscriber, five moments.</h2>
            <p className="mt-4 text-muted">Each moment gets the right message, sent automatically.</p>
          </div>
          <ol className="relative space-y-10 border-l-2 border-violet/40 pl-8 lg:col-span-7 lg:col-start-6">
            {c.lifecycle.map((l, i) => (
              <Reveal as="li" key={l.stage} delay={i * 0.05} className="relative">
                <span aria-hidden className="absolute -left-[42px] top-1 grid size-5 place-items-center rounded-full bg-violet text-[10px] font-bold">{i + 1}</span>
                <h3 className="text-2xl font-semibold">{l.stage}</h3>
                <p className="mt-2 max-w-lg text-muted">{l.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CONSENT */}
      <section className="section-y bg-ink-2" aria-labelledby="sgem-consent">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="sgem-consent" className="text-4xl font-semibold tracking-tight sm:text-5xl">Consent first. Always.</h2>
            <p className="mt-5 max-w-md text-lg text-muted">Every programme we build starts with clear opt-in, a stated purpose and an easy way out, in line with the principles of Singapore&apos;s PDPA.</p>
          </div>
          <Reveal className="rounded-[var(--radius-card)] border border-lime/30 bg-ink p-7 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">Launch checklist</p>
            <ul className="mt-6 space-y-4">
              {c.consent.map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-lime" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" aria-labelledby="sgem-services">
        <div className="container-x">
          <h2 id="sgem-services" className="text-4xl font-semibold tracking-tight sm:text-5xl">Email marketing services in Singapore</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="rounded-[var(--radius-card)] border border-line p-7 transition-colors hover:border-violet/60">
                <span className="font-mono text-xs text-violet-soft">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y pt-0" aria-labelledby="sgem-faq">
        <div className="container-x max-w-3xl">
          <h2 id="sgem-faq" className="mb-10 text-4xl font-semibold tracking-tight sm:text-5xl">FAQs</h2>
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* CTA — envelope */}
      <section className="pb-20 sm:pb-28" aria-labelledby="sgem-cta">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[32px] bg-violet px-6 pb-14 pt-24 text-center sm:px-12">
            <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom_right,transparent_49.5%,rgba(255,255,255,0.12)_50%),linear-gradient(to_bottom_left,transparent_49.5%,rgba(255,255,255,0.12)_50%)] bg-[length:50%_100%] bg-[position:left,right] bg-no-repeat" />
            <h2 id="sgem-cta" className="text-4xl font-semibold tracking-tight sm:text-6xl">Let&apos;s write the first email.</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">A free review of your list, flows and deliverability, with the first fixes to make.</p>
            <ButtonLink href={href} size="lg" variant="dark" arrow className="mt-9">Audit my email</ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}

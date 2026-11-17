import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cityLangs, langMeta, localizedPath, type Lang, type LocalizedPage, type LocalizedUI } from "@/data/pages/i18n";
import { localized } from "@/data/pages/localized";
import { landingServices, type CityKey, type LandingServiceKey } from "@/data/pages";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { contactHref, LanguageMenu } from "../shared";

const arabicNum = ["١", "٢", "٣", "٤", "٥", "٦"];
const num = (lang: Lang, i: number) => (lang === "ar" ? arabicNum[i] : String(i + 1).padStart(2, "0"));

const fontClass: Partial<Record<Lang, string>> = { ar: "font-arabic", ja: "font-jp" };

/** Skyline silhouettes for the hero arch. */
const skylines: Partial<Record<CityKey, string>> = {
  dubai: "M0 120 V92 H30 V70 H44 V92 H70 V58 H82 V40 L88 8 L94 40 V58 H106 V92 H130 V76 H150 V60 H162 V92 H190 V66 H210 V50 H222 V92 H250 V80 H270 V92 H300 V120Z",
  singapore: "M0 120 V96 H24 V80 H40 V96 H62 V70 H74 V96 H98 V46 H110 V96 H122 V46 H134 V96 H146 V46 H158 V96 H186 V64 H200 V96 H222 V76 H240 V58 H252 V96 H276 V84 H300 V120Z M90 46 H170 V39 H90Z",
};

/**
 * Shared template for every translated city landing page (Arabic RTL, Japanese, Spanish, French).
 * These are language editions of the bespoke English pages, so they share one calm composition.
 */
export function LocalizedLandingPage({ lang, city, service, c, ui }: { lang: Lang; city: CityKey; service: LandingServiceKey; c: LocalizedPage; ui: LocalizedUI }) {
  const meta = langMeta[lang];
  const rtl = meta.dir === "rtl";
  const href = contactHref(city, service);
  const enPath = `/${city}/${service}`;
  const cityName = ui.cityName[city] ?? city;
  const crumbs = [
    { name: ui.home, path: "/" },
    { name: cityName, path: `/${city}` },
    { name: c.label, path: localizedPath(lang, city, service) },
  ];
  const Sep = rtl ? ChevronLeft : ChevronRight;
  const others = (cityLangs[city] ?? []).filter((l) => l !== lang);

  return (
    <div lang={lang} dir={meta.dir} className={fontClass[lang]}>
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-violet/25 blur-[160px]" />
          <div className="grid-bg noise-mask absolute inset-0" />
        </div>
        <div className="container-x relative">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label={ui.breadcrumbLabel}>
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                {crumbs.map((cr, i) => (
                  <li key={cr.path} className="flex items-center gap-1.5">
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page" className="text-white/90">{cr.name}</span>
                    ) : (
                      <>
                        <Link href={cr.path} className="hover:text-white">{cr.name}</Link>
                        <Sep aria-hidden className="size-3.5 opacity-50" />
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <LanguageMenu city={city} service={service} current={lang} />
          </div>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <h1 className={cn("font-semibold", lang === "ja" ? "text-[2.4rem] leading-[1.3] sm:text-5xl lg:text-[3.8rem]" : "text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-[4.4rem]", rtl && "leading-[1.15]")}>
                <span className="mb-6 block text-sm font-medium tracking-wide text-lime">{c.kicker}</span>
                {c.title}
                <br />
                <span className="text-gradient">{c.highlight}</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-[1.9] text-white/75">{c.lede}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow className={rtl ? "[&_svg]:-scale-x-100" : undefined}>{c.cta}</ButtonLink>
                <ButtonLink href="#l10n-faq" size="lg" variant="outline">{ui.faq}</ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.15} aria-hidden className="relative mx-auto w-full max-w-[400px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border border-white/15 bg-gradient-to-b from-violet/30 via-ink-2 to-ink">
                <div className="absolute inset-3 rounded-t-full border border-white/[0.07]" />
                <div className="absolute left-1/2 top-[22%] size-40 -translate-x-1/2 rounded-full bg-lime/15 blur-3xl" />
                <p className={cn("absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center font-bold leading-none text-white/[0.08]", cityName.length > 5 ? "text-[3.6rem]" : "text-[6rem]")}>{cityName}</p>
                <svg viewBox="0 0 300 120" className="absolute inset-x-0 bottom-0 w-full text-white/15" preserveAspectRatio="none">
                  <path d={skylines[city] ?? skylines.dubai} fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth=".6" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-y border-y border-line" aria-labelledby="l10n-pillars">
        <div className="container-x">
          <h2 id="l10n-pillars" className="max-w-2xl text-4xl font-semibold leading-[1.3] sm:text-5xl">{ui.approach}</h2>
          <div className={cn("mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10", rtl && "md:divide-x-reverse")}>
            {c.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className={cn("md:px-8", rtl ? "md:first:pr-0" : "md:first:pl-0")}>
                <p className="text-5xl font-light text-lime/80">{num(lang, i)}</p>
                <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-[1.9] text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" aria-labelledby="l10n-services">
        <div className="container-x">
          <h2 id="l10n-services" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{ui.services}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06} className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-ink-2 p-7 transition-colors hover:border-lime/40">
                <span className="text-xl text-lime">{num(lang, i)}</span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-[1.9] text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section-y bg-ink-2" aria-labelledby="l10n-steps">
        <div className="container-x text-center">
          <h2 id="l10n-steps" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">{ui.process}</h2>
          <ol className={cn("mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-3", c.steps.length > 5 ? "lg:grid-cols-6" : "lg:grid-cols-5")}>
            {c.steps.map((s, i) => (
              <li key={s}>
                <p className="text-3xl font-light text-white/30">{num(lang, i)}</p>
                <p className="mt-3 text-lg">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="l10n-faq" className="section-y" aria-labelledby="l10n-faq-h">
        <div className="container-x max-w-3xl">
          <h2 id="l10n-faq-h" className="mb-10 text-4xl font-semibold leading-[1.3] sm:text-5xl">{ui.faq}</h2>
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="pb-20 sm:pb-28" aria-labelledby="l10n-cta">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[32px] border border-line bg-[#0b0d15] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/40 blur-[120px]" />
            <div className="relative">
              <h2 id="l10n-cta" className="text-4xl font-semibold leading-[1.3] sm:text-6xl">{c.closing.title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.9] text-white/70">{c.closing.body}</p>
              <ButtonLink href={href} size="lg" className={cn("mt-9", rtl && "[&_svg]:-scale-x-100")} arrow>{c.cta}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED — same language first, then the same page in other languages */}
      <nav aria-label={ui.related} className="border-t border-line">
        <div className="container-x space-y-4 py-12">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {landingServices.filter((s) => s !== service).map((s) => {
              const page = localized[lang].pages[city]?.[s];
              return page ? <Link key={s} href={localizedPath(lang, city, s)} className="text-white/75 hover:text-lime">{page.label}</Link> : null;
            })}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" dir="ltr">
            <Link href={enPath} hrefLang="en" lang="en" className="hover:text-lime">English</Link>
            {others.map((l) => (
              <Link key={l} href={localizedPath(l, city, service)} hrefLang={l} lang={l} className="hover:text-lime">{langMeta[l].native}</Link>
            ))}
          </div>
        </div>
      </nav>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </div>
  );
}

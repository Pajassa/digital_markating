import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cityLangs, langMeta, localizedPath, type Lang, type LocalizedPage, type LocalizedUI } from "@/data/pages/i18n";
import { localized } from "@/data/pages/localized";
import { landingServices, type CityKey, type LandingServiceKey } from "@/data/pages";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { contactHref, LanguageMenu } from "../shared";
import { heroes, pillarStyles, serviceStyles, stepStyles, faqStyles, ctaStyles, type SectionProps } from "./sections";
import { recipeFor } from "./recipes";

const fontClass: Partial<Record<Lang, string>> = { ar: "font-arabic", ja: "font-jp" };


/**
 * Shared template for every translated city landing page (Arabic RTL, Japanese, Spanish, French).
 * Each page gets its own design recipe (recipes.ts) built from the blocks in sections.tsx.
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

  const r = recipeFor(lang, city, service);
  const Hero = heroes[r.hero];
  const Faq = faqStyles[r.faq];
  const Cta = ctaStyles[r.cta];
  const blocks = { pillars: pillarStyles[r.pillars], services: serviceStyles[r.services], steps: stepStyles[r.steps] };
  const crumbsNode = (
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
  );
  const sp: SectionProps = { lang, city, c, ui, href, cityName, rtl, crumbs: crumbsNode };

  return (
    <div lang={lang} dir={meta.dir} className={fontClass[lang]}>
      <Hero {...sp} />
      {r.order.map((b) => {
        const B = blocks[b];
        return <B key={b} {...sp} />;
      })}
      <Faq {...sp} />
      <Cta {...sp} />

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

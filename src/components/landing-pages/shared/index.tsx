import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, Globe } from "lucide-react";
import { cityLangs, langMeta, localizedPath, type Lang } from "@/data/pages/i18n";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";
import {
  cities,
  cityNames,
  coreServicePath,
  landingPages,
  landingPath,
  landingServices,
  type CityKey,
  type LandingServiceKey,
} from "@/data/pages";

/** Breadcrumb trail for a city landing page: Home › Services › {label}. */
export function LandingCrumbs({ city, service, tone = "dark", className }: { city: CityKey; service: LandingServiceKey; tone?: "dark" | "light"; className?: string }) {
  const page = landingPages[city][service];
  return (
    <div className={cn(tone === "light" && "[&_a:hover]:text-text-dark [&_[aria-current]]:text-text-dark [&_ol]:text-[#5b6075]", className)}>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <Breadcrumbs items={[{ name: cityNames[city], path: `/${city}` }, { name: page.label, path: landingPath(city, service) }]} />
        <LanguageMenu city={city} service={service} current="en" />
      </div>
    </div>
  );
}

/** Small honesty label for illustrative visuals (matches the site's "Sample data" chip). */
export function Illustrative({ label = "Illustrative", className }: { label?: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200", className)}>
      {label}
    </span>
  );
}

export const contactHref = (city: CityKey, service: LandingServiceKey) => `/contact?intent=audit&city=${city}&service=${service}`;

/** Internal-linking block shown at the end of every landing page (brand-level, like the footer). */
export function LocalLinks({ city, service }: { city: CityKey; service: LandingServiceKey }) {
  const sameCity = landingServices.filter((s) => s !== service);
  const otherCities = cities.filter((c) => c !== city);
  const core = coreServicePath[service];
  return (
    <nav aria-label="Related pages" className="border-t border-line">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <LinkCol title={`More in ${cityNames[city]}`}>
          {sameCity.map((s) => (
            <RelLink key={s} href={landingPath(city, s)}>{landingPages[city][s].label}</RelLink>
          ))}
        </LinkCol>
        <LinkCol title="Other cities">
          {otherCities.map((c) => (
            <RelLink key={c} href={landingPath(c, service)}>{landingPages[c][service].label}</RelLink>
          ))}
        </LinkCol>
        <LinkCol title="Go deeper">
          <RelLink href={core.href}>{core.label}</RelLink>
          <RelLink href="/case-studies">Case studies</RelLink>
          <RelLink href="/blog">Insights</RelLink>
        </LinkCol>
      </div>
    </nav>
  );
}

function LinkCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function RelLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center gap-1.5 text-white/80 transition-colors hover:text-lime">
        {children}
        <ArrowUpRight aria-hidden className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    </li>
  );
}

/** Keyword line rendered as the first line *inside* a page's H1, styled like an eyebrow. */
export function H1Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("mb-6 block font-mono text-xs font-medium not-italic normal-case leading-normal tracking-[0.18em]", className)}>
      {children}
    </span>
  );
}

/**
 * Language switcher shown on every city page that has translations.
 * Opens on hover (desktop) and on keyboard focus / tap (focus-within), no JS needed.
 */
export function LanguageMenu({ city, service, current }: { city: CityKey; service: LandingServiceKey; current: Lang | "en" }) {
  const list = cityLangs[city];
  if (!list) return null;
  const options: { code: Lang | "en"; href: string }[] = [
    { code: "en", href: landingPath(city, service) },
    ...list.map((l) => ({ code: l, href: localizedPath(l, city, service) })),
  ];
  return (
    <div className="group relative z-30" dir="ltr">
      <button
        type="button"
        aria-haspopup="true"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-ink/40 px-3.5 py-1.5 font-sans text-sm text-white/85 backdrop-blur transition-colors hover:border-lime group-focus-within:border-lime"
      >
        <Globe aria-hidden className="size-4 text-lime" />
        <span lang={current}>{langMeta[current].native}</span>
        <ChevronDown aria-hidden className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
        <span className="sr-only">: change language</span>
      </button>
      <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="min-w-48 overflow-hidden rounded-2xl border border-line bg-ink-2/95 p-1.5 shadow-2xl backdrop-blur">
          {options.map((o) => (
            <li key={o.code}>
              <Link
                href={o.href}
                hrefLang={o.code}
                lang={o.code}
                aria-current={o.code === current ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between gap-4 rounded-xl px-3 py-2 font-sans text-sm transition-colors",
                  o.code === current ? "bg-violet/25 text-white" : "text-white/80 hover:bg-white/[0.06] hover:text-white",
                )}
              >
                <span>
                  {langMeta[o.code].native}
                  {o.code !== "en" && <span className="ml-2 text-xs text-muted">{langMeta[o.code].english}</span>}
                </span>
                {o.code === current && <Check aria-hidden className="size-4 text-lime" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

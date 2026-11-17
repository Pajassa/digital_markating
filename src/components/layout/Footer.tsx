"use client";

import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { serviceLinks, companyLinks, legalLinks } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "./SocialIcon";
import { cities, landingPath, landingServices } from "@/data/pages/types";
import { cityLangs, localizedPath, type Lang } from "@/data/pages/i18n";
import { useSiteLang } from "@/config/chrome-i18n";

export function Footer() {
  const year = new Date().getFullYear();
  const { lang, t, dir } = useSiteLang();
  const tr = (links: { label: string; href: string }[]) =>
    links.map((l) => ({ ...l, label: t.nav[l.href as keyof typeof t.nav] ?? t.coreServices[l.href.replace("/services/", "")] ?? l.label }));
  // On a translated page, city links go to that language's edition when one exists.
  const cityHref = (city: (typeof cities)[number], s: (typeof landingServices)[number]) =>
    lang !== "en" && cityLangs[city]?.includes(lang as Lang) ? localizedPath(lang as Lang, city, s) : landingPath(city, s);
  return (
    <footer lang={lang} dir={dir} className="relative overflow-hidden border-t border-line bg-ink">
      <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo name={t.brand} />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">{t.footer.tagline || siteConfig.coreMessage}</p>
          {siteConfig.social.length > 0 && (
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {siteConfig.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${s.label}`}
                  className="grid size-10 place-items-center rounded-full border border-line text-white/70 transition-colors hover:border-lime hover:text-lime"
                >
                  <SocialIcon name={s.label} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          )}
        </div>
        <FooterCol title={t.footer.services} links={tr(serviceLinks)} className="lg:col-span-3" />
        <FooterCol title={t.footer.company} links={tr(companyLinks)} className="lg:col-span-2" />
        <div className="lg:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.footer.contact}</h2>
          <ul className="mt-5 space-y-3 text-[15px]">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 text-white/80 hover:text-white">
                <Mail aria-hidden className="size-4 text-lime" /> {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phoneE164}`} className="flex items-center gap-2.5 text-white/80 hover:text-white">
                <Phone aria-hidden className="size-4 text-lime" /> <span dir="ltr">{siteConfig.contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/80 hover:text-white">
                <MessageCircle aria-hidden className="size-4 text-lime" /> {t.footer.whatsapp}
              </a>
            </li>
            <li className="pt-1 text-sm text-muted">{lang === "en" ? siteConfig.contact.hours : t.footer.hours}</li>
          </ul>
        </div>
      </div>

      <nav aria-label={t.footer.locations} className="container-x border-t border-line py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <div key={city}>
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted"><Link href={`/${city}`} className="hover:text-white">{t.cities[city]}</Link></h2>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                {landingServices.map((s) => (
                  <li key={s}>
                    <Link href={cityHref(city, s)} className="text-white/70 transition-colors hover:text-white">{t.landingServices[s]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <div aria-hidden className="container-x select-none overflow-hidden">
        <p className="translate-y-[18%] text-center font-display text-[19vw] font-bold leading-none tracking-tight text-white/[0.035] lg:text-[13.5rem]">
          {t.brand}
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.legalName}. {t.footer.rights}</p>
          <ul className="flex gap-6">
            {legalLinks.map((l) => ({ ...l, label: l.href === "/terms" ? t.footer.terms : t.footer.privacy })).map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { label: string; href: string }[]; className?: string }) {
  return (
    <div className={className}>
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{title}</h2>
      <ul className="mt-5 space-y-3 text-[15px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/80 transition-colors hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

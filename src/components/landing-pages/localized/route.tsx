import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isCity, isLandingService } from "@/data/pages";
import { languageAlternates, langMeta, localizedPath, type Lang } from "@/data/pages/i18n";
import { getLocalized, localized, localizedRoutes } from "@/data/pages/localized";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata, faqSchema, localServiceSchema } from "@/lib/seo";
import { LocalizedLandingPage } from "./LocalizedLandingPage";

export type L10nParams = Promise<{ city: string; service: string }>;

async function resolve(lang: Lang, params: L10nParams) {
  const { city, service } = await params;
  if (!isCity(city) || !isLandingService(service)) return null;
  const c = getLocalized(lang, city, service);
  return c ? { city, service, c } : null;
}

export const l10nStaticParams = (lang: Lang) => localizedRoutes(lang);

export async function l10nMetadata(lang: Lang, params: L10nParams): Promise<Metadata> {
  const r = await resolve(lang, params);
  if (!r) return {};
  return buildMetadata({
    title: r.c.metaTitle,
    description: r.c.metaDescription,
    path: localizedPath(lang, r.city, r.service),
    locale: langMeta[lang].locale,
    languages: languageAlternates(r.city, r.service),
  });
}

export async function L10nPage({ lang, params, fontClass }: { lang: Lang; params: L10nParams; fontClass?: string }) {
  const r = await resolve(lang, params);
  if (!r) notFound();
  const { city, service, c } = r;
  const ui = localized[lang].ui;
  return (
    <div className={fontClass}>
      <LocalizedLandingPage lang={lang} city={city} service={service} c={c} ui={ui} />
      <JsonLd
        data={[
          localServiceSchema({ name: c.label, description: c.metaDescription, path: localizedPath(lang, city, service), city: ui.cityName[city] ?? city, country: ui.country[city] ?? "", inLanguage: lang }),
          faqSchema(c.faqs),
        ]}
      />
    </div>
  );
}

import type { CityKey, LandingServiceKey } from "../types";
import type { Lang, LocalizedPage, LocalizedSet, LocalizedUI } from "../i18n";
import { cityLangs } from "../i18n";
import { dubaiArabic } from "../dubai-ar";
import { jaPages, jaUI } from "./ja";
import { esPages, esUI } from "./es";
import { frPages, frUI } from "./fr";

const arUI: LocalizedUI = {
  home: "الرئيسية",
  cityName: { dubai: "دبي" },
  country: { dubai: "الإمارات العربية المتحدة" },
  breadcrumbLabel: "مسار التنقل",
  approach: "ما الذي يميّز نهجنا",
  services: "خدماتنا",
  process: "منهجية العمل",
  faq: "الأسئلة الشائعة",
  related: "صفحات ذات صلة",
  english: "النسخة الإنجليزية",
};

export const localized: Record<Lang, { ui: LocalizedUI; pages: LocalizedSet }> = {
  ar: { ui: arUI, pages: { dubai: dubaiArabic } },
  ja: { ui: jaUI, pages: jaPages },
  es: { ui: esUI, pages: esPages },
  fr: { ui: frUI, pages: frPages },
};

export function getLocalized(lang: Lang, city: CityKey, service: LandingServiceKey): LocalizedPage | undefined {
  if (!cityLangs[city]?.includes(lang)) return undefined;
  return localized[lang].pages[city]?.[service];
}

/** Every (city, service) route a language has. */
export const localizedRoutes = (lang: Lang) =>
  (Object.keys(cityLangs) as CityKey[])
    .filter((c) => cityLangs[c]!.includes(lang))
    .flatMap((city) => (Object.keys(localized[lang].pages[city] ?? {}) as LandingServiceKey[]).map((service) => ({ city, service })));

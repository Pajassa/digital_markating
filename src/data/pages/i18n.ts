import type { FAQ } from "@/types";
import type { CityKey, LandingServiceKey } from "./types";

/**
 * Language editions of the city landing pages.
 * English lives at /{city}/{service}; each translation lives at /{lang}/{city}/{service}.
 * Translations are written for the local reader, but should be reviewed by a native copywriter before launch.
 */
export const langs = ["ar", "ja", "es", "fr"] as const;
export type Lang = (typeof langs)[number];

/** Which languages each city offers, in menu order. */
export const cityLangs: Partial<Record<CityKey, readonly Lang[]>> = {
  dubai: ["ar", "ja", "es", "fr"],
  singapore: ["ja", "es", "fr"],
};

export const langMeta: Record<Lang | "en", { native: string; english: string; locale: string; dir: "ltr" | "rtl" }> = {
  en: { native: "English", english: "English", locale: "en_IN", dir: "ltr" },
  ar: { native: "العربية", english: "Arabic", locale: "ar_AE", dir: "rtl" },
  ja: { native: "日本語", english: "Japanese", locale: "ja_JP", dir: "ltr" },
  es: { native: "Español", english: "Spanish", locale: "es_ES", dir: "ltr" },
  fr: { native: "Français", english: "French", locale: "fr_FR", dir: "ltr" },
};

export const localizedPath = (lang: Lang, city: CityKey, service: LandingServiceKey) => `/${lang}/${city}/${service}`;

export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v);

/** hreflang map for one city/service: English + every translation. */
export function languageAlternates(city: CityKey, service: LandingServiceKey): Record<string, string> | undefined {
  const list = cityLangs[city];
  if (!list) return undefined;
  const en = `/${city}/${service}`;
  return { en, ...Object.fromEntries(list.map((l) => [l, localizedPath(l, city, service)])), "x-default": en };
}

/** Copy for one translated landing page. */
export interface LocalizedPage {
  label: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  highlight: string;
  lede: string;
  cta: string;
  pillars: { title: string; body: string }[];
  services: { title: string; body: string }[];
  steps: string[];
  faqs: FAQ[];
  closing: { title: string; body: string };
}

/** Interface strings for the shared translated page template. */
export interface LocalizedUI {
  home: string;
  cityName: Partial<Record<CityKey, string>>;
  country: Partial<Record<CityKey, string>>;
  breadcrumbLabel: string;
  approach: string;
  services: string;
  process: string;
  faq: string;
  related: string;
  english: string;
}

export type LocalizedSet = Partial<Record<CityKey, Record<LandingServiceKey, LocalizedPage>>>;

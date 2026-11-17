import { cityLangs, langs, type Lang } from "@/data/pages/i18n";
import { landingServices, type CityKey, type LandingServiceKey } from "@/data/pages";

export type Block = "pillars" | "services" | "steps";
export interface Recipe { hero: number; pillars: number; services: number; steps: number; faq: number; cta: number; order: Block[] }

const orders: Block[][] = [
  ["pillars", "services", "steps"],
  ["services", "pillars", "steps"],
  ["steps", "services", "pillars"],
  ["pillars", "steps", "services"],
];

/** Every translated page, in a fixed order. Its position decides its design. */
const keys = langs.flatMap((l) =>
  (Object.keys(cityLangs) as CityKey[]).filter((c) => cityLangs[c]!.includes(l)).flatMap((c) => landingServices.map((s) => `${l}/${c}/${s}`)),
);

/**
 * Design recipe for one translated page. Hero (7 styles) × pillar style is unique for every page,
 * and section order, services, steps, FAQ and CTA styles rotate on top, so no two pages share a design.
 */
export function recipeFor(lang: Lang, city: CityKey, service: LandingServiceKey): Recipe {
  const i = Math.max(0, keys.indexOf(`${lang}/${city}/${service}`));
  const h = i % 7;
  const q = Math.floor(i / 7);
  return {
    hero: h,
    pillars: (h + q) % 4,
    services: (h * 2 + q + 1) % 4,
    steps: (h + 2 * q + 3) % 4,
    faq: i % 2,
    cta: (h + 3 * q) % 4,
    order: orders[(h + q * 3) % 4],
  };
}

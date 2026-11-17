import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/data/services";
import { posts } from "@/data/blog";
import { allLandingRoutes, cities } from "@/data/pages";
import { languageAlternates, langs } from "@/data/pages/i18n";
import { localizedRoutes } from "@/data/pages/localized";

const abs = (m?: Record<string, string>) => (m ? { alternates: { languages: Object.fromEntries(Object.entries(m).map(([k, v]) => [k, absoluteUrl(v)])) } } : {});

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/services", "/case-studies", "/industries", "/blog", "/contact", "/privacy-policy", "/terms"];
  return [
    ...staticRoutes.map((p) => ({
      url: absoluteUrl(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.7,
    })),
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...cities.map((c) => ({ url: absoluteUrl(`/${c}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...allLandingRoutes().map((r) => ({
      url: absoluteUrl(r.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...abs(languageAlternates(r.city, r.service)),
    })),
    ...langs.flatMap((l) =>
      localizedRoutes(l).map(({ city, service }) => ({
        url: absoluteUrl(`/${l}/${city}/${service}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        ...abs(languageAlternates(city, service)),
      })),
    ),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}

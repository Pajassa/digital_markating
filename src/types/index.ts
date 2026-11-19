import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ServiceSlug =
  | "seo"
  | "google-ads"
  | "performance-marketing"
  | "local-seo"
  | "content-marketing"
  | "conversion-optimization";

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  capabilities: string[];
  heroHeadline: string;
  overview: string[];
  problems: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  benefits: string[];
  deliverables: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  /** true until real, client-approved case studies replace demo content */
  isDemo: boolean;
  summary: string;
  challenge: string;
  strategy: string;
  services: string[];
  metrics: CaseStudyMetric[];
  art: ArtVariant;
}

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  focus: string[];
  art: ArtVariant;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  photo?: string;
  /** true for placeholder copy that must not be presented as a real review */
  isSample: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingMinutes: number;
  author: string;
  art: ArtVariant;
  /** Paragraph and list text may contain inline links written as [label](/path or https://...) and **bold**. */
  content: {
    heading?: string;
    /** Short label for the table of contents (defaults to the heading). */
    toc?: string;
    paragraphs: string[];
    list?: string[];
    subsections?: { heading: string; paragraphs: string[]; list?: string[] }[];
    table?: { caption: string; head: string[]; rows: string[][] };
    timeline?: { date: string; title: string; text: string }[];
    stats?: { value: string; label: string }[];
    chart?: { caption: string; source: string; max: number; bars: { label: string; value: number }[] };
    practices?: { term: string; text: string }[];
    pills?: string[];
    after?: string[];
  }[];
  /** "In short" summary box shown above the article body. */
  /** Subtitle under the headline (defaults to the excerpt). */
  deck?: string;
  summary?: string[];
  tags?: string[];
  note?: string;
  citation?: boolean;
  faqs?: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
}

export type ArtVariant = "orbit" | "bars" | "waves" | "grid" | "rings" | "steps";

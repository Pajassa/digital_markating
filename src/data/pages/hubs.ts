import type { FAQ } from "@/types";
import type { CityKey, LandingServiceKey } from "./types";

/** City hub pages (/mumbai, /bangalore, /dubai, /singapore): the parent of each city's four service pages. */
export interface CityHub {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lede: string;
  sectors: string[];
  /** One line per service, written for this city */
  blurbs: Record<LandingServiceKey, string>;
  /** Heading + paragraphs explaining how we work in this city (keeps the hub from being thin content) */
  approachTitle: string;
  approach: string[];
  faqs: FAQ[];
}

export const cityHubs: Record<CityKey, CityHub> = {
  mumbai: {
    metaTitle: "Marketing Services in Mumbai: SEO, Social, Ads",
    metaDescription:
      "Tesoap Lab helps Mumbai brands in finance, real estate, hospitality, retail and e-commerce grow with SEO, social media, email and full-funnel digital marketing.",
    kicker: "Marketing services · Mumbai",
    title: "Digital growth for Mumbai’s busiest markets.",
    lede: "From Powai property launches to Lower Parel restaurants and Andheri advisory firms, Mumbai buyers search, scroll and compare fast. Pick the service you need, or let us plan them together.",
    sectors: ["Finance", "Real estate", "Hospitality", "Retail", "E-commerce"],
    blurbs: {
      seo: "Locality-led SEO that competes with portals on the searches that convert.",
      "digital-marketing-agency": "Search, Meta, SEO and CRO planned as one system with one report.",
      "social-media-marketing": "Reels, creators and paid social built for a two-second city.",
      "email-marketing": "Automated flows and campaigns that bring Mumbai customers back.",
    },
    approachTitle: "How we approach marketing in Mumbai",
    approach: [
      "Mumbai is one of the most competitive digital markets in India. Property portals, aggregators and national brands bid on the same searches your customers use, so we focus on the queries where a local business can genuinely win: locality, intent and trust. A Bandra clinic, a Thane developer and a Fort advisory firm each need a different mix of SEO, paid media and social.",
      "We start with a free audit of your website, Google Business Profile and campaigns, then build a 90-day plan that ties every channel to enquiries, site visits or sales. Reporting is monthly, in plain language, and shows what each rupee of spend returned.",
    ],
    faqs: [
      { question: "Do you work with small businesses in Mumbai?", answer: "Yes. We work with founder-led businesses as well as established brands. Budgets are set around your goals, and we tell you honestly when a channel is not worth the spend yet." },
      { question: "Which service should a Mumbai business start with?", answer: "Most start with SEO or paid search, because they capture people already looking for what you sell. Social media and email then build repeat demand and lower your cost per customer over time." },
      { question: "Can you help with Google Maps rankings in Mumbai?", answer: "Yes. Local SEO covers your Google Business Profile, reviews, locality landing pages and citations, so you appear in the map pack for searches near your branches." },
    ],
  },
  bangalore: {
    metaTitle: "Marketing Services in Bangalore: SEO & Social",
    metaDescription:
      "Tesoap Lab helps Bangalore SaaS, startups, IT services and B2B companies build pipeline with technical SEO, LinkedIn-led social, lifecycle email and paid media.",
    kicker: "Marketing services · Bangalore",
    title: "Pipeline-first marketing for Bangalore’s tech companies.",
    lede: "Bangalore’s startups and SaaS teams need marketing that engineers respect and finance can measure. Explore each service, built for B2B buyers and long sales cycles.",
    sectors: ["SaaS", "Startups", "IT services", "B2B", "Technology"],
    blurbs: {
      seo: "Technical SEO for JavaScript sites, docs and comparison pages.",
      "digital-marketing-agency": "Demand capture, demand creation and attribution tied to revenue.",
      "social-media-marketing": "Founder-led LinkedIn and product storytelling that drives demos.",
      "email-marketing": "Lifecycle journeys that move trial users to activation and expansion.",
    },
    approachTitle: "How we approach marketing in Bangalore",
    approach: [
      "Bangalore buyers are often technical, sceptical of hype and comparing several vendors at once. We build marketing that survives that scrutiny: technical SEO for product, docs and comparison pages, LinkedIn programmes led by your founders and engineers, and paid media measured against qualified pipeline rather than clicks.",
      "Every engagement starts with a free audit of your site, analytics and funnel. We then agree on the metrics that matter, such as demo requests, trial activation or sales-accepted leads, and report on them monthly so your finance team can see the return.",
    ],
    faqs: [
      { question: "Do you work with early-stage startups in Bangalore?", answer: "Yes. For seed and Series A teams we usually start with a focused plan: fix technical SEO, build a few high-intent pages and set up tracking, before scaling paid spend." },
      { question: "Can you market B2B SaaS products to global buyers from Bangalore?", answer: "Yes. Many Bangalore SaaS companies sell to the US, UK and Europe. We plan SEO, content and paid campaigns by target market, not just by where your office is." },
      { question: "How do you measure results for B2B companies?", answer: "We connect your ads, website analytics and CRM so we can report on pipeline and revenue, not only traffic. That makes it clear which channels deserve more budget." },
    ],
  },
  dubai: {
    metaTitle: "Marketing Services in Dubai: SEO, Social, Email",
    metaDescription:
      "Tesoap Lab helps Dubai real estate, hospitality, tourism, retail and professional services brands grow across the UAE, GCC and international markets.",
    kicker: "Marketing services · Dubai",
    title: "Bilingual, international growth from Dubai.",
    lede: "Residents, GCC neighbours, tourists and overseas investors all find Dubai brands differently, in English and in Arabic. Explore the services we run for each of them.",
    sectors: ["Real estate", "Hospitality", "Tourism", "Retail", "Professional services"],
    blurbs: {
      seo: "English and Arabic SEO for premium brands and international buyers.",
      "digital-marketing-agency": "Market-by-market planning across the UAE, GCC and beyond.",
      "social-media-marketing": "High-end bilingual campaigns for Instagram, TikTok and Snapchat.",
      "email-marketing": "Elegant newsletters and bilingual automated journeys.",
    },
    approachTitle: "How we approach marketing in Dubai",
    approach: [
      "Dubai brands sell to residents, visitors from across the GCC, tourists and overseas investors, often in English and Arabic at the same time. We plan each audience separately, with its own keywords, creative and budget, instead of translating one campaign and hoping it works everywhere.",
      "We begin with a free audit of your website, search visibility and campaigns across the markets you target. From there we build a plan that connects SEO, paid media, social and email to the enquiries and bookings your business actually needs, with clear monthly reporting.",
    ],
    faqs: [
      { question: "Do you create Arabic content for Dubai businesses?", answer: "Yes. We research Arabic keywords separately from English and write content for Arabic-speaking audiences rather than translating English pages word for word." },
      { question: "Can you target customers outside the UAE?", answer: "Yes. We regularly run campaigns for the wider GCC, Europe and Asia, with separate budgets and reporting for each market so you can see where growth comes from." },
      { question: "Which industries do you work with in Dubai?", answer: "Mostly real estate, hospitality, tourism, retail and professional services, where buyers research carefully and premium positioning matters." },
    ],
  },
  singapore: {
    metaTitle: "Marketing Services in Singapore: SEO & Social",
    metaDescription:
      "Tesoap Lab helps Singapore fintech, SaaS, professional services and consumer brands grow locally and across Asia-Pacific with SEO, paid media, social and email.",
    kicker: "Marketing services · Singapore",
    title: "Growth from Singapore, across Asia-Pacific.",
    lede: "Singapore companies sell to buyers on the island and across the region at the same time. Explore the services we run for both.",
    sectors: ["Fintech", "SaaS", "Professional services", "Logistics", "Consumer brands"],
    blurbs: {
      seo: "Local and APAC SEO with clean technical foundations.",
      "digital-marketing-agency": "Market-by-market planning across ASEAN, tied to pipeline.",
      "social-media-marketing": "Instagram, TikTok and LinkedIn, each with a clear job.",
      "email-marketing": "Consent-first newsletters and lifecycle automation.",
    },
    approachTitle: "How we approach marketing in Singapore",
    approach: [
      "Singapore is a small home market and a launch pad for the region. Most of the companies we work with sell to local buyers and to customers in Malaysia, Indonesia, the Philippines, Australia and beyond, so we plan SEO, paid media and content market by market, with clean technical foundations that scale across countries.",
      "We start with a free audit of your website, tracking and campaigns. Then we agree on the outcomes that matter, whether that is qualified leads, demo bookings or online sales, and report against them every month. Consent and data protection are built into our email and tracking work from day one.",
    ],
    faqs: [
      { question: "Do you help Singapore companies expand across Asia-Pacific?", answer: "Yes. We plan separate keyword research, landing pages and ad campaigns for each target country, so you can test and scale regional markets with clear numbers." },
      { question: "Is your email marketing PDPA-friendly?", answer: "We build consent-first sign-up flows and clear unsubscribe options, and we keep data handling transparent so your email programme respects Singapore's PDPA." },
      { question: "Which service gives the fastest results in Singapore?", answer: "Paid search usually produces leads fastest, while SEO builds lower-cost demand over a few months. Most clients run both, with social and email supporting retention." },
    ],
  },
};

/** Which core /services/[slug] pages link out to which city service pages. */
export const coreToLanding: Record<string, LandingServiceKey> = {
  seo: "seo",
  "local-seo": "seo",
  "performance-marketing": "digital-marketing-agency",
  "google-ads": "digital-marketing-agency",
  "content-marketing": "social-media-marketing",
  "conversion-optimization": "email-marketing",
};

import type { LandingBase } from "./types";

/* ------------------------------------------------------------------ */
/* 13. Singapore — SEO (transit-map / Swiss grid)                      */
/* ------------------------------------------------------------------ */
export const singaporeSeo = {
  label: "SEO in Singapore",
  metaTitle: "SEO Agency in Singapore | Local & APAC SEO",
  metaDescription:
    "SEO for Singapore businesses selling locally and across Asia-Pacific: technical SEO, keyword research, content strategy and international SEO that win enquiries.",
  lede: "Most Singapore companies sell to two audiences at once: buyers on the island and buyers across the region. We build a search structure that wins both, without the pages competing with each other.",
  lines: [
    { name: "Local line", color: "bg-lime", stops: ["Service pages", "Google Business", "Local reviews", "Enquiry"] },
    { name: "Regional line", color: "bg-violet", stops: ["Market hubs", "hreflang", "Regional guides", "Pipeline"] },
    { name: "Authority line", color: "bg-white", stops: ["Expert content", "Digital PR", "Citations", "Trust"] },
  ],
  split: [
    { aspect: "Who's searching", local: "Residents and businesses in Singapore", regional: "Buyers in Malaysia, Indonesia, Australia and beyond" },
    { aspect: "Typical query", local: "accounting firm tanjong pagar", regional: "company incorporation singapore for foreigners" },
    { aspect: "Page type", local: "Service and location pages", regional: "Market hubs and in-depth guides" },
    { aspect: "Proof that ranks", local: "Reviews, Maps, local citations", regional: "Expertise, authorship, earned links" },
  ],
  services: [
    { title: "Technical SEO", body: "Speed, crawlability, indexation and structured data, fixed in order of impact." },
    { title: "Keyword research", body: "Local and regional demand mapped by intent, with one page owning each cluster." },
    { title: "Content strategy", body: "Topic pillars and a publishing cadence suited to finance, tech and professional services." },
    { title: "International SEO", body: "hreflang, market targeting and site structure for APAC expansion." },
    { title: "Local SEO", body: "Google Business Profile, reviews workflow and location pages." },
  ],
  markets: ["Singapore", "Malaysia", "Indonesia", "Philippines", "Thailand", "Vietnam", "Australia", "Hong Kong"],
  process: ["Discover", "Audit", "Map", "Build", "Report"],
  faqs: [
    { question: "How long does SEO take to work in Singapore?", answer: "Technical fixes are usually reflected within weeks. Content typically starts to show results in three to six months, depending on how competitive your category is and the state of the site." },
    { question: "Can you run SEO for other Asian markets from Singapore?", answer: "Yes. We separate pages and measurement by market and expand in order of priority, so each country has a clear owner page and its own reporting." },
    { question: "Do we need separate pages for Singapore and regional buyers?", answer: "Usually, yes. Local and regional searchers ask different questions. Giving each audience its own page stops them competing and makes each page more relevant." },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 14. Singapore — Digital marketing (regional command board)          */
/* ------------------------------------------------------------------ */
export const singaporeDigital = {
  label: "Digital Marketing in Singapore",
  metaTitle: "Digital Marketing Agency Singapore | APAC",
  metaDescription:
    "Digital marketing for companies growing from Singapore into ASEAN and Asia-Pacific. Search, paid media and analytics planned market by market and tied to revenue.",
  lede: "Singapore is where many companies run Asia from. We plan search, paid media and measurement market by market, then report it all against pipeline and revenue in one place.",
  zones: [
    { city: "Singapore", tz: "GMT+8" },
    { city: "Kuala Lumpur", tz: "GMT+8" },
    { city: "Jakarta", tz: "GMT+7" },
    { city: "Bangkok", tz: "GMT+7" },
    { city: "Manila", tz: "GMT+8" },
  ],
  channels: [
    { name: "Search", share: 34, body: "Capture demand that already exists, on Google and Bing." },
    { name: "LinkedIn", share: 22, body: "Reach decision makers by role, seniority and company." },
    { name: "Meta", share: 18, body: "Create demand with video and retargeting." },
    { name: "SEO & content", share: 16, body: "Compound visibility that lowers cost per lead over time." },
    { name: "Email", share: 10, body: "Nurture leads until they are ready to talk." },
  ],
  funnel: [
    { stage: "Reach", body: "The right accounts and people see you." },
    { stage: "Engage", body: "They read, watch and come back." },
    { stage: "Convert", body: "They book a demo or send an enquiry." },
    { stage: "Close", body: "Sales turns qualified leads into revenue." },
  ],
  sectors: ["Fintech", "SaaS", "Professional services", "Logistics", "Education", "Healthcare", "E-commerce", "Real estate"],
  faqs: [
    { question: "Do you work with B2B companies in Singapore?", answer: "Yes. We combine LinkedIn, search and content, and track leads from first enquiry to qualified opportunity in your CRM." },
    { question: "Can you help us expand into other ASEAN markets?", answer: "Yes. We recommend prioritising markets, testing with a controlled budget and expanding once a market shows it can pay back." },
    { question: "Is there a minimum budget?", answer: "There is no fixed minimum. We propose a budget that is large enough to learn from, based on your goals and the number of markets." },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 15. Singapore — Social media (menu board)                           */
/* ------------------------------------------------------------------ */
export const singaporeSocial = {
  label: "Social Media Marketing in Singapore",
  metaTitle: "Social Media Marketing Agency in Singapore",
  metaDescription:
    "Social media marketing for Singapore brands: strategy, content production, community management and paid social across Instagram, TikTok and LinkedIn.",
  lede: "Singapore audiences are multilingual, multicultural and quick to scroll past anything generic. We give each platform a clear job and make content worth stopping for.",
  menu: [
    { code: "01", platform: "Instagram", role: "Discovery & desire", note: "Reels, carousels, Stories" },
    { code: "02", platform: "TikTok", role: "Reach & culture", note: "Trends, creators, series" },
    { code: "03", platform: "LinkedIn", role: "Trust & leads", note: "Founder posts, company page" },
    { code: "04", platform: "YouTube", role: "Depth & search", note: "Explainers, Shorts" },
    { code: "05", platform: "Paid social", role: "Scale what works", note: "Boost proven content" },
  ],
  pillars: [
    { title: "Behind the scenes", body: "The people and process that make your product.", tone: "bg-lime text-ink" },
    { title: "Explain it simply", body: "Short answers to the questions customers actually ask.", tone: "bg-violet text-white" },
    { title: "Proof", body: "Real customer moments, shared with permission.", tone: "bg-ink-3 text-white" },
    { title: "Moments", body: "Festive seasons, launches and local events.", tone: "bg-white text-ink" },
  ],
  week: [
    { day: "Mon", post: "Carousel" },
    { day: "Tue", post: "Reel" },
    { day: "Wed", post: "LinkedIn post" },
    { day: "Thu", post: "Reel" },
    { day: "Fri", post: "Stories" },
    { day: "Sat", post: "Creator collab" },
    { day: "Sun", post: "Rest" },
  ],
  services: [
    { title: "Content strategy", body: "Pillars, tone of voice and a monthly calendar." },
    { title: "Reels & video", body: "Scripting, shoots and vertical edits." },
    { title: "Community management", body: "Comments and DMs handled within agreed times." },
    { title: "Creator partnerships", body: "Shortlists, briefs, contracts and usage rights." },
    { title: "Paid social", body: "Meta, TikTok and LinkedIn campaigns built on proven posts." },
    { title: "Reporting", body: "Monthly results tied to enquiries and sales." },
  ],
  faqs: [
    { question: "Which platforms should a Singapore brand focus on?", answer: "It depends on who you sell to. Consumer brands usually lead with Instagram and TikTok; B2B companies get more from LinkedIn. We recommend a mix after looking at your audience and goals." },
    { question: "Do you manage LinkedIn for founders?", answer: "Yes. We help founders and leaders post consistently, from interviews and drafting to scheduling and replying." },
    { question: "How often should we post?", answer: "Consistency matters more than volume. We agree a cadence you can sustain and adjust it based on what your audience responds to." },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 16. Singapore — Email marketing (consent-first inbox)               */
/* ------------------------------------------------------------------ */
export const singaporeEmail = {
  label: "Email Marketing in Singapore",
  metaTitle: "Email Marketing Agency in Singapore",
  metaDescription:
    "Email marketing for Singapore businesses: consent-first newsletters, lifecycle automation, segmentation and deliverability that drive purchases and repeat business.",
  lede: "Email is one of the few channels you actually own. We build consent-first programmes that turn subscribers into customers, and customers into regulars.",
  inbox: [
    { from: "Your brand", subject: "Welcome! Here's what happens next", tag: "Welcome" },
    { from: "Your brand", subject: "You left something in your cart", tag: "Recovery" },
    { from: "Your brand", subject: "New this month, picked for you", tag: "Newsletter" },
    { from: "Your brand", subject: "Running low? Reorder in one tap", tag: "Replenish" },
    { from: "Your brand", subject: "We miss you. Here's what's new", tag: "Win-back" },
  ],
  lifecycle: [
    { stage: "Subscribe", body: "Clear opt-in that says what people will receive and how often." },
    { stage: "Welcome", body: "A short series that introduces the brand and sets expectations." },
    { stage: "First purchase", body: "Helpful nudges, social proof and answers to common objections." },
    { stage: "Repeat", body: "Replenishment, cross-sell and loyalty messages based on behaviour." },
    { stage: "Win-back", body: "A respectful attempt to re-engage, then a clean sunset." },
  ],
  consent: [
    "Clear, unticked opt-in at every sign-up point",
    "Purpose of collection stated at sign-up",
    "One-click unsubscribe in every email",
    "Inactive contacts reviewed and removed",
    "Sender authentication (SPF, DKIM, DMARC) set up",
  ],
  services: [
    { title: "Newsletters", body: "Planning, copy, design and sending." },
    { title: "Lifecycle automation", body: "Welcome, cart, post-purchase and win-back flows." },
    { title: "Segmentation", body: "Messages based on interests and purchase history." },
    { title: "Deliverability", body: "Authentication, list hygiene and inbox placement." },
  ],
  faqs: [
    { question: "Do you follow Singapore's PDPA for email marketing?", answer: "We design opt-in, unsubscribe and data handling around the PDPA's consent and purpose principles. For legal advice on your specific situation, please speak to a qualified adviser." },
    { question: "Can we keep our current email platform?", answer: "Usually, yes. We work in Klaviyo, Mailchimp, HubSpot and other common platforms." },
    { question: "How often should we email our list?", answer: "It depends on your category and audience. We start with a moderate cadence and adjust based on engagement and unsubscribes." },
  ],
} satisfies LandingBase & Record<string, unknown>;

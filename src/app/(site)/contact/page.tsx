import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig, whatsappLink } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Get a Free Growth Audit",
  description: "Tell us about your business and goals. We'll review your website and campaigns and share the biggest digital growth opportunities, free.",
  path: "/contact",
});

const expect = [
  "A strategist reviews your enquiry within one business day",
  "A 30-minute discovery call about goals and constraints",
  "A written audit with prioritised opportunities, free",
];

const faqs = [
  { question: "Is the growth audit really free?", answer: "Yes. We review your website, search visibility and any running campaigns, then share a written list of prioritised opportunities. There is no obligation to work with us afterwards." },
  { question: "What should I include in my enquiry?", answer: "Your website, the services you are interested in, your main goal (more leads, sales or bookings) and a rough monthly budget. The more context you share, the more specific our audit can be." },
  { question: "Which cities and countries do you work in?", answer: "We work with businesses across India, including Mumbai and Bangalore, and internationally in Dubai, Singapore and other markets. Calls happen online, so location is rarely a barrier." },
  { question: "How soon can we start?", answer: "Most projects begin within one to two weeks of agreeing on scope. Urgent campaign fixes can often start sooner." },
  { question: "Do you need long-term contracts?", answer: "No. We usually suggest a three-month starting period, because SEO and paid media need time to show reliable results, and then continue month to month." },
];

export default function ContactPage() {
  const c = siteConfig.contact;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Let's talk"
        title={<>Let&apos;s find your next <span className="text-gradient">growth lever.</span></>}
        description="Tell us where you are and where you want to be. We'll come back with an honest view of what will move the needle."
      />
      <section className="pb-24">
        <div className="container-x grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Suspense fallback={<div className="h-[720px] rounded-[28px] border border-line bg-ink-2" />}>
            <ContactForm />
          </Suspense>
          <aside className="space-y-5">
            <div className="rounded-[28px] border border-line bg-ink-2 p-7">
              <h2 className="text-xl font-semibold">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {expect.map((e, i) => (
                  <li key={e} className="flex gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-violet/20 font-mono text-xs text-violet-soft">{i + 1}</span>
                    <span className="text-white/80">{e}</span>
                  </li>
                ))}
              </ol>
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-[28px] bg-[#25D366] p-7 text-ink transition-transform hover:-translate-y-0.5">
              <MessageCircle aria-hidden className="size-8" />
              <span>
                <span className="block text-lg font-semibold">Prefer WhatsApp?</span>
                <span className="block text-sm opacity-80">Message us directly, usually the fastest way to reach us.</span>
              </span>
            </a>
            <div className="space-y-4 rounded-[28px] border border-line bg-ink-2 p-7 text-[15px]">
              <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-white/85 hover:text-white"><Mail aria-hidden className="size-5 text-lime" /> {c.email}</a>
              <a href={`tel:${c.phoneE164}`} className="flex items-center gap-3 text-white/85 hover:text-white"><Phone aria-hidden className="size-5 text-lime" /> {c.phoneDisplay}</a>
              <p className="flex items-center gap-3 text-muted"><Clock aria-hidden className="size-5 text-lime" /> {c.hours}</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="pb-24" aria-labelledby="contact-faq">
        <div className="container-x max-w-4xl">
          <h2 id="contact-faq" className="text-3xl font-semibold sm:text-4xl">Before you get in touch</h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <div key={f.question} className="py-5">
                <dt className="font-semibold text-white">{f.question}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}

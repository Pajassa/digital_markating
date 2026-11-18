import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoverArt } from "@/components/ui/CoverArt";
import { BlogCard } from "@/components/ui/BlogCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { articleSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { TableOfContents, ShareButton } from "@/components/blog/ArticleTools.client";

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const linkClass = "font-medium text-lime underline decoration-lime/40 underline-offset-4 transition-colors hover:decoration-lime";

/** Renders inline [label](href) links and **bold** inside article text. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/")
            ? <Link key={i} href={href} className={linkClass}>{label}</Link>
            : <a key={i} href={href} target="_blank" rel="noopener" className={linkClass}>{label}</a>;
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-white">{bold[1]}</strong>;
        return part;
      })}
    </>
  );
}

function Paras({ items }: { items: string[] }) {
  return <div className="space-y-5">{items.map((p) => <p key={p}><Rich text={p} /></p>)}</div>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2 border-l-2 border-lime pl-6">
      {items.map((li) => <li key={li}><Rich text={li} /></li>)}
    </ul>
  );
}

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const meta = buildMetadata({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, type: "article", publishedTime: p.date });
  // Long headlines would be truncated in search results once " | Tesoap Lab" is appended — drop the suffix for those.
  return p.title.length > 47 ? { ...meta, title: { absolute: p.title } } : meta;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const others = posts.filter((p) => p.slug !== post.slug);
  const related = others.slice(0, 3);
  const latest = [...others].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  const toc = [
    ...post.content.filter((b) => b.heading).map((b) => ({ id: slugify(b.heading!), label: b.heading! })),
    ...(post.faqs ? [{ id: "faq", label: "FAQ" }] : []),
    ...(post.sources ? [{ id: "sources", label: "Sources" }] : []),
  ];

  return (
    <>
      <article>
        <header className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
          <div aria-hidden className="grid-bg noise-mask absolute inset-0" />
          <div className="container-x relative max-w-4xl">
            <Breadcrumbs items={[{ name: "Insights", path: "/blog" }, { name: post.title, path }]} />
            <p className="mt-10 font-mono text-xs text-muted">
              <span className="rounded-full bg-lime px-3 py-1 text-ink">{post.category}</span>
              <span className="ml-3"><time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read · {post.author}</span>
            </p>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">{post.excerpt}</p>
          </div>
        </header>
        <div className="container-x max-w-5xl">
          <CoverArt variant={post.art} label={`Featured illustration for “${post.title}”`} className="aspect-[21/9] rounded-[28px]" />
        </div>
        <div className="container-x max-w-[1320px] py-12 sm:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-muted">Tags</span>
              <Link href="/blog" className="rounded-lg bg-violet/25 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-violet-soft transition-colors hover:bg-violet/40">{post.category}</Link>
            </div>
            <ShareButton title={post.title} />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_300px]">
            {toc.length > 0 && (
              <div className="lg:sticky lg:top-28 lg:self-start">
                <TableOfContents items={toc} />
              </div>
            )}

            <div className="min-w-0">
              <div className="space-y-10 text-lg leading-[1.8] text-white/85">
                {post.content.map((block, i) => (
                  <section key={i}>
                    {block.heading && <h2 id={slugify(block.heading)} className="mb-4 scroll-mt-28 text-2xl font-semibold text-white sm:text-3xl">{block.heading}</h2>}
                    <Paras items={block.paragraphs} />
                    {block.list && <List items={block.list} />}
                    {block.subsections?.map((sub) => (
                      <div key={sub.heading} className="mt-8">
                        <h3 className="mb-3 text-xl font-semibold text-white">{sub.heading}</h3>
                        <Paras items={sub.paragraphs} />
                        {sub.list && <List items={sub.list} />}
                      </div>
                    ))}
                    {block.table && (
                      <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-ink-2" role="region" aria-label={block.table.caption} tabIndex={0}>
                        <table className="w-full min-w-[520px] text-left text-base leading-snug">
                          <caption className="px-5 pt-4 pb-2 text-left font-display font-semibold text-white">{block.table.caption}</caption>
                          <thead>
                            <tr>{block.table.head.map((h) => <th key={h} scope="col" className="border-t border-line px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted">{h}</th>)}</tr>
                          </thead>
                          <tbody>
                            {block.table.rows.map((row) => (
                              <tr key={row[0]}>
                                {row.map((cell, ci) => ci === 0
                                  ? <th key={ci} scope="row" className="border-t border-line px-5 py-3 align-top font-normal text-muted">{cell}</th>
                                  : <td key={ci} className="border-t border-line px-5 py-3 align-top text-white">{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {block.after && <div className="mt-5"><Paras items={block.after} /></div>}
                  </section>
                ))}
                {post.faqs && (
                  <section>
                    <h2 id="faq" className="mb-4 scroll-mt-28 text-2xl font-semibold text-white sm:text-3xl">Frequently asked questions</h2>
                    <div className="divide-y divide-line border-y border-line">
                      {post.faqs.map((f) => (
                        <details key={f.question} className="group py-4">
                          <summary className="cursor-pointer font-display text-lg font-semibold text-white">{f.question}</summary>
                          <p className="mt-3 text-base">{f.answer}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}
                {post.sources && (
                  <section>
                    <h2 id="sources" className="mb-4 scroll-mt-28 text-2xl font-semibold text-white sm:text-3xl">References and sources</h2>
                    <ol className="list-decimal space-y-4 pl-6 text-base">
                      {post.sources.map((src) => (
                        <li key={src.url}>
                          {src.label}
                          <a href={src.url} target="_blank" rel="noopener" className="mt-1 block break-all font-mono text-xs text-lime hover:underline">{src.url.replace(/^https?:\/\/(www\.)?/, "")}</a>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
              </div>
              <aside className="mt-16 rounded-[var(--radius-card)] border border-line bg-ink-2 p-8">
                <p className="font-display text-2xl font-semibold">Want this applied to your business?</p>
                <p className="mt-2 text-muted">Get a free growth audit with prioritised recommendations for your website and campaigns.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/contact?intent=audit" arrow>Get a free growth audit</ButtonLink>
                  <ButtonLink href="/services/seo" variant="outline">Explore our SEO services</ButtonLink>
                </div>
              </aside>
            </div>

            <aside aria-labelledby="latest-posts" className="lg:col-span-2 xl:sticky xl:top-28 xl:col-span-1 xl:self-start">
              <p id="latest-posts" className="font-display text-xl font-semibold">Latest blogs</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {latest.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group flex gap-4 rounded-2xl border border-line bg-ink-2 p-3 transition-colors hover:border-violet/60">
                      <CoverArt variant={p.art} label={`Thumbnail for “${p.title}”`} className="aspect-square w-20 shrink-0 rounded-xl" />
                      <span className="min-w-0">
                        <span className="font-mono text-[11px] text-lime">{p.category}</span>
                        <span className="mt-1 block font-medium leading-snug group-hover:text-violet-soft">{p.title}</span>
                        <time dateTime={p.date} className="mt-1 block text-xs text-muted">{formatDate(p.date)}</time>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </article>

      <section className="section-y bg-paper text-text-dark" aria-labelledby="related-posts">
        <div className="container-x">
          <h2 id="related-posts" className="text-3xl font-semibold sm:text-4xl">Keep reading</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
      <FinalCTA />
      <JsonLd data={articleSchema({ title: post.title, description: post.excerpt, path, date: post.date, author: post.author })} />
      {post.faqs && <JsonLd data={faqSchema(post.faqs)} />}
    </>
  );
}

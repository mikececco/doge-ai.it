import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import CtaFinale from "@/components/sections/CtaFinale";
import RelatedContent from "@/components/sections/RelatedContent";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { getLinksForBlog, getStrategicLinksForBlog } from "@/lib/internal-links";
import { SETTORI } from "@/lib/settori-data";
import RisorseCorrelate from "@/components/sections/RisorseCorrelate";
import ReadingProgress from "./ReadingProgress";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://doge-ai.it/blog/${post.slug}`;
  const ogImage = `https://doge-ai.it${post.image ?? "/og/default.jpg"}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.date,
      authors: ["IL DOGE DI VENEZIA"],
      siteName: "IL DOGE DI VENEZIA",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  "AI & PMI": "bg-giallo text-nero",
  Automazione: "bg-bianco/20 text-bianco",
  Manifattura: "bg-giallo text-nero",
  Tecnologia: "bg-bianco/20 text-bianco",
  Strategia: "bg-giallo text-nero",
  Compliance: "bg-bianco/20 text-bianco",
  "Analisi Dati e Intelligenza Artificiale": "bg-giallo text-nero",
  "Ottimizzazione Flussi e Automazione Processi": "bg-bianco/20 text-bianco",
  "Marketing e Acquisizione Clienti": "bg-giallo text-nero",
  "Supporto e Relazione con il Cliente": "bg-bianco/20 text-bianco",
  "Ottimizzazione Finanziaria e Tesoreria": "bg-giallo text-nero",
  "Partnership e Canale AI": "bg-bianco/20 text-bianco",
};

function getCategoryClass(category: string) {
  return CATEGORY_COLORS[category] ?? "bg-bianco/20 text-bianco";
}

function getSectorContext(slug: string) {
  // Check if this is a parent sector article
  const parentSector = SETTORI.find((s) => s.slug === slug);
  if (parentSector && parentSector.subSectors.length > 0) {
    return { type: "parent" as const, sector: parentSector, parent: parentSector };
  }
  // Check if this is a niche sub-sector article
  for (const sector of SETTORI) {
    const sub = sector.subSectors.find((s) => s.slug === slug);
    if (sub) {
      return { type: "niche" as const, sector, parent: sector, currentSub: sub };
    }
  }
  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const sectorCtx = getSectorContext(slug);
  const url = `https://doge-ai.it/blog/${post.slug}`;
  const ogImage = `https://doge-ai.it${post.image ?? "/og/default.jpg"}`;

  const jsonLdGraph: Record<string, unknown>[] = [
      {
        "@type": "Article",
        "@id": url,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        inLanguage: "it-IT",
        keywords: post.tags.join(", "),
        author: {
          "@type": "Organization",
          name: "IL DOGE DI VENEZIA",
          url: "https://doge-ai.it",
        },
        publisher: {
          "@type": "Organization",
          name: "IL DOGE DI VENEZIA",
          url: "https://doge-ai.it",
          logo: {
            "@type": "ImageObject",
            url: "https://doge-ai.it/icon/logoB-noBG.png",
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        image: ogImage,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".tldr", "h1"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://doge-ai.it",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://doge-ai.it/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ];

  if (post.faq && post.faq.length > 0) {
    jsonLdGraph.push({
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  // HowTo schema for the Bolt prototyping article
  if (post.slug === "bolt-prototipazione-rapida-ai-manager") {
    jsonLdGraph.push({
      "@type": "HowTo",
      name: "Come creare un prototipo AI con Bolt in 10 minuti",
      description: "Guida passo-passo per product manager: da idea a prototipo funzionante con Bolt AI, senza competenze di programmazione.",
      totalTime: "PT10M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "0" },
      tool: [{ "@type": "HowToTool", name: "Bolt (bolt.new)" }],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Definisci il problema e il flusso utente",
          text: "Scrivi un brief chiaro: quale problema risolve il prototipo, chi lo userà, e qual è il flusso principale. Più sei specifico, migliore sarà l'output di Bolt.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Apri Bolt e descrivi il prototipo",
          text: "Vai su bolt.new e descrivi in linguaggio naturale cosa vuoi costruire. Includi il contesto visivo, le funzionalità chiave e i criteri di successo.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Itera e raffina con feedback",
          text: "Bolt genera il prototipo in pochi minuti. Rivedi il risultato, dai feedback specifici e chiedi modifiche fino a ottenere una demo presentabile.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Presenta al management per approvazione",
          text: "Usa il prototipo funzionante per mostrare l'idea al leadership. Un demo interattivo è più convincente di qualsiasi slide deck.",
        },
      ],
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph,
  };

  // Extract h2 headings for ToC
  const h2Re = /<h2>(.*?)<\/h2>/g;
  const h2Matches: RegExpExecArray[] = [];
  let h2Match: RegExpExecArray | null;
  while ((h2Match = h2Re.exec(post.content)) !== null) {
    h2Matches.push(h2Match);
  }
  const tocItems = h2Matches.map((m) => ({
    text: m[1],
    id: m[1]
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60),
  }));

  // Inject IDs into h2 tags for anchor links
  let contentWithIds = post.content;
  h2Matches.forEach((m) => {
    const id = m[1]
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60);
    contentWithIds = contentWithIds.replace(
      `<h2>${m[1]}</h2>`,
      `<h2 id="${id}">${m[1]}</h2>`
    );
  });

  // Mid-article CTA (insert after 3rd h2 if it exists)
  const midCtaHtml = `
    <div class="mid-article-cta">
      <p class="mid-cta-title">Vuoi applicare questo nella tua azienda?</p>
      <p class="mid-cta-body">In IL DOGE DI VENEZIA affianchiamo le PMI italiane in ogni fase della trasformazione AI. La prima conversazione è gratuita.</p>
      <a href="/contatti" class="mid-cta-btn">Parlaci del tuo progetto</a>
    </div>
  `;

  if (tocItems.length >= 3) {
    const thirdH2 = h2Matches[2];
    contentWithIds = contentWithIds.replace(
      `<h2 id="${tocItems[2].id}">${thirdH2[1]}</h2>`,
      `${midCtaHtml}<h2 id="${tocItems[2].id}">${thirdH2[1]}</h2>`
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />

      {/* Hero */}
      <section data-navbar-theme="dark" className="bg-black text-bianco pt-40 pb-16">
        <div className="container-site">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-bianco/50 mb-8">
            <Link href="/" className="hover:text-bianco transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-bianco transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-bianco/70 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          <span
            className={`inline-block text-label uppercase px-2 py-1 text-xs font-semibold tracking-wider ${getCategoryClass(post.category)}`}
          >
            {post.category}
          </span>

          <h1 className="text-hero uppercase mt-4 max-w-4xl">{post.title}</h1>

          <p className="text-subheadline text-bianco/70 mt-6 max-w-[640px]">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4 text-sm text-bianco/50">
            <span>IL DOGE DI VENEZIA</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} di lettura</span>
          </div>
        </div>
      </section>

      {/* Article + ToC */}
      <section data-navbar-theme="light" className="bg-bianco py-20" id="article-body">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-20 items-start">
            {/* Article body */}
            <article
              className="blog-prose max-w-[720px]"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Table of Contents (sticky sidebar) */}
            {tocItems.length > 0 && (
              <aside className="hidden lg:block sticky top-24 pl-6 border-l border-grigio-chiaro">
                <p className="text-label uppercase text-grigio-medio tracking-widest mb-4">
                  Indice
                </p>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-grigio-scuro hover:text-nero transition-colors leading-snug py-1 border-l-2 border-grigio-chiaro hover:border-giallo pl-3"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>

                {/* Sidebar CTA */}
                <div className="mt-8 border border-nero p-5">
                  <p className="text-sm font-semibold text-nero leading-snug">
                    Vuoi applicare questo nella tua azienda?
                  </p>
                  <p className="text-sm text-grigio-scuro mt-2 leading-relaxed">
                    La prima conversazione con IL DOGE DI VENEZIA è gratuita.
                  </p>
                  <Button variant="primary" href="/contatti" className="mt-4">
                    Contattaci →
                  </Button>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Sub-sector navigation */}
      {sectorCtx && (
        <section data-navbar-theme="light" className="bg-bianco border-t border-grigio-chiaro py-16">
          <div className="container-site max-w-[720px]">
            {sectorCtx.type === "parent" ? (
              <>
                <p className="text-label uppercase text-grigio-medio tracking-widest mb-6">
                  Sotto-settori: {sectorCtx.sector.title}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sectorCtx.sector.subSectors.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/blog/${sub.slug}`}
                      className="group border border-grigio-chiaro hover:border-nero p-4 transition-colors"
                    >
                      <p className="text-sm font-semibold text-nero group-hover:text-giallo-hover transition-colors">
                        {sub.title}
                      </p>
                      <p className="text-xs text-grigio-medio mt-1">{sub.description}</p>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Link
                  href={`/blog/${sectorCtx.parent.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-grigio-scuro hover:text-nero transition-colors mb-6"
                >
                  <span>&larr;</span>
                  Torna a: {sectorCtx.parent.title}
                </Link>
                <p className="text-label uppercase text-grigio-medio tracking-widest mb-4">
                  Altri sotto-settori
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sectorCtx.parent.subSectors
                    .filter((s) => s.slug !== slug)
                    .map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/blog/${sub.slug}`}
                        className="group border border-grigio-chiaro hover:border-nero p-4 transition-colors"
                      >
                        <p className="text-sm font-semibold text-nero group-hover:text-giallo-hover transition-colors">
                          {sub.title}
                        </p>
                        <p className="text-xs text-grigio-medio mt-1">{sub.description}</p>
                      </Link>
                    ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Related Posts */}
      {related.length > 0 && (
        <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
          <div className="container-site">
            <Label>LEGGI ANCHE</Label>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-bianco border border-grigio-chiaro hover:border-nero transition-colors p-6 flex flex-col"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-grigio-medio">
                    {rp.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-nero leading-snug group-hover:text-grigio-scuro transition-colors">
                    {rp.title}
                  </h3>
                  <div className="mt-4 text-sm text-grigio-medio">
                    {rp.readTime} lettura
                  </div>
                  <span className="mt-3 text-sm font-semibold text-nero group-hover:text-giallo-hover transition-colors inline-flex items-center gap-1">
                    Leggi
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Solutions */}
      <RelatedContent
        label="SOLUZIONI CORRELATE"
        bg="white"
        variant="cards"
        items={getLinksForBlog(slug).soluzioni.map((sol) => ({
          href: `/soluzioni/${sol.slug}`,
          title: sol.h1,
          subtitle: sol.category,
        }))}
      />

      {/* Risorse Correlate - Strategic Internal Links */}
      <RisorseCorrelate links={getStrategicLinksForBlog(post.category)} />

      {/* CTA */}
      <CtaFinale
        dark
        title="Pronto a trasformare la tua azienda?"
        subtitle="Parla con noi. La prima conversazione è gratuita."
        buttonText="Contattaci"
        buttonHref="/contatti"
      />
    </>
  );
}

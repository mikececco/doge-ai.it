import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Insights AI per le PMI italiane",
  description:
    "Articoli, analisi e guide pratiche sull'adozione dell'AI nelle PMI italiane. Casi concreti, numeri reali, zero teoria inutile.",
  openGraph: {
    title: "Blog — Insights AI per le PMI italiane",
    description:
      "Articoli, analisi e guide pratiche sull'adozione dell'AI nelle PMI italiane. Casi concreti, numeri reali, zero teoria inutile.",
    type: "website",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "AI & PMI": "bg-giallo text-nero",
  Automazione: "bg-nero text-bianco",
  Manifattura: "bg-giallo text-nero",
  Tecnologia: "bg-nero text-bianco",
  Strategia: "bg-giallo text-nero",
  Compliance: "bg-nero text-bianco",
};

function getCategoryClass(category: string) {
  return CATEGORY_COLORS[category] ?? "bg-nero text-bianco";
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bianco text-nero pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label>BLOG</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-3xl">
              Insights AI per le PMI italiane
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-grigio-scuro mt-6 max-w-[640px]">
              Casi concreti, numeri reali, zero teoria inutile. Come l&apos;intelligenza artificiale sta cambiando il modo di lavorare delle PMI italiane.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <FadeInOnScroll key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-bianco border border-grigio-chiaro hover:border-nero transition-colors duration-200"
                >
                  <div className="p-8 flex flex-col h-full">
                    {/* Category */}
                    <span
                      className={`self-start text-label uppercase px-2 py-1 text-xs font-semibold tracking-wider ${getCategoryClass(post.category)}`}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="mt-4 text-[22px] font-bold leading-tight text-nero group-hover:text-grigio-scuro transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-3 text-body text-grigio-scuro leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-grigio-chiaro flex items-center justify-between">
                      <span className="text-sm text-grigio-medio">
                        {post.date}
                      </span>
                      <span className="text-sm text-grigio-medio">
                        {post.readTime} lettura
                      </span>
                    </div>

                    {/* Read more */}
                    <div className="mt-4">
                      <span className="text-sm font-semibold text-nero group-hover:text-giallo-hover transition-colors inline-flex items-center gap-1">
                        Leggi l&apos;articolo
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaFinale
        dark
        title="Pronto a trasformare la tua azienda?"
        subtitle="Parla con noi. La prima conversazione è gratuita."
        buttonText="Contattaci →"
        buttonHref="/contatti"
      />
    </>
  );
}

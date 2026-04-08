import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { GLOSSARIO } from "@/lib/glossario-data";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: Promise<{ termine: string }>;
};

export function generateStaticParams() {
  return GLOSSARIO.map((term) => ({ termine: term.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { termine } = await params;
  const term = GLOSSARIO.find((t) => t.slug === termine);
  if (!term) return {};

  const canonicalUrl = `${BASE_URL}/glossario/${term.slug}`;
  const title = `${term.term} - Glossario AI | IL DOGE DI VENEZIA`;
  const description = term.definition.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "IL DOGE DI VENEZIA",
      images: [
        {
          url: "/icon/logoB-noBG.png",
          width: 512,
          height: 512,
          alt: "IL DOGE DI VENEZIA",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

function getRelated(slugs: string[]) {
  return slugs
    .map((slug) => GLOSSARIO.find((t) => t.slug === slug))
    .filter(Boolean) as typeof GLOSSARIO;
}

function getSameCategory(term: (typeof GLOSSARIO)[0]) {
  return GLOSSARIO.filter(
    (t) => t.category === term.category && t.slug !== term.slug
  ).slice(0, 6);
}

export default async function GlossarioTermPage({ params }: Props) {
  const { termine } = await params;
  const term = GLOSSARIO.find((t) => t.slug === termine);
  if (!term) notFound();

  const related = getRelated(term.relatedTerms);
  const sameCategory = getSameCategory(term);
  const canonicalUrl = `${BASE_URL}/glossario/${term.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: canonicalUrl,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossario AI per PMI Italiane",
      url: `${BASE_URL}/glossario`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero pt-40 pb-20 overflow-hidden">
        <div className="container-site relative z-10">
          <Link
            href="/glossario"
            className="inline-flex items-center gap-2 text-sm text-nero/60 hover:text-nero transition-colors mb-6"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Glossario AI
          </Link>
          <FadeInOnScroll>
            <Label className="text-nero/60">{term.category.toUpperCase()}</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl uppercase">{term.term}</h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <span className="text-sm font-semibold text-nero/80 bg-nero/10 px-4 py-1.5 uppercase tracking-wider">
                {term.category}
              </span>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Definition */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <div className="max-w-3xl">
              <h2 className="text-section text-nero mb-8">Definizione</h2>
              <p className="text-body text-nero/80 leading-relaxed text-lg">
                {term.definition}
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Related Terms */}
      {related.length > 0 && (
        <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-12">Termini correlati</h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <FadeInOnScroll key={rel.slug}>
                  <Link
                    href={`/glossario/${rel.slug}`}
                    className="block bg-bianco border border-grigio-chiaro p-6 h-full hover:border-giallo transition-colors group"
                  >
                    <span className="text-xs font-semibold text-giallo-hover uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-bold text-nero mt-2 mb-3 uppercase group-hover:text-giallo-hover transition-colors">
                      <span className="underline decoration-giallo decoration-[2px] underline-offset-4">
                        {rel.term}
                      </span>
                    </h3>
                    <p className="text-sm text-nero/60 line-clamp-3 leading-relaxed">
                      {rel.definition}
                    </p>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Same Category */}
      {sameCategory.length > 0 && (
        <section data-navbar-theme="dark" className="bg-nero text-bianco py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <Label className="text-giallo">ESPLORA</Label>
              <h2 className="text-section text-bianco mt-4 mb-12">
                Altri termini in {term.category}
              </h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sameCategory.map((rel) => (
                <FadeInOnScroll key={rel.slug}>
                  <Link
                    href={`/glossario/${rel.slug}`}
                    className="block border border-bianco/10 p-6 h-full hover:border-giallo transition-colors group"
                  >
                    <h3 className="text-sm font-bold text-bianco uppercase group-hover:text-giallo transition-colors">
                      <span className="underline decoration-giallo decoration-[2px] underline-offset-4">
                        {rel.term}
                      </span>
                    </h3>
                    <p className="text-sm text-bianco/60 line-clamp-2 leading-relaxed mt-2">
                      {rel.definition}
                    </p>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll>
              <div className="mt-10 text-center">
                <Link
                  href="/glossario"
                  className="text-sm font-semibold text-bianco hover:text-giallo transition-colors underline underline-offset-4"
                >
                  Vedi tutti i termini del glossario &rarr;
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaFinale
        dark
        title="Vuoi applicare l'AI nella tua azienda?"
        subtitle="Parla con noi. La prima call e gratuita e senza impegno."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

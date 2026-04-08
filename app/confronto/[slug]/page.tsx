import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { CONFRONTI } from "@/lib/confronti-data";
import { Check, X } from "lucide-react";
import Button from "@/components/ui/Button";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CONFRONTI.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const confronto = CONFRONTI.find((c) => c.slug === slug);
  if (!confronto) return {};

  const canonicalUrl = `${BASE_URL}/confronto/${confronto.slug}`;
  const title = `${confronto.toolA} vs ${confronto.toolB} - Confronto per PMI | IL DOGE DI VENEZIA`;
  const description = confronto.verdict;

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

function getRelated(confronto: (typeof CONFRONTI)[0]) {
  return CONFRONTI.filter(
    (c) =>
      c.slug !== confronto.slug &&
      c.categories.some((cat) => confronto.categories.includes(cat))
  ).slice(0, 4);
}

export default async function ConfrontoSlugPage({ params }: Props) {
  const { slug } = await params;
  const confronto = CONFRONTI.find((c) => c.slug === slug);
  if (!confronto) notFound();

  const related = getRelated(confronto);
  const canonicalUrl = `${BASE_URL}/confronto/${confronto.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: confronto.title,
    description: confronto.verdict,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "IL DOGE DI VENEZIA",
      url: BASE_URL,
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
            href="/confronto"
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
            Tutti i confronti
          </Link>
          <FadeInOnScroll>
            <div className="flex flex-wrap gap-2 mb-4">
              {confronto.categories.map((cat) => (
                <Label key={cat} className="text-nero/60">
                  {cat.toUpperCase()}
                </Label>
              ))}
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-2 max-w-4xl uppercase">
              {confronto.toolA} vs {confronto.toolB}
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-nero/70 mt-6 max-w-[640px] leading-relaxed">
              {confronto.verdict}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Pros/Cons Table */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Pro e Contro</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tool A */}
            <FadeInOnScroll>
              <div className="border border-nero p-8">
                <h3 className="text-xl font-bold text-nero mb-6 uppercase">
                  {confronto.toolA}
                </h3>
                <div className="mb-6">
                  <p className="text-xs text-giallo-hover uppercase tracking-wider font-semibold mb-3">
                    Punti di forza
                  </p>
                  <ul className="space-y-3">
                    {confronto.prosA.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-nero/80">
                        <Check size={16} className="shrink-0 mt-0.5 text-green-600" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-grigio-medio uppercase tracking-wider font-semibold mb-3">
                    Limiti
                  </p>
                  <ul className="space-y-3">
                    {confronto.consA.map((con, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-nero/60">
                        <X size={16} className="shrink-0 mt-0.5 text-red-400" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Tool B */}
            <FadeInOnScroll>
              <div className="border border-nero p-8">
                <h3 className="text-xl font-bold text-nero mb-6 uppercase">
                  {confronto.toolB}
                </h3>
                <div className="mb-6">
                  <p className="text-xs text-giallo-hover uppercase tracking-wider font-semibold mb-3">
                    Punti di forza
                  </p>
                  <ul className="space-y-3">
                    {confronto.prosB.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-nero/80">
                        <Check size={16} className="shrink-0 mt-0.5 text-green-600" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-grigio-medio uppercase tracking-wider font-semibold mb-3">
                    Limiti
                  </p>
                  <ul className="space-y-3">
                    {confronto.consB.map((con, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-nero/60">
                        <X size={16} className="shrink-0 mt-0.5 text-red-400" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <div className="max-w-3xl">
              <h2 className="text-section text-nero mb-8">Quale scegliere?</h2>
              <p className="text-body text-nero/80 leading-relaxed text-lg mb-8">
                {confronto.bestFor}
              </p>
              <div className="bg-bianco border border-nero p-8">
                <h3 className="text-lg font-bold text-nero mb-4">Il nostro verdetto</h3>
                <p className="text-body text-nero/80 leading-relaxed">
                  {confronto.summary}
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Related Comparisons */}
      {related.length > 0 && (
        <section data-navbar-theme="dark" className="bg-nero text-bianco py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <Label className="text-giallo">ESPLORA</Label>
              <h2 className="text-section text-bianco mt-4 mb-12">
                Confronti correlati
              </h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel) => (
                <FadeInOnScroll key={rel.slug}>
                  <Link
                    href={`/confronto/${rel.slug}`}
                    className="block border border-bianco/10 p-6 h-full hover:border-giallo transition-colors group"
                  >
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {rel.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs font-semibold text-giallo uppercase tracking-wider"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm font-bold text-bianco mt-2 mb-3 uppercase group-hover:text-giallo transition-colors">
                      <span className="underline decoration-giallo decoration-[2px] underline-offset-4">
                        {rel.toolA} vs {rel.toolB}
                      </span>
                    </h3>
                    <p className="text-sm text-bianco/60 line-clamp-3 leading-relaxed">
                      {rel.verdict}
                    </p>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll>
              <div className="mt-10 text-center">
                <Link
                  href="/confronto"
                  className="text-sm font-semibold text-bianco hover:text-giallo transition-colors underline underline-offset-4"
                >
                  Vedi tutti i confronti &rarr;
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      <CtaFinale
        dark
        title="Ti aiutiamo a scegliere."
        subtitle="Analizziamo insieme le esigenze della tua azienda e identifichiamo gli strumenti giusti. La prima call e gratuita."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

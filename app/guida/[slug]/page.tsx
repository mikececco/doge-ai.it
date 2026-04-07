import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { GUIDE } from "@/lib/guide-data";
import Button from "@/components/ui/Button";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return GUIDE.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guida = GUIDE.find((g) => g.slug === params.slug);
  if (!guida) return {};

  const canonicalUrl = `${BASE_URL}/guida/${guida.slug}`;
  const title = `${guida.title} | Il Doge di Venezia`;
  const description = guida.description.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      siteName: "DOGE di Venezia",
      images: [
        {
          url: "/icon/logoB-noBG.png",
          width: 512,
          height: 512,
          alt: "il Doge di Venezia",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.split(". ");
  const paragraphs: string[] = [];
  let current = "";

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i] + (i < sentences.length - 1 ? "." : "");
    current += (current ? " " : "") + sentence;
    if (current.length > 400 && i < sentences.length - 1) {
      paragraphs.push(current);
      current = "";
    }
  }
  if (current) paragraphs.push(current);
  return paragraphs;
}

function getRelated(guida: (typeof GUIDE)[0]) {
  const sameSector = GUIDE.filter(
    (g) => g.slug !== guida.slug && g.sector === guida.sector
  );
  const others = GUIDE.filter(
    (g) => g.slug !== guida.slug && g.sector !== guida.sector
  );
  return [...sameSector, ...others].slice(0, 3);
}

export default function GuidaSlugPage({ params }: Props) {
  const guida = GUIDE.find((g) => g.slug === params.slug);
  if (!guida) notFound();

  const related = getRelated(guida);
  const canonicalUrl = `${BASE_URL}/guida/${guida.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guida.title,
    description: guida.description,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "DOGE di Venezia",
      url: BASE_URL,
    },
    articleSection: guida.sector,
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
            href="/guida"
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
            Tutte le guide
          </Link>
          <FadeInOnScroll>
            <Label className="text-nero/60">{guida.sector.toUpperCase()}</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl uppercase">{guida.title}</h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-nero/70 mt-6 max-w-[640px] leading-relaxed">
              {guida.description}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <span className="text-sm font-semibold text-nero/80 bg-nero/10 px-4 py-1.5 uppercase tracking-wider">
                {guida.sections.length} capitoli
              </span>
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-nero text-bianco py-12">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-lg font-bold text-bianco mb-6">Indice</h2>
            <nav className="space-y-3">
              {guida.sections.map((section, i) => (
                <a
                  key={i}
                  href={`#sezione-${i}`}
                  className="flex items-start gap-4 text-sm text-bianco/70 hover:text-giallo transition-colors group"
                >
                  <span className="text-giallo font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:underline underline-offset-4">
                    {section.title}
                  </span>
                </a>
              ))}
            </nav>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Content Sections */}
      {guida.sections.map((section, i) => (
        <section
          key={i}
          id={`sezione-${i}`}
          className={`${i % 2 === 0 ? "bg-bianco" : "bg-grigio-chiaro"} py-20 scroll-mt-24`}
        >
          <div className="container-site">
            <FadeInOnScroll>
              <div className="max-w-3xl">
                <span className="text-4xl font-bold text-giallo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-section text-nero mt-4 mb-8">
                  {section.title}
                </h2>
                <div className="text-body text-nero/80 leading-relaxed space-y-4">
                  {splitIntoParagraphs(section.content).map((paragraph, pi) => (
                    <p key={pi}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      ))}

      {/* Related Guides */}
      {related.length > 0 && (
        <section className="bg-nero text-bianco py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <Label className="text-giallo">CONTINUA A LEGGERE</Label>
              <h2 className="text-section text-bianco mt-4 mb-12">
                Guide correlate
              </h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <FadeInOnScroll key={rel.slug}>
                  <Link
                    href={`/guida/${rel.slug}`}
                    className="block border border-bianco/10 p-6 h-full hover:border-giallo transition-colors group"
                  >
                    <span className="text-xs font-semibold text-giallo uppercase tracking-wider">
                      {rel.sector}
                    </span>
                    <h3 className="text-sm font-bold text-bianco mt-2 mb-3 uppercase group-hover:text-giallo transition-colors">
                      <span className="underline decoration-giallo decoration-[2px] underline-offset-4">
                        {rel.title}
                      </span>
                    </h3>
                    <p className="text-sm text-bianco/60 line-clamp-3 leading-relaxed">
                      {rel.description}
                    </p>
                    <p className="text-xs text-bianco/40 mt-3">
                      {rel.sections.length} capitoli
                    </p>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll>
              <div className="mt-10 text-center">
                <Link
                  href="/guida"
                  className="text-sm font-semibold text-bianco hover:text-giallo transition-colors underline underline-offset-4"
                >
                  Vedi tutte le guide &rarr;
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      <CtaFinale
        dark
        title="Pronto a passare dalla teoria alla pratica?"
        subtitle="Implementiamo insieme l'AI nella tua azienda. La prima call e gratuita."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

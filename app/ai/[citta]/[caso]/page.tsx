import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { CITIES } from "@/lib/cities-data";
import { CASI_DUSO } from "@/lib/casi-duso-data";

const BASE_URL = "https://doge-ai.it";

/**
 * Top 20 cross-industry ("Trasversale") use cases for pSEO.
 * 107 cities x 20 = 2,140 pages.
 */
const CROSS_INDUSTRY_IDS = [
  "assistenti-personali-ai",
  "copilota-ai-dipendente",
  "automazione-meeting-notes",
  "knowledge-base-interna-ai",
  "document-generation-automatica",
  "automazione-hr-payroll",
  "onboarding-digitale",
  "screening-cv-ai",
  "agenti-ai-operativi",
  "customer-service-automation",
  "procurement-intelligence",
  "supplier-scoring-selezione",
  "contract-management-ai",
  "gestione-automatica-email",
  "report-generation-ai",
  "lead-scoring-predittivo",
  "crm-automation-enrichment",
  "brand-visibility-piattaforme-ai",
  "content-generation-ai",
  "seo-aeo-automation",
];

const CROSS_INDUSTRY_CASES = CASI_DUSO.filter((c) =>
  CROSS_INDUSTRY_IDS.includes(c.id)
);

type Props = {
  params: Promise<{ citta: string; caso: string }>;
};

/* ------------------------------------------------------------------ */
/*  Static params: top 10 cities x 20 use cases (limited for deploy)   */
/* ------------------------------------------------------------------ */
const TOP_CITIES = CITIES.slice(0, 10);

export function generateStaticParams() {
  const params: { citta: string; caso: string }[] = [];
  for (const city of TOP_CITIES) {
    for (const caso of CROSS_INDUSTRY_CASES) {
      params.push({ citta: city.slug, caso: caso.id });
    }
  }
  return params;
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citta, caso: casoSlug } = await params;
  const city = CITIES.find((c) => c.slug === citta);
  const caso = CROSS_INDUSTRY_CASES.find((c) => c.id === casoSlug);
  if (!city || !caso) return {};

  const canonicalUrl = `${BASE_URL}/ai/${city.slug}/${caso.id}`;
  const titleText = caso.title.charAt(0) + caso.title.slice(1).toLowerCase();
  const title = `${titleText} a ${city.name} - AI per PMI | DOGE di Venezia`;
  const description = `${caso.description.slice(0, 120)}... Soluzione AI per le PMI di ${city.name} (${city.region}). Implementazione con Anthropic/Claude.`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "DOGE di Venezia",
      images: [{ url: "/icon/logoB-noBG.png", width: 512, height: 512, alt: "il Doge di Venezia" }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default async function AICasoCittaPage({ params }: Props) {
  const { citta, caso: casoSlug } = await params;
  const city = CITIES.find((c) => c.slug === citta);
  const caso = CROSS_INDUSTRY_CASES.find((c) => c.id === casoSlug);
  if (!city || !caso) notFound();

  const canonicalUrl = `${BASE_URL}/ai/${city.slug}/${caso.id}`;
  const titleText = caso.title.charAt(0) + caso.title.slice(1).toLowerCase();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${titleText} a ${city.name}`,
    description: caso.description,
    url: canonicalUrl,
    provider: { "@type": "Organization", name: "DOGE di Venezia", url: BASE_URL },
    areaServed: { "@type": "City", name: city.name },
    serviceType: titleText,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section data-navbar-theme="dark" className="bg-nero text-bianco pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-giallo">AI PER PMI &middot; {caso.department.toUpperCase()}</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero uppercase mt-4 max-w-3xl">
              {titleText} a {city.name}
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-bianco/70 mt-6 max-w-[640px] leading-relaxed">
              {caso.description}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-8 flex flex-wrap gap-2">
              {caso.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-giallo/80 border border-giallo/30 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-10">
              <Button variant="primary" size="md" href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Bullet Points */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site max-w-3xl">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-10">
              Cosa ottieni con questa soluzione a {city.name}
            </h2>
          </FadeInOnScroll>
          <div className="space-y-6">
            {caso.bullets.map((bullet, i) => (
              <FadeInOnScroll key={i}>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-giallo text-nero font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-body text-grigio-scuro leading-relaxed">{bullet}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site max-w-3xl">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-6">
              Perch&eacute; a {city.name}
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-body text-grigio-scuro leading-relaxed mb-6">{city.description}</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-body text-grigio-scuro leading-relaxed">
              Le PMI di {city.name} nei settori {city.industries.join(", ")} possono
              implementare questa soluzione per ottenere un vantaggio competitivo
              concreto e misurabile sin dalle prime settimane.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Internal Links */}
      <section data-navbar-theme="light" className="bg-bianco py-16">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-8">Approfondisci</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FadeInOnScroll>
              <Link
                href={`/casi-duso/${caso.id}`}
                className="block border border-grigio-chiaro p-6 hover:border-giallo transition-colors"
              >
                <span className="text-sm font-bold text-giallo">CASO D&apos;USO</span>
                <p className="text-nero font-semibold mt-1">{titleText}</p>
              </Link>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <Link
                href={`/consulenza-ai/${city.slug}`}
                className="block border border-grigio-chiaro p-6 hover:border-giallo transition-colors"
              >
                <span className="text-sm font-bold text-giallo">CONSULENZA AI</span>
                <p className="text-nero font-semibold mt-1">AI a {city.name}</p>
              </Link>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <Link
                href="/contatti"
                className="block border border-grigio-chiaro p-6 hover:border-giallo transition-colors"
              >
                <span className="text-sm font-bold text-giallo">CONTATTI</span>
                <p className="text-nero font-semibold mt-1">Parla con noi</p>
              </Link>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <CtaFinale
        dark
        title={`${titleText} per la tua azienda a ${city.name}`}
        subtitle="La prima conversazione è gratuita. Nessun impegno, solo chiarezza su cosa l'AI può fare per te."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { INCENTIVI, REGIONI } from "@/lib/incentivi-data";
import type { Incentivo } from "@/lib/incentivi-data";
import RisorseCorrelate from "@/components/sections/RisorseCorrelate";
import { getStrategicLinksForIncentivo } from "@/lib/internal-links";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const incentiviSlugs = INCENTIVI.map((i) => ({ slug: i.slug }));
  const regioniSlugs = REGIONI.map((r) => ({ slug: r.slug }));
  return [...incentiviSlugs, ...regioniSlugs];
}

function findBySlug(slug: string) {
  const incentivo = INCENTIVI.find((i) => i.slug === slug);
  if (incentivo) return { type: "nazionale" as const, data: incentivo };

  const regione = REGIONI.find((r) => r.slug === slug);
  if (regione) return { type: "regionale" as const, data: regione };

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = findBySlug(params.slug);
  if (!result) return {};

  const canonicalUrl = `${BASE_URL}/incentivi/${params.slug}`;

  if (result.type === "nazionale") {
    const incentivo = result.data as Incentivo;
    const title = `${incentivo.title} | Incentivi AI - DOGE di Venezia`;
    const description = `${incentivo.description.slice(0, 150)}... Scopri requisiti, importi e come fare domanda.`;

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

  const regione = result.data as (typeof REGIONI)[number];
  const title = `Incentivi AI ${regione.name} | Bandi e Agevolazioni - DOGE di Venezia`;
  const description = `Tutti i bandi e le agevolazioni per la trasformazione digitale e AI in ${regione.name}: ${regione.incentivi.length} opportunità attive per le PMI.`;

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

const COME_TI_AIUTIAMO = [
  {
    title: "Analisi gratuita",
    description:
      "Valutiamo il tuo progetto AI e identifichiamo tutti gli incentivi applicabili, senza impegno.",
  },
  {
    title: "Preparazione domanda",
    description:
      "Ti supportiamo nella stesura del progetto, del business plan e della documentazione tecnica richiesta.",
  },
  {
    title: "Implementazione AI",
    description:
      "Realizziamo il progetto AI finanziato: dall'architettura tecnica all'integrazione nei tuoi processi aziendali.",
  },
  {
    title: "Rendicontazione",
    description:
      "Ti accompagniamo nella fase di rendicontazione e certificazione, assicurando la corretta erogazione del contributo.",
  },
];

export default function IncentivoSlugPage({ params }: Props) {
  const result = findBySlug(params.slug);
  if (!result) notFound();

  if (result.type === "nazionale") {
    const incentivo = result.data as Incentivo;
    return <NazionalePage incentivo={incentivo} />;
  }

  const regione = result.data as (typeof REGIONI)[number];
  return <RegionalePage regione={regione} />;
}

/* ───── National Incentive Page ───── */

function NazionalePage({ incentivo }: { incentivo: Incentivo }) {
  const canonicalUrl = `${BASE_URL}/incentivi/${incentivo.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: incentivo.title,
    description: incentivo.description,
    url: canonicalUrl,
    provider: {
      "@type": "GovernmentOrganization",
      name: "Governo Italiano",
    },
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero - Yellow */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero pt-40 pb-20 overflow-hidden">
        <div className="container-site relative z-10">
          <FadeInOnScroll>
            <Label className="text-nero/60">INCENTIVO NAZIONALE</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl">{incentivo.title}</h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-nero/70 mt-6 max-w-[640px] leading-relaxed">
              {incentivo.description}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-wrap gap-2 mt-8">
              {incentivo.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-nero/80 bg-nero/10 px-4 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Details */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-12">
                Dettagli dell&apos;incentivo
              </h2>
            </FadeInOnScroll>

            <div className="space-y-10">
              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    Chi può accedere
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {incentivo.eligibility}
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">Importo</h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {incentivo.amount}
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    Come fare domanda
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {incentivo.howToApply}
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">Scadenza</h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {incentivo.deadline}
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Come ti aiutiamo */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Come ti aiutiamo</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COME_TI_AIUTIAMO.map((item) => (
              <FadeInOnScroll key={item.title}>
                <div className="bg-bianco border border-grigio-chiaro p-8 h-full">
                  <h3 className="text-xl font-bold text-nero mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Risorse Correlate */}
      <RisorseCorrelate links={getStrategicLinksForIncentivo()} bg="light" />

      {/* CTA Finale */}
      <CtaFinale
        dark
        title="Vuoi sfruttare questo incentivo?"
        subtitle="Analizziamo gratuitamente se la tua impresa ha i requisiti e come massimizzare il beneficio."
        buttonText="Parla con noi →"
        buttonHref="/contatti"
      />
    </>
  );
}

/* ───── Regional Page ───── */

function RegionalePage({
  regione,
}: {
  regione: (typeof REGIONI)[number];
}) {
  const nazionali = INCENTIVI.filter((i) => i.category === "nazionale");

  return (
    <>
      {/* Hero - Yellow */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero pt-40 pb-20 overflow-hidden">
        <div className="container-site relative z-10">
          <FadeInOnScroll>
            <Label className="text-nero/60">INCENTIVI REGIONALI</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl">
              Incentivi AI in {regione.name}
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-nero/70 mt-6 max-w-[640px] leading-relaxed">
              Tutti i bandi e le agevolazioni attive in {regione.name} per
              finanziare la trasformazione digitale e l&apos;adozione dell&apos;AI
              nella tua impresa.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Regional Bandi */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-12">
                Bandi attivi in {regione.name}
              </h2>
            </FadeInOnScroll>
            <div className="space-y-0">
              {regione.incentivi.map((bando, index) => (
                <FadeInOnScroll key={index}>
                  <div className="flex items-start gap-4 py-5 border-b border-grigio-chiaro last:border-0">
                    <span className="flex-shrink-0 w-8 h-8 bg-giallo text-nero font-bold text-sm flex items-center justify-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body text-nero leading-relaxed pt-1">
                      {bando}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* National Incentives Cross-link */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-grigio-medio">VALIDI IN TUTTA ITALIA</Label>
            <h2 className="text-section text-nero mt-4 mb-12">
              Incentivi nazionali cumulabili
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nazionali.slice(0, 6).map((incentivo) => (
              <FadeInOnScroll key={incentivo.slug}>
                <Link
                  href={`/incentivi/${incentivo.slug}`}
                  className="block bg-bianco border border-grigio-chiaro p-8 h-full hover:border-giallo transition-colors group"
                >
                  <h3 className="text-lg font-bold text-nero mb-2 group-hover:text-giallo/80 transition-colors">
                    {incentivo.shortTitle}
                  </h3>
                  <p className="text-sm text-grigio-scuro line-clamp-2">
                    {incentivo.description}
                  </p>
                  <p className="text-sm font-semibold text-nero/80 mt-3">
                    {incentivo.amount}
                  </p>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll>
            <div className="mt-8 text-center">
              <Link
                href="/incentivi"
                className="text-sm font-semibold text-nero hover:text-giallo-hover transition-colors underline underline-offset-4"
              >
                Vedi tutti gli incentivi nazionali →
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Come ti aiutiamo */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Come ti aiutiamo</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COME_TI_AIUTIAMO.map((item) => (
              <FadeInOnScroll key={item.title}>
                <div className="border border-grigio-chiaro p-8 h-full">
                  <h3 className="text-xl font-bold text-nero mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Risorse Correlate */}
      <RisorseCorrelate links={getStrategicLinksForIncentivo()} />

      {/* CTA Finale */}
      <CtaFinale
        dark
        title={`Porta l'AI nella tua impresa in ${regione.name}`}
        subtitle="Ti guidiamo dall'identificazione del bando giusto all'implementazione del progetto AI. La prima call è gratuita."
        buttonText="Parla con noi →"
        buttonHref="/contatti"
      />
    </>
  );
}

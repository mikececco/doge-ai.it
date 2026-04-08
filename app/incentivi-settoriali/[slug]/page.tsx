import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import RisorseCorrelate from "@/components/sections/RisorseCorrelate";
import { INCENTIVI_SETTORIALI } from "@/lib/incentivi-settoriali-data";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INCENTIVI_SETTORIALI.map((is) => ({ slug: is.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = INCENTIVI_SETTORIALI.find((is) => is.slug === slug);
  if (!item) return {};

  const canonicalUrl = `${BASE_URL}/incentivi-settoriali/${slug}`;
  const title = `${item.title} | Bandi e Agevolazioni - IL DOGE DI VENEZIA`;
  const description = item.description.slice(0, 155) + "...";

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

const COME_TI_AIUTIAMO = [
  {
    title: "Analisi gratuita",
    description:
      "Valutiamo il tuo progetto AI e identifichiamo tutti gli incentivi applicabili al tuo settore e regione, senza impegno.",
  },
  {
    title: "Preparazione domanda",
    description:
      "Ti supportiamo nella stesura del progetto, del business plan e della documentazione tecnica richiesta dal bando.",
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

export default async function IncentivoSettorialePage({ params }: Props) {
  const { slug } = await params;
  const item = INCENTIVI_SETTORIALI.find((is) => is.slug === slug);
  if (!item) notFound();

  const canonicalUrl = `${BASE_URL}/incentivi-settoriali/${item.slug}`;

  // Find related pages: same region or same sector
  const sameRegion = INCENTIVI_SETTORIALI.filter(
    (is) => is.regione === item.regione && is.slug !== item.slug
  ).slice(0, 3);
  const sameSector = INCENTIVI_SETTORIALI.filter(
    (is) => is.settore === item.settore && is.slug !== item.slug
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: item.title,
    description: item.description,
    url: canonicalUrl,
    provider: {
      "@type": "GovernmentOrganization",
      name: "Governo Italiano",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: item.regione,
    },
    serviceType: `Incentivi AI per ${item.settore}`,
  };

  const strategicLinks = [
    {
      href: "/blog/finanziamenti-trasformazione-ai-guida",
      label: "Guida pratica ai finanziamenti per l'AI",
    },
    {
      href: "/casi-duso",
      label: "Scopri i casi d'uso finanziabili",
    },
    { href: "/incentivi", label: "Tutti gli incentivi nazionali" },
    { href: "/contatti", label: "Richiedi un'analisi gratuita" },
  ];

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
            <Label className="text-nero/60">
              INCENTIVI {item.regione.toUpperCase()} &middot;{" "}
              {item.settore.toUpperCase()}
            </Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero uppercase mt-4 max-w-4xl">{item.title}</h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-nero/70 mt-6 max-w-[640px] leading-relaxed">
              {item.description}
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Bandi Regionali Specifici */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-12">
                Bandi regionali per {item.settore} in {item.regione}
              </h2>
            </FadeInOnScroll>
            <div className="space-y-0">
              {item.bandiSpecifici.map((bando, index) => (
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

      {/* Incentivi Nazionali Applicabili */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <Label className="text-grigio-medio">VALIDI IN TUTTA ITALIA</Label>
              <h2 className="text-section text-nero mt-4 mb-12">
                Incentivi nazionali per {item.settore}
              </h2>
            </FadeInOnScroll>
            <div className="space-y-0">
              {item.incentiviNazionali.map((incentivo, index) => (
                <FadeInOnScroll key={index}>
                  <div className="flex items-start gap-4 py-5 border-b border-nero/10 last:border-0">
                    <span className="flex-shrink-0 w-8 h-8 bg-nero text-bianco font-bold text-sm flex items-center justify-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body text-nero leading-relaxed pt-1">
                      {incentivo}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll>
              <div className="mt-8">
                <Link
                  href="/incentivi"
                  className="text-sm font-semibold text-nero hover:text-giallo-hover transition-colors underline underline-offset-4"
                >
                  Vedi tutti gli incentivi nazionali →
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Come Fare Domanda */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-8">Come fare domanda</h2>
            </FadeInOnScroll>
            <div className="space-y-6">
              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    1. Verifica i requisiti
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    Ogni bando ha criteri specifici di ammissibilita legati a
                    dimensione aziendale, settore, localizzazione e tipo di
                    investimento. Ti aiutiamo a verificare rapidamente se la tua
                    impresa rientra nei parametri.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    2. Prepara il progetto AI
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    La domanda richiede un progetto dettagliato con obiettivi
                    misurabili, timeline di implementazione e impatto atteso.
                    Costruiamo insieme un business plan solido e credibile.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    3. Presenta la domanda
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    Ti supportiamo nella compilazione e nell&apos;invio della
                    domanda tramite i portali dedicati, rispettando scadenze e
                    requisiti formali di ciascun bando.
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    4. Implementa e rendiconta
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    Dopo l&apos;approvazione, realizziamo il progetto AI e ti
                    accompagniamo nella rendicontazione finale per ottenere
                    l&apos;erogazione del contributo.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Come ti aiutiamo */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Come ti aiutiamo</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COME_TI_AIUTIAMO.map((step) => (
              <FadeInOnScroll key={step.title}>
                <div className="bg-bianco border border-grigio-chiaro p-8 h-full">
                  <h3 className="text-xl font-bold text-nero mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Related: Same Region */}
      {sameRegion.length > 0 && (
        <section data-navbar-theme="light" className="bg-bianco py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <Label className="text-grigio-medio">ALTRI SETTORI</Label>
              <h2 className="text-section text-nero mt-4 mb-12">
                Altri incentivi AI in {item.regione}
              </h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sameRegion.map((related) => (
                <FadeInOnScroll key={related.slug}>
                  <Link
                    href={`/incentivi-settoriali/${related.slug}`}
                    className="block border border-grigio-chiaro p-8 h-full hover:border-giallo transition-colors group"
                  >
                    <h3 className="text-lg font-bold text-nero mb-2 group-hover:text-giallo/80 transition-colors">
                      {related.settore}
                    </h3>
                    <p className="text-sm text-grigio-scuro line-clamp-2">
                      {related.description.slice(0, 120)}...
                    </p>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related: Same Sector */}
      {sameSector.length > 0 && (
        <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <Label className="text-grigio-medio">ALTRE REGIONI</Label>
              <h2 className="text-section text-nero mt-4 mb-12">
                Incentivi {item.settore} in altre regioni
              </h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sameSector.map((related) => (
                <FadeInOnScroll key={related.slug}>
                  <Link
                    href={`/incentivi-settoriali/${related.slug}`}
                    className="block bg-bianco border border-grigio-chiaro p-8 h-full hover:border-giallo transition-colors group"
                  >
                    <h3 className="text-lg font-bold text-nero mb-2 group-hover:text-giallo/80 transition-colors">
                      {related.regione}
                    </h3>
                    <p className="text-sm text-grigio-scuro line-clamp-2">
                      {related.description.slice(0, 120)}...
                    </p>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Risorse Correlate */}
      <RisorseCorrelate links={strategicLinks} bg="light" />

      {/* CTA Finale */}
      <CtaFinale
        dark
        title={`Porta l'AI nel ${item.settore} in ${item.regione}`}
        subtitle="Ti guidiamo dall'identificazione del bando giusto all'implementazione del progetto AI. La prima call e gratuita."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

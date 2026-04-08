import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import RelatedContent from "@/components/sections/RelatedContent";
import { CITIES } from "@/lib/cities-data";
import {
  getLinksForCity,
  getStrategicLinksForCity,
} from "@/lib/internal-links";
import RisorseCorrelate from "@/components/sections/RisorseCorrelate";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: Promise<{ citta: string }>;
};

export function generateStaticParams() {
  return CITIES.map((city) => ({ citta: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citta } = await params;
  const city = CITIES.find((c) => c.slug === citta);
  if (!city) return {};

  const canonicalUrl = `${BASE_URL}/consulenza-ai/${city.slug}`;
  const title = `Consulenza AI a ${city.name} | DOGE di Venezia`;
  const description = `Consulenza AI per le PMI di ${city.name} (${city.region}). Specializzati in ${city.industries.join(", ")}. Strategia, implementazione agenti e automazione processi con tecnologia Anthropic/Claude.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const SERVICES = [
  {
    title: "Strategia AI",
    description:
      "Definiamo insieme la roadmap di adozione dell'AI per la tua azienda: priorità, casi d'uso concreti, ROI atteso e piano di implementazione. Zero teoria, solo azioni.",
  },
  {
    title: "Implementazione Agenti",
    description:
      "Costruiamo agenti AI personalizzati con tecnologia Anthropic/Claude per automatizzare compiti ripetitivi, analizzare dati e supportare le decisioni del tuo team.",
  },
  {
    title: "Automazione Processi",
    description:
      "Identifichiamo i processi aziendali ad alto impatto e li automatizziamo con AI: dalla gestione ordini alla customer care, dall'analisi documenti al reporting.",
  },
  {
    title: "Formazione Team",
    description:
      "Formiamo il tuo team per lavorare con l'AI in modo efficace: prompt engineering, utilizzo degli strumenti, integrazione nei flussi di lavoro quotidiani.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Esperti Anthropic / Claude",
    description:
      "Siamo specializzati nell'ecosistema Anthropic, i creatori di Claude - il modello AI più capace e affidabile per applicazioni business. Non usiamo tutto, usiamo il meglio.",
  },
  {
    title: "Approccio italiano",
    description:
      "Parliamo la tua lingua - letteralmente e metaforicamente. Conosciamo le PMI italiane, le loro strutture, le loro sfide e il loro potenziale. Niente consulenze generiche.",
  },
  {
    title: "Focus PMI",
    description:
      "Non siamo una grande consulting firm che adatta template enterprise. Lavoriamo esclusivamente con PMI e family office italiani, con soluzioni su misura e investimenti proporzionati.",
  },
];

export default async function ConsulenzaAICittaPage({ params }: Props) {
  const { citta } = await params;
  const city = CITIES.find((c) => c.slug === citta);
  if (!city) notFound();

  const canonicalUrl = `${BASE_URL}/consulenza-ai/${city.slug}`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `il Doge di Venezia - Consulenza AI ${city.name}`,
    description: `Consulenza AI per le imprese di ${city.name} e ${city.region}`,
    url: canonicalUrl,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressCountry: "IT",
    },
    sameAs: ["https://www.linkedin.com/company/il-doge-di-venezia"],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Consulenza AI a ${city.name}`,
    description: `Servizi di consulenza, implementazione e formazione AI per le PMI di ${city.name} nei settori ${city.industries.join(", ")}.`,
    url: canonicalUrl,
    provider: {
      "@type": "Organization",
      name: "DOGE di Venezia",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    serviceType: "Consulenza AI",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-nero text-bianco pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-giallo">CONSULENZA AI</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-3xl">
              Consulenza AI a {city.name}
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-bianco/70 mt-6 max-w-[640px] leading-relaxed">
              Aiutiamo le imprese di {city.name} ad adottare l&apos;AI in modo concreto e misurabile.
              Dalla strategia all&apos;implementazione, con tecnologia Anthropic/Claude.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-10">
              <Button variant="primary" size="md" href="/contatti">
                Parla con noi →
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Local Context */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-6">
                Il contesto imprenditoriale di {city.name}
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-body text-grigio-scuro leading-relaxed mb-8">
                {city.description}
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="flex flex-wrap gap-3">
                {city.industries.map((industry) => (
                  <span
                    key={industry}
                    className="bg-giallo text-nero text-sm font-semibold px-4 py-1.5"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-body text-grigio-scuro leading-relaxed mt-8">
                Le aziende di {city.name} che operano in questi settori hanno
                oggi l&apos;opportunità concreta di integrare l&apos;intelligenza artificiale
                nei propri processi - ridurre i costi operativi, aumentare la
                produttività e aprire nuovi canali di crescita. Il momento è
                adesso.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">
              I nostri servizi per le imprese di {city.region}
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <FadeInOnScroll key={service.title}>
                <div className="bg-bianco border border-grigio-chiaro p-8 h-full">
                  <h3 className="text-xl font-bold text-nero mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why DOGE */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">
              Perché scegliere DOGE di Venezia
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map((diff) => (
              <FadeInOnScroll key={diff.title}>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <RelatedContent
        label="APPROFONDIMENTI"
        bg="light"
        variant="cards"
        items={getLinksForCity(city.slug).blogPosts.map((post) => ({
          href: `/blog/${post.slug}`,
          title: post.title,
          subtitle: post.category,
          meta: `${post.readTime} lettura`,
        }))}
      />

      {/* Related Solutions */}
      <RelatedContent
        label="SOLUZIONI"
        bg="white"
        variant="cards"
        items={getLinksForCity(city.slug).soluzioni.map((sol) => ({
          href: `/soluzioni/${sol.slug}`,
          title: sol.h1,
          subtitle: sol.category,
        }))}
      />

      {/* Risorse Correlate */}
      <RisorseCorrelate links={getStrategicLinksForCity()} />

      {/* CTA Finale */}
      <CtaFinale
        dark
        title={`Porta l'AI nella tua azienda a ${city.name}`}
        subtitle="La prima conversazione è gratuita. Nessun impegno, solo chiarezza su cosa l'AI può fare per te."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

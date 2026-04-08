import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { CITIES } from "@/lib/cities-data";
import { SETTORI_WITH_SLUGS, getSettoreBySlug } from "@/lib/settore-slugs";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: Promise<{ citta: string; settore: string }>;
};

/* ------------------------------------------------------------------ */
/*  Static params: 107 cities x 10 sectors = 1,070 pages              */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  const params: { citta: string; settore: string }[] = [];
  for (const city of CITIES) {
    for (const settore of SETTORI_WITH_SLUGS) {
      params.push({ citta: city.slug, settore: settore.slug });
    }
  }
  return params;
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citta, settore: settoreSlug } = await params;
  const city = CITIES.find((c) => c.slug === citta);
  const settore = getSettoreBySlug(settoreSlug);
  if (!city || !settore) return {};

  const canonicalUrl = `${BASE_URL}/consulenza-ai/${city.slug}/${settore.slug}`;
  const title = `Consulenza AI ${settore.title} ${city.name} | IL DOGE DI VENEZIA`;
  const description = `Consulenza AI per il settore ${settore.title} a ${city.name} (${city.region}). Casi d'uso concreti: ${settore.useCases[0].split(" - ")[0]}, ${settore.useCases[1].split(" - ")[0]} e altro. Implementazione con tecnologia Anthropic/Claude.`;

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
      images: [{ url: "/icon/logoB-noBG.png", width: 512, height: 512, alt: "IL DOGE DI VENEZIA" }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default async function ConsulenzaAISettoreCittaPage({ params }: Props) {
  const { citta, settore: settoreSlug } = await params;
  const city = CITIES.find((c) => c.slug === citta);
  const settore = getSettoreBySlug(settoreSlug);
  if (!city || !settore) notFound();

  const canonicalUrl = `${BASE_URL}/consulenza-ai/${city.slug}/${settore.slug}`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `IL DOGE DI VENEZIA - AI ${settore.title} ${city.name}`,
    description: `Consulenza AI per il settore ${settore.title} a ${city.name}`,
    url: canonicalUrl,
    areaServed: { "@type": "City", name: city.name },
    address: { "@type": "PostalAddress", addressLocality: city.name, addressCountry: "IT" },
    sameAs: ["https://www.linkedin.com/company/il-doge-di-venezia"],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Consulenza AI ${settore.title} a ${city.name}`,
    description: `Servizi di consulenza AI per aziende del settore ${settore.title} a ${city.name}. ${settore.useCases[0]}.`,
    url: canonicalUrl,
    provider: { "@type": "Organization", name: "IL DOGE DI VENEZIA", url: BASE_URL },
    areaServed: { "@type": "City", name: city.name },
    serviceType: `Consulenza AI - ${settore.title}`,
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
      <section data-navbar-theme="dark" className="bg-nero text-bianco pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-giallo">CONSULENZA AI &middot; {settore.title.toUpperCase()}</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero uppercase mt-4 max-w-3xl">
              Consulenza AI per {settore.title} a {city.name}
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-bianco/70 mt-6 max-w-[640px] leading-relaxed">
              Implementiamo soluzioni AI concrete per le aziende del settore {settore.title} a{" "}
              {city.name}. Dalla strategia all&apos;automazione, con tecnologia Anthropic/Claude.
            </p>
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

      {/* Sector Use Cases */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-4">
              Casi d&apos;uso AI per {settore.title}
            </h2>
            <p className="text-body text-grigio-scuro mb-12 max-w-2xl">
              Ecco come l&apos;intelligenza artificiale sta trasformando il settore{" "}
              {settore.title} per le imprese di {city.name} e {city.region}.
            </p>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {settore.useCases.map((useCase, i) => {
              const [title, desc] = useCase.includes(" - ")
                ? useCase.split(" - ")
                : [useCase, ""];
              return (
                <FadeInOnScroll key={i}>
                  <div className="border-l-4 border-giallo pl-6 py-4">
                    <span className="text-sm font-bold text-giallo">{settore.number}.{i + 1}</span>
                    <h3 className="text-lg font-bold text-nero mt-1">{title}</h3>
                    {desc && (
                      <p className="text-body text-grigio-scuro mt-2 leading-relaxed">{desc}</p>
                    )}
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site max-w-3xl">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-6">
              {settore.title} a {city.name}: il contesto locale
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-body text-grigio-scuro leading-relaxed mb-6">{city.description}</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-wrap gap-3">
              {city.industries.map((ind) => (
                <span key={ind} className="bg-giallo text-nero text-sm font-semibold px-4 py-1.5">
                  {ind}
                </span>
              ))}
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-body text-grigio-scuro leading-relaxed mt-8">
              Le aziende di {city.name} nel settore {settore.title} possono oggi integrare
              l&apos;AI nei propri processi per ridurre i costi operativi, aumentare la
              produttivit&agrave; e ottenere un vantaggio competitivo misurabile.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Internal Links */}
      <section data-navbar-theme="light" className="bg-bianco py-16">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-8">Esplora</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                href="/settori"
                className="block border border-grigio-chiaro p-6 hover:border-giallo transition-colors"
              >
                <span className="text-sm font-bold text-giallo">SETTORI</span>
                <p className="text-nero font-semibold mt-1">Tutti i settori</p>
              </Link>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <Link
                href="/casi-duso"
                className="block border border-grigio-chiaro p-6 hover:border-giallo transition-colors"
              >
                <span className="text-sm font-bold text-giallo">CASI D&apos;USO</span>
                <p className="text-nero font-semibold mt-1">65+ casi d&apos;uso AI</p>
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
        title={`AI per ${settore.title} a ${city.name}`}
        subtitle="La prima conversazione è gratuita. Nessun impegno, solo chiarezza su cosa l'AI può fare per te."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

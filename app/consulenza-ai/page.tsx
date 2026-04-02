import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { CITIES, type CityPage } from "@/lib/cities-data";

const BASE_URL = "https://doge-ai.it";

export const metadata: Metadata = {
  title: "Consulenza AI in Italia | DOGE di Venezia",
  description:
    "Consulenza AI per le PMI italiane in tutte le province. Strategia, implementazione agenti, automazione processi e formazione team con tecnologia Anthropic/Claude.",
  alternates: {
    canonical: `${BASE_URL}/consulenza-ai`,
  },
  openGraph: {
    title: "Consulenza AI in Italia | DOGE di Venezia",
    description:
      "Consulenza AI per le PMI italiane in tutte le province. Strategia, implementazione agenti, automazione processi e formazione team con tecnologia Anthropic/Claude.",
    url: `${BASE_URL}/consulenza-ai`,
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
};

// Group cities by region
function groupByRegion(cities: CityPage[]): Record<string, CityPage[]> {
  return cities.reduce(
    (acc, city) => {
      if (!acc[city.region]) {
        acc[city.region] = [];
      }
      acc[city.region].push(city);
      return acc;
    },
    {} as Record<string, CityPage[]>
  );
}

const REGION_ORDER = [
  "Lombardia",
  "Veneto",
  "Emilia-Romagna",
  "Piemonte",
  "Toscana",
  "Lazio",
  "Campania",
  "Puglia",
  "Sicilia",
  "Sardegna",
  "Friuli-Venezia Giulia",
  "Liguria",
  "Marche",
  "Abruzzo",
  "Trentino-Alto Adige",
  "Alto Adige",
  "Umbria",
  "Calabria",
  "Basilicata",
  "Molise",
  "Valle d'Aosta",
];

export default function ConsulenzaAIPage() {
  const grouped = groupByRegion(CITIES);

  // Sort regions by REGION_ORDER, then alphabetically for any remaining
  const sortedRegions = Object.keys(grouped).sort((a, b) => {
    const indexA = REGION_ORDER.indexOf(a);
    const indexB = REGION_ORDER.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b, "it");
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-nero text-bianco pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-giallo">CONSULENZA AI</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-3xl">
              Consulenza AI in Italia
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-bianco/70 mt-6 max-w-[640px] leading-relaxed">
              Lavoriamo con PMI e imprenditori in tutta Italia. Dalla Valle
              d&apos;Aosta alla Sicilia, aiutiamo le aziende italiane ad adottare
              l&apos;intelligenza artificiale in modo concreto, misurabile e
              proporzionato.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contatti"
                className="inline-block bg-giallo text-nero font-semibold px-8 py-4 text-base hover:bg-giallo/90 transition-colors"
              >
                Parla con noi →
              </Link>
              <span className="inline-flex items-center text-bianco/50 text-sm">
                {CITIES.length} province coperte
              </span>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Cities by Region */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <p className="text-body text-grigio-scuro mb-16 max-w-2xl">
              Seleziona la tua città per scoprire come possiamo aiutare le
              imprese del tuo territorio ad adottare l&apos;AI in modo efficace.
            </p>
          </FadeInOnScroll>

          <div className="space-y-16">
            {sortedRegions.map((region) => {
              const regionCities = grouped[region].sort((a, b) =>
                a.name.localeCompare(b.name, "it")
              );

              return (
                <FadeInOnScroll key={region}>
                  <div>
                    <div className="flex items-baseline gap-4 mb-6">
                      <h2 className="text-2xl font-bold text-nero">{region}</h2>
                      <span className="text-sm text-grigio-medio">
                        {regionCities.length}{" "}
                        {regionCities.length === 1 ? "provincia" : "province"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                      {regionCities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/consulenza-ai/${city.slug}`}
                          className="group bg-bianco border border-grigio-chiaro hover:border-nero hover:bg-nero transition-all duration-200 px-4 py-3"
                        >
                          <span className="text-sm font-semibold text-nero group-hover:text-bianco transition-colors block">
                            {city.name}
                          </span>
                          <span className="text-xs text-grigio-medio group-hover:text-bianco/60 transition-colors block mt-1 truncate">
                            {city.industries[0]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value prop section */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-8">
                Perché le PMI italiane scelgono DOGE di Venezia
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-body text-grigio-scuro leading-relaxed mb-6">
                L&apos;Italia è fatta di distretti, di eccellenze locali, di imprenditori
                che conoscono il loro mercato meglio di chiunque altro. Non
                abbiamo bisogno di spiegarti il tuo settore - abbiamo bisogno di
                capire dove l&apos;AI può fare la differenza per te.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-body text-grigio-scuro leading-relaxed mb-10">
                Siamo specializzati in Anthropic/Claude, il modello AI più
                affidabile per applicazioni business, e lavoriamo
                esclusivamente con PMI e family office italiani. Ogni progetto
                parte da una conversazione onesta su obiettivi, risorse e
                tempi realistici.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <Link
                href="/metodo"
                className="inline-block border-2 border-nero text-nero font-semibold px-8 py-4 text-base hover:bg-nero hover:text-bianco transition-colors"
              >
                Scopri il nostro metodo →
              </Link>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaFinale
        dark
        title="Pronto a portare l'AI nella tua azienda?"
        subtitle="La prima conversazione è gratuita. Nessun impegno, solo chiarezza."
        buttonText="Contattaci →"
        buttonHref="/contatti"
      />
    </>
  );
}

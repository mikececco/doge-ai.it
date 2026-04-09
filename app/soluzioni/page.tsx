import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { SOLUZIONI_PAGES } from "@/lib/soluzioni-data";

export const metadata: Metadata = {
  title: "Soluzioni AI per Aziende Italiane - IL DOGE DI VENEZIA",
  description:
    "Esplora tutte le soluzioni AI di IL DOGE DI VENEZIA per PMI, manifattura, PE/Family Office e settori specifici. Dall'automazione processi agli agenti AI personalizzati.",
  alternates: {
    canonical: "https://doge-ai.it/soluzioni",
  },
  openGraph: {
    title: "Soluzioni AI per Aziende Italiane - IL DOGE DI VENEZIA",
    description:
      "Esplora tutte le soluzioni AI di IL DOGE DI VENEZIA per PMI, manifattura, PE/Family Office e settori specifici.",
    type: "website",
    images: [
      {
        url: "/icon/logoB-noBG.png",
        width: 512,
        height: 512,
        alt: "IL DOGE DI VENEZIA",
      },
    ],
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  PMI: "bg-giallo text-nero",
  Manifattura: "bg-nero text-bianco",
  "PE/Family Office": "bg-nero text-bianco",
  Settore: "bg-giallo text-nero",
  Geo: "bg-nero text-bianco",
};

function getCategoryClass(category: string) {
  return CATEGORY_COLORS[category] ?? "bg-nero text-bianco";
}

// Group pages by category preserving insertion order
function groupByCategory(pages: typeof SOLUZIONI_PAGES) {
  const groups: Record<string, typeof SOLUZIONI_PAGES> = {};
  for (const page of pages) {
    if (!groups[page.category]) {
      groups[page.category] = [];
    }
    groups[page.category].push(page);
  }
  return groups;
}

const CATEGORY_LABELS: Record<string, string> = {
  PMI: "Per le PMI Italiane",
  Manifattura: "Manifattura",
  "PE/Family Office": "Private Equity & Family Office",
  Settore: "Per Settore",
  Geo: "Per Area Geografica",
};

export default function SoluzioniPage() {
  const grouped = groupByCategory(SOLUZIONI_PAGES);

  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="light" className="bg-bianco text-nero pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label>SOLUZIONI</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero uppercase mt-4">
              AI su misura per ogni azienda italiana
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-grigio-scuro mt-6 max-w-[640px]">
              Dalla PMI manifatturiera al family office, dall&apos;automazione processi agli agenti AI personalizzati. Trova la soluzione giusta per la tua realtà.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Solutions by Category */}
      {Object.entries(grouped).map(([category, pages], groupIndex) => (
        <section
          key={category}
          className={groupIndex % 2 === 0 ? "bg-grigio-chiaro py-20" : "bg-bianco py-20"}
        >
          <div className="container-site">
            <FadeInOnScroll>
              <h2 className="text-section text-nero mb-2">
                {CATEGORY_LABELS[category] ?? category}
              </h2>
              <div className="w-12 h-1 bg-giallo mb-10" />
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page) => (
                <FadeInOnScroll key={page.slug}>
                  <Link
                    href={`/soluzioni/${page.slug}`}
                    className="group flex flex-col h-full bg-bianco border border-grigio-chiaro hover:border-nero transition-colors duration-200"
                  >
                    <div className="p-8 flex flex-col h-full">
                      {/* Category badge */}
                      <span
                        className={`self-start text-label uppercase px-2 py-1 text-xs font-semibold tracking-wider ${getCategoryClass(page.category)}`}
                      >
                        {page.category}
                      </span>

                      {/* Headline */}
                      <h3 className="mt-4 text-[20px] font-bold leading-tight text-nero group-hover:text-grigio-scuro transition-colors">
                        {page.h1}
                      </h3>

                      {/* Meta description */}
                      <p className="mt-3 text-body text-grigio-scuro leading-relaxed flex-1 line-clamp-3">
                        {page.metaDescription}
                      </p>

                      {/* Target query */}
                      <div className="mt-4 pt-4 border-t border-grigio-chiaro">
                        <span className="text-xs text-grigio-medio font-mono">
                          {page.targetQuery}
                        </span>
                      </div>

                      {/* CTA */}
                      <div className="mt-4">
                        <span className="text-sm font-semibold text-nero group-hover:text-giallo-hover transition-colors inline-flex items-center gap-1">
                          Scopri la soluzione
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
      ))}

      {/* CTA */}
      <CtaFinale
        veniceImage
        title="Non sai da dove iniziare?"
        subtitle="La prima call è gratuita. Ti diciamo noi dove l'AI vale di più per la tua azienda."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

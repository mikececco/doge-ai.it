import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { CASI_STUDIO } from "@/lib/casi-studio-data";

const BASE_URL = "https://doge-ai.it";

export const metadata: Metadata = {
  title: "Casi Studio AI | Risultati Reali per PMI Italiane - IL DOGE DI VENEZIA",
  description:
    "20 casi studio reali di implementazione AI nelle PMI italiane: manifattura, distribuzione, turismo, food & beverage, sanita e servizi professionali. ROI misurabili e risultati concreti.",
  alternates: { canonical: `${BASE_URL}/casi-studio` },
  openGraph: {
    title: "Casi Studio AI | Risultati Reali per PMI Italiane - IL DOGE DI VENEZIA",
    description:
      "20 casi studio reali di implementazione AI nelle PMI italiane. ROI misurabili e risultati concreti.",
    url: `${BASE_URL}/casi-studio`,
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
  twitter: {
    card: "summary_large_image",
    title: "Casi Studio AI | Risultati Reali per PMI Italiane",
    description:
      "20 casi studio reali di implementazione AI nelle PMI italiane. ROI misurabili e risultati concreti.",
  },
};

// Group case studies by sector
function groupBySector() {
  const groups: Record<string, typeof CASI_STUDIO> = {};
  for (const cs of CASI_STUDIO) {
    if (!groups[cs.sector]) groups[cs.sector] = [];
    groups[cs.sector].push(cs);
  }
  return Object.entries(groups);
}

export default function CasiStudioPage() {
  const grouped = groupBySector();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Casi Studio AI per PMI Italiane",
    description:
      "Raccolta di casi studio reali di implementazione AI nelle PMI italiane con risultati misurabili.",
    url: `${BASE_URL}/casi-studio`,
    publisher: {
      "@type": "Organization",
      name: "IL DOGE DI VENEZIA",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-nero text-bianco pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nero/90 via-nero/70 to-nero/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,40,50,0.8)_0%,_transparent_70%)]" />
        <div className="container-site relative z-10">
          <FadeInOnScroll>
            <Label className="text-bianco/40">CASI STUDIO</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero uppercase mt-4 max-w-4xl">
              Risultati reali, misurabili, documentati.
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-bianco/60 mt-6 max-w-[640px] leading-relaxed">
              {CASI_STUDIO.length} casi studio di implementazione AI in PMI
              italiane. Ogni progetto include: sfida, soluzione, risultati
              quantificati, tempi e investimento.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Stats bar */}
      <section data-navbar-theme="giallo" className="bg-giallo py-8">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-nero">{CASI_STUDIO.length}</p>
              <p className="text-sm text-nero/60 mt-1">Casi studio</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-nero">10</p>
              <p className="text-sm text-nero/60 mt-1">Settori coperti</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-nero">4-5x</p>
              <p className="text-sm text-nero/60 mt-1">ROI medio primo anno</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-nero">6-16</p>
              <p className="text-sm text-nero/60 mt-1">Settimane di implementazione</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASI_STUDIO.map((cs) => (
              <FadeInOnScroll key={cs.slug}>
                <Link
                  href={`/casi-studio/${cs.slug}`}
                  className="block border border-grigio-chiaro p-8 h-full hover:border-giallo transition-colors group"
                >
                  <span className="text-xs font-medium text-grigio-medio uppercase tracking-wider">
                    {cs.sector}
                  </span>
                  <h2 className="text-lg font-bold text-nero mt-2 mb-3 group-hover:text-giallo/80 transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-grigio-scuro line-clamp-2 mb-4">
                    {cs.company}
                  </p>
                  {/* Top 2 results */}
                  <div className="space-y-2 border-t border-grigio-chiaro pt-4">
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.metric} className="flex justify-between items-start gap-2">
                        <span className="text-xs text-grigio-scuro">{r.metric}</span>
                        <span className="text-xs font-bold text-nero whitespace-nowrap">
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-nero/60 bg-grigio-chiaro px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* By Sector */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Per settore</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {grouped.map(([sector, cases]) => (
              <FadeInOnScroll key={sector}>
                <div className="bg-bianco border border-grigio-chiaro p-6">
                  <h3 className="text-sm font-bold text-nero mb-2">{sector}</h3>
                  <p className="text-2xl font-bold text-giallo">{cases.length}</p>
                  <p className="text-xs text-grigio-medio mt-1">
                    {cases.length === 1 ? "caso studio" : "casi studio"}
                  </p>
                  <div className="mt-3 space-y-1">
                    {cases.map((cs) => (
                      <Link
                        key={cs.slug}
                        href={`/casi-studio/${cs.slug}`}
                        className="block text-xs text-nero hover:text-giallo-hover transition-colors underline underline-offset-2"
                      >
                        {cs.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaFinale
        dark
        title="Il prossimo caso studio potrebbe essere il tuo."
        subtitle="Analizziamo gratuitamente i tuoi processi e identifichiamo dove l'AI puo generare il massimo impatto."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

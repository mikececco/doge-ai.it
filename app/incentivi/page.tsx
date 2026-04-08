import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { INCENTIVI, REGIONI } from "@/lib/incentivi-data";

const BASE_URL = "https://doge-ai.it";

export const metadata: Metadata = {
  title: "Incentivi e Agevolazioni AI per PMI | DOGE di Venezia",
  description:
    "Tutti gli incentivi nazionali e regionali per finanziare la trasformazione AI della tua impresa: crediti d'imposta, fondi perduti, bandi regionali e agevolazioni 2026.",
  alternates: {
    canonical: `${BASE_URL}/incentivi`,
  },
  openGraph: {
    title: "Incentivi e Agevolazioni AI per PMI | DOGE di Venezia",
    description:
      "Tutti gli incentivi nazionali e regionali per finanziare la trasformazione AI della tua impresa.",
    url: `${BASE_URL}/incentivi`,
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

export default function IncentiviPage() {
  const nazionali = INCENTIVI.filter((i) => i.category === "nazionale");

  return (
    <>
      {/* Hero - Yellow */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero pt-40 pb-32 overflow-hidden">
        <div className="container-site relative z-10">
          <FadeInOnScroll>
            <Label className="text-nero/60">INCENTIVI E AGEVOLAZIONI</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero uppercase mt-4 max-w-4xl">
              Finanzia la tua trasformazione AI
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-nero/70 mt-6 max-w-[640px] leading-relaxed">
              Crediti d&apos;imposta, fondi perduti, bandi regionali. Naviga tutti
              gli strumenti disponibili per portare l&apos;AI nella tua impresa a
              costo ridotto.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* National Incentives */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-grigio-medio">INCENTIVI NAZIONALI</Label>
            <h2 className="text-section text-nero mt-4 mb-12">
              Agevolazioni statali per la trasformazione digitale
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nazionali.map((incentivo) => (
              <FadeInOnScroll key={incentivo.slug}>
                <Link
                  href={`/incentivi/${incentivo.slug}`}
                  className="block border border-grigio-chiaro p-8 h-full hover:border-giallo transition-colors group"
                >
                  <h3 className="text-xl font-bold text-nero mb-3 group-hover:text-giallo/80 transition-colors">
                    {incentivo.shortTitle}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed mb-4 line-clamp-3">
                    {incentivo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {incentivo.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-nero/60 bg-grigio-chiaro px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-nero/80">
                    {incentivo.amount}
                  </p>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Incentives */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-grigio-medio">INCENTIVI REGIONALI</Label>
            <h2 className="text-section text-nero mt-4 mb-12">
              Bandi e agevolazioni per regione
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {REGIONI.map((regione) => (
              <FadeInOnScroll key={regione.slug}>
                <Link
                  href={`/incentivi/${regione.slug}`}
                  className="block bg-bianco border border-grigio-chiaro p-8 h-full hover:border-giallo transition-colors group"
                >
                  <h3 className="text-xl font-bold text-nero mb-3 group-hover:text-giallo/80 transition-colors">
                    {regione.name}
                  </h3>
                  <p className="text-sm text-grigio-scuro">
                    {regione.incentivi.length} bandi disponibili
                  </p>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <CtaFinale
        veniceImage
        title="Non sai quale incentivo fa per te?"
        subtitle="Ti aiutiamo a identificare le agevolazioni giuste e a preparare la domanda. Gratis, nella prima call."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

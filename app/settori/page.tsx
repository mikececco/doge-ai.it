import type { Metadata } from "next";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { SETTORI } from "@/lib/settori-data";

export const metadata: Metadata = {
  title: "Settori — Il Doge di Venezia",
  description:
    "10 settori industriali dove l'AI trasforma le PMI italiane. Scopri i casi d'uso concreti per il tuo settore.",
  openGraph: {
    title: "Settori — Il Doge di Venezia",
    description:
      "10 settori industriali dove l'AI trasforma le PMI italiane. Scopri i casi d'uso concreti per il tuo settore.",
    type: "website",
  },
};

export default function SettoriPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nero text-bianco pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl text-center mx-auto">
              Testi per i settori
            </h1>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Sector Grid */}
      <section className="bg-nero text-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {SETTORI.map((settore) => (
              <div key={settore.number} className="p-4">
                <h2 className="text-giallo font-bold text-sm uppercase tracking-wider mb-4">
                  {settore.title}
                </h2>
                <ul className="space-y-3">
                  {settore.useCases.map((uc, j) => (
                    <li
                      key={j}
                      className="text-[13px] text-bianco/80 leading-relaxed"
                    >
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FadeInOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CtaFinale
        dark
        title="Non trovi il tuo settore?"
        subtitle="Contattaci. Analizziamo il tuo caso specifico gratuitamente."
        buttonText="Parla con noi &rarr;"
        buttonHref="/contatti"
      />
    </>
  );
}

import type { Metadata } from "next";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import SettoriGrid from "@/components/sections/SettoriGrid";
import { SETTORI } from "@/lib/settori-data";

export const metadata: Metadata = {
  title: "Settori - IL DOGE DI VENEZIA",
  description:
    "10 settori industriali dove l'AI trasforma le PMI italiane. Scopri i casi d'uso concreti per il tuo settore.",
  openGraph: {
    title: "Settori - IL DOGE DI VENEZIA",
    description:
      "10 settori industriali dove l'AI trasforma le PMI italiane.",
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

export default function SettoriPage() {
  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">
              Dove operiamo
            </span>
            <h1 className="text-section uppercase mt-4 mx-auto">
              Ogni settore ha le sue sfide.
              <br />
              Noi le conosciamo gi&agrave;.
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Non esistono soluzioni generiche. Ogni settore ha i suoi colli di bottiglia,
              i suoi processi critici e le sue opportunit&agrave; specifiche.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Sector Grid - clickable cards */}
      <section data-navbar-theme="dark" className="bg-black text-bianco section-padding">
        <div className="container-site">
        <FadeInOnScroll>
          <SettoriGrid settori={SETTORI} />
        </FadeInOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CtaFinale
        veniceImage
        title="Non trovi il tuo settore?"
        subtitle="Contattaci. Analizziamo il tuo caso specifico gratuitamente."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

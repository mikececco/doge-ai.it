import type { Metadata } from "next";
import Link from "next/link";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CtaFinale from "@/components/sections/CtaFinale";
import { SETTORI } from "@/lib/settori-data";

export const metadata: Metadata = {
  title: "Settori - Il Doge di Venezia",
  description:
    "10 settori industriali dove l'AI trasforma le PMI italiane. Scopri i casi d'uso concreti per il tuo settore.",
  openGraph: {
    title: "Settori - Il Doge di Venezia",
    description:
      "10 settori industriali dove l'AI trasforma le PMI italiane.",
    type: "website",
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

const SECTOR_SLUGS: Record<string, string> = {
  "01": "ai-manifattura-produzione",
  "02": "ai-distribuzione-b2b",
  "03": "ai-retail-fashion",
  "04": "ai-turismo-ospitalita",
  "05": "ai-logistica-trasporti",
  "06": "ai-servizi-professionali",
  "07": "ai-farmaceutica",
  "08": "ai-food-beverage",
  "09": "ai-edilizia-immobiliare",
  "10": "ai-sanita-privata",
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
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              Ogni settore ha le sue sfide. Noi le conosciamo gi&agrave;.
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Non esistono soluzioni generiche. Ogni settore ha i suoi colli di bottiglia,
              i suoi processi critici e le sue opportunit&agrave; specifiche.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Sector Grid - clickable cards */}
      <SectionWrapper bg="dark">
        <FadeInOnScroll>
          <div className="border border-bianco/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {SETTORI.map((settore, i) => {
                const slug = SECTOR_SLUGS[settore.number];
                return (
                  <Link
                    key={settore.number}
                    href={`/blog/${slug}`}
                    className={`group relative block ${i < SETTORI.length - 2 ? "border-b border-bianco/20" : ""} ${i % 2 === 0 ? "md:border-r border-bianco/20" : ""}`}
                  >
                    <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6">
                      <span className="text-3xl font-bold text-bianco shrink-0">
                        {settore.number}.
                      </span>
                      <div className="flex-1">
                        <span className="text-sm font-bold uppercase tracking-wide text-bianco group-hover:text-giallo transition-colors">
                          {settore.title}
                        </span>
                      </div>
                      <svg className="w-5 h-5 text-bianco/40 group-hover:text-giallo transition-all group-hover:translate-x-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                    <div className="px-6 pb-5 md:px-8 md:pb-6 pl-16 md:pl-20">
                      <ul className="space-y-1">
                        {settore.useCases.map((uc, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-bianco/60 group-hover:text-bianco/80 transition-colors">
                            <span className="text-giallo mt-0.5 shrink-0">&rarr;</span>
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* CTA */}
      <CtaFinale
        dark
        title="Non trovi il tuo settore?"
        subtitle="Contattaci. Analizziamo il tuo caso specifico gratuitamente."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

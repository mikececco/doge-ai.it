"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const DIFESA = [
  "Tagliare i costi",
  "Automatizzare i processi",
  "Ridurre il personale",
  "Seguire il mercato",
];

const ATTACCO = [
  "Creare nuovi ricavi",
  "Ripensare il modello di business",
  "Potenziare le persone",
  "Definire il mercato",
];

export default function DifesaAttacco() {
  return (
    <SectionWrapper bg="light">
      <FadeInOnScroll>
        <Label>La Differenza</Label>
        <h2 className="text-section mt-4">Difesa vs Attacco</h2>
        <p className="text-subheadline text-grigio-scuro mt-4 max-w-2xl">
          La maggior parte delle aziende usa l&apos;AI in difesa. Noi la usiamo in attacco.
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <FadeInOnScroll>
          <div className="rounded-card bg-bianco p-8 shadow-card">
            <h3 className="text-lg font-bold text-grigio-medio mb-4">
              🛡 Difesa <span className="text-sm font-normal">(quello che fanno tutti)</span>
            </h3>
            <ul className="space-y-3">
              {DIFESA.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body text-grigio-scuro">
                  <span className="text-grigio-medio mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="rounded-card bg-nero p-8 text-bianco">
            <h3 className="text-lg font-bold text-giallo mb-4">
              ⚔ Attacco <span className="text-sm font-normal text-bianco/60">(quello che facciamo noi)</span>
            </h3>
            <ul className="space-y-3">
              {ATTACCO.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body text-bianco/80">
                  <span className="text-giallo mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}

"use client";

import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const steps = [
  {
    num: "01",
    title: "MAPPATURA",
    body: "Analisi interna completa per identificare dove l'AI ha il massimo impatto, prima di scrivere codice.",
  },
  {
    num: "02",
    title: "TRASFORMAZIONE",
    body: "Strategia e change management in parallelo, con focus su adozione reale del team, non solo sul funzionamento del sistema.",
  },
  {
    num: "03",
    title: "ENGINEERING",
    body: "Sviluppo tecnico orientato al risultato, con soluzioni su misura o off-the-shelf in 30\u201360 giorni.",
  },
];

export default function EntrareCorrereCostruire() {
  return (
    <section data-navbar-theme="light" className="bg-bianco text-nero pb-16 md:pb-24" id="metodo">
      {/* Header */}
      <div className="container-site pt-16 md:pt-24 pb-12">
        <FadeInOnScroll>
          <div className="text-center">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Il nostro metodo
            </span>
            <h2 className="text-section mt-4 uppercase">
              Entriamo. Capiamo. Costruiamo.
            </h2>
            <div className="mt-8">
              <Button variant="outline" size="md" href="/metodo" arrow>
                Il Codice del Doge
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* 3-column grid with black borders */}
      <FadeInOnScroll>
        <div className="container-site">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col border border-nero"
                >
                  {/* Title with number */}
                  <div className="border-b border-nero px-4 md:px-8 py-4 md:py-6 flex items-center gap-4">
                    <span className="text-4xl font-bold text-nero/10">{step.num}</span>
                    <h3 className="text-2xl font-bold uppercase">
                      <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                        {step.title}
                      </span>
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="px-4 md:px-8 py-6 md:py-8 flex-1">
                    <p className="text-body text-nero leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}

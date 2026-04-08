"use client";

import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const steps = [
  {
    num: "01",
    title: "MAPPATURA",
    body: "Partiamo dall'interno. Audit olistico per funzione aziendale, analisi dei flussi di lavoro reali, identificazione immediata dei casi d'uso AI ad alto impatto. Prima di scrivere una riga di codice, sappiamo esattamente dove il tempo si spreca e quanto vale recuperarlo.",
  },
  {
    num: "02",
    title: "TRASFORMAZIONE",
    body: "Strategia e change management insieme, non in sequenza. Definiamo le metriche di base, scegliamo gli strumenti giusti e accompagniamo le persone nel cambiamento. Il risultato che conta non è \"il sistema funziona\", ma \"il team lo usa davvero\".",
  },
  {
    num: "03",
    title: "ENGINEERING",
    body: "Team tecnico orientato al risultato, non alle ore fatturate. Costruiamo solo quello che serve, off-the-shelf quando basta, custom quando crea vantaggio reale. Dall'audit all'AI in produzione: 30-60 giorni.",
  },
];

export default function EntrareCorrereCostruire() {
  return (
    <section className="bg-bianco text-nero pb-16 md:pb-24" id="metodo" data-navbar-theme="light">
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
                  <div className="border-b border-nero px-4 md:px-8 py-4 md:py-6 flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-nero/10">{step.num}</span>
                    <h3 className="text-lg font-bold uppercase">
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

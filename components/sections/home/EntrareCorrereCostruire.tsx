"use client";

import { ArrowRight } from "lucide-react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const steps = [
  {
    title: "MAPPATURA",
    body: "Partiamo dall'interno. Audit olistico per funzione aziendale, analisi dei flussi di lavoro reali, identificazione immediata dei casi d'uso AI ad alto impatto. Prima di scrivere una riga di codice, sappiamo esattamente dove il tempo si spreca e quanto vale recuperarlo.",
  },
  {
    title: "TRASFORMAZIONE",
    body: "Strategia e change management insieme, non in sequenza. Definiamo le metriche di base, scegliamo gli strumenti giusti e accompagniamo le persone nel cambiamento. Il risultato che conta non è \"il sistema funziona\", ma \"il team lo usa davvero\".",
  },
  {
    title: "ENGINEERING",
    body: "Team tecnico orientato al risultato, non alle ore fatturate. Costruiamo solo quello che serve, off-the-shelf quando basta, custom quando crea vantaggio reale. Dall'audit all'AI in produzione: 30-60 giorni.",
  },
];

export default function EntrareCorrereCostruire() {
  return (
    <section className="bg-bianco text-nero" id="metodo">
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
              <a
                href="/metodo"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 border border-nero text-nero hover:bg-nero hover:text-bianco transition-[background-color,color] duration-[250ms]"
              >
                Il Codice del Doge <ArrowRight size={16} className="inline-block" />
              </a>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* 3-column grid with black borders */}
      <FadeInOnScroll>
        <div className="border-t border-b border-nero">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col ${i < steps.length - 1 ? "md:border-r border-nero" : ""} border-b md:border-b-0 border-nero last:border-b-0`}
              >
                {/* Title */}
                <div className="border-b border-nero px-4 md:px-8 py-4 md:py-6">
                  <h3 className="text-xl font-bold uppercase">
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
      </FadeInOnScroll>
    </section>
  );
}

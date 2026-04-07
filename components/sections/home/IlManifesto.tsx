"use client";

import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const pillars = [
  {
    title: "Prodotti",
    body: "Competenza tecnica verticale, mentalità AI-first. Off-the-shelf quando basta, custom quando crea vantaggio reale.",
  },
  {
    title: "Processi",
    body: "Entriamo nei flussi di lavoro reali, nei colli di bottiglia invisibili. Smontiamo, automatizziamo, restiamo fino a quando funziona.",
  },
  {
    title: "Persone",
    body: "Ogni individuo deve avere gli strumenti e l'autonomia per integrare l'AI nel proprio lavoro. Altrimenti è solo tecnologia che raccoglie polvere.",
  },
];

export default function IlManifesto() {
  return (
    <SectionWrapper bg="white" id="manifesto">
      <FadeInOnScroll>
        <div className="text-center mb-14">
          <span className="text-label uppercase text-grigio-medio tracking-widest">
            Tre leve. Zero compromessi.
          </span>
          <h2 className="text-section uppercase mt-4">
            Chi cambia solo i tool non cambia niente.
          </h2>
          <p className="text-body text-nero/70 mt-4 max-w-[600px] mx-auto">
            Ogni progetto agisce su prodotti, processi e persone. In parallelo,
            non in sequenza.
          </p>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="border border-nero">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={i}
                className={`px-4 py-4 md:px-8 md:py-8 ${i < 2 ? "md:border-r border-nero" : ""} border-b md:border-b-0 border-nero last:border-b-0`}
              >
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    {p.title}
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-nero px-4 py-3 md:px-8 md:py-4 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-nero">
              Vuoi capire i principi che guidano ogni nostro progetto?
            </p>
            <Button variant="primary" href="/metodo" className="shrink-0">
              Il Codice del Doge
            </Button>
          </div>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}

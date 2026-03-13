"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import Card from "@/components/ui/Card";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const LIVELLI = [
  {
    level: "Livello 0",
    title: "Efficienza Operativa",
    description:
      "Automatizzazione dei processi ripetitivi. Riduzione dei costi operativi del 15-30% in 90 giorni.",
  },
  {
    level: "Livello 1",
    title: "Intelligenza Decisionale",
    description:
      "Dashboard predittive e analisi avanzata. Le decisioni si basano su dati, non su intuizioni.",
  },
  {
    level: "Livello 2",
    title: "Innovazione di Prodotto",
    description:
      "Nuovi prodotti e servizi abilitati dall'AI. Il vantaggio competitivo diventa strutturale.",
  },
  {
    level: "Livello 3",
    title: "Trasformazione del Modello",
    description:
      "L'AI ridefinisce il business model. L'azienda diventa una piattaforma data-driven.",
  },
];

export default function QuattroLivelli() {
  return (
    <SectionWrapper>
      <FadeInOnScroll>
        <Label>Il Framework</Label>
        <h2 className="text-section mt-4">I 4 Livelli della Maturità AI</h2>
        <p className="text-subheadline text-grigio-scuro mt-4 max-w-2xl">
          Ogni azienda parte da un livello diverso. Noi la portiamo a quello successivo.
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {LIVELLI.map((livello, i) => (
          <Card key={i} index={i}>
            <span className="text-label text-giallo">{livello.level}</span>
            <h3 className="text-xl font-bold mt-2">{livello.title}</h3>
            <p className="text-body text-grigio-scuro mt-2">{livello.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

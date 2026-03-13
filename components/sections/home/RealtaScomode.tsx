"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const cards = [
  {
    title: "La velocità è sottovalutata.",
    body: "La maggior parte delle persone giudica l’AI in base a ChatGPT gratuito del 2023. Un anno nell’AI oggi vale decenni in termini di capacità. Oggi c’è un gap enorme tra percezione pubblica e realtà.",
  },
  {
    title: "Il premium dell’intelligenza umana sta evaporando.",
    body: "L’AI può svolgere autonomamente il 70–80% delle mansioni di un dipendente medio, a qualità pari o superiore. Questa non è un’iperbole. È quello che sta succedendo adesso.",
  },
  {
    title: "Non è solo cost reduction.",
    body: "Il primo impatto è sempre sulla riduzione dei costi. Ma il vero valore è nell’innovazione che sblocca: nuovi prodotti che prima erano economicamente non fattibili, nuovi servizi impossibili da scalare senza AI.",
  },
  {
    title: "Il software si sviluppa a un decimo del costo.",
    body: "Puoi replicare l’80% delle funzionalità di un Salesforce in 3–6 mesi con un team di 2–3 persone. Molte licenze «must-have» stanno diventando sostituibili. È il momento di fare audit dello stack tecnologico.",
  },
  {
    title: "La finestra è di 12–24 mesi.",
    body: "Le aziende che implementano AI bene adesso costruiscono vantaggi competitivi difendibili. Dopo diventa il costo minimo per stare nel mercato, non un vantaggio.",
  },
  {
    title: "Le aziende non lo faranno da sole.",
    body: "Sono troppo concentrate sul presente per investire tempo sull’AI. Nessuno nel team sa da dove iniziare. L’AI cade nel gap tra IT, operations e strategy. Le grandi consulenze vendono slide.",
  },
  {
    title: "La displacement non è quella che pensi.",
    body: "Tutti parlano del white-collar. Ma la disruption del blue-collar non è ancora iniziata, ed è quella con l’impatto potenziale più elevato. Le aziende ad alta manovalanza avranno opportunità enormi con l’avvento della robotica.",
  },
  {
    title: "La nuova power-law della valutazione.",
    body: "Assumendo un multiplo EBITDA di 10x, €100.000 di costi eliminati valgono €1.000.000 di valutazione in più. Un investimento di €150k in AI transformation che genera €500k/anno di savings vale €5M in più all’exit.",
  },
  {
    title: "L’AI in azienda non fa paura. Ignorarla sì.",
    body: null, // special card
  },
];

export default function RealtaScomode() {
  return (
    <SectionWrapper bg="dark" id="realta-scomode">
      <FadeInOnScroll>
        <h2 className="text-section text-bianco max-w-[800px]">
          Realt&agrave; scomode che ogni imprenditore dovr&agrave; affrontare.
          Prima o poi.
        </h2>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {cards.map((card, i) => {
          const isSpecial = i === 8;

          if (isSpecial) {
            return (
              <Card
                key={i}
                index={i}
                highlight
                className="flex items-center justify-center min-h-[200px] !border-l-0 hover:!border-l-0"
              >
                <h3 className="text-[2.5rem] font-bold text-nero text-center leading-tight">
                  {card.title}
                </h3>
              </Card>
            );
          }

          return (
            <Card key={i} index={i} dark className="bg-[#2A2A2A] !border-white/5">
              <h3 className="text-lg font-bold text-bianco mb-3">
                {card.title}
              </h3>
              <p className="text-[#BBBBBB] text-body leading-relaxed">
                {card.body}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

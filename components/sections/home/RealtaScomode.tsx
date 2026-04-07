"use client";

import Link from "next/link";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const topRow = [
  {
    title: "La velocità del cambiamento è sottovalutata.",
    body: "La maggior parte delle persone giudica l'AI in base a ChatGPT gratuito del 2023. Un anno nell'AI oggi vale decenni in termini di capacità. Oggi c'è un gap enorme tra percezione pubblica e realtà.",
  },
  {
    title: "L'AI eliminerà parte del lavoro umano.",
    body: "L'AI può svolgere autonomamente il 70-80% delle mansioni di un dipendente medio, a qualità pari o superiore. Questa non è un'iperbole. È quello che sta succedendo adesso.",
  },
  {
    title: "Non è solo cost reduction.",
    body: "Il primo impatto è sempre sulla riduzione dei costi. Ma il vero valore è nell'innovazione che sblocca: nuovi prodotti che prima erano economicamente non fattibili, nuovi servizi impossibili da scalare senza AI.",
  },
  {
    title: "Le aziende non lo faranno da sole.",
    body: "Sono troppo concentrate sul presente per investire tempo sull'AI. Nessuno nel team sa da dove iniziare. L'AI cade nel gap tra IT, operations e strategy. Le grandi consulenze vendono slide.",
  },
];

const bottomRow = [
  {
    title: "Non si tratta di tool, ma di persone.",
    body: "Acquistare licenze non basta per definirsi \"AI First\". La vera trasformazione è culturale: occorre ripensare i processi e abilitare le persone a un nuovo modo di lavorare.",
  },
  {
    title: "Chi adotta l'AI oggi conquisterà quote di mercato domani.",
    body: "Le PMI che scelgono di non investire oggi rischiano l'emarginazione da parte di competitor e fornitori tech-enabled capaci di scalare volumi, qualità e velocità a ritmi che diventeranno presto incolmabili.",
  },
  {
    title: "La nuova power-law della valutazione aziendale.",
    body: "Assumendo un multiplo EBITDA di 10x, €100.000 di costi eliminati valgono €1.000.000 di valutazione in più. Un investimento di €150k in AI transformation che genera €500k/anno di savings vale €5M in più all'exit.",
  },
];

export default function RealtaScomode() {
  return (
    <section className="bg-bianco text-nero section-padding" id="realta-scomode">
      {/* Title */}
      <div className="container-site">
        <FadeInOnScroll>
          <h2 className="text-section uppercase text-center mb-14">
            Realt&agrave; scomode che ogni imprenditore dovr&agrave; affrontare.
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          {/* Top row - 4 cards */}
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {topRow.map((card, i) => (
                <div
                  key={i}
                  className={`px-4 py-4 md:px-8 md:py-8 ${i < topRow.length - 1 ? "md:border-r border-nero" : ""}`}
                >
                  <h3 className="text-base font-bold uppercase leading-snug mb-4">
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                      {card.title}
                    </span>
                  </h3>
                  <p className="text-sm text-nero/70 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Bottom row */}
      <div className="container-site">
        <FadeInOnScroll>
          <div className="border border-nero border-t-0">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {bottomRow.map((card, i) => (
                <div
                  key={i}
                  className={`px-4 py-4 md:px-8 md:py-8 md:border-r border-nero`}
                >
                  <h3 className="text-base font-bold uppercase leading-snug mb-4">
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                      {card.title}
                    </span>
                  </h3>
                  <p className="text-sm text-nero/70 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}

              {/* Special last card - black bg, bigger */}
              <Link href="/contatti" className="group px-4 py-4 md:px-8 md:py-8 bg-nero text-bianco flex flex-col justify-between min-h-[220px] hover:bg-giallo transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-bold uppercase leading-tight">
                    <span className="group-hover:hidden">L&apos;AI in azienda non fa paura.</span>
                    <span className="hidden group-hover:inline text-nero">Prenota una call</span>
                  </h3>
                  <p className="text-lg italic text-giallo mt-2 group-hover:text-nero">
                    <span className="group-hover:hidden">Ignorarla s&igrave;.</span>
                    <span className="hidden group-hover:inline">Nessun impegno, solo chiarezza.</span>
                  </p>
                </div>
                <div className="flex justify-end">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-bianco group-hover:text-nero transition-colors duration-300"
                  >
                    <path d="M7 7l10 10M17 17V7M17 17H7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import NumberedCard from "@/components/ui/NumberedCard";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";

export const metadata: Metadata = {
  title: "AI Operating Partner per Fondi PE — Il Doge di Venezia",
  description:
    "EBITDA uplift nelle portfolio companies. Dalla due diligence all'exit.",
  openGraph: {
    title: "AI Operating Partner per Fondi PE — Il Doge di Venezia",
    description:
      "EBITDA uplift nelle portfolio companies. Dalla due diligence all'exit.",
  },
};

const SFIDE = [
  {
    number: "01",
    title: "Expertise Gap",
    description:
      "Il 90% dei Managing Partner non ha background tech/AI. Distinguere hype da opportunità reale è difficile. Non si sa da dove iniziare o come prioritizzare.",
  },
  {
    number: "02",
    title: "Execution Gap",
    description:
      "Le portfolio company non hanno le competenze per implementare AI internamente. Le big consulting vendono strategie, non implementazione.",
  },
  {
    number: "03",
    title: "Timing Gap",
    description:
      "I primi 12–18 mesi post-deal sono il momento migliore per la transformation (momentum già attivo, budget allocato). Ma non c’è nessuno che lo fa in modo sistematico per il mid-market PE.",
  },
];

const PLAYBOOK = [
  {
    number: "01",
    title: "Pre-deal — AI Due Diligence",
    description:
      "Valutiamo l’AI readiness della target durante la DD. Identifichiamo quick wins implementabili nei primi 100 giorni. Quantifichiamo l’EBITDA uplift potenziale con stima ROI inclusa nel Value Creation Plan.",
  },
  {
    number: "02",
    title: "Primi 100 Giorni",
    description:
      "Implementiamo 2–3 quick wins ad alto impatto. Generiamo vittorie rapide che danno momentum al management. Stabiliamo KPI e dashboard per il tracking continuativo.",
  },
  {
    number: "03",
    title: "Mesi 3–18 — Trasformazione",
    description:
      "Embedded nell’azienda. Target: cost reduction 15–30%, operations scalabili, infrastruttura dati moderna. Team interno formato per garantire autonomia post-progetto.",
  },
  {
    number: "04",
    title: "Portfolio-wide",
    description:
      "Dopo aver collaborato con 2–3 aziende in portafoglio, identifichiamo pattern comuni, riduciamo il time-to-value per ogni nuova implementazione. Il know-how si accumula e diventa un asset del fondo.",
  },
];

const VALUATION_ROWS = [
  {
    label: "INVESTIMENTO AI TRANSFORMATION",
    value: "€150.000",
  },
  {
    label: "SAVINGS ANNUI GENERATI",
    value: "€500.000",
  },
  {
    label: "ROI DIRETTO SULL’INVESTIMENTO",
    value: "3.3x",
    highlight: true,
  },
  {
    label: "IMPATTO SULLA VALUATION (10x EBITDA)",
    value: "€5.000.000",
    highlight: true,
  },
  {
    label: "MOLTIPLICATORE SULL’INVESTIMENTO INIZIALE",
    value: "33x",
    highlight: true,
  },
];

export default function FondiPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-bianco text-nero pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label>PER I FONDI PE</Label>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl">
              Il vostro AI Operating Partner. Dalla due diligence all&rsquo;exit.
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-subheadline text-grigio-scuro mt-6 max-w-[620px]">
              La finestra per generare alpha strutturale attraverso l&rsquo;AI
              transformation delle portfolio companies &egrave; aperta adesso. In
              12&ndash;24 mesi diventa il costo di stare nel mercato.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="mt-10">
              <Button href="/contatti">Parla con noi &rarr;</Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 2 — Le 3 Sfide */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <h2 className="text-section">
            Tre problemi che ogni fondo PE ha con l&rsquo;AI. Oggi.
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {SFIDE.map((sfida, i) => (
            <NumberedCard
              key={sfida.number}
              number={sfida.number}
              title={sfida.title}
              description={sfida.description}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Section 3 — Il Playbook */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <h2 className="text-section">Come lavoriamo con i fondi.</h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {PLAYBOOK.map((step, i) => (
            <NumberedCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Section 4 — La Power Law della Valutazione */}
      <SectionWrapper bg="dark">
        <FadeInOnScroll>
          <h2 className="text-section text-bianco">
            Ogni euro di costo eliminato vale 10 euro di valutazione
            all&rsquo;exit.
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="bg-[#2A2A2A] rounded-lg p-10 mt-10">
            <div className="space-y-6">
              {VALUATION_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-grigio-medio text-sm uppercase">
                    {row.label}
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      row.highlight ? "text-giallo" : "text-bianco"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <p className="text-bianco text-[22px] font-bold text-center mt-10">
            Per i fondi PE, questo &egrave; un no-brainer assoluto.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* Section 5 — CTA Finale */}
      <CtaFinale
        title="La prima conversazione &egrave; sempre riservata e senza impegno."
        subtitle="Parliamo del vostro portfolio e di dove ha senso iniziare."
        buttonText="Contattaci &rarr;"
        buttonHref="/contatti"
      />
    </>
  );
}

"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import NumberedCard from "@/components/ui/NumberedCard";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import TimelineAnimated from "@/components/animations/TimelineAnimated";
import CtaFinale from "@/components/sections/CtaFinale";

/* ─── Data ─────────────────────────────────────────────── */

const VALUATION_ROWS = [
  {
    label: "INVESTIMENTO AI TRANSFORMATION",
    value: "\u20AC150.000",
  },
  {
    label: "SAVINGS ANNUI GENERATI",
    value: "\u20AC500.000",
  },
  {
    label: "IMPATTO SULLA VALUATION (10x EBITDA)",
    value: "\u20AC5.000.000",
    highlight: true,
  },
  {
    label: "MOLTIPLICATORE SULL\u2019INVESTIMENTO",
    value: "33x",
    highlight: true,
  },
];

const GAPS = [
  {
    number: "01",
    title: "Expertise Gap",
    description:
      "Il 90% dei Managing Partner non ha background tech/AI. Distinguere hype da opportunit\u00E0 reale \u00E8 difficile. Non si sa da dove iniziare.",
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
      "I primi 12\u201318 mesi post-deal sono il momento migliore per la transformation. Ma non c\u2019\u00E8 nessuno che lo fa in modo sistematico per il mid-market PE.",
  },
];

const FASI_DEAL = [
  {
    fase: "Pre-Deal DD",
    titolo: "AI Due Diligence",
    items: [
      "Valutiamo l\u2019AI readiness della target",
      "Identifichiamo quick wins per i primi 100 giorni",
      "Quantifichiamo l\u2019EBITDA uplift potenziale",
      "Stima ROI inclusa nel Value Creation Plan",
    ],
  },
  {
    fase: "Primi 100 Giorni",
    titolo: "Quick Wins ad Alto Impatto",
    items: [
      "2\u20133 implementazioni concrete",
      "Vittorie rapide che danno momentum",
      "KPI e dashboard per tracking",
      "Il management vede risultati, non slide",
    ],
  },
  {
    fase: "Mesi 3\u201318",
    titolo: "Trasformazione Profonda",
    items: [
      "Embedded nell\u2019azienda",
      "Cost reduction 15\u201330%",
      "Operations scalabili",
      "Team interno formato per autonomia",
    ],
  },
  {
    fase: "Portfolio-Wide",
    titolo: "Scala il Know-How",
    items: [
      "Pattern comuni tra portfolio companies",
      "Time-to-value ridotto per ogni nuova azienda",
      "Il know-how diventa un asset del fondo",
      "Vantaggio competitivo sistemico",
    ],
  },
];

const TIMELINE_FONDI = [
  {
    title: "Pre-Deal DD",
    description: "AI readiness assessment e stima EBITDA uplift",
  },
  {
    title: "Primi 100 Giorni",
    description: "2-3 quick wins concreti con KPI misurabili",
  },
  {
    title: "Mesi 3-18",
    description: "Trasformazione profonda, cost reduction 15-30%",
  },
  {
    title: "Portfolio-Wide",
    description: "Pattern scalabili su tutte le portfolio companies",
  },
];

const SETTORI_TABELLA = [
  {
    settore: "Manifattura",
    applicazione: "Automazione ordini, quality control predittivo, manutenzione preventiva",
  },
  {
    settore: "Food & Beverage",
    applicazione: "Parsing ordini multi-canale, demand forecasting, tracciabilit\u00E0 automatica",
  },
  {
    settore: "Logistica",
    applicazione: "Ottimizzazione rotte, gestione magazzino intelligente, tracking predittivo",
  },
  {
    settore: "Distribuzione B2B",
    applicazione: "CRM intelligente, automazione offerte, analisi credito clienti",
  },
  {
    settore: "Moda & Lusso",
    applicazione: "Configuratori prodotto, trend analysis, personalizzazione clienteling",
  },
  {
    settore: "Healthcare",
    applicazione: "Documentazione clinica AI, compliance automatizzata, scheduling intelligente",
  },
  {
    settore: "Costruzioni",
    applicazione: "Project management predittivo, analisi cantiere, procurement intelligence",
  },
  {
    settore: "Retail",
    applicazione: "Pricing dinamico, inventory optimization, customer service omnicanale",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function FondiPage() {
  return (
    <>
      {/* ── Section 1: Hero (Yellow) ─────────────────────── */}
      <SectionWrapper bg="giallo" className="!pt-40 !pb-16">
        <FadeInOnScroll>
          <Label className="!text-nero/60">PER I FONDI PE</Label>
          <h1 className="text-hero mt-4 max-w-4xl">
            La leva di value creation pi&ugrave; sottovalutata nel vostro
            portfolio.
          </h1>
          <p className="text-subheadline text-nero/70 mt-6 max-w-[680px]">
            L&rsquo;AI non &egrave; un costo IT. &Egrave; la leva di value
            creation pi&ugrave; potente e meno utilizzata nel mid-market PE.
            Ogni euro di EBITDA guadagnato con l&rsquo;AI vale 10x
            all&rsquo;exit.
          </p>
          <div className="mt-10">
            <Button href="/contatti" className="!bg-nero !text-giallo hover:!bg-grigio-scuro">
              Parla con noi &rarr;
            </Button>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 2: Ogni Euro di EBITDA ───────────────── */}
      <SectionWrapper bg="dark">
        <FadeInOnScroll>
          <Label className="!text-giallo">IL MOLTIPLICATORE</Label>
          <h2 className="text-section text-bianco mt-4">
            Ogni euro di EBITDA vale 10 volte all&rsquo;exit.
          </h2>
          <p className="text-body text-bianco/60 mt-4 max-w-[700px]">
            Un investimento di &euro;150K in AI transformation pu&ograve;
            generare &euro;500K di savings annui. Con un multiplo di 10x,
            sono &euro;5M di valutazione aggiuntiva.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <div className="bg-[#2A2A2A] p-8 md:p-10">
            <div className="space-y-5">
              {VALUATION_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0 gap-1"
                >
                  <span className="text-grigio-medio text-sm uppercase tracking-wider">
                    {row.label}
                  </span>
                  <span
                    className={`text-2xl font-bold ${
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

        <FadeInOnScroll className="mt-10">
          <p className="text-bianco text-[22px] font-bold text-center">
            Per i fondi PE, questo &egrave; un no-brainer assoluto.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 3: Non manca la visione ──────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <Label>IL PROBLEMA</Label>
          <h2 className="text-section mt-4">
            Non manca la visione. Manca chi esegue.
          </h2>
          <p className="text-body text-grigio-scuro mt-4 max-w-[700px]">
            Ogni fondo sa che l&rsquo;AI &egrave; il futuro. Ma tra saperlo e
            farlo c&rsquo;&egrave; un gap enorme. Tre gap, per la precisione.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {GAPS.map((gap, i) => (
            <NumberedCard
              key={gap.number}
              number={gap.number}
              title={gap.title}
              description={gap.description}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 4: Braccio operativo in ogni fase ────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <Label>IL PLAYBOOK</Label>
          <h2 className="text-section mt-4">
            Il vostro braccio operativo AI in ogni fase del deal.
          </h2>
        </FadeInOnScroll>

        {/* Animated Timeline */}
        <TimelineAnimated items={TIMELINE_FONDI} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {FASI_DEAL.map((fase, i) => (
            <Card key={fase.fase} index={i}>
              <span className="text-label text-giallo uppercase tracking-wider">
                {fase.fase}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-4">{fase.titolo}</h3>
              <ul className="space-y-2">
                {fase.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-body text-grigio-scuro"
                  >
                    <span className="text-giallo mt-0.5 shrink-0">&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 5: Settore + Applicazioni AI ─────────── */}
      <SectionWrapper bg="dark">
        <FadeInOnScroll>
          <Label className="!text-giallo">COMPETENZA SETTORIALE</Label>
          <h2 className="text-section text-bianco mt-4">
            Il tuo settore ha un problema. Noi lo conosciamo gi&agrave;.
          </h2>
          <p className="text-body text-bianco/60 mt-4 max-w-[700px]">
            Abbiamo mappato i processi pi&ugrave; inefficienti per ogni
            verticale. Sappiamo dove l&rsquo;AI ha il massimo impatto.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-label text-giallo pb-4 pr-8 uppercase tracking-wider">
                    Settore
                  </th>
                  <th className="text-label text-giallo pb-4 uppercase tracking-wider">
                    Applicazioni AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {SETTORI_TABELLA.map((row) => (
                  <tr
                    key={row.settore}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td className="text-bianco font-bold py-4 pr-8 whitespace-nowrap">
                      {row.settore}
                    </td>
                    <td className="text-bianco/70 text-body py-4">
                      {row.applicazione}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 6: CTA Finale ────────────────────────── */}
      <CtaFinale
        title="Vinci la prossima decade."
        subtitle="La prima conversazione &egrave; sempre riservata e senza impegno. Parliamo del vostro portfolio."
        buttonText="Contattaci &rarr;"
        buttonHref="/contatti"
        dark
      />
    </>
  );
}

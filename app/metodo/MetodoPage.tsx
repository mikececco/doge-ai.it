"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import Badge from "@/components/ui/Badge";
import Accordion from "@/components/ui/Accordion";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import AnimatedUnderline from "@/components/animations/AnimatedUnderline";
import CtaFinale from "@/components/sections/CtaFinale";
import QuattroLivelli from "@/components/sections/QuattroLivelli";
import DifesaAttacco from "@/components/sections/DifesaAttacco";

/* ─── Data ─────────────────────────────────────────────── */

const ASSESSMENT_STEPS = [
  {
    title: "Mappatura dei processi",
    description:
      "Audit olistico per funzione aziendale (operations, customer service, finance, HR, vendite). Identifichiamo i processi ad alto volume, alta ripetitività e alto costo — quelli dove l’AI ha il maggiore impatto.",
  },
  {
    title: "Quantificazione del costo attuale",
    description:
      "Per ogni caso d’uso identificato, calcoliamo il costo reale oggi: ore/uomo mensili × costo orario medio + errori + rework + opportunità perse. Nessun progetto parte senza un business case chiaro.",
  },
  {
    title: "Stima del target post-AI",
    description:
      "Per ogni caso d’uso, proiettiamo l’obiettivo misurabile: riduzione del 60–80% delle ore, tasso di automazione, nuova capacità generata. Definiamo KPI precisi prima di iniziare.",
  },
  {
    title: "AI Readiness",
    description:
      "Valutiamo la qualità dei dati esistenti, il tech stack attuale, l’integrazione con sistemi gestionali (ERP, CRM). Identifichiamo i gap da colmare prima dell’implementazione.",
  },
  {
    title: "Make or Buy",
    description:
      "La reazione istintiva è sempre acquistare. Acquistiamo quando il workflow è generico o la velocità conta. Costruiamo solo quando il workflow è profondamente personalizzato o quando crea differenziazione strategica reale.",
  },
];

const QUICK_WIN_SECTORS = [
  {
    title: "Logistica & Trasporti",
    content:
      "Ottimizzazione rotte real-time, automazione documenti CMR/DDT, agente AI per ordini inbound, portale self-service clienti, fatturazione automatica a consegna completata.",
  },
  {
    title: "Manifattura & Produzione",
    content:
      "Customer service tecnico AI, gestione preventivi automatizzata, controllo qualità visivo con computer vision, coordinamento fornitori multi-lingua, predictive maintenance.",
  },
  {
    title: "Alimentare, Beverage & Vitivinicolo",
    content:
      "Gestione automatica ordini GDO e horeca, tracciabilità filiera AI-driven, demand forecasting stagionale, export compliance automatizzata, customer service multilingua 24/7.",
  },
  {
    title: "Moda, Lusso & Design",
    content:
      "Configuratore prodotti AI per clienti B2B, gestione campionario con ricerca visiva, customer service multilingua per wholesale, AI per trend analysis su social media e runway.",
  },
  {
    title: "Healthcare & Medical Devices",
    content:
      "Automazione documentazione regolatoria, customer service clinico, analisi automatica letteratura scientifica, onboarding automatizzato distributori e agenti.",
  },
];

const PRINCIPI = [
  {
    title: "Mattoncini, non monoliti.",
    body: "Scomponiamo ogni grande trasformazione in progetti da 30–90 giorni con output misurabili. Nessun progetto da 6 mesi che sparisce in un cassetto. Manteniamo il momentum con una prospettiva di lungo termine.",
  },
  {
    title: "Build the least that delivers the most.",
    body: "La domanda non è “quale AI usiamo?” ma “qual è il minimo che devo costruire per ottenere il massimo impatto?” Ogni feature in più è un rischio, un costo, e un ritardo al primo risultato.",
  },
  {
    title: "Human in the loop.",
    body: "L’automazione totale non è sempre l’obiettivo. Per processi ad alta variabilità o alta posta in gioco, l’AI gestisce il 70–80% del lavoro e scala all’operatore umano per le eccezioni. L’AI decide, l’umano supervisiona.",
  },
  {
    title: "Adozione reale, non funzionamento tecnico.",
    body: "Un sistema AI che il team non usa vale zero. Investiamo tanto nell’UX e nel change management quanto nell’engineering. La metrica di successo non è “funziona?” ma “lo usano?”",
  },
  {
    title: "Make or Buy: la reazione istintiva è acquistare.",
    body: "Acquistiamo quando il workflow è generico. Costruiamo solo quando crea differenziazione strategica reale. Un sistema economico da sviluppare non è necessariamente economico da mantenere.",
  },
  {
    title: "Non implementiamo AI dove basta un foglio Excel.",
    body: "Risolviamo solo i colli di bottiglia dove l’AI è l’unico moltiplicatore possibile. Non complichiamo ciò che è semplice. Il buon senso prima della tecnologia.",
  },
  {
    title: "Trasformazione olistica.",
    body: "Sales, operations, customer service, finance, HR, marketing, supply chain. Non ottimizziamo un angolo dell’azienda — la trasformiamo dall’interno.",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function MetodoPage() {
  return (
    <>
      {/* ── Section 1: Hero ────────────────────────────── */}
      <section className="bg-bianco text-nero pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label>IL CODICE DEL DOGE</Label>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl">
              Il nostro processo,{" "}
              <AnimatedUnderline>aperto</AnimatedUnderline>. Completamente.
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="text-xl text-grigio-scuro mt-8 max-w-[680px] space-y-6">
              <p>
                In molti ci hanno chiesto come lavoriamo davvero &mdash; non la
                versione da deck, ma i passi concreti che seguiamo quando
                entriamo in un&apos;azienda. Abbiamo deciso di renderlo
                pubblico.
              </p>
              <p>
                Se qualcuno lo copia, bene: vuol dire che il mercato si muove
                nella direzione giusta. I risultati per&ograve; si ottengono
                solo con l&apos;esecuzione.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Section 2: Fase 0 — Cultural Buy-in ──────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <Badge>FASE 0</Badge>
          <h2 className="text-section mt-4">
            Prima delle tecnologie, le persone.
          </h2>
          <p className="text-subheadline text-grigio-scuro mt-4 max-w-2xl">
            La tecnologia pi&ugrave; avanzata del mondo non funziona se le
            persone non ci credono. Per questo, la Fase 0 viene prima di
            qualsiasi valutazione tecnica.
          </p>
        </FadeInOnScroll>

        {/* Risk cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <FadeInOnScroll>
            <div className="bg-grigio-chiaro  p-6 h-full">
              <h3 className="text-lg font-bold mb-3">
                &#9888; La paura di essere rimpiazzati
              </h3>
              <p className="text-body text-grigio-scuro">
                &Egrave; la preoccupazione pi&ugrave; diffusa e raramente
                espressa apertamente. Se non viene affrontata subito, si
                traduce in resistenza passiva: dati forniti a met&agrave;,
                feedback falsati, adozione lenta. Il nostro approccio &egrave;
                diretto: l&apos;AI sposta le persone dall&apos;operativit&agrave;
                ripetitiva ad attivit&agrave; ad alto valore aggiunto. Chi
                impara a lavorare con l&apos;AI diventa pi&ugrave; prezioso, non
                meno.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="bg-grigio-chiaro  p-6 h-full">
              <h3 className="text-lg font-bold mb-3">
                &#9888; La disillusione da tool gi&agrave; provati
              </h3>
              <p className="text-body text-grigio-scuro">
                Chi ha gi&agrave; sperimentato l&apos;AI senza successo tende a
                scartare qualsiasi nuova proposta. Questi individui sono spesso
                tra i pi&ugrave; capaci e i pi&ugrave; critici. La strategia:
                mostriamo loro qualcosa che funziona davvero, velocemente, nel
                loro dominio, prima di chiedere qualsiasi commitment.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Callout */}
        <FadeInOnScroll>
          <div className="bg-grigio-chiaro border-l-4 border-giallo p-6 mt-10">
            <p className="text-body text-grigio-scuro">
              <strong>Regola pratica:</strong> se in azienda c&apos;&egrave;
              qualcuno che ha gi&agrave; provato l&apos;AI senza risultati,
              quella persona deve essere tra le prime a vedere un quick win
              funzionante. Convertire uno scettico vale dieci evangelisti.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Come lo facciamo */}
        <FadeInOnScroll>
          <h3 className="text-2xl font-bold mt-16">Come lo facciamo</h3>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <FadeInOnScroll>
            <div>
              <h4 className="text-xl font-bold mb-2">Interviste one-to-one</h4>
              <p className="text-body text-grigio-scuro">
                Interviste con l&apos;executive team. Incontriamo
                individualmente i leader delle principali funzioni aziendali.
                L&apos;obiettivo non &egrave; raccogliere dati &mdash; &egrave;
                costruire fiducia e capire le priorit&agrave; strategiche di chi
                deve sponsorizzare i progetti.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div>
              <h4 className="text-xl font-bold mb-2">Survey interno</h4>
              <p className="text-body text-grigio-scuro">
                Survey interno di discovery. Somministriamo un questionario
                strutturato a una selezione di dipendenti scelti per funzione e
                anzianit&agrave;. Quattro sezioni: chi sei, come lavori oggi, le
                inefficienze che ti frenano, il tuo rapporto con l&apos;AI.
                Tempo: 10&ndash;15 minuti.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* ── Section 3: Fase 1 — Assessment ───────────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <Badge>FASE 1</Badge>
          <h2 className="text-section mt-4">
            Prima di scrivere una riga di codice.
          </h2>
          <p className="text-subheadline text-grigio-scuro mt-4 max-w-2xl">
            Ogni decisione di implementazione deve essere giustificata dai
            numeri &mdash; non dall&apos;entusiasmo tecnologico.
          </p>
        </FadeInOnScroll>

        {/* 5 assessment steps */}
        <div className="mt-12">
          {ASSESSMENT_STEPS.map((step, i) => (
            <FadeInOnScroll key={i}>
              <div
                className={`py-8 ${
                  i < ASSESSMENT_STEPS.length - 1
                    ? "border-b border-nero/10"
                    : ""
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-[40px] font-bold text-grigio-chiaro leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-body text-grigio-scuro mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Callout */}
        <FadeInOnScroll>
          <div className="bg-bianco border-l-4 border-giallo p-6 mt-10">
            <p className="text-body text-grigio-scuro">
              <strong>No dati, no AI.</strong> Prima di qualsiasi
              implementazione, verifichiamo la qualit&agrave; e
              l&apos;accessibilit&agrave; dei dati aziendali. Dati frammentati o
              in silos rendono impossibile qualsiasi progetto AI serio.
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 4: Fase 2 — Quick Wins ───────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <Badge>FASE 2</Badge>
          <h2 className="text-section mt-4">
            Il primo risultato concreto entro 30 giorni. Non uno studio. Un
            sistema.
          </h2>
          <div className="text-subheadline text-grigio-scuro mt-4 max-w-2xl space-y-4">
            <p>
              Il cambiamento culturale si guadagna con i risultati, non con le
              presentazioni. Nei primi 90 giorni ci concentriamo su 2&ndash;3
              implementazioni ad alto impatto e bassa complessit&agrave;.
            </p>
            <p>
              Quando un team vede il customer service gestire autonomamente
              l&apos;80% delle richieste, smette di resistere e inizia a
              chiedersi: &ldquo;dove possiamo farlo anche noi?&rdquo;
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <h3 className="text-2xl font-bold mt-16">
            Quick wins tipici per settore
          </h3>
        </FadeInOnScroll>

        <FadeInOnScroll className="mt-8">
          <Accordion items={QUICK_WIN_SECTORS} />
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 5: I 4 Livelli ───────────────────── */}
      <QuattroLivelli />

      {/* ── Section 6: Difesa vs Attacco ─────────────── */}
      <DifesaAttacco />

      {/* ── Section 7: I 7 Principi ──────────────────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <h2 className="text-section">
            I 7 principi che guidano ogni progetto.
          </h2>
        </FadeInOnScroll>

        <div className="mt-12">
          {PRINCIPI.map((principio, i) => (
            <FadeInOnScroll key={i}>
              <div
                className={`py-8 ${
                  i < PRINCIPI.length - 1 ? "border-b border-nero/10" : ""
                }`}
              >
                <span className="text-label text-grigio-medio">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[22px] font-bold inline ml-4">
                  {principio.title}
                </h3>
                <p className="text-body text-grigio-scuro mt-2">
                  {principio.body}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 8: CTA Finale ────────────────────── */}
      <CtaFinale
        dark
        title="Questo &egrave; il processo che seguiamo. Se ti riconosci in qualcuna di queste sfide, la prima conversazione &egrave; gratuita."
        buttonText="Parla con noi &rarr;"
        buttonHref="/contatti"
      />
    </>
  );
}

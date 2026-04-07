"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import EmailGate from "@/components/EmailGate";
import Button from "@/components/ui/Button";

/* ─── Data ─────────────────────────────────────────────── */

const ASSESSMENT_STEPS = [
  {
    title: "Mappatura dei processi",
    description:
      "Audit olistico per funzione aziendale (operations, customer service, finance, HR, vendite). Identifichiamo i processi ad alto volume, alta ripetitivit\u00E0 e alto costo - quelli dove l\u2019AI ha il maggiore impatto.",
  },
  {
    title: "Quantificazione del costo attuale",
    description:
      "Per ogni caso d\u2019uso identificato, calcoliamo il costo reale oggi: ore/uomo mensili \u00D7 costo orario medio + errori + rework + opportunit\u00E0 perse. Nessun progetto parte senza un business case chiaro.",
  },
  {
    title: "Stima del target post-AI",
    description:
      "Per ogni caso d\u2019uso, proiettiamo l\u2019obiettivo misurabile: riduzione del 60-80% delle ore, tasso di automazione, nuova capacit\u00E0 generata. Definiamo KPI precisi prima di iniziare.",
  },
  {
    title: "AI Readiness",
    description:
      "Valutiamo la qualit\u00E0 dei dati esistenti, il tech stack attuale, l\u2019integrazione con sistemi gestionali (ERP, CRM). Identifichiamo i gap da colmare prima dell\u2019implementazione.",
  },
  {
    title: "Make or Buy",
    description:
      "La reazione istintiva \u00E8 sempre acquistare. Acquistiamo quando il workflow \u00E8 generico o la velocit\u00E0 conta. Costruiamo solo quando il workflow \u00E8 profondamente personalizzato o quando crea differenziazione strategica reale.",
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
      "Customer service tecnico AI, gestione preventivi automatizzata, controllo qualit\u00E0 visivo con computer vision, coordinamento fornitori multi-lingua, predictive maintenance.",
  },
  {
    title: "Alimentare, Beverage & Vitivinicolo",
    content:
      "Gestione automatica ordini GDO e horeca, tracciabilit\u00E0 filiera AI-driven, demand forecasting stagionale, export compliance automatizzata, customer service multilingua 24/7.",
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
    body: "Scomponiamo ogni grande trasformazione in progetti da 30-90 giorni con output misurabili. Nessun progetto da 6 mesi che sparisce in un cassetto. Manteniamo il momentum con una prospettiva di lungo termine.",
  },
  {
    title: "Build the least that delivers the most.",
    body: "La domanda non \u00E8 \u201Cquale AI usiamo?\u201D ma \u201Cqual \u00E8 il minimo che devo costruire per ottenere il massimo impatto?\u201D Ogni feature in pi\u00F9 \u00E8 un rischio, un costo, e un ritardo al primo risultato.",
  },
  {
    title: "Human in the loop.",
    body: "L\u2019automazione totale non \u00E8 sempre l\u2019obiettivo. Per processi ad alta variabilit\u00E0 o alta posta in gioco, l\u2019AI gestisce il 70-80% del lavoro e scala all\u2019operatore umano per le eccezioni. L\u2019AI decide, l\u2019umano supervisiona.",
  },
  {
    title: "Adozione reale, non funzionamento tecnico.",
    body: "Un sistema AI che il team non usa vale zero. Investiamo tanto nell\u2019UX e nel change management quanto nell\u2019engineering. La metrica di successo non \u00E8 \u201Cfunziona?\u201D ma \u201Clo usano?\u201D",
  },
  {
    title: "Make or Buy: la reazione istintiva \u00E8 acquistare.",
    body: "Acquistiamo quando il workflow \u00E8 generico. Costruiamo solo quando crea differenziazione strategica reale. Un sistema economico da sviluppare non \u00E8 necessariamente economico da mantenere.",
  },
  {
    title: "Non implementiamo AI dove basta un foglio Excel.",
    body: "Risolviamo solo i colli di bottiglia dove l\u2019AI \u00E8 l\u2019unico moltiplicatore possibile. Non complichiamo ci\u00F2 che \u00E8 semplice. Il buon senso prima della tecnologia.",
  },
  {
    title: "Trasformazione olistica.",
    body: "Sales, operations, customer service, finance, HR, marketing, supply chain. Non ottimizziamo un angolo dell\u2019azienda - la trasformiamo dall\u2019interno.",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function MetodoPage() {
  return (
    <>
      {/* ── Hero (Yellow + Venice skyline) ─────────────────── */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">
              Il Codice del Doge
            </span>
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              Il nostro processo, aperto. Completamente.
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              In molti ci hanno chiesto come lavoriamo davvero &mdash; non la
              versione da deck, ma i passi concreti che seguiamo quando
              entriamo in un&apos;azienda. Abbiamo deciso di renderlo pubblico.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
        </div>

      </section>

      {/* ── Fase 0: Le Persone ─────────────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Fase 0
            </span>
            <h2 className="text-section uppercase mt-4">
              Prima delle tecnologie, le persone.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              La tecnologia pi&ugrave; avanzata del mondo non funziona se le
              persone non ci credono. Per questo, la Fase 0 viene prima di
              qualsiasi valutazione tecnica.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left */}
              <div className="md:border-r border-nero px-4 py-4 md:px-8 md:py-8">
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    La paura di essere rimpiazzati
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
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

              {/* Right */}
              <div className="px-4 py-4 md:px-8 md:py-8 border-t md:border-t-0 border-nero">
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    La disillusione da tool gi&agrave; provati
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
                  Chi ha gi&agrave; sperimentato l&apos;AI senza successo tende a
                  scartare qualsiasi nuova proposta. Questi individui sono spesso
                  tra i pi&ugrave; capaci e i pi&ugrave; critici. La strategia:
                  mostriamo loro qualcosa che funziona davvero, velocemente, nel
                  loro dominio, prima di chiedere qualsiasi commitment.
                </p>
              </div>
            </div>

            {/* Bottom bar - callout */}
            <div className="border-t border-nero px-4 py-6 md:px-8 md:py-8 text-center">
              <p className="text-body font-bold text-nero max-w-[700px] mx-auto">
                Regola pratica: se in azienda c&apos;&egrave; qualcuno che ha
                gi&agrave; provato l&apos;AI senza risultati, quella persona
                deve essere tra le prime a vedere un quick win funzionante.
                Convertire uno scettico vale dieci evangelisti.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Come lo facciamo */}
        <FadeInOnScroll>
          <div className="border border-nero mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:border-r border-nero px-4 py-4 md:px-8 md:py-8">
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    Interviste one-to-one
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
                  Interviste con l&apos;executive team. Incontriamo
                  individualmente i leader delle principali funzioni aziendali.
                  L&apos;obiettivo non &egrave; raccogliere dati &mdash; &egrave;
                  costruire fiducia e capire le priorit&agrave; strategiche di chi
                  deve sponsorizzare i progetti.
                </p>
              </div>

              <div className="px-4 py-4 md:px-8 md:py-8 border-t md:border-t-0 border-nero">
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    Survey interno
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
                  Survey interno di discovery. Somministriamo un questionario
                  strutturato a una selezione di dipendenti scelti per funzione e
                  anzianit&agrave;. Quattro sezioni: chi sei, come lavori oggi, le
                  inefficienze che ti frenano, il tuo rapporto con l&apos;AI.
                  Tempo: 10-15 minuti.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      <EmailGate
        preview={
          <>
            {/* Preview: Fase 1 title only */}
            <SectionWrapper bg="white">
              <FadeInOnScroll>
                <div className="text-center">
                  <span className="text-label uppercase text-grigio-medio tracking-widest">
                    Fase 1
                  </span>
                  <h2 className="text-section uppercase mt-4">
                    Prima di scrivere una riga di codice.
                  </h2>
                  <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
                    Ogni decisione di implementazione deve essere giustificata dai numeri...
                  </p>
                </div>
              </FadeInOnScroll>
            </SectionWrapper>
          </>
        }
      >

      {/* ── Fase 1: Assessment ─────────────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Fase 1
            </span>
            <h2 className="text-section uppercase mt-4">
              Prima di scrivere una riga di codice.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Ogni decisione di implementazione deve essere giustificata dai
              numeri &mdash; non dall&apos;entusiasmo tecnologico.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            {ASSESSMENT_STEPS.map((step, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 md:gap-6 px-4 py-5 md:px-8 md:py-6 ${
                  i < ASSESSMENT_STEPS.length - 1
                    ? "border-b border-nero"
                    : ""
                }`}
              >
                <span className="text-3xl font-bold text-nero shrink-0">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <div>
                  <h3 className="text-base font-bold uppercase">
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                      {step.title}
                    </span>
                  </h3>
                  <p className="text-sm text-nero/70 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom bar - callout */}
            <div className="border-t border-nero px-4 py-6 md:px-8 md:py-8 text-center">
              <p className="text-body font-bold text-nero max-w-[700px] mx-auto">
                No dati, no AI. Prima di qualsiasi implementazione, verifichiamo
                la qualit&agrave; e l&apos;accessibilit&agrave; dei dati
                aziendali. Dati frammentati o in silos rendono impossibile
                qualsiasi progetto AI serio.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Fase 2: Quick Wins ─────────────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Fase 2
            </span>
            <h2 className="text-section uppercase mt-4">
              Il primo risultato concreto entro 30 giorni.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Il cambiamento culturale si guadagna con i risultati, non con le
              presentazioni. Nei primi 90 giorni ci concentriamo su 2-3
              implementazioni ad alto impatto e bassa complessit&agrave;.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {QUICK_WIN_SECTORS.map((sector, i) => (
                <div
                  key={i}
                  className={`group relative ${
                    i < QUICK_WIN_SECTORS.length - 1 ? "border-b border-nero" : ""
                  } ${i % 2 === 0 ? "md:border-r border-nero" : ""}`}
                >
                  <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6 cursor-pointer">
                    <span className="text-3xl font-bold text-nero shrink-0">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wide text-nero">
                      {sector.title}
                    </span>
                    <svg className="ml-auto w-5 h-5 text-nero transition-transform group-hover:rotate-90 duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-[180px] transition-[max-height] duration-700 ease-in-out">
                    <div className="px-6 pb-5 md:px-8 md:pb-6 pl-16 md:pl-20">
                      <p className="text-sm text-nero/70 leading-relaxed">
                        {sector.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── I 7 Principi (dark bg) ─────────────────────────── */}
      <SectionWrapper bg="dark">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-giallo tracking-widest">
              I nostri principi
            </span>
            <h2 className="text-section uppercase mt-4 text-bianco">
              I 7 principi che guidano ogni progetto.
            </h2>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-bianco/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {PRINCIPI.map((principio, i) => (
                <div
                  key={i}
                  className={`px-4 py-5 md:px-8 md:py-6 ${
                    i < PRINCIPI.length - 1 ? "border-b border-bianco/20" : ""
                  } ${i % 2 === 0 ? "md:border-r border-bianco/20" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-bianco shrink-0">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <div>
                      <h3 className="text-base font-bold uppercase text-bianco">
                        <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                          {principio.title}
                        </span>
                      </h3>
                      <p className="text-sm text-bianco/70 leading-relaxed mt-2">
                        {principio.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── CTA Finale ─────────────────────────────────────── */}
      <CtaFinale
        dark
        title="Questo &egrave; il processo che seguiamo."
        subtitle="Se ti riconosci in qualcuna di queste sfide, la prima conversazione &egrave; gratuita."
        buttonText="Parla con noi &rarr;"
        buttonHref="/contatti"
      />

      </EmailGate>
    </>
  );
}

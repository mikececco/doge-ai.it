"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import Button from "@/components/ui/Button";
import PasswordGate from "@/components/PasswordGate";

/* ─── Data ─────────────────────────────────────────────── */

const PRODOTTO_STEPS = [
  {
    number: "01",
    title: "Incontro di avvio",
    description:
      "Sessione congiunta con il tuo cliente per mappare processi, pain point e opportunità di automazione.",
  },
  {
    number: "02",
    title: "Analisi",
    description:
      "Il nostro team analizza i dati raccolti e identifica i casi d\u2019uso AI a più alto impatto, con stime di ROI concrete.",
  },
  {
    number: "03",
    title: "Deliverable co-presentato",
    description:
      "Report di AI Readiness brandizzato congiuntamente, presentato insieme al cliente con roadmap operativa.",
  },
];

const VANTAGGI = [
  {
    title: "Un nuovo servizio senza investimento",
    description:
      "Offri ai tuoi clienti un servizio di AI advisory strutturato senza costruire competenze interne. Noi portiamo tecnologia e delivery, tu porti la relazione.",
  },
  {
    title: "Posizionamento come advisor innovativo",
    description:
      "L\u2019AI \u00E8 il tema pi\u00F9 richiesto dai board. Essere il primo advisor a portare una proposta concreta ti posiziona come riferimento strategico, non come uno dei tanti.",
  },
  {
    title: "Partnership continuativa",
    description:
      "Ogni audit apre opportunit\u00E0 di implementazione. La relazione non si esaurisce con un report: \u00E8 l\u2019inizio di un percorso di trasformazione che genera valore nel tempo.",
  },
];

const PE_TIMELINE = [
  {
    title: "AI Due Diligence",
    time: "PRE-DEAL",
    body: "Valutiamo l\u2019AI readiness della target e quantifichiamo l\u2019EBITDA uplift potenziale prima dell\u2019investimento.",
  },
  {
    title: "100-Day Quick Wins",
    time: "POST-DEAL",
    body: "2-3 automazioni ad alto impatto nei primi 100 giorni per creare momentum e validare la tesi.",
  },
  {
    title: "Trasformazione end-to-end",
    time: "12-18 MESI",
    body: "Lavoro embedded su 5-8 use case prioritizzati. Il team interno diventa autonomo, noi restiamo a supporto.",
  },
  {
    title: "Portfolio-Wide Playbook",
    time: "ONGOING",
    body: "Dopo 2-3 casi di successo, il playbook diventa replicabile su tutto il portfolio: ogni nuovo deal parte pi\u00F9 veloce.",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function ProgrammaPartnerPage() {
  return (
    <PasswordGate>
      {/* ── Hero (Yellow) ───── */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero tracking-widest">Advisory Partner Program</span>
            <h1 className="text-section uppercase mt-4 mx-auto">
              Doge Advisory<span className="hidden md:inline"><br /></span>{" "}
              Partner Program
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Una collaborazione strutturata per financial advisor e consulenti
              strategici che vogliono portare l&rsquo;AI ai propri clienti con
              un partner operativo.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti" arrow>
                Parliamone
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Il contesto ───── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Il contesto
            </span>
            <h2 className="text-section uppercase mt-4">
              I tuoi clienti hanno opportunit&agrave; AI<span className="hidden md:inline"><br /></span>{" "}
              che ancora non vedono.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Ogni azienda del mid-market ha processi che possono essere
              automatizzati, dati che non vengono sfruttati e decisioni che
              potrebbero essere pi&ugrave; veloci. Ma la maggior parte dei
              board non sa da dove iniziare. Tu hai la relazione e la
              fiducia del cliente. Noi abbiamo la competenza operativa per
              trasformare quell&rsquo;opportunit&agrave; in risultati concreti.
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Il prodotto: AI Readiness Audit ───── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Il prodotto
            </span>
            <h2 className="text-section uppercase mt-4">
              AI Readiness Audit congiunto
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Un percorso strutturato in tre fasi per valutare la maturit&agrave;
              AI del cliente e definire una roadmap operativa.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {PRODOTTO_STEPS.map((step, i) => (
              <div key={step.number} className="relative flex">
                <div className="border border-nero flex-1">
                  <div className="border-b border-nero px-4 py-4 md:px-8 md:py-6 flex items-center gap-3">
                    <span className="text-sm font-bold text-nero/40">{step.number}</span>
                    <h3 className="text-lg font-bold uppercase">
                      <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                        {step.title}
                      </span>
                    </h3>
                  </div>
                  <div className="px-4 py-4 md:px-8 md:py-6">
                    <p className="text-sm text-nero/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Arrow between steps */}
                {i < 2 && (
                  <div className="hidden md:flex items-center justify-center w-8 -mr-4 z-10">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M7 0l5 5-5 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── I vantaggi ───── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              I vantaggi
            </span>
            <h2 className="text-section uppercase mt-4">
              Perch&eacute; diventare Advisory Partner
            </h2>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VANTAGGI.map((v) => (
              <div key={v.title} className="border border-nero">
                <div className="border-b border-nero px-4 py-4 md:px-8 md:py-6">
                  <h3 className="text-lg font-bold uppercase">
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                      {v.title}
                    </span>
                  </h3>
                </div>
                <div className="px-4 py-4 md:px-8 md:py-6">
                  <p className="text-sm text-nero/70 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Per i fondi PE - Timeline ───── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Per i fondi PE
            </span>
            <h2 className="text-section uppercase mt-4">
              Il percorso con i fondi di Private Equity
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Per gli advisor che lavorano con fondi mid-market, offriamo un
              modello di intervento strutturato su ogni fase del deal.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-4 gap-6 relative">
              {PE_TIMELINE.map((step, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-lg md:text-xl font-bold uppercase">
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">{step.title}</span>
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-nero/60 mt-1">{step.time}</p>
                  <div className="relative flex justify-center my-4">
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-nero -translate-y-1/2" />
                    <div className="w-4 h-4 bg-nero rounded-full relative z-10" />
                    {i === 3 && (
                      <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M7 0l5 5-5 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-nero/70 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-nero" />
            {PE_TIMELINE.map((step, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-[-22px] top-1 w-4 h-4 bg-nero rounded-full z-10" />
                <h3 className="text-lg font-bold uppercase">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">{step.title}</span>
                </h3>
                <p className="text-xs uppercase tracking-wider text-nero/60 mt-1">{step.time}</p>
                <p className="text-sm text-nero/70 leading-relaxed mt-2">{step.body}</p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Chi siamo ───── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <div className="text-center max-w-[700px] mx-auto">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Chi siamo
            </span>
            <h2 className="text-section uppercase mt-4">
              Il Doge di Venezia
            </h2>
            <p className="text-body text-nero/70 mt-6">
              Siamo un team di ingegneri e strategist specializzati in
              trasformazione AI per il mid-market italiano. Lavoriamo embedded
              nelle aziende dei nostri clienti, non vendiamo slide. Ogni
              progetto ha risultati misurabili e un team dedicato.
            </p>
            <div className="mt-8">
              <Button variant="secondary" href="/metodo" arrow>
                Il nostro metodo
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── CTA Finale ───── */}
      <CtaFinale
        veniceImage
        title="Parliamone."
        subtitle="30 minuti per capire se ha senso costruire insieme. Nessun impegno, solo chiarezza."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </PasswordGate>
  );
}

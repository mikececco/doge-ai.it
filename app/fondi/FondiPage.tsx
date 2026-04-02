"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import EbitdaCalculator from "@/components/EbitdaCalculator";

/* ─── Data ─────────────────────────────────────────────── */


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
      "I primi 12-18 mesi post-deal sono il momento migliore per la transformation. Ma non c\u2019\u00E8 nessuno che lo fa in modo sistematico per il mid-market PE.",
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
      {/* ── Section 1: Hero (Yellow + Venice skyline) ───── */}
      <section className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-40 md:pb-48">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">Per i Fondi PE</span>
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              La leva di value creation pi&ugrave; sottovalutata nel vostro portfolio.
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              L&rsquo;AI non &egrave; un costo IT. &Egrave; la leva di value
              creation pi&ugrave; potente e meno utilizzata nel mid-market PE.
              Ogni euro di EBITDA guadagnato con l&rsquo;AI vale 10x
              all&rsquo;exit.
            </p>
            <div className="mt-8">
              <a
                href="/contatti"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 bg-nero text-bianco hover:bg-giallo-hover hover:text-nero transition-all duration-300 uppercase tracking-wider"
              >
                Parla con noi
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </FadeInOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <img src="/hero/landscape venezia (no-bg).png" alt="Venice skyline" className="w-full h-auto opacity-30" />
        </div>
      </section>

      {/* ── Section 2: I Numeri / EBITDA ─────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">I numeri</span>
            <h2 className="text-section uppercase mt-4">
              Ogni euro di EBITDA vale 10 volte tanto all&rsquo;exit
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Per un fondo, l&rsquo;AI non &egrave; un progetto tecnologico.
              &Egrave; una leva di value creation con uno dei migliori ROI disponibili oggi.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <EbitdaCalculator />

          <div className="text-center mt-10">
            <a
              href="/contatti"
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 bg-nero text-bianco hover:bg-giallo hover:text-nero transition-[background-color,color] duration-[250ms] uppercase tracking-wider"
            >
              Calcola il tuo ROI con noi
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 3: Non manca la visione ──────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Il problema
            </span>
            <h2 className="text-section uppercase mt-4">
              Non manca la visione. Manca chi esegue.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Ogni fondo mid-market che seguiamo affronta le stesse tre sfide strutturali.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {GAPS.map((gap, i) => (
                <div
                  key={gap.number}
                  className={`${i < 2 ? "md:border-r border-nero" : ""} border-b md:border-b-0 border-nero last:border-b-0`}
                >
                  <div className="border-b border-nero px-4 py-4 md:px-8 md:py-6">
                    <h3 className="text-lg font-bold uppercase">
                      <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                        {gap.title}
                      </span>
                    </h3>
                  </div>
                  <div className="px-4 py-4 md:px-8 md:py-6">
                    <p className="text-sm text-nero/70 leading-relaxed">
                      {gap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-nero px-4 py-6 md:px-8 md:py-8 text-center">
              <p className="text-body font-bold text-nero">
                Noi colmiamo tutti e tre.<br />
                End-to-end, dalla due diligence all&rsquo;exit.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 4: Braccio operativo - Timeline ───── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Cosa offriamo
            </span>
            <h2 className="text-section uppercase mt-4">
              Il vostro braccio operativo AI in ogni fase del deal.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Diventiamo parte del vostro processo di value creation, dalla tesi di investimento all&rsquo;exit multiplo.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Timeline - horizontal desktop, vertical mobile */}
        <FadeInOnScroll>
          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-4 gap-6 relative">
              {[
                { title: "AI Due Diligence", time: "PRE-DEAL", body: "Valutiamo l'AI readiness della target, identifichiamo i quick wins nei primi 100 giorni e quantifichiamo l'EBITDA uplift potenziale." },
                { title: "100-Day Plan", time: "POST-DEAL", body: "Implementiamo 2-3 quick wins con risultati misurabili. Momentum immediato per il management, validazione della tesi di investimento." },
                { title: "Full AI Transformation", time: "12-18 MESI", body: "Lavoriamo embedded nella portfolio company su 5-8 use case prioritizzati. Il team interno diventa autonomo." },
                { title: "Portfolio-Wide Playbook", time: "ONGOING", body: "Dopo 2-3 aziende, costruiamo un playbook replicabile su tutto il portfolio. Ogni nuovo deal parte piu veloce del precedente." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-base font-bold uppercase">
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
            {[
              { title: "AI Due Diligence", time: "PRE-DEAL", body: "Valutiamo l'AI readiness della target, identifichiamo i quick wins nei primi 100 giorni e quantifichiamo l'EBITDA uplift potenziale." },
              { title: "100-Day Plan", time: "POST-DEAL", body: "Implementiamo 2-3 quick wins con risultati misurabili. Momentum immediato per il management." },
              { title: "Full AI Transformation", time: "12-18 MESI", body: "Lavoriamo embedded nella portfolio company su 5-8 use case prioritizzati." },
              { title: "Portfolio-Wide Playbook", time: "ONGOING", body: "Costruiamo un playbook replicabile su tutto il portfolio." },
            ].map((step, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-[-22px] top-1 w-4 h-4 bg-nero rounded-full z-10" />
                <h3 className="text-base font-bold uppercase">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">{step.title}</span>
                </h3>
                <p className="text-xs uppercase tracking-wider text-nero/60 mt-1">{step.time}</p>
                <p className="text-sm text-nero/70 leading-relaxed mt-2">{step.body}</p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Bottom CTA */}
        <FadeInOnScroll>
          <div className="text-center mt-12">
            <p className="text-body font-bold text-nero">
              Tutto il nostro processo &egrave; aperto.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-body text-nero">Leggi</span>
              <span className="text-nero">&rarr;</span>
              <a
                href="/metodo"
                className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 bg-giallo text-nero hover:bg-giallo-hover transition-colors"
              >
                <img src="/icon/logoB-noBG.png" alt="" width={16} height={16} />
                Il Codice del Doge
              </a>
            </div>
          </div>
        </FadeInOnScroll>
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

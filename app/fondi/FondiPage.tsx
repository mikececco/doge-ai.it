"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import DoveOperiamo from "@/components/sections/DoveOperiamo";
import Button from "@/components/ui/Button";
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

/* ─── Page ─────────────────────────────────────────────── */

export default function FondiPage() {
  return (
    <>
      {/* ── Section 1: Hero ───── */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero tracking-widest">Per i Fondi</span>
            <h1 className="text-section uppercase mt-4 mx-auto">
              La leva di value creation<br />pi&ugrave; sottovalutata nel vostro portfolio.
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Diventiamo il vostro braccio operativo per la trasformazione AI delle portfolio companies.
              Dalla due diligence all&rsquo;exit, con risultati misurabili.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti" arrow>
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
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
              Per un fondo, l&rsquo;AI non &egrave; un progetto tecnologico.<span className="hidden md:inline"><br /></span>
              &Egrave; una leva di value creation con uno dei migliori ROI disponibili oggi.</p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <EbitdaCalculator />

          <div className="text-center mt-10">
            <Button variant="dark" size="md" uppercase href="/contatti" arrow>
              Calcola il tuo ROI con noi
            </Button>
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
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GAPS.map((gap, i) => (
                <div
                  key={gap.number}
                  className="border border-nero"
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

          </div>

            <div className="px-4 py-6 md:px-8 md:py-8 text-center">
              <p className="text-body font-bold text-nero">
                Noi colmiamo tutti e tre.<span className="hidden md:inline"><br /></span>
                End-to-end, dalla due diligence all&rsquo;exit.
              </p>
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
              Diventiamo parte del vostro processo di value creation,<span className="hidden md:inline"><br /></span>{" "}
              dalla tesi di investimento all&rsquo;exit multiplo.
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
            {[
              { title: "AI Due Diligence", time: "PRE-DEAL", body: "Valutiamo l'AI readiness della target, identifichiamo i quick wins nei primi 100 giorni e quantifichiamo l'EBITDA uplift potenziale." },
              { title: "100-Day Plan", time: "POST-DEAL", body: "Implementiamo 2-3 quick wins con risultati misurabili. Momentum immediato per il management." },
              { title: "Full AI Transformation", time: "12-18 MESI", body: "Lavoriamo embedded nella portfolio company su 5-8 use case prioritizzati." },
              { title: "Portfolio-Wide Playbook", time: "ONGOING", body: "Costruiamo un playbook replicabile su tutto il portfolio." },
            ].map((step, i) => (
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

        {/* Bottom CTA */}
        <FadeInOnScroll>
          <div className="text-center mt-12">
            <p className="text-body font-bold text-nero">
              Tutto il nostro processo &egrave; aperto.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-body text-nero">Leggi</span>
              <Button variant="primary" href="/metodo">
                <img src="/icon/logoB-noBG.png" alt="" width={16} height={16} />
                Il Codice del Doge
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Dove Operiamo (shared component) ──────────────── */}
      <DoveOperiamo variant="fondi" />

      {/* ── CTA Finale ────────────────────────── */}
      <CtaFinale
        veniceImage
        title="Vinci la prossima decade."
        subtitle="La prima conversazione è sempre riservata e senza impegno. Parliamo del vostro portfolio."
        buttonText="Contattaci"
        buttonHref="/contatti"
      />
    </>
  );
}

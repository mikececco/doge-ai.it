"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import Button from "@/components/ui/Button";
import { Layers, Users, DollarSign, Zap } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const CARDS = [
  {
    number: "01",
    title: "Cosa porti tu",
    description: "Relazioni consolidate con i tuoi clienti.",
  },
  {
    number: "02",
    title: "Cosa portiamo noi",
    description: "Soluzioni AI già testate e capacità di delivery.",
  },
  {
    number: "03",
    title: "Cosa guadagni",
    description: "Revenue share su ogni progetto referenziato.",
  },
];

const VALUE_PROPS = [
  {
    icon: Layers,
    title: "Casi d'uso pronti all'uso",
    description:
      "Automazione documentale, assistenti AI, qualificazione lead, reportistica — già sviluppati e collaudati. Prototipale per i tuoi clienti.",
  },
  {
    icon: Users,
    title: "White-label se preferisci",
    description:
      "Lavoriamo dietro le quinte quando serve. Il tuo brand, la tua relazione — noi consegniamo il lavoro.",
  },
  {
    icon: DollarSign,
    title: "Modello commerciale chiaro",
    description:
      "Revenue share definita su ogni referral qualificato che si converte in un incarico. Nessuna ambiguità, nessuna sorpresa.",
  },
  {
    icon: Zap,
    title: "Avvio rapido",
    description:
      "Una call di allineamento, un NDA se necessario, e sei operativo. Nessun processo di certificazione lungo o complicato.",
  },
];

const STEPS_DESKTOP = [
  { title: "Call conoscitiva", time: "STEP 01", body: "30 minuti per allinearci e definire i termini commerciali." },
  { title: "Primo referral", time: "STEP 02", body: "Ci presenti un'esigenza cliente. Facciamo la proposta insieme o in autonomia." },
  { title: "Noi consegniamo", time: "STEP 03", body: "Doge-AI gestisce l'implementazione. Tu rimani coinvolto quanto vuoi." },
  { title: "Tu guadagni", time: "STEP 04", body: "Revenue share pagata a milestone o a conclusione del progetto." },
];

const STEPS_MOBILE = [
  { title: "Call conoscitiva", time: "STEP 01", body: "30 minuti per allinearci e definire i termini commerciali." },
  { title: "Primo referral", time: "STEP 02", body: "Ci presenti un'esigenza cliente. Facciamo la proposta insieme o in autonomia." },
  { title: "Noi consegniamo", time: "STEP 03", body: "Doge-AI gestisce l'implementazione. Tu rimani coinvolto quanto vuoi." },
  { title: "Tu guadagni", time: "STEP 04", body: "Revenue share pagata a milestone o a conclusione del progetto." },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function PartnerPage() {
  return (
    <>
      {/* ── Section 1: Hero (Yellow + Venice skyline) ───── */}
      <section className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-40 md:pb-48">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">Programma Partner</span>
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              Porta l&rsquo;AI ai tuoi clienti — senza costruirla da zero.
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Stiamo ampliando la nostra rete di partner. Se lavori con aziende
              che potrebbero beneficiare dell&rsquo;intelligenza artificiale, ti
              diamo gli strumenti per offrire quel valore — e guadagnare su ogni
              progetto.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parliamone
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <img src="/hero/landscape venezia (no-bg).png" alt="Venice skyline" className="w-full h-auto opacity-30" />
        </div>
      </section>

      {/* ── Section 2: L'opportunità — 3 cards ─────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              L&rsquo;opportunit&agrave;
            </span>
            <h2 className="text-section uppercase mt-4">
              Tu porti la relazione. Noi portiamo l&rsquo;AI.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              La trasformazione AI &egrave; uno dei servizi a pi&ugrave; alta
              crescita sul mercato, ma la maggior parte delle agenzie e delle
              societ&agrave; di consulenza non ha ancora le competenze
              specializzate per erogarla con sicurezza. Noi gestiamo la parte
              tecnica — tu porti la relazione con il cliente. Insieme chiudiamo
              pi&ugrave; contratti e cresciamo entrambi.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {CARDS.map((card, i) => (
                <div
                  key={card.number}
                  className={`${i < 2 ? "md:border-r border-nero" : ""} border-b md:border-b-0 border-nero last:border-b-0`}
                >
                  <div className="border-b border-nero px-4 py-4 md:px-8 md:py-6">
                    <h3 className="text-lg font-bold uppercase">
                      <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                        {card.title}
                      </span>
                    </h3>
                  </div>
                  <div className="px-4 py-4 md:px-8 md:py-6">
                    <p className="text-sm text-nero/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 3: Perché collaborare — 2x2 grid ───── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              I vantaggi
            </span>
            <h2 className="text-section uppercase mt-4">
              Perch&eacute; collaborare con noi
            </h2>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {VALUE_PROPS.map((prop, i) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={prop.title}
                    className={`px-6 py-8 md:px-10 md:py-10 ${
                      i % 2 === 0 ? "md:border-r border-nero" : ""
                    } ${i < 2 ? "border-b border-nero" : ""} ${
                      i === 0 || i === 1 ? "border-b border-nero" : ""
                    }`}
                  >
                    <Icon className="w-6 h-6 text-nero mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold uppercase mb-2">
                      <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                        {prop.title}
                      </span>
                    </h3>
                    <p className="text-sm text-nero/70 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 4: Come funziona — Timeline ────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Come funziona
            </span>
            <h2 className="text-section uppercase mt-4">
              Da partner a operativi in 4 passi.
            </h2>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-4 gap-6 relative">
              {STEPS_DESKTOP.map((step, i) => (
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
            {STEPS_MOBILE.map((step, i) => (
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
      </SectionWrapper>

      {/* ── Section 5: CTA Finale ────────────────────────── */}
      <CtaFinale
        title="Ti interessa? Parliamone."
        subtitle="Bastano 30 minuti per capire se ha senso lavorare insieme."
        buttonText="Contattaci →"
        buttonHref="/contatti"
        dark
      />
    </>
  );
}

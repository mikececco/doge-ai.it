"use client";

import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CardFlip from "@/components/animations/CardFlip";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import CtaFinale from "@/components/sections/CtaFinale";

/* ─── Data ─────────────────────────────────────────────── */

type UseCase = {
  title: string;
  description: string;
  hasCase: boolean;
};

const USE_CASES: UseCase[] = [
  {
    title: "ASSISTENTE PERSONALE",
    description:
      "Un'unica piattaforma aziendale che d\u00e0 accesso a +30 modelli AI con governance centralizzata, GDPR compliance e agenti customizzati per ogni team.",
    hasCase: true,
  },
  {
    title: "AUTOMAZIONE FATTURE",
    description:
      "Buste paga, note spese, presenze, turni, ferie, assunzioni \u2014 tutto automatizzato. Da processi che durano giorni a tre click.",
    hasCase: true,
  },
  {
    title: "AGENTE AI OPERATIVO",
    description:
      "Agenti AI che parlano con clienti, fornitori e corrieri via telefono, email, SMS, WhatsApp. Agiscono in autonomia, scalano all'umano solo per le eccezioni.",
    hasCase: true,
  },
  {
    title: "ROBOTICA PER AUTOMAZIONE MAGAZZINO",
    description:
      "Robot che automatizzano picking, smistamento e movimentazione. +100 sistemi installati, +500M pick completati, payback in meno di 5 mesi.",
    hasCase: true,
  },
  {
    title: "PROCUREMENT INTELLIGENCE",
    description:
      "Piattaforma di procurement intelligence che combina dati ERP, AI e analisi di mercato. 75% riduzione tempo su task manuali.",
    hasCase: true,
  },
  {
    title: "GESTIONE AUTOMATICA EMAIL",
    description:
      "Assistente virtuale che categorizza le email, scrive le bozze di risposta nel tuo stile, prende note delle riunioni e genera i follow-up.",
    hasCase: false,
  },
  {
    title: "CUSTOMER MANAGEMENT ON COST",
    description:
      "AI conversazionale su WhatsApp, Instagram, Messenger, live chat. Gestisce tutto il funnel: acquisizione, conversione, ritenzione. 250% ROI.",
    hasCase: true,
  },
  {
    title: "BRAND VISIBILITY AI PLATFORM",
    description:
      "Monitora, analizza e migliora la presenza del brand sulle piattaforme AI \u2014 visibilit\u00e0, posizione, sentiment, confronto con i competitor.",
    hasCase: false,
  },
  {
    title: "CONTROLLO QUALIT\u00c0 FERRO",
    description:
      "Telecamere ad alta risoluzione + computer vision che rileva difetti, imperfezioni e anomalie in tempo reale. 31x migliore rilevamento errori.",
    hasCase: true,
  },
  {
    title: "ANALISI DELL'ASSEMBLAGGIO MANUALE",
    description:
      "AI che analizza video di assemblaggio, produce grafici su inefficienze e colli di bottiglia, riduce il tempo ciclo. +50M cicli analizzati.",
    hasCase: false,
  },
];

// Venice-themed gradients as placeholders for card fronts
const VENICE_GRADIENTS = [
  "from-[#1a3a4a] to-[#2d6a4f]",
  "from-[#2c3e50] to-[#4a6741]",
  "from-[#1a1a2e] to-[#16213e]",
  "from-[#0f3460] to-[#533483]",
  "from-[#2d3436] to-[#636e72]",
  "from-[#1e3c72] to-[#2a5298]",
  "from-[#0c0c0c] to-[#1a1a1a]",
  "from-[#134e5e] to-[#71b280]",
  "from-[#373b44] to-[#4286f4]",
  "from-[#141e30] to-[#243b55]",
];

const STATS = [
  { value: "30%", label: "Riduzione costi medi" },
  { value: "<3 MESI", label: "Tempo di implementazione" },
  { value: "<60K", label: "Investimento iniziale" },
  { value: "+25", label: "Aziende servite" },
  { value: "+100", label: "Progetti completati" },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function CasiDusoPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-bianco text-nero pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] max-w-4xl uppercase">
              Cosa possiamo fare per la tua azienda?
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-subheadline text-grigio-scuro mt-6 max-w-[680px]">
              Non tutti i casi d&rsquo;uso si adattano a ogni azienda. Ma
              scorrere questa lista &egrave; il modo pi&ugrave; rapido per
              capire dove l&rsquo;AI pu&ograve; fare la differenza per te.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 2 — 10 Use Cases as Flip Cards */}
      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USE_CASES.map((uc, i) => (
            <FadeInOnScroll key={i}>
              <div className="h-[280px]">
                <CardFlip
                  hasCase={uc.hasCase}
                  front={
                    <div
                      className={`bg-gradient-to-br ${VENICE_GRADIENTS[i]} text-bianco p-8 h-full flex flex-col justify-between`}
                    >
                      <span className="text-giallo text-sm font-bold tracking-wider uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold leading-tight uppercase">
                          {uc.title}
                        </h3>
                        {uc.hasCase && (
                          <p className="text-bianco/50 text-xs mt-3 uppercase tracking-wider">
                            Hover per il caso studio
                          </p>
                        )}
                      </div>
                    </div>
                  }
                  back={
                    <div className="bg-nero text-bianco p-8 h-full flex flex-col justify-center">
                      <span className="text-giallo text-sm font-bold tracking-wider uppercase mb-3">
                        CASO STUDIO
                      </span>
                      <h3 className="text-lg font-bold leading-tight uppercase mb-3">
                        {uc.title}
                      </h3>
                      <p className="text-bianco/70 text-sm leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  }
                />
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll>
          <div className="mt-12 text-center">
            <Button href="/contatti">Scopri tutto &rarr;</Button>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* Section 3 — Stats Bar */}
      <section className="bg-nero text-bianco py-16">
        <div className="container-site">
          <FadeInOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-giallo text-[clamp(1.5rem,3vw,2.5rem)] font-bold">
                    {stat.value}
                  </p>
                  <p className="text-bianco/60 text-sm mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <CtaFinale
        title="Vinci la prossima decade."
        subtitle="Parla con noi. Nessun impegno, solo chiarezza."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

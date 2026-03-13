"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import NumberedCard from "@/components/ui/NumberedCard";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import AnimatedUnderline from "@/components/animations/AnimatedUnderline";
import CtaFinale from "@/components/sections/CtaFinale";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/* ─── Data ─────────────────────────────────────────────── */

const FASI = [
  {
    number: "01",
    title: "Assessment",
    description:
      "4–6 settimane. Audit per funzione aziendale, mappatura processi, quantificazione costo attuale. Business case chiaro prima di scrivere una riga di codice.",
  },
  {
    number: "02",
    title: "Quick Wins",
    description:
      "30–90 giorni. 2–3 implementazioni ad alto impatto e bassa complessità. Il primo risultato concreto entro 30 giorni. Non uno studio. Un sistema che funziona.",
  },
  {
    number: "03",
    title: "Trasformazione",
    description:
      "3–18 mesi. 5–8 use case prioritizzati. Implementazione end-to-end con change management incluso.",
  },
];

const LIVELLI = [
  {
    level: "01",
    title: "Single-player tools",
    description:
      "Ogni dipendente ha accesso ai migliori modelli AI (ChatGPT, Claude, Gemini) attraverso un’unica interfaccia. Basso costo, vittoria immediata.",
    timeline: "1–2 settimane",
  },
  {
    level: "02",
    title: "Single-player processes",
    description:
      "Automatizziamo il lavoro di una singola persona o funzione: il customer service manager, l’ufficio acquisti, chi gestisce le email.",
    timeline: "30–60 giorni",
  },
  {
    level: "03",
    title: "Multi-player single function",
    description:
      "Ottimizziamo un intero dipartimento: tutto il funnel di vendita, tutta la supply chain, tutto il customer service. Sistemi che comunicano tra loro.",
    timeline: "2–4 mesi",
  },
  {
    level: "04",
    title: "Multi-player multi-function",
    description:
      "Riprogettazione dei processi cross-funzionali. Il livello più complesso e più trasformativo. Richiede fondamenta solide dai livelli precedenti.",
    timeline: "6–18 mesi",
  },
];

const SETTORI = [
  "Logistica & Trasporti",
  "Manifattura & Meccanica",
  "Distribuzione B2B",
  "Moda & Lusso",
  "Alimentare & Vitivinicolo",
  "Healthcare & Medical Devices",
  "Costruzioni & Real Estate",
  "Retail & E-commerce",
  "Servizi Professionali",
];

const DIFESA = [
  "Customer service automatizzato (80% richieste gestite da AI)",
  "Automazione documenti e data entry",
  "Ottimizzazione operativa (rotte, magazzino, ordini)",
  "Reporting e KPI real-time senza effort manuale",
  "Procurement intelligence e controllo fornitori",
];

const ATTACCO = [
  "Configuratori AI per prodotti complessi",
  "Analisi predittiva per vendite e demand planning",
  "Nuovi canali di acquisizione con agenti conversazionali",
  "Pricing power da funzionalità AI uniche nel prodotto",
  "Nuovi servizi premium non scalabili senza AI",
];

/* ─── Page ─────────────────────────────────────────────── */

export default function AziendePage() {
  return (
    <>
      {/* ── Section 1: Hero ────────────────────────────── */}
      <SectionWrapper bg="white" className="!pt-40 !pb-20">
        <FadeInOnScroll>
          <Label>PER LE AZIENDE</Label>
          <h1 className="text-hero mt-4">
            La tua azienda{" "}
            <AnimatedUnderline>vale di più</AnimatedUnderline> di quello
            che rende oggi.
          </h1>
          <p className="text-subheadline text-grigio-scuro mt-6 max-w-[620px]">
            L&apos;AI non è solo efficienza. È la chiave per fare
            cose che prima erano economicamente impossibili: nuovi servizi,
            nuovi mercati, nuovi modelli di business.
          </p>
          <div className="mt-10">
            <Button href="/contatti">Parla con noi &rarr;</Button>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 2: La Domanda Giusta ───────────────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll className="text-center max-w-[800px] mx-auto">
          <p className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight">
            &ldquo;Se potessi triplicare il numero di dipendenti senza
            aumentare il costo del personale, cosa faresti? Espandere in nuovi
            mercati? Lanciare nuovi prodotti? Servire più clienti?&rdquo;
          </p>
          <p className="text-lg text-grigio-scuro mt-8">
            L&apos;AI ti dà esattamente quella capacità. Non è
            solo cost reduction &mdash; è capacity expansion.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 3: Il Processo in 4 Fasi ───────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <h2 className="text-section">
            Se iniziamo domani, cosa succede?
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {FASI.map((fase, i) => (
            <NumberedCard
              key={fase.number}
              number={fase.number}
              title={fase.title}
              description={fase.description}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 4: I 4 Livelli ─────────────────────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <h2 className="text-section">
            Ogni azienda percorre 4 livelli. Non si salta.
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {LIVELLI.map((livello, i) => (
            <Card key={livello.level} index={i}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-label text-giallo">{livello.level}</span>
                <Badge>{livello.timeline}</Badge>
              </div>
              <h3 className="text-xl font-bold">{livello.title}</h3>
              <p className="text-body text-grigio-scuro mt-2">
                {livello.description}
              </p>
            </Card>
          ))}
        </div>

        <FadeInOnScroll className="mt-10">
          <p className="text-body text-grigio-scuro italic text-center max-w-[700px] mx-auto">
            La maggior parte delle PMI italiane si trova ancora al Livello 0.
            Il vantaggio competitivo si costruisce adesso.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 5: Settori ─────────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <h2 className="text-section">
            Lavoriamo con i settori che trainano il Made in Italy.
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll className="flex flex-wrap gap-3 mt-10">
          {SETTORI.map((settore) => (
            <motion.span
              key={settore}
              variants={fadeInUp}
              className="bg-grigio-chiaro px-5 py-2.5 rounded text-sm font-bold hover:bg-giallo transition-colors cursor-default"
            >
              {settore}
            </motion.span>
          ))}
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 6: Difesa vs Attacco ───────────────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <h2 className="text-section">
            Ogni implementazione AI rientra in una di due categorie.
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <FadeInOnScroll>
            <div className="rounded-card bg-bianco p-8 shadow-card h-full">
              <h3 className="text-lg font-bold mb-2">
                Difesa &mdash; Proteggi i margini
              </h3>
              <p className="text-body text-grigio-scuro mb-5">
                Automazione dei processi core per ridurre i costi operativi.
              </p>
              <ul className="space-y-3">
                {DIFESA.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-body text-grigio-scuro"
                  >
                    <span className="text-grigio-medio mt-0.5">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="rounded-card bg-nero p-8 text-bianco h-full">
              <h3 className="text-lg font-bold text-giallo mb-2">
                Attacco &mdash; Crea nuovo valore
              </h3>
              <p className="text-body text-bianco/70 mb-5">
                Funzionalità AI che giustificano margini più alti.
              </p>
              <ul className="space-y-3">
                {ATTACCO.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-body text-bianco/80"
                  >
                    <span className="text-giallo mt-0.5">&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll className="mt-10">
          <p className="text-body text-grigio-scuro text-center max-w-[720px] mx-auto">
            Una trasformazione AI completa lavora su entrambi i fronti. Solo
            difesa significa perdere la gara dell&apos;innovazione. Solo attacco
            senza fondamenta operative è un castello di carte.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 7: CTA Finale ──────────────────────── */}
      <CtaFinale
        title="L&rsquo;assessment è il punto di partenza."
        subtitle="In 4–6 settimane ti diciamo esattamente quanto vale l&rsquo;AI per la tua azienda — con numeri alla mano."
        buttonText="Prenota l&rsquo;assessment gratuito &rarr;"
        buttonHref="/contatti"
      />
    </>
  );
}

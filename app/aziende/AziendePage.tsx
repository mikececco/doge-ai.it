"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Counter from "@/components/animations/Counter";
import TimelineAnimated from "@/components/animations/TimelineAnimated";
import SectorOverlay from "@/components/animations/SectorOverlay";
import CtaFinale from "@/components/sections/CtaFinale";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/* ─── Data ─────────────────────────────────────────────── */

const METRICS = [
  { value: 4, suffix: "", label: "AZIENDE", sub: "seguite" },
  { prefix: "<", value: 3, suffix: "", label: "MESI", sub: "per primo progetto" },
  { prefix: "<", value: 60, suffix: "K", label: "INVESTIMENTO", sub: "anno 1" },
];

const SUCCESSI = [
  {
    title: "Automazione ordini B2B",
    result: "Da 4h/giorno a 20 minuti",
    detail:
      "Un distributore food riceveva ordini via email, PDF e WhatsApp. Abbiamo automatizzato il parsing e il caricamento sul gestionale.",
    type: "successo",
  },
  {
    title: "Customer service AI",
    result: "80% ticket gestiti senza umani",
    detail:
      "Un&rsquo;azienda manifatturiera con 200+ richieste/giorno. Chatbot addestrato sui manuali tecnici e lo storico ticket.",
    type: "successo",
  },
  {
    title: "Configuratore prodotto complesso",
    result: "Progetto fermato dopo 3 mesi",
    detail:
      "I dati di prodotto erano frammentati su 6 sistemi diversi. Abbiamo imparato che senza dati puliti, l&rsquo;AI non fa miracoli. Ora partiamo sempre dal data audit.",
    type: "insuccesso",
  },
  {
    title: "Demand planning predittivo",
    result: "ROI non misurabile nel breve",
    detail:
      "Lo storico ordini era troppo corto per un modello affidabile. Lezione: non tutto si risolve con l&rsquo;AI. A volte servono prima i fondamentali.",
    type: "insuccesso",
  },
];

const PROTEGGERE_ESPANDERE = [
  "Automatizzare il lavoro ripetitivo che vi costa 3-4 FTE all&rsquo;anno",
  "Ridurre errori operativi del 60-80% nei processi critici",
  "Dare a ogni dipendente un copilota AI che moltiplica la produttivit&agrave;",
  "Scalare il customer service senza assumere",
  "Trasformare i dati che gi&agrave; avete in decisioni migliori",
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SETTORI_PROBLEMI = [
  {
    settore: "Manifattura",
    problema: "Hai un backlog di ordini che gestisci su Excel?",
    icon: "&#9881;",
  },
  {
    settore: "Food & Beverage",
    problema:
      "Ricevi ordini via email, PDF ed EDI e li carichi sul gestionale a mano?",
    icon: "&#127828;",
  },
  {
    settore: "Logistica",
    problema:
      "Calcoli le rotte a mano e il 20% delle consegne arriva in ritardo?",
    icon: "&#128666;",
  },
  {
    settore: "Distribuzione B2B",
    problema:
      "I tuoi commerciali passano pi&ugrave; tempo a fare data entry che a vendere?",
    icon: "&#128230;",
  },
  {
    settore: "Moda & Lusso",
    problema:
      "Il campionario &egrave; ancora un processo manuale che dura mesi?",
    icon: "&#128090;",
  },
  {
    settore: "Healthcare",
    problema:
      "Gestite documentazione clinica e compliance con processi manuali?",
    icon: "&#9764;",
  },
];

const SETTORI_TABELLA = [
  {
    settore: "Manifattura",
    applicazione: "Automazione ordini, quality control predittivo, manutenzione preventiva",
  },
  {
    settore: "Food & Beverage",
    applicazione: "Parsing ordini multi-canale, demand forecasting, tracciabilit&agrave; automatica",
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

const TIMELINE_ITEMS = [
  {
    title: "Assessment",
    description: "Mappiamo processi e inefficienze in 2 settimane",
  },
  {
    title: "Quick Wins",
    description: "Primi risultati concreti entro 30 giorni",
  },
  {
    title: "Implementazione",
    description: "Soluzioni AI integrate nei vostri sistemi",
  },
  {
    title: "Autonomia",
    description: "Il vostro team gestisce tutto in autonomia",
  },
];

const SETTORI_OVERLAY = [
  {
    title: "Manifattura",
    problem: "Hai un backlog di ordini che gestisci su Excel?",
    bullets: [
      "Automazione ordini e caricamento gestionale",
      "Quality control predittivo con computer vision",
      "Manutenzione preventiva basata su dati IoT",
    ],
  },
  {
    title: "Food & Beverage",
    problem: "Ricevi ordini via email, PDF ed EDI e li carichi a mano?",
    bullets: [
      "Parsing automatico ordini multi-canale",
      "Demand forecasting per ridurre sprechi",
      "Tracciabilit\u00E0 automatica end-to-end",
    ],
  },
  {
    title: "Logistica",
    problem: "Calcoli le rotte a mano e il 20% delle consegne arriva in ritardo?",
    bullets: [
      "Ottimizzazione rotte con AI predittiva",
      "Gestione magazzino intelligente",
      "Tracking predittivo per clienti e operations",
    ],
  },
  {
    title: "Distribuzione B2B",
    problem: "I tuoi commerciali passano pi\u00F9 tempo a fare data entry che a vendere?",
    bullets: [
      "CRM intelligente con suggerimenti AI",
      "Automazione offerte e pricing dinamico",
      "Analisi credito clienti in tempo reale",
    ],
  },
  {
    title: "Moda & Lusso",
    problem: "Il campionario \u00E8 ancora un processo manuale che dura mesi?",
    bullets: [
      "Configuratori prodotto con AI generativa",
      "Trend analysis predittiva",
      "Personalizzazione clienteling omnicanale",
    ],
  },
  {
    title: "Healthcare",
    problem: "Gestite documentazione clinica e compliance con processi manuali?",
    bullets: [
      "Documentazione clinica AI-assisted",
      "Compliance automatizzata e audit trail",
      "Scheduling intelligente risorse e pazienti",
    ],
  },
];

const STATS_BAR = [
  { prefix: "", value: 30, suffix: "%", label: "costo operativo medio risparmiato" },
  { prefix: "-", value: 3, suffix: "", label: "FTE equivalenti liberati" },
  { prefix: "<", value: 60, suffix: "K", label: "investimento primo anno" },
  { prefix: "+", value: 80, suffix: "%", label: "processi automatizzabili" },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function AziendePage() {
  return (
    <>
      {/* ── Section 1: Hero (Yellow) ─────────────────────── */}
      <SectionWrapper bg="giallo" className="!pt-40 !pb-16">
        <FadeInOnScroll>
          <Label className="!text-nero/60">PER LE AZIENDE</Label>
          <h1 className="text-hero mt-4 max-w-4xl">
            S&igrave;, puoi fare di pi&ugrave;. Il nostro AI, ripensare il
            personale, anzi meglio!
          </h1>
          <p className="text-subheadline text-nero/70 mt-6 max-w-[680px]">
            Non vendiamo software. Entriamo nella tua azienda, capiamo dove
            perdi tempo e soldi, e costruiamo soluzioni AI che funzionano
            davvero. In meno di 3 mesi.
          </p>
          <div className="mt-10">
            <Button href="/contatti" className="!bg-nero !text-giallo hover:!bg-grigio-scuro">
              Parla con noi &rarr;
            </Button>
          </div>
        </FadeInOnScroll>

        {/* Metrics row */}
        <FadeInOnScroll className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-nero/20 pt-10">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                variants={fadeInUp}
                custom={i}
                className="text-center md:text-left"
              >
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  {m.prefix && (
                    <span className="text-metric">{m.prefix}</span>
                  )}
                  <Counter target={m.value} suffix={m.suffix} />
                </div>
                <p className="text-sm font-bold mt-1 uppercase tracking-wider">
                  {m.label}
                </p>
                <p className="text-sm text-nero/60">{m.sub}</p>
              </motion.div>
            ))}
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 2: Successi e Insuccessi ─────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <Label>TRASPARENZA TOTALE</Label>
          <h2 className="text-section mt-4">
            Fare i conti con successi e insuccessi.
          </h2>
          <p className="text-body text-grigio-scuro mt-4 max-w-[700px]">
            Non tutto funziona al primo colpo. Vi raccontiamo cosa ha
            funzionato e cosa no, perch&eacute; &egrave; cos&igrave; che si
            costruisce fiducia.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {SUCCESSI.map((item, i) => (
            <Card
              key={item.title}
              index={i}
              dark={item.type === "insuccesso"}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 ${
                    item.type === "successo"
                      ? "bg-giallo text-nero"
                      : "bg-white/10 text-grigio-medio"
                  }`}
                >
                  {item.type === "successo" ? "Successo" : "Lezione appresa"}
                </span>
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p
                className={`text-lg font-semibold mt-1 ${
                  item.type === "successo" ? "text-nero" : "text-giallo"
                }`}
              >
                {item.result}
              </p>
              <p
                className={`text-body mt-3 ${
                  item.type === "insuccesso"
                    ? "text-bianco/70"
                    : "text-grigio-scuro"
                }`}
                dangerouslySetInnerHTML={{ __html: item.detail }}
              />
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 3: Proteggere e Espandere ────────────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <Label>IL METODO</Label>
          <h2 className="text-section mt-4">
            Proteggere e espandere: costruiamo partendo da qui.
          </h2>
          <p className="text-body text-grigio-scuro mt-4 max-w-[700px]">
            Ogni azienda ha inefficienze nascoste che costano centinaia di
            migliaia di euro all&rsquo;anno. Il nostro lavoro &egrave; trovarle
            e risolverle.
          </p>
        </FadeInOnScroll>

        {/* Animated Timeline */}
        <TimelineAnimated items={TIMELINE_ITEMS} />

        <div className="mt-12 space-y-0">
          {PROTEGGERE_ESPANDERE.map((item, i) => (
            <FadeInOnScroll key={i}>
              <div className="flex items-start gap-4 py-5 border-b border-nero/10 last:border-0">
                <span className="text-giallo text-xl font-bold mt-0.5 shrink-0">
                  &rarr;
                </span>
                <p
                  className="text-body text-nero"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 4: Vedi se ti riconosci ──────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <Label>TI RICONOSCI?</Label>
          <h2 className="text-section mt-4">
            Vedi se siedi dove poter partire da qui.
          </h2>
          <p className="text-body text-grigio-scuro mt-4 max-w-[700px]">
            Ogni settore ha i suoi problemi specifici. Se ti riconosci in uno
            di questi, possiamo aiutarti.
          </p>
        </FadeInOnScroll>

        <div className="mt-12">
          <SectorOverlay sectors={SETTORI_OVERLAY} />
        </div>
      </SectionWrapper>

      {/* ── Section 5: Settore + Applicazioni AI ─────────── */}
      <SectionWrapper bg="dark">
        <FadeInOnScroll>
          <Label className="!text-giallo">COMPETENZA SETTORIALE</Label>
          <h2 className="text-section text-bianco mt-4">
            Il tuo settore ha un problema. Noi lo conosciamo gi&agrave;.
          </h2>
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
                    <td
                      className="text-bianco/70 text-body py-4"
                      dangerouslySetInnerHTML={{ __html: row.applicazione }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 6: Stats Bar ─────────────────────────── */}
      <SectionWrapper bg="giallo" className="!py-12">
        <FadeInOnScroll
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          stagger
        >
          {STATS_BAR.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={i}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-0.5">
                {stat.prefix && (
                  <span className="text-metric">{stat.prefix}</span>
                )}
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-nero/70 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 7: CTA Finale ────────────────────────── */}
      <CtaFinale
        title="Vinci la prossima decade."
        subtitle="Non aspettare che lo facciano i tuoi concorrenti. Parla con noi, nessun impegno."
        buttonText="Prenota una call &rarr;"
        buttonHref="/contatti"
        dark
      />
    </>
  );
}

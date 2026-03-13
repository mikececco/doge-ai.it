import type { Metadata } from "next";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";

export const metadata: Metadata = {
  title: "Cosa Possiamo Fare — Il Doge di Venezia",
  description:
    "10 casi d'uso concreti di AI transformation per le PMI italiane.",
  openGraph: {
    title: "Cosa Possiamo Fare — Il Doge di Venezia",
    description:
      "10 casi d'uso concreti di AI transformation per le PMI italiane.",
    type: "website",
  },
};

/* ─── Data ─────────────────────────────────────────────── */

type UseCase = {
  number: string;
  title: string;
  problem: string;
  solution: string;
  metrics?: string[];
};

const USE_CASES: UseCase[] = [
  {
    number: "01",
    title:
      "E se ogni dipendente avesse il proprio assistente AI personale?",
    problem:
      "Ogni funzione usa tool diversi, spesso gratuiti, spesso non sicuri, con zero governance.",
    solution:
      "Un’unica piattaforma aziendale che dà accesso a +30 modelli AI (ChatGPT, Claude, Gemini) con governance centralizzata, GDPR compliance, workflow e agenti customizzati per ogni team, integrazione con Slack, Teams, Google Drive, CRM, ERP.",
    metrics: [
      "40–60% riduzione tempo su attività ripetitive",
      "Rollout completo in meno di 2 settimane",
      "Nessun vendor lock-in",
    ],
  },
  {
    number: "02",
    title: "Che rottura gestire la parte amministrativa",
    problem:
      "Buste paga, note spese, presenze, turni, ferie, assunzioni — tutto manuale, tutto frammentato.",
    solution:
      "Piattaforma che unifica assunzioni con firma digitale, buste paga automatizzate, gestione ferie e presenze, nota spese con approvazione automatica, integrazione del consulente del lavoro.",
    metrics: ["Da processi che durano giorni a tre click"],
  },
  {
    number: "03",
    title:
      "E se potessi assumere un esercito di agenti AI che lavorano 24/7?",
    problem:
      "Customer service, gestione ordini, coordinamento fornitori — tutto dipende da persone disponibili solo in orario lavorativo.",
    solution:
      "Agenti AI che parlano con clienti, fornitori e corrieri via telefono, email, SMS, WhatsApp. Applicano logica complessa, agiscono in autonomia nei tuoi sistemi, scalano all’umano solo per le eccezioni.",
    metrics: [
      "Manifattura — coordinamento fornitori multi-lingua",
      "Logistica — negoziazione tariffe real-time",
      "Retail — support omnicanale, gestione resi",
    ],
  },
  {
    number: "04",
    title: "Smetti di muovere la merce manualmente",
    problem:
      "Processi di picking, smistamento e movimentazione interamente manuali — lenti, costosi, soggetti a errori.",
    solution:
      "Robot che automatizzano i processi pick-and-place. Adattabili a: stoccaggio automatizzato, smistamento per prelievo in lotti, goods-to-robot picking, caricamento e scarico di robot mobili autonomi.",
    metrics: [
      "+100 sistemi installati",
      "+500M pick completati",
      "98% accuratezza",
      "Payback in meno di 5 mesi",
    ],
  },
  {
    number: "05",
    title:
      "Ancora a gestire gli acquisti con Excel e telefonate infinite ai fornitori?",
    problem:
      "Procurement manuale, zero visibilità sui prezzi di mercato, compliance normativa a rischio.",
    solution:
      "Piattaforma di procurement intelligence che combina dati ERP, AI e analisi di mercato. Identifica prezzi fuori mercato, centralizza tutti i fornitori, automatizza le RFQ, gestisce la compliance normativa (CSRD, supply chain due diligence).",
    metrics: [
      "75% riduzione tempo su task manuali",
      "€250k–€400k risparmi medi annui",
      "Implementazione in meno di 60 giorni",
    ],
  },
  {
    number: "06",
    title: "Cosa faresti se avessi 1 ora in più ogni giorno?",
    problem:
      "La casella email è un buco nero di tempo.",
    solution:
      "Assistente virtuale che categorizza automaticamente le email, scrive le bozze di risposta nel tuo stile (pronte per l’invio, da rivedere in 10 secondi), prende note delle riunioni e genera i follow-up. Si collega con un click a Gmail o Outlook.",
  },
  {
    number: "07",
    title:
      "Hai mai pensato di parlare con i tuoi clienti direttamente via chat?",
    problem:
      "L’interazione con il cliente è frammentata su troppi canali, tempi di risposta lenti, conversioni basse.",
    solution:
      "AI conversazionale su WhatsApp, Instagram, Messenger, live chat. Gestisce tutto il funnel: acquisizione, conversione, ritenzione.",
    metrics: [
      "250% ROI",
      "+550% coinvolgimento cliente",
      "Payback in meno di 6 mesi",
    ],
  },
  {
    number: "08",
    title: "Come parla ChatGPT del tuo brand?",
    problem:
      "Le ricerche si spostano verso le piattaforme AI. La tua visibilità su Google non dice nulla di come vieni presentato su ChatGPT, Perplexity, Claude.",
    solution:
      "Strumento che monitora, analizza e migliora la presenza del brand sulle piattaforme AI — visibilità, posizione, sentiment, confronto con i competitor in real-time.",
  },
  {
    number: "09",
    title:
      "Nella vostra azienda ispezionate ancora i prodotti manualmente?",
    problem:
      "Il controllo qualità manuale è lento, costoso e soggetto a variabilità umana.",
    solution:
      "Telecamere ad alta risoluzione + computer vision che rileva difetti, imperfezioni e anomalie in tempo reale.",
    metrics: [
      "31x migliore rilevamento errori",
      "Payback in meno di 5 mesi",
    ],
  },
  {
    number: "10",
    title:
      "Sblocca un nuovo livello di produttività nell’assemblaggio manuale",
    problem:
      "Ore di video di assemblaggio manuale che nessuno riesce ad analizzare sistematicamente.",
    solution:
      "AI che analizza i video, produce grafici chiari su inefficienze e colli di bottiglia, ottimizza i percorsi di camminata, riduce il tempo ciclo.",
    metrics: [
      "+50M cicli analizzati",
      "€2M risparmi/impianto",
      "+20% aumento produttivo",
    ],
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function CasiDusoPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-bianco text-nero pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label>CASI D&rsquo;USO</Label>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl">
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

      {/* Section 2 — 10 Use Cases */}
      {USE_CASES.map((uc, i) => (
        <section
          key={uc.number}
          className={`${
            i % 2 === 0 ? "bg-bianco" : "bg-[#F5F5F5]"
          } text-nero py-20`}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-10 lg:gap-16 items-start">
              {/* Left — Number + Title + Problem */}
              <FadeInOnScroll>
                <span className="block text-[96px] font-bold text-[#F0F0F0] leading-none select-none">
                  {uc.number}
                </span>
                <h2 className="text-[32px] font-bold leading-tight mt-2">
                  {uc.title}
                </h2>
                <p className="text-base text-grigio-medio italic mt-3">
                  {uc.problem}
                </p>
              </FadeInOnScroll>

              {/* Right — Solution + Metrics */}
              <FadeInOnScroll>
                <p className="text-lg text-grigio-scuro leading-relaxed">
                  {uc.solution}
                </p>

                {uc.metrics && uc.metrics.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {uc.metrics.map((metric, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-body font-semibold text-nero"
                      >
                        <span className="text-giallo mt-0.5">&rarr;</span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                )}
              </FadeInOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* Section 3 — CTA Finale */}
      <CtaFinale
        dark
        title="Hai riconosciuto un problema nella tua azienda?"
        subtitle="Raccontacelo. La prima conversazione &egrave; gratuita."
        buttonText="Parla con noi &rarr;"
        buttonHref="/contatti"
      />
    </>
  );
}

"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import Button from "@/components/ui/Button";
import PasswordGate from "@/components/PasswordGate";

/* ─── Data ─────────────────────────────────────────────── */

const MODELS = [
  {
    title: "Co-branding",
    items: [
      "Presentiamo insieme al cliente finale",
      "Il tuo brand + il nostro know-how tecnico",
      "Proposta commerciale congiunta",
      "Ideale se vuoi posizionarti sull\u2019AI",
    ],
  },
  {
    title: "Subcontracting",
    items: [
      "Lavoriamo dietro le quinte, sotto il tuo brand",
      "Il cliente finale vede solo te",
      "Tu gestisci la relazione, noi la delivery",
      "Ideale se hai gi\u00E0 un posizionamento forte",
    ],
  },
];

const SERVICES = [
  {
    title: "Assessment AI",
    description:
      "Analisi dei processi del cliente, identificazione delle opportunit\u00E0 di automazione, roadmap prioritizzata per impatto e fattibilit\u00E0.",
  },
  {
    title: "Automazione processi operativi",
    description:
      "Workflow ripetitivi trasformati in flussi automatici. Meno errori, meno ore, pi\u00F9 margine per il cliente.",
  },
  {
    title: "Agenti AI integrati",
    description:
      "Assistenti intelligenti che lavorano dentro i sistemi del cliente: CRM, ERP, help desk, documentale.",
  },
  {
    title: "AI layer su progetti in corso",
    description:
      "Stai gi\u00E0 lavorando su un progetto per il tuo cliente? Aggiungiamo il layer AI senza ripartire da zero.",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function PartnerPage() {
  return (
    <PasswordGate>
      {/* ── Section 1: Hero (giallo) ───── */}
      <section
        data-navbar-theme="giallo"
        className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden"
      >
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero tracking-widest">
              Programma Partner
            </span>
            <h1 className="text-section uppercase mt-4 mx-auto">
              Porta l&rsquo;AI ai tuoi clienti
              <span className="hidden md:inline">
                <br />
              </span>{" "}
              senza costruire niente internamente
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              I tuoi clienti stanno gi&agrave; cercando soluzioni AI. Tu puoi
              essere quello che gliele porta - senza assumere, senza
              formare, senza rischio tecnico.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti" arrow>
                Parliamone
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Section 2: Urgency (white) ───────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Il contesto
            </span>
            <h2 className="text-section uppercase mt-4">
              I tuoi clienti ti stanno gi&agrave; chiedendo AI
            </h2>
            <p className="text-body text-nero/70 mt-6 leading-relaxed">
              Ogni azienda che segui ha almeno un processo che potrebbe essere
              automatizzato, un reparto che potrebbe lavorare il doppio con le
              stesse persone, un prodotto che potrebbe essere potenziato. Lo
              sanno. E stanno iniziando a chiederlo. Se non lo offri tu, lo
              troveranno altrove - e con quel fornitore parleranno anche
              del resto.
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 3: Positioning (dark) ────────────── */}
      <SectionWrapper bg="dark">
        <FadeInOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-section uppercase">
              Non un fornitore.
              <br />
              Una divisione AI.
            </h2>
            <p className="text-body text-bianco/70 mt-6 leading-relaxed">
              Non ci affianchiamo come un vendor esterno. Ci integriamo nel tuo
              modo di lavorare come se fossimo il tuo reparto AI interno. Stessi
              ritmi, stessi standard, stessa cura per il cliente finale. Il tuo
              cliente non deve sapere dove finisci tu e dove iniziamo noi.
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 4: Two Models (white) ────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Come lavoriamo insieme
            </span>
            <h2 className="text-section uppercase mt-4">
              Scegli il modello che si adatta a come lavori
            </h2>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {MODELS.map((model, i) => (
                <div
                  key={model.title}
                  className={`px-4 py-4 md:px-8 md:py-8 ${
                    i === 0
                      ? "md:border-r border-nero border-b md:border-b-0"
                      : ""
                  }`}
                >
                  <h3 className="text-xl font-bold uppercase mb-4">
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                      {model.title}
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {model.items.map((item) => (
                      <li
                        key={item}
                        className="text-body text-nero/80 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-nero font-bold shrink-0">
                          &rarr;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-nero/50 mt-4 text-center">
            I termini si definiscono insieme, caso per caso.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 5: Services (light) ──────────────── */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Cosa offri ai tuoi clienti
            </span>
            <h2 className="text-section uppercase mt-4">
              Servizi che oggi i tuoi clienti non trovano da te
            </h2>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {SERVICES.map((service, i) => (
                <div
                  key={service.title}
                  className={`px-6 py-8 md:px-10 md:py-10 ${
                    i % 2 === 0 ? "md:border-r border-nero" : ""
                  } ${i < 2 ? "border-b border-nero" : ""}`}
                >
                  <h3 className="text-lg font-bold uppercase mb-2 flex items-start gap-2">
                    <span className="text-nero shrink-0">&rarr;</span>
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-sm text-nero/70 leading-relaxed ml-6">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 6: Chi siamo (white) ─────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center max-w-[700px] mx-auto">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Chi siamo
            </span>
            <h2 className="text-section uppercase mt-4">Il Doge di Venezia</h2>
            <p className="text-body text-nero/70 mt-6 leading-relaxed">
              Siamo un team di implementazione AI che lavora con PMI e aziende
              italiane. Non vendiamo tecnologia: costruiamo sistemi che
              funzionano, misuriamo i risultati, e restiamo finch&eacute; non
              sono autonomi. Ogni progetto segue il nostro metodo interno.
            </p>
            <div className="mt-6">
              <Button variant="outline" href="/metodo" arrow>
                Leggi Il Codice del Doge
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Section 7: CTA Finale (dark) ─────────────── */}
      <CtaFinale
        dark
        title="Parliamone."
        subtitle="Hai un cliente per cui potrebbe avere senso? 30 minuti sono sufficienti per capire se c'è qualcosa da costruire insieme."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </PasswordGate>
  );
}

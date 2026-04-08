"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import DoveOperiamo from "@/components/sections/DoveOperiamo";
import INumeri from "@/components/sections/home/INumeri";
import CtaFinale from "@/components/sections/CtaFinale";
import Button from "@/components/ui/Button";
import ShieldAnimation from "@/components/animations/ShieldAnimation";
import RocketAnimation from "@/components/animations/RocketAnimation";

/* ─── Page ─────────────────────────────────────────────── */

export default function AziendePage() {
  return (
    <>
      {/* ── Section 1: Hero ───── */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
        <FadeInOnScroll>
          <span className="text-label uppercase text-nero tracking-widest">Per le Aziende</span>
          <h1 className="text-section uppercase mt-4 mx-auto">
            Se potessi avere il triplo dei dipendenti senza aumentare il costo del personale,<br />cosa faresti?
          </h1>
          <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
            &Egrave; la domanda da cui partiamo con ogni cliente. E oggi, con l&apos;AI,
            la risposta non &egrave; pi&ugrave; ipotetica. Il triplo della capacit&agrave;, non dei costi.
          </p>
          <div className="mt-8">
            <Button variant="dark" size="md" uppercase href="/contatti" arrow>
              Parla con noi
            </Button>
          </div>
        </FadeInOnScroll>
        </div>
      </section>

      {/* ── Section: La Scomoda Verità ─────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              La scomoda verit&agrave;
            </span>
            <h2 className="text-section uppercase mt-4">
              Non &egrave; fantascienza. &Egrave; matematica.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              I modelli AI oggi coprono il 70-80% delle mansioni di un dipendente medio, alla stessa qualit&agrave;.
              Ogni azienda che inizia ad adottare l&apos;AI si ritrova con il triplo delle risorse operative.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left - Il Primo Impatto */}
              <div className="md:border-r border-nero px-4 py-4 md:px-8 md:py-8">
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    Il primo impatto
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
                  &egrave; immediato e misurabile: automazione dei processi ad alto volume,
                  eliminazione del lavoro ripetitivo, efficienza operativa. Cost reduction
                  con numeri chiari.
                </p>
              </div>

              {/* Right - Il Vero Valore */}
              <div className="px-4 py-4 md:px-8 md:py-8 border-t md:border-t-0 border-nero">
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    Il vero valore
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
                  &egrave; quello che sblocca: nuovi prodotti che prima erano economicamente
                  non fattibili. Nuovi mercati che richiederebbero troppo personale.
                  Modelli di business impossibili da scalare senza AI.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <p className="text-body font-bold text-nero max-w-[700px] mx-auto">
              Espandere in nuovi mercati? Lanciare nuovi prodotti? Servire pi&ugrave; clienti?<br />
              Quali opportunit&agrave; si aprirebbero con il triplo del personale?
            </p>
            <div className="mt-6">
              <Button variant="dark" size="md" uppercase href="/contatti" arrow>
                Raccontacelo qui
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Le Due Modalità ─────────────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Le due modalit&agrave;
            </span>
            <h2 className="text-section uppercase mt-4">
              Proteggere o espandersi. Entrambi partono da qui.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Alcune aziende hanno margini da proteggere. Altre hanno mercati da conquistare.<br />
              Le migliori fanno entrambe le cose, in sequenza.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:border-r border-nero px-4 py-4 md:px-8 md:py-8">
                <div className="h-[140px] mb-6">
                  <ShieldAnimation />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    Implementazioni di difesa
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
                  Parti da qui se hai processi ad alto costo, lavoro ripetitivo che consuma
                  risorse, o competitor che si stanno muovendo. L&apos;obiettivo &egrave; ridurre i costi
                  operativi, aumentare i margini, liberare tempo.
                </p>
              </div>
              <div className="px-4 py-4 md:px-8 md:py-8 border-t md:border-t-0 border-nero">
                <div className="h-[140px] mb-6">
                  <RocketAnimation />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4">
                  <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                    Implementazioni di attacco
                  </span>
                </h3>
                <p className="text-body text-nero leading-relaxed">
                  Parti da qui se vuoi fare cose che oggi non puoi permetterti. Nuovi mercati,
                  nuovi prodotti, pi&ugrave; clienti, con la stessa struttura. L&apos;AI non aggiunge
                  persone al tuo organico: moltiplica quello che gi&agrave; hai.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Il Percorso ─────────────────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Il percorso
            </span>
            <h2 className="text-section uppercase mt-4">
              Dove sei oggi. Dove puoi arrivare.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Ogni azienda percorre questi livelli in sequenza. Non si salta, ma si costruisce ogni livello
              sulle fondamenta del precedente. Il primo risultato concreto arriva entro 30 giorni.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Timeline - horizontal desktop, vertical mobile */}
        <FadeInOnScroll>
          {/* Desktop: horizontal */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-4 gap-6 relative">
              {[
                { title: "Quick Wins", time: "0-90 GIORNI", body: "Identifichiamo 2-3 processi ad alto impatto e li automatizziamo. Dobbiamo creare momentum interno." },
                { title: "Trasformazione Operativa", time: "3-6 MESI", body: "Espandiamo su tutte le aree chiave. Ogni implementazione è pianificata con numeri chiari." },
                { title: "Operations AI-Native", time: "6-12 MESI", body: "L'AI non è più un progetto. È il modo in cui l'azienda lavora e i team diventano autonomi." },
                { title: "Capacity Expansion", time: "12+ MESI", body: "Quello che prima era impossibile diventa il prossimo obiettivo: nuovi prodotti, mercati, modelli di business." },
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
              { title: "Quick Wins", time: "0-90 GIORNI", body: "Identifichiamo 2-3 processi ad alto impatto e li automatizziamo. Dobbiamo creare momentum interno." },
              { title: "Trasformazione Operativa", time: "3-6 MESI", body: "Espandiamo su tutte le aree chiave. Ogni implementazione è pianificata con numeri chiari." },
              { title: "Operations AI-Native", time: "6-12 MESI", body: "L'AI non è più un progetto. È il modo in cui l'azienda lavora e i team diventano autonomi." },
              { title: "Capacity Expansion", time: "12+ MESI", body: "Quello che prima era impossibile diventa il prossimo obiettivo: nuovi prodotti, mercati, modelli di business." },
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
            <div className="absolute left-[7px] bottom-0">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M0 7l5 5 5-5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
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
      <DoveOperiamo />

      {/* IN NUMERI */}
      <INumeri />

      {/* ── Incentivi e Agevolazioni ─────────────────────── */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center max-w-[700px] mx-auto">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Incentivi e agevolazioni
            </span>
            <h2 className="text-section uppercase mt-4">
              L&apos;AI che si paga (in parte) da sola
            </h2>
            <p className="text-body text-nero/70 mt-6 leading-relaxed">
              La trasformazione AI di un&apos;azienda pu&ograve; essere finanziata - in parte o
              totalmente - attraverso <a href="/incentivi/credito-imposta-4-0" className="underline decoration-giallo decoration-2 underline-offset-2 hover:text-nero">incentivi fiscali &rarr;</a>, <a href="/incentivi" className="underline decoration-giallo decoration-2 underline-offset-2 hover:text-nero">bandi regionali &rarr;</a> e <a href="/incentivi/pnrr-digitalizzazione" className="underline decoration-giallo decoration-2 underline-offset-2 hover:text-nero">fondi europei &rarr;</a> oggi
              disponibili per le PMI italiane.
            </p>
            <p className="text-body text-nero/70 mt-4 leading-relaxed">
              Non &egrave; il nostro mestiere navigare la burocrazia, ma abbiamo un
              ecosistema di partner, commercialisti e consulenti specializzati, che
              affiancano i nostri clienti per identificare gli strumenti giusti e
              massimizzare il ritorno sull&apos;investimento.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/incentivi" arrow>
                Scopri tutti gli incentivi
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── CTA Finale ────────────────────────── */}
      <CtaFinale
        veniceImage
        title="Vinci la prossima decade."
        subtitle="Non aspettare che lo facciano i tuoi concorrenti. Parla con noi, nessun impegno."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

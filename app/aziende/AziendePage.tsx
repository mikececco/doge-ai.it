"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import ShieldAnimation from "@/components/animations/ShieldAnimation";
import RocketAnimation from "@/components/animations/RocketAnimation";
import { SETTORI } from "@/lib/settori-data";
import INumeri from "@/components/sections/home/INumeri";
import CtaFinale from "@/components/sections/CtaFinale";

/* ─── Page ─────────────────────────────────────────────── */

export default function AziendePage() {
  return (
    <>
      {/* ── Section 1: Hero (Yellow + Venice skyline) ───── */}
      <section className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-40 md:pb-48">
        <FadeInOnScroll>
          <span className="text-label uppercase text-nero/60 tracking-widest">Per le Aziende</span>
          <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
            Se potessi avere 3x i dipendenti senza aumentare il costo del personale, cosa faresti?
          </h1>
          <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
            &Egrave; la domanda da cui partiamo con ogni cliente. E oggi, con l&apos;AI,
            la risposta non &egrave; pi&ugrave; ipotetica. 3x la capacit&agrave;, non i costi.
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

        {/* Venice skyline at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <img
            src="/hero/landscape venezia (no-bg).png"
            alt="Venice skyline"
            className="w-full h-auto opacity-30"
          />
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
              Ogni azienda che inizia ad adottare l&apos;AI si ritrova con 3x le risorse operative.
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

            {/* Bottom bar */}
            <div className="border-t border-nero px-4 py-6 md:px-8 md:py-8 text-center">
              <p className="text-body font-bold text-nero max-w-[700px] mx-auto">
                Quindi se potessi avere 3x i dipendenti senza aumentare il costo del
                personale, quali opportunit&agrave; si aprirebbero? Espandere in nuovi mercati?
                Lanciare nuovi prodotti? Servire pi&ugrave; clienti?
              </p>
              <div className="mt-6">
                <a
                  href="/contatti"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 bg-nero text-bianco hover:bg-giallo hover:text-nero transition-[background-color,color] duration-[250ms] uppercase tracking-wider"
                >
                  Raccontacelo qui
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── Le Due Modalità ─────────────────────────────── */}
      <SectionWrapper bg="giallo">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Le due modalit&agrave;
            </span>
            <h2 className="text-section uppercase mt-4">
              Proteggere o espandersi. Entrambi partono da qui.
            </h2>
            <p className="text-body text-nero/70 mt-6 max-w-[700px] mx-auto">
              Alcune aziende hanno margini da proteggere. Altre hanno mercati da conquistare.
              Le migliori fanno entrambe le cose, in sequenza.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:border-r border-nero px-4 py-4 md:px-8 md:py-8">
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
              <div className="bg-nero/5 min-h-[200px] flex items-center justify-center border-t md:border-t-0 border-nero">
                <ShieldAnimation />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-nero">
              <div className="bg-nero/5 min-h-[200px] flex items-center justify-center border-b md:border-b-0 md:border-r border-nero">
                <RocketAnimation />
              </div>
              <div className="px-4 py-4 md:px-8 md:py-8">
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
              { title: "Quick Wins", time: "0-90 GIORNI", body: "Identifichiamo 2-3 processi ad alto impatto e li automatizziamo. Dobbiamo creare momentum interno." },
              { title: "Trasformazione Operativa", time: "3-6 MESI", body: "Espandiamo su tutte le aree chiave. Ogni implementazione è pianificata con numeri chiari." },
              { title: "Operations AI-Native", time: "6-12 MESI", body: "L'AI non è più un progetto. È il modo in cui l'azienda lavora e i team diventano autonomi." },
              { title: "Capacity Expansion", time: "12+ MESI", body: "Quello che prima era impossibile diventa il prossimo obiettivo: nuovi prodotti, mercati, modelli di business." },
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

      {/* ── Dove Operiamo ─────────────────────────────────── */}
      <SectionWrapper bg="dark" className="min-h-screen flex flex-col justify-center">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Dove operiamo
            </span>
            <h2 className="text-section uppercase mt-4">
              Il tuo settore ha un problema. Noi lo conosciamo gi&agrave;.
            </h2>
            <p className="text-body text-bianco/70 mt-6 max-w-[600px] mx-auto">
              Non esistono soluzioni generiche. Ogni settore ha i suoi colli di bottiglia.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border border-bianco/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Interleave: left col 01-05, right col 06-10 */}
              {/* Left: 01-05, Right: 06-10 - interleaved for 2-col grid */}
              {[
                { idx: 0, num: "01", title: "Manifattura & Produzione", slug: "ai-manifattura-produzione" },
                { idx: 8, num: "06", title: "Edilizia & Immobiliare", slug: "ai-edilizia-immobiliare" },
                { idx: 4, num: "02", title: "Logistica & Trasporti", slug: "ai-logistica-trasporti" },
                { idx: 2, num: "07", title: "Retail, Fashion & Design", slug: "ai-retail-fashion" },
                { idx: 7, num: "03", title: "Food & Beverage", slug: "ai-food-beverage" },
                { idx: 6, num: "08", title: "Farmaceutica & Dispositivi Medici", slug: "ai-farmaceutica" },
                { idx: 1, num: "04", title: "Distribuzione B2B & Grossisti", slug: "ai-distribuzione-b2b" },
                { idx: 8, num: "09", title: "Sanit\u00e0 Privata", slug: "ai-sanita-privata" },
                { idx: 9, num: "05", title: "Servizi Professionali", slug: "ai-servizi-professionali" },
                { idx: 3, num: "10", title: "Turismo & Ospitalit\u00e0", slug: "ai-turismo-ospitalita" },
              ].map((s, i) => {
                const settore = SETTORI[Math.min(s.idx, SETTORI.length - 1)];
                return (
                  <Link
                    key={i}
                    href={`/blog/${s.slug}`}
                    className={`group relative block ${i < 8 ? "border-b border-bianco/20" : ""} ${i % 2 === 1 ? "md:border-l border-bianco/20" : ""}`}
                  >
                    <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6 cursor-pointer">
                      <span className="text-3xl font-bold text-bianco shrink-0">
                        {s.num}.
                      </span>
                      <span className="text-sm font-bold uppercase tracking-wide text-bianco">
                        {s.title}
                      </span>
                      <svg className="ml-auto w-5 h-5 text-bianco transition-transform group-hover:rotate-90 duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                    </div>
                    <div className="max-h-0 overflow-hidden group-hover:max-h-[180px] transition-[max-height] duration-700 ease-in-out">
                      <div className="px-6 pb-5 md:px-8 md:pb-6 pl-16 md:pl-20">
                        <ul className="space-y-2">
                          {settore.useCases.map((uc, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-bianco/70">
                              <span className="text-giallo mt-0.5 shrink-0">&rarr;</span>
                              {uc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* IN NUMERI - same as homepage */}
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
              <a
                href="/incentivi"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 bg-nero text-bianco hover:bg-giallo hover:text-nero transition-[background-color,color] duration-[250ms] uppercase tracking-wider"
              >
                Scopri tutti gli incentivi
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ── REMOVED: old metrics, successi, settori, stats ── */}
      {/* All replaced by new sections above */}

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

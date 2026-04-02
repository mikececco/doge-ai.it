"use client";

import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export default function TrasformazioneAI() {
  return (
    <SectionWrapper bg="white" id="trasformazione">
      {/* Header */}
      <FadeInOnScroll>
        <div className="text-center mb-16">
          <span className="text-label uppercase text-grigio-medio tracking-widest">
            Cosa facciamo
          </span>
          <h2 className="text-section mt-4 max-w-[900px] mx-auto uppercase">
            Trasformazione AI per chi ha un&apos;azienda da far crescere.
          </h2>
        </div>
      </FadeInOnScroll>

      {/* Two-column grid with borders */}
      <FadeInOnScroll>
        <div className="border border-nero grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — Per le Aziende */}
          <div className="md:border-r border-nero flex flex-col">
            {/* Title */}
            <div className="border-b border-nero px-8 py-6">
              <h3 className="text-2xl font-bold uppercase">
                Per le{" "}
                <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                  Aziende
                </span>
              </h3>
            </div>

            {/* Body */}
            <div className="px-8 py-8 flex-1">
              <p className="text-body text-nero leading-relaxed">
                Entriamo nei tuoi processi, identifichiamo dove l&apos;AI ha il
                massimo impatto e lo implementiamo. Niente slide, niente
                strategie che restano nei cassetti. Sistemi che funzionano, e
                risultati che si misurano.
              </p>
            </div>

            {/* CTA */}
            <div className="border-t border-nero">
              <a
                href="/aziende"
                className="block bg-nero text-bianco px-8 py-5 font-semibold text-sm hover:bg-giallo hover:text-nero transition-[background-color,color] duration-[250ms]"
              >
                Scopri come lavoriamo con le aziende <ArrowRight size={16} className="inline-block" />
              </a>
            </div>
          </div>

          {/* RIGHT — Per i Fondi */}
          <div className="border-t md:border-t-0 border-nero flex flex-col">
            {/* Title */}
            <div className="border-b border-nero px-8 py-6">
              <h3 className="text-2xl font-bold uppercase">
                Per i{" "}
                <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                  Fondi
                </span>
              </h3>
            </div>

            {/* Body */}
            <div className="px-8 py-8 flex-1">
              <p className="text-body text-nero leading-relaxed">
                Siamo il vostro AI Operating Partner, dalla due diligence
                all&apos;exit. Valutiamo l&apos;AI readiness delle target,
                implementiamo quick wins nei primi 100 giorni e generiamo EBITDA
                uplift misurabile su tutto il portfolio.
              </p>
            </div>

            {/* CTA */}
            <div className="border-t border-nero">
              <a
                href="/fondi"
                className="block bg-giallo text-nero px-8 py-5 font-semibold text-sm hover:bg-nero hover:text-bianco transition-[background-color,color] duration-[250ms]"
              >
                Scopri come lavoriamo con i fondi <ArrowRight size={16} className="inline-block" />
              </a>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}

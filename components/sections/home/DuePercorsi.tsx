"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export default function DuePercorsi() {
  return (
    <SectionWrapper bg="white" id="due-percorsi">
      <FadeInOnScroll>
        <h2 className="text-section">Sei un imprenditore o un fondo?</h2>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
        {/* Per le Aziende */}
        <Card index={0} className="bg-grigio-chiaro !shadow-none min-h-[280px] flex flex-col justify-between">
          <div>
            <Label>Per le Aziende</Label>
            <h3 className="text-2xl font-bold text-nero mt-4">
              Trasformiamo le tue operazioni con AI.
            </h3>
            <p className="text-grigio-scuro text-body mt-3 leading-relaxed">
              Dal customer service alla logistica, dalla manifattura alle
              vendite &mdash; con risultati misurabili in 60 giorni.
            </p>
          </div>
          <div className="mt-6">
            <Button variant="secondary" href="/aziende">
              Scopri di pi&ugrave;
            </Button>
          </div>
        </Card>

        {/* Per i Fondi */}
        <Card index={1} dark className="min-h-[280px] flex flex-col justify-between">
          <div>
            <Label className="text-grigio-medio">Per i Fondi</Label>
            <h3 className="text-2xl font-bold text-bianco mt-4">
              Il vostro AI Operating Partner.
            </h3>
            <p className="text-bianco/60 text-body mt-3 leading-relaxed">
              Dalla due diligence pre-deal all&rsquo;exit: EBITDA uplift
              misurabile nelle portfolio companies.
            </p>
          </div>
          <div className="mt-6">
            <Button variant="secondary" href="/fondi">
              <span className="text-giallo hover:text-giallo-hover transition-colors">
                Scopri di pi&ugrave;
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}

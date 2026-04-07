"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { SETTORI } from "@/lib/settori-data";

const SETTORI_LIST = [
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
];

export default function DoveOperiamo() {
  return (
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
            {SETTORI_LIST.map((s, i) => {
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
  );
}

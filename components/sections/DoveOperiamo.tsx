"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { SETTORI } from "@/lib/settori-data";

// Sequential order — on desktop (2-col) reads left-to-right, top-to-bottom
const SETTORI_LIST = [
  { idx: 0, num: "01", title: "Manifattura & Produzione", slug: "ai-manifattura-produzione" },
  { idx: 1, num: "02", title: "Distribuzione B2B & Grossisti", slug: "ai-distribuzione-b2b" },
  { idx: 2, num: "03", title: "Retail, Fashion & Design", slug: "ai-retail-fashion" },
  { idx: 3, num: "04", title: "Turismo & Ospitalit\u00e0", slug: "ai-turismo-ospitalita" },
  { idx: 4, num: "05", title: "Logistica & Trasporti", slug: "ai-logistica-trasporti" },
  { idx: 5, num: "06", title: "Servizi Professionali", slug: "ai-servizi-professionali" },
  { idx: 6, num: "07", title: "Farmaceutica & Dispositivi Medici", slug: "ai-farmaceutica" },
  { idx: 7, num: "08", title: "Food & Beverage", slug: "ai-food-beverage" },
  { idx: 8, num: "09", title: "Edilizia & Immobiliare", slug: "ai-edilizia-immobiliare" },
  { idx: 9, num: "10", title: "Sanit\u00e0 Privata", slug: "ai-sanita-privata" },
];

const COPY = {
  aziende: {
    label: "Dove operiamo",
    heading: "Il tuo settore ha un problema.\nNoi lo conosciamo già.",
    subtitle: "Non esistono soluzioni generiche. Ogni settore ha i suoi colli di bottiglia.",
  },
  fondi: {
    label: "Settori del Portfolio",
    heading: "I settori dove generiamo valore per i fondi.",
    subtitle: "Due diligence AI, quick wins nei primi 100 giorni, e trasformazione strutturale su ogni verticale del portfolio.",
  },
} as const;

export default function DoveOperiamo({ variant = "aziende" }: { variant?: "aziende" | "fondi" }) {
  const copy = COPY[variant];
  const [expanded, setExpanded] = useState<number | null>(null);
  const router = useRouter();

  return (
    <SectionWrapper bg="dark" className="md:min-h-screen flex flex-col justify-center">
      <FadeInOnScroll>
        <div className="text-center mb-14">
          <span className="text-label uppercase text-grigio-medio tracking-widest">
            {copy.label}
          </span>
          <h2 className="text-section uppercase mt-4">
            {copy.heading.split("\n").map((line, i) => (
              <span key={i}>{i > 0 && <span className="hidden md:inline"><br /></span>}{" "}{line}</span>
            ))}
          </h2>
          <p className="text-body text-bianco/70 mt-6 max-w-[600px] mx-auto">
            {copy.subtitle}
          </p>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="border border-bianco/20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {SETTORI_LIST.map((s, i) => {
              const settore = SETTORI[Math.min(s.idx, SETTORI.length - 1)];
              const isExpanded = expanded === i;

              return (
                <div
                  key={i}
                  className={`group relative cursor-pointer ${i < 8 ? "border-b border-bianco/20" : i === 8 ? "border-b md:border-b-0 border-bianco/20" : ""} ${i % 2 === 1 ? "md:border-l border-bianco/20" : ""}`}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      if (!isExpanded) {
                        setExpanded(i);
                        return;
                      }
                    }
                    router.push(`/blog/${s.slug}`);
                  }}
                >
                  <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6">
                    <span className="text-3xl font-bold text-bianco shrink-0">
                      {s.num}.
                    </span>
                    <span className={`text-sm font-bold uppercase tracking-wide transition-colors group-hover:text-giallo ${isExpanded ? "text-giallo" : "text-bianco"}`}>
                      {s.title}
                    </span>
                    {/* Desktop: arrow */}
                    <svg className="hidden md:block ml-auto w-5 h-5 text-bianco/40 group-hover:text-giallo transition-all group-hover:translate-x-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    {/* Mobile: chevron */}
                    <svg
                      className={`md:hidden ml-auto w-5 h-5 shrink-0 transition-all duration-300 ${isExpanded ? "text-giallo rotate-90" : "text-bianco/40"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>

                  {/* Use cases: always visible on desktop (hover), accordion on mobile */}
                  <div className={`${isExpanded ? "block" : "hidden"} md:hidden px-6 pb-5 pl-16`}>
                    <ul className="space-y-2">
                      {settore.useCases.map((uc, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-bianco/70">
                          <span className="text-giallo mt-0.5 shrink-0">&rarr;</span>
                          {uc}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/blog/${s.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-giallo mt-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Leggi l&rsquo;articolo
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>

                  {/* Desktop: hover expand */}
                  <div className="hidden md:block max-h-0 overflow-hidden group-hover:max-h-[180px] transition-[max-height] duration-700 ease-in-out">
                    <div className="px-8 pb-6 pl-20">
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
                </div>
              );
            })}
          </div>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { GLOSSARIO, GLOSSARIO_CATEGORIES } from "@/lib/glossario-data";
import Button from "@/components/ui/Button";

export default function GlossarioPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = GLOSSARIO;

    if (activeCategory) {
      result = result.filter((t) => t.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.slug.includes(q)
      );
    }

    return result;
  }, [query, activeCategory]);

  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">
              Glossario AI
            </span>
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              200 termini AI spiegati per la tua azienda
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Dall&rsquo;intelligenza artificiale all&rsquo;automazione, dal
              machine learning alla strategia. Tutto in italiano, tutto pratico.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Search + Filters */}
      <section data-navbar-theme="dark" className="bg-nero py-12">
        <div className="container-site">
          <FadeInOnScroll>
            <div className="relative mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-grigio-medio"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Cerca un termine..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-nero/50 border border-bianco/10 pl-11 pr-4 py-2 text-sm text-bianco placeholder:text-bianco/40 focus:outline-none focus:border-giallo transition-colors"
              />
            </div>

            <p className="text-xs text-bianco/40 uppercase tracking-wider mb-2">
              Per categoria
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  activeCategory === null
                    ? "bg-giallo text-nero border-giallo"
                    : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
                }`}
              >
                Tutti ({GLOSSARIO.length})
              </button>
              {GLOSSARIO_CATEGORIES.map((cat) => {
                const count = GLOSSARIO.filter(
                  (t) => t.category === cat
                ).length;
                return (
                  <button
                    key={cat}
                    onClick={() =>
                      setActiveCategory(activeCategory === cat ? null : cat)
                    }
                    className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                      activeCategory === cat
                        ? "bg-giallo text-nero border-giallo"
                        : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Results */}
      <section data-navbar-theme="light" className="bg-bianco text-nero section-padding">
        <div className="container-site">
          <FadeInOnScroll>
            <p className="text-sm text-grigio-scuro mb-8 uppercase tracking-wider font-semibold">
              {filtered.length} termini trovati
            </p>
          </FadeInOnScroll>

          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((term, i) => (
                <Link
                  href={`/glossario/${term.slug}`}
                  key={term.slug}
                  className={`p-5 md:p-6 flex flex-col hover:bg-giallo/5 transition-colors
                    ${i < filtered.length - 1 ? "border-b border-nero md:border-b" : ""}
                    ${(i + 1) % 2 !== 0 ? "md:border-r md:border-nero" : ""}
                    ${(i + 1) % 3 !== 0 ? "lg:border-r lg:border-nero" : ""}
                  `}
                >
                  <span className="text-[10px] font-semibold text-giallo-hover uppercase tracking-wider">
                    {term.category}
                  </span>
                  <h3 className="text-sm font-bold uppercase leading-tight mt-2 mb-3">
                    <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                      {term.term}
                    </span>
                  </h3>
                  <p className="text-sm text-nero/70 leading-relaxed line-clamp-3 flex-1">
                    {term.definition}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-grigio-medio py-16">
              Nessun termine trovato per &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      <CtaFinale
        dark
        title="Vinci la prossima decade."
        subtitle="Parla con noi. Nessun impegno, solo chiarezza."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { CASI_DUSO, DEPARTMENTS, SECTORS } from "@/lib/casi-duso-data";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

/* ─── Page ─────────────────────────────────────────────── */

export default function CasiDusoPage() {
  const [query, setQuery] = useState("");
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);
  const [activeSector, setActiveSector] = useState<string | null>(null);


  const filtered = useMemo(() => {
    let result = CASI_DUSO;

    if (activeDepartment) {
      result = result.filter((c) => c.department === activeDepartment);
    }
    if (activeSector) {
      result = result.filter((c) => c.sector === activeSector);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [query, activeDepartment, activeSector]);

  return (
    <>
      {/* ── Section 1: Yellow Hero ──────────────────────── */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">
              Casi d&rsquo;Uso
            </span>
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              Cosa possiamo fare per la tua azienda?
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              Non vendiamo slide. Costruiamo sistemi.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>

        </div>

      </section>

      {/* ── Section 2: Search + Filters (dark bg) ──────── */}
      <section className="bg-nero py-12">
        <div className="container-site">
          <FadeInOnScroll>
            {/* Search input */}
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
                placeholder="Cerca casi d'uso..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-nero/50 border border-bianco/10 pl-11 pr-4 py-2 text-sm text-bianco placeholder:text-bianco/40 focus:outline-none focus:border-giallo transition-colors"
              />
            </div>

            {/* Department filters */}
            <p className="text-xs text-bianco/40 uppercase tracking-wider mb-2">Per reparto</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setActiveDepartment(null)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  activeDepartment === null
                    ? "bg-giallo text-nero border-giallo"
                    : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
                }`}
              >
                Tutti
              </button>
              {DEPARTMENTS.map((dep) => (
                <button
                  key={dep}
                  onClick={() =>
                    setActiveDepartment(activeDepartment === dep ? null : dep)
                  }
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                    activeDepartment === dep
                      ? "bg-giallo text-nero border-giallo"
                      : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
                  }`}
                >
                  {dep}
                </button>
              ))}
            </div>

            {/* Sector filters */}
            <p className="text-xs text-bianco/40 uppercase tracking-wider mb-2">Per settore</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSector(null)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  activeSector === null
                    ? "bg-giallo text-nero border-giallo"
                    : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
                }`}
              >
                Tutti
              </button>
              {SECTORS.map((sec) => (
                <button
                  key={sec}
                  onClick={() =>
                    setActiveSector(activeSector === sec ? null : sec)
                  }
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                    activeSector === sec
                      ? "bg-giallo text-nero border-giallo"
                      : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Section 3: Results count + Grid (white bg) ─── */}
      <section className="bg-bianco text-nero section-padding">
        <div className="container-site">
          {/* Results count */}
          <FadeInOnScroll>
            <p className="text-sm text-grigio-scuro mb-8 uppercase tracking-wider font-semibold">
              {filtered.length} casi d&rsquo;uso trovati
            </p>
          </FadeInOnScroll>

          {/* Grid */}
            <div className="border border-nero">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {filtered.map((caso, i) => {
                  // Calculate border classes for the grid
                  const colsLg = 4;
                  const colsMd = 2;
                  const totalItems = filtered.length;

                  return (
                    <Link
                      href={`/casi-duso/${caso.id}`}
                      key={caso.id}
                      className={`group p-5 md:p-6 flex flex-col hover:bg-giallo transition-colors
                        ${i < totalItems - 1 ? "border-b border-nero md:border-b" : ""}
                        ${(i + 1) % colsMd !== 0 ? "md:border-r md:border-nero" : ""}
                        ${(i + 1) % colsLg !== 0 ? "lg:border-r lg:border-nero" : ""}
                      `}
                    >
                      {/* Title with yellow underline */}
                      <h3 className="text-sm font-bold uppercase leading-tight mb-3">
                        <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                          {caso.title}
                        </span>
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-nero/70 leading-relaxed mb-4 flex-1">
                        {caso.description}
                      </p>

                      {/* Bullets - visible on hover */}
                      <div className="max-h-0 overflow-hidden group-hover:max-h-[200px] transition-[max-height] duration-500">
                        <ul className="space-y-2 mb-4">
                          {caso.bullets.map((bullet, bi) => (
                            <li
                              key={bi}
                              className="flex items-start gap-2 text-xs text-nero/80 leading-relaxed"
                            >
                              <ArrowRight
                                size={12}
                                className="shrink-0 mt-0.5 text-nero"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {caso.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold text-giallo-hover uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-center text-grigio-medio py-16">
              Nessun caso d&rsquo;uso trovato per &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* ── Section 4: CTA ─────────────────────────────── */}
      <CtaFinale
        veniceImage
        title="Vinci la prossima decade."
        subtitle="Parla con noi. Nessun impegno, solo chiarezza."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

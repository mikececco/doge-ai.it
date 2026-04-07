"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { GUIDE, GUIDE_SECTORS } from "@/lib/guide-data";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function GuidaLandingPage() {
  const [query, setQuery] = useState("");
  const [activeSector, setActiveSector] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = GUIDE;

    if (activeSector) {
      result = result.filter((g) => g.sector === activeSector);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.sector.toLowerCase().includes(q)
      );
    }

    return result;
  }, [query, activeSector]);

  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">
              Guide
            </span>
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              Guide complete sull&rsquo;AI per la tua azienda
            </h1>
            <p className="text-body text-nero/70 mt-6 max-w-[680px] mx-auto">
              30 guide approfondite per implementare l&rsquo;AI nella tua PMI.
              Strategie pratiche, ROI concreto, settore per settore.
            </p>
            <div className="mt-8">
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-nero py-12">
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
                placeholder="Cerca una guida..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-nero/50 border border-bianco/10 pl-11 pr-4 py-2 text-sm text-bianco placeholder:text-bianco/40 focus:outline-none focus:border-giallo transition-colors"
              />
            </div>

            <p className="text-xs text-bianco/40 uppercase tracking-wider mb-2">
              Per settore
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSector(null)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  activeSector === null
                    ? "bg-giallo text-nero border-giallo"
                    : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
                }`}
              >
                Tutti ({GUIDE.length})
              </button>
              {GUIDE_SECTORS.map((sec) => {
                const count = GUIDE.filter((g) => g.sector === sec).length;
                if (count === 0) return null;
                return (
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
                    {sec} ({count})
                  </button>
                );
              })}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Results */}
      <section className="bg-bianco text-nero section-padding">
        <div className="container-site">
          <FadeInOnScroll>
            <p className="text-sm text-grigio-scuro mb-8 uppercase tracking-wider font-semibold">
              {filtered.length} guide trovate
            </p>
          </FadeInOnScroll>

          <div className="space-y-6">
            {filtered.map((guida) => (
              <FadeInOnScroll key={guida.slug}>
                <Link
                  href={`/guida/${guida.slug}`}
                  className="block border border-nero p-6 md:p-8 hover:bg-giallo/5 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-[10px] font-semibold text-giallo-hover uppercase tracking-wider">
                        {guida.sector}
                      </span>
                      <h3 className="text-lg font-bold uppercase leading-tight mt-2 mb-3 group-hover:text-giallo-hover transition-colors">
                        <span className="underline decoration-giallo decoration-[3px] underline-offset-4">
                          {guida.title}
                        </span>
                      </h3>
                      <p className="text-sm text-nero/70 leading-relaxed max-w-2xl">
                        {guida.description}
                      </p>
                      <p className="text-xs text-grigio-medio mt-3">
                        {guida.sections.length} capitoli
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-nero shrink-0">
                      Leggi la guida
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-grigio-medio py-16">
              Nessuna guida trovata per &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      <CtaFinale
        dark
        title="Pronto a implementare l'AI?"
        subtitle="Le guide sono solo l'inizio. Parliamo di come applicare l'AI nella tua azienda."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

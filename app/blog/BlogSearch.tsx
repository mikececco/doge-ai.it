"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

const CATEGORY_COLORS: Record<string, string> = {
  "AI & PMI": "bg-giallo text-nero",
  Automazione: "bg-giallo text-nero",
  Manifattura: "bg-giallo text-nero",
  Tecnologia: "bg-giallo text-nero",
  Strategia: "bg-giallo text-nero",
  Compliance: "bg-giallo text-nero",
  "Analisi Dati e Intelligenza Artificiale": "bg-giallo text-nero",
  "Ottimizzazione Flussi e Automazione Processi": "bg-giallo text-nero",
  "Marketing e Acquisizione Clienti": "bg-giallo text-nero",
  "Supporto e Relazione con il Cliente": "bg-giallo text-nero",
  "Ottimizzazione Finanziaria e Tesoreria": "bg-giallo text-nero",
  "Partnership e Canale AI": "bg-giallo text-nero",
};

function getCategoryClass(category: string) {
  return CATEGORY_COLORS[category] ?? "bg-giallo text-nero";
}

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, query, activeCategory]);

  return (
    <>
      {/* Search + Filters */}
      <div className="mb-10 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
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
            placeholder="Cerca articoli..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-nero/50 border border-bianco/10 pl-11 pr-4 py-3 text-sm text-bianco placeholder:text-bianco/40 focus:outline-none focus:border-giallo transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
              activeCategory === null
                ? "bg-giallo text-nero border-giallo"
                : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
            }`}
          >
            Tutti
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                activeCategory === cat
                  ? "bg-giallo text-nero border-giallo"
                  : "bg-transparent text-bianco/60 border-bianco/20 hover:border-giallo hover:text-bianco"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results — Dark Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full bg-nero border border-bianco/10 hover:border-giallo hover:bg-giallo transition-[background,border-color] duration-[250ms] ease-[ease] hover:-translate-y-1"
          >
            <div className="p-8 flex flex-col h-full">
              <span
                className={`self-start text-label uppercase px-2 py-1 text-xs font-semibold tracking-wider ${getCategoryClass(post.category)} group-hover:bg-nero group-hover:text-giallo transition-[background,color] duration-[250ms] ease-[ease]`}
              >
                {post.category}
              </span>
              <h2 className="mt-4 text-[22px] font-bold leading-tight text-bianco group-hover:text-nero transition-[color] duration-[250ms] ease-[ease]">
                {post.title}
              </h2>
              <p className="mt-3 text-body text-bianco/60 group-hover:text-nero/70 leading-relaxed flex-1 transition-[color] duration-[250ms] ease-[ease]">
                {post.excerpt}
              </p>
              <div className="mt-6 pt-4 border-t border-bianco/10 group-hover:border-nero/10 flex items-center justify-between transition-[border-color] duration-[250ms] ease-[ease]">
                <span className="text-sm text-bianco/40 group-hover:text-nero/50 transition-[color] duration-[250ms] ease-[ease]">{post.date}</span>
                <span className="text-sm text-bianco/40 group-hover:text-nero/50 transition-[color] duration-[250ms] ease-[ease]">
                  {post.readTime} lettura
                </span>
              </div>
              <div className="mt-4">
                <span className="text-sm font-semibold text-giallo group-hover:text-nero transition-[color] duration-[250ms] ease-[ease] inline-flex items-center gap-1">
                  Leggi l&apos;articolo
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-bianco/40 py-12">
          Nessun articolo trovato per &ldquo;{query}&rdquo;
        </p>
      )}
    </>
  );
}

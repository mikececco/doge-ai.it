"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import type { Settore } from "@/lib/settori-data";

type Props = {
  settori: Settore[];
};

export default function SettoriGrid({ settori }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="border border-bianco/20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {settori.map((settore, i) => {
          const isExpanded = expanded === settore.number;

          return (
            <div
              key={settore.number}
              className={`group relative cursor-pointer ${i < settori.length - 2 ? "border-b border-bianco/20" : ""} ${i % 2 === 0 ? "md:border-r border-bianco/20" : ""}`}
              onClick={() => {
                // Mobile: expand first, navigate on second click
                if (window.innerWidth < 768) {
                  if (!isExpanded) {
                    setExpanded(settore.number);
                    return;
                  }
                }
                // Desktop or already expanded: navigate
                router.push(`/blog/${settore.slug}`);
              }}
            >
              <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6">
                <span className="text-3xl font-bold text-bianco shrink-0">
                  {settore.number}.
                </span>
                <div className="flex-1">
                  <span className={`text-sm font-bold uppercase tracking-wide transition-colors group-hover:text-giallo ${isExpanded ? "text-giallo" : "text-bianco"}`}>
                    {settore.title}
                  </span>
                </div>
                {/* Desktop: arrow right */}
                <svg className="hidden md:block w-5 h-5 text-bianco/40 group-hover:text-giallo transition-all group-hover:translate-x-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                {/* Mobile: chevron that rotates */}
                <svg
                  className={`md:hidden w-5 h-5 shrink-0 transition-all duration-300 ${isExpanded ? "text-giallo rotate-90" : "text-bianco/40"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>

              {/* Use cases: always visible on desktop, accordion on mobile */}
              <div className={`${isExpanded ? "block" : "hidden"} md:block px-6 pb-5 md:px-8 md:pb-6 pl-16 md:pl-20`}>
                <ul className="space-y-1">
                  {settore.useCases.map((uc, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-bianco/60 group-hover:text-bianco/80 transition-colors">
                      <span className="text-giallo mt-0.5 shrink-0">&rarr;</span>
                      {uc}
                    </li>
                  ))}
                </ul>
                {/* Mobile-only article link */}
                <Link
                  href={`/blog/${settore.slug}`}
                  className="md:hidden inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-giallo mt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  Leggi l&rsquo;articolo
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

type Sector = {
  title: string;
  problem: string;
  bullets: string[];
};

type SectorOverlayProps = {
  sectors: Sector[];
};

function SectorCard({ sector }: { sector: Sector }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<(HTMLLIElement | null)[]>([]);
  const isAnimating = useRef(false);

  const handleMouseEnter = useCallback(() => {
    if (!overlayRef.current || isAnimating.current) return;
    isAnimating.current = true;

    const overlay = overlayRef.current;
    overlay.style.display = "block";

    gsap.killTweensOf([overlay, ...bulletsRef.current.filter(Boolean)]);

    gsap.set(overlay, { height: 0, opacity: 1 });
    gsap.set(bulletsRef.current.filter(Boolean), { opacity: 0, y: 10 });

    if (containerRef.current) {
      containerRef.current.style.zIndex = "100";
    }

    gsap.to(overlay, {
      height: "auto",
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    gsap.to(bulletsRef.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.08,
      delay: 0.15,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!overlayRef.current) return;
    isAnimating.current = true;

    const overlay = overlayRef.current;
    gsap.killTweensOf([overlay, ...bulletsRef.current.filter(Boolean)]);

    gsap.to(overlay, {
      height: 0,
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => {
        overlay.style.display = "none";
        if (containerRef.current) {
          containerRef.current.style.zIndex = "";
        }
        isAnimating.current = false;
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static card */}
      <div className="bg-bianco border border-[#E8E8E8] p-7 transition-colors duration-200 hover:border-l-[3px] hover:border-l-giallo cursor-pointer">
        <h3 className="text-lg font-bold">{sector.title}</h3>
        <p className="text-body text-grigio-scuro mt-2 italic">
          &ldquo;{sector.problem}&rdquo;
        </p>
      </div>

      {/* Overlay expansion (positioned below, overlaying other cards) */}
      <div
        ref={overlayRef}
        className="absolute top-full left-0 right-0 overflow-hidden bg-nero text-bianco shadow-lg"
        style={{ display: "none", height: 0, zIndex: 100 }}
      >
        <div className="p-6">
          <ul className="space-y-3">
            {sector.bullets.map((bullet, j) => (
              <li
                key={j}
                ref={(el) => { bulletsRef.current[j] = el; }}
                className="flex items-start gap-3 text-sm text-bianco/80"
              >
                <span className="text-giallo mt-0.5 shrink-0">&rarr;</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SectorOverlay({ sectors }: SectorOverlayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectors.map((sector, i) => (
        <SectorCard key={i} sector={sector} />
      ))}
    </div>
  );
}

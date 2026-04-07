"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShieldAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<SVGPathElement>(null);
  const checkRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Shield outline draws in
      if (shieldRef.current) {
        const length = shieldRef.current.getTotalLength();
        gsap.set(shieldRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
        });

        tl.to(shieldRef.current, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
        });

        tl.to(
          shieldRef.current,
          {
            fill: "#1A1A1A",
            duration: 0.6,
            ease: "power2.in",
          },
          "-=0.3"
        );
      }

      // Checkmark draws in
      if (checkRef.current) {
        const checkLength = checkRef.current.getTotalLength();
        gsap.set(checkRef.current, {
          strokeDasharray: checkLength,
          strokeDashoffset: checkLength,
        });

        tl.to(
          checkRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }

      // Pulse
      tl.to(containerRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center w-full h-full">
      <svg
        width="120"
        height="140"
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield */}
        <path
          ref={shieldRef}
          d="M60 10L15 35V65C15 95 35 120 60 130C85 120 105 95 105 65V35L60 10Z"
          stroke="#1A1A1A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Checkmark inside shield */}
        <path
          ref={checkRef}
          d="M40 70L55 85L80 55"
          stroke="#FDE732"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

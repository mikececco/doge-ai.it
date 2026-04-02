"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RocketAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<SVGGElement>(null);
  const trail1Ref = useRef<SVGLineElement>(null);
  const trail2Ref = useRef<SVGLineElement>(null);
  const trail3Ref = useRef<SVGLineElement>(null);
  const particle1Ref = useRef<SVGCircleElement>(null);
  const particle2Ref = useRef<SVGCircleElement>(null);
  const particle3Ref = useRef<SVGCircleElement>(null);

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

      // Rocket starts below, launches up
      gsap.set(rocketRef.current, { y: 60, opacity: 0 });
      gsap.set([trail1Ref.current, trail2Ref.current, trail3Ref.current], {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "top center",
      });
      gsap.set(
        [particle1Ref.current, particle2Ref.current, particle3Ref.current],
        { opacity: 0, scale: 0 }
      );

      // Launch sequence
      tl.to(rocketRef.current, {
        y: -10,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      // Trail appears
      tl.to(
        [trail1Ref.current, trail2Ref.current, trail3Ref.current],
        {
          opacity: 0.6,
          scaleY: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
        },
        "-=0.4"
      );

      // Particles scatter
      tl.to(
        particle1Ref.current,
        { opacity: 1, scale: 1, x: -20, y: 30, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
      tl.to(
        particle2Ref.current,
        { opacity: 1, scale: 1, x: 15, y: 25, duration: 0.6, ease: "power2.out" },
        "-=0.5"
      );
      tl.to(
        particle3Ref.current,
        { opacity: 1, scale: 1, x: 5, y: 35, duration: 0.6, ease: "power2.out" },
        "-=0.5"
      );

      // Particles fade
      tl.to(
        [particle1Ref.current, particle2Ref.current, particle3Ref.current],
        { opacity: 0, duration: 0.4 },
        "+=0.2"
      );

      // Subtle hover float
      tl.to(rocketRef.current, {
        y: -15,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
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
        {/* Trail lines */}
        <line ref={trail1Ref} x1="55" y1="95" x2="55" y2="130" stroke="#1A1A1A" strokeWidth="2" opacity="0.3" />
        <line ref={trail2Ref} x1="60" y1="100" x2="60" y2="140" stroke="#1A1A1A" strokeWidth="3" opacity="0.4" />
        <line ref={trail3Ref} x1="65" y1="95" x2="65" y2="130" stroke="#1A1A1A" strokeWidth="2" opacity="0.3" />

        {/* Particles */}
        <circle ref={particle1Ref} cx="55" cy="100" r="3" fill="#FFE500" />
        <circle ref={particle2Ref} cx="65" cy="100" r="2" fill="#1A1A1A" />
        <circle ref={particle3Ref} cx="60" cy="105" r="2.5" fill="#FFE500" />

        {/* Rocket */}
        <g ref={rocketRef}>
          {/* Body */}
          <path d="M60 15L45 55V80H75V55L60 15Z" fill="#1A1A1A" />
          {/* Nose */}
          <path d="M60 15L52 40H68L60 15Z" fill="#FFE500" />
          {/* Window */}
          <circle cx="60" cy="52" r="6" fill="#FFE500" />
          <circle cx="60" cy="52" r="3" fill="#1A1A1A" />
          {/* Fins */}
          <path d="M45 65L35 80H45V65Z" fill="#1A1A1A" />
          <path d="M75 65L85 80H75V65Z" fill="#1A1A1A" />
          {/* Flame */}
          <path d="M50 80L55 95L60 85L65 95L70 80" fill="#FFE500" />
        </g>
      </svg>
    </div>
  );
}

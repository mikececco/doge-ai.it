"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TimelineItem = {
  title: string;
  description: string;
};

type TimelineAnimatedProps = {
  items: TimelineItem[];
};

export default function TimelineAnimated({ items }: TimelineAnimatedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !lineRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          once: true,
        },
      });

      // Line draws from left to right
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          transformOrigin: "left center",
        }
      );

      // Each dot pops in sequentially
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        tl.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)",
          },
          `-=${0.8 - i * 0.2}`
        );
      });

      // Each content block fades up after its dot
      contentsRef.current.forEach((content, i) => {
        if (!content) return;
        tl.fromTo(
          content,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          `-=${0.6 - i * 0.1}`
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={containerRef} className="relative w-full py-12">
      {/* Horizontal line */}
      <div className="relative mx-auto">
        <div
          ref={lineRef}
          className="absolute top-0 left-0 right-0 h-[2px] bg-giallo origin-left"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Dots and content */}
        <div className="flex justify-between relative pt-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center flex-1 px-2"
            >
              {/* Dot */}
              <div
                ref={(el) => { dotsRef.current[i] = el; }}
                className="w-4 h-4 bg-giallo rounded-full -mt-[7px] relative z-10 shrink-0"
                style={{ transform: "scale(0)" }}
              />

              {/* Content */}
              <div
                ref={(el) => { contentsRef.current[i] = el; }}
                className="mt-6 opacity-0"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-sm opacity-70 mt-2 max-w-[200px] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

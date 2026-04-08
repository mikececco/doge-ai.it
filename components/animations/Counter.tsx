"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { DURATION } from "@/lib/animations";

type CounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
};

export default function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = DURATION.counter,
  className = "",
  suffixClassName = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    const durationMs = duration * 1000;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={`text-metric tabular-nums ${className}`}>
      {prefix}{value}{suffixClassName ? <span className={suffixClassName}>{suffix}</span> : suffix}
    </span>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DURATION, EASE } from "@/lib/animations";

type AnimatedUnderlineProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedUnderline({
  children,
  className = "",
}: AnimatedUnderlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={`relative inline ${className}`}>
      <span className="font-bold">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-[3px] bg-giallo origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: DURATION.slow, ease: EASE, delay: 0.3 }}
      />
    </span>
  );
}

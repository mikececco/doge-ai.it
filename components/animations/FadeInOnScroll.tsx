"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type FadeInOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
};

export default function FadeInOnScroll({
  children,
  className = "",
  stagger = false,
}: FadeInOnScrollProps) {
  if (stagger) {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

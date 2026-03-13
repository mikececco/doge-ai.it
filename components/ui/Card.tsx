"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  dark?: boolean;
  highlight?: boolean;
};

export default function Card({
  children,
  className = "",
  index = 0,
  dark = false,
  highlight = false,
}: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className={`
        rounded-card p-7 transition-all duration-300
        ${dark
          ? "bg-nero/80 text-bianco border border-white/10"
          : "bg-bianco shadow-card"
        }
        ${highlight
          ? "bg-giallo text-nero border-none"
          : ""
        }
        hover:shadow-card-hover hover:-translate-y-0.5
        hover:border-l-[3px] hover:border-l-giallo
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

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
        p-7 transition-all duration-200
        ${dark
          ? "bg-nero text-bianco border border-white/10"
          : "bg-bianco border border-[#E8E8E8]"
        }
        ${highlight
          ? "bg-giallo text-nero border-none"
          : ""
        }
        hover:-translate-y-1
        hover:border-l-[3px] hover:border-l-giallo
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

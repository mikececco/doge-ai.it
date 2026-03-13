"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type NumberedCardProps = {
  number: string;
  title: string;
  description: string;
  index?: number;
};

export default function NumberedCard({
  number,
  title,
  description,
  index = 0,
}: NumberedCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="relative"
    >
      <span className="text-[5rem] font-bold leading-none text-giallo/20 select-none">
        {number}
      </span>
      <h3 className="text-xl font-bold mt-[-1rem] mb-3">{title}</h3>
      <p className="text-body text-grigio-scuro">{description}</p>
    </motion.div>
  );
}

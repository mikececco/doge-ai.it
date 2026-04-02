"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

const WORD_EASE = [0.16, 1, 0.3, 1] as const;
const WORD_DURATION = 0.4;
const WORD_STAGGER = 0.1;
const INITIAL_DELAY = 0.2;

export default function TextReveal({
  text,
  className = "",
  as: Tag = "h1",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: WORD_DURATION,
              delay: INITIAL_DELAY + i * WORD_STAGGER,
              ease: WORD_EASE,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

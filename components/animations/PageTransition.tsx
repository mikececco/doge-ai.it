"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Yellow sweep overlay */}
        <motion.div
          className="fixed inset-0 z-[9999] bg-giallo pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1], // power3.inOut equivalent
          }}
        />

        {/* Page content with fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.4,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

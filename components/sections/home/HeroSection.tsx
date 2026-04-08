"use client";

import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeInUp, DURATION, EASE } from "@/lib/animations";
import { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const skylineY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme="giallo"
      className="relative bg-giallo min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Venice skyline at bottom - parallax on desktop */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={isDesktop ? { y: skylineY } : undefined}
      >
        <Image
          src="/hero/landscape venezia (no-bg).png"
          alt="Venice skyline"
          width={2400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="container-site relative z-10 text-center pt-16 pb-32 md:pb-40 !px-4 md:!px-6 lg:!px-8">
        <motion.span
          className="text-label uppercase text-nero tracking-widest"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.normal, ease: EASE }}
        >
          Trasformazione AI
        </motion.span>
        <TextReveal
          text={"Mentre tutti ne\u00A0parlano.\nNoi la\u00A0implementiamo."}
          as="h1"
          className="text-hero-home text-nero mx-auto uppercase"
        />

        <motion.p
          className="text-nero text-subheadline mt-6 max-w-[640px] mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Definiamo e realizziamo la strategia AI della tua azienda<span className="hidden md:inline"><br /></span>{" "}alla
          velocit&agrave; di una startup.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.normal, delay: 0.8, ease: EASE }}
        >
          <Button variant="dark" href="/contatti" arrow className="min-w-full sm:min-w-[220px] justify-center">
            Parla con noi
          </Button>
          <Button variant="outline" href="/metodo" arrow className="min-w-full sm:min-w-[220px] justify-center">
            Il Codice del Doge
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

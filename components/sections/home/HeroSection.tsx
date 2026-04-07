"use client";

import TextReveal from "@/components/animations/TextReveal";
import Label from "@/components/ui/Label";
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

  // Parallax: skyline moves at 0.4x scroll speed (moves up slower)
  const skylineY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-giallo min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Venice skyline at bottom - parallax on desktop */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-30"
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

      {/* Content - upper half */}
      <div className="container-site relative z-10 text-center pt-24 pb-40 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.fast, ease: EASE }}
        >
          <Label className="text-nero/60">Trasformazione AI</Label>
        </motion.div>

        <TextReveal
          text={"Mentre tutti ne parlano.\nNoi la implementiamo."}
          as="h1"
          className="text-hero text-nero mt-6 max-w-[1100px] mx-auto"
        />

        <motion.p
          className="text-nero/60 text-subheadline mt-6 max-w-[560px] mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Definiamo e realizziamo la strategia AI della tua azienda alla
          velocit&agrave; di una startup.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.normal, delay: 0.8, ease: EASE }}
        >
          <Button variant="dark" href="/contatti">
            Parla con noi
          </Button>
          <Button variant="outline" href="/metodo">
            Il Codice del Doge
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

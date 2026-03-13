"use client";

import TextReveal from "@/components/animations/TextReveal";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import VeniceSkyline from "@/components/icons/VeniceSkyline";
import { motion } from "framer-motion";
import { fadeInUp, DURATION, EASE } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative bg-nero min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Venice skyline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <VeniceSkyline className="w-full text-bianco/20" />
      </div>

      {/* Content — upper half */}
      <div className="container-site relative z-10 text-center pt-24 pb-40 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.fast, ease: EASE }}
        >
          <Label className="text-grigio-medio">Trasformazione AI</Label>
        </motion.div>

        <TextReveal
          text="Mentre tutti ne parlano. Noi la implementiamo."
          as="h1"
          className="text-hero text-bianco mt-6 max-w-[900px] mx-auto"
        />

        <motion.p
          className="text-bianco/60 text-subheadline mt-6 max-w-[560px] mx-auto"
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
          <Button variant="primary" href="/contatti">
            Parla con noi &rarr;
          </Button>
          <Button variant="secondary" href="/metodo">
            <span className="text-bianco hover:text-giallo transition-colors">
              Il Codice del Doge
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import AnimatedUnderline from "@/components/animations/AnimatedUnderline";

const services = [
  {
    title: "Strategia",
    body: "Non vendiamo slide. Identifichiamo i casi d’uso AI con il ROI più alto per la tua azienda e costruiamo la roadmap per arrivarci.",
  },
  {
    title: "Implementazione",
    body: "Sviluppiamo e mettiamo in produzione agenti AI operativi, automazioni, integrazioni con i tuoi sistemi, in 30–60 giorni.",
  },
  {
    title: "Risultati",
    body: "Ogni progetto parte da un business case chiaro: costo attuale, obiettivo post-AI, ROI atteso. Nessun progetto inizia senza numeri.",
  },
];

export default function CosaFacciamo() {
  return (
    <SectionWrapper bg="white" id="cosa-facciamo">
      <FadeInOnScroll>
        <h2 className="text-section max-w-[700px]">
          Il Doge di Venezia accompagna la tua azienda verso un modello
          AI-first. Noi la{" "}
          <AnimatedUnderline>implementiamo</AnimatedUnderline>.
        </h2>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {services.map((service, i) => (
          <Card
            key={i}
            index={i}
            className="bg-grigio-chiaro !shadow-none"
          >
            <h3 className="text-xl font-bold text-nero mb-3">
              {service.title}
            </h3>
            <p className="text-grigio-scuro text-body leading-relaxed">
              {service.body}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

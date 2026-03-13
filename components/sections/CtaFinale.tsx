"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

type CtaFinaleProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  dark?: boolean;
};

export default function CtaFinale({
  title = "Vinci la prossima decade.",
  subtitle = "Parla con noi. Nessun impegno, solo chiarezza.",
  buttonText = "Prenota una call",
  buttonHref = "/contatti",
  dark = false,
}: CtaFinaleProps) {
  return (
    <SectionWrapper bg={dark ? "dark" : "white"}>
      <FadeInOnScroll className="text-center max-w-2xl mx-auto">
        <h2 className="text-section">{title}</h2>
        <p className={`text-subheadline mt-4 ${dark ? "text-bianco/70" : "text-grigio-scuro"}`}>
          {subtitle}
        </p>
        <div className="mt-8">
          <Button href={buttonHref}>{buttonText}</Button>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}

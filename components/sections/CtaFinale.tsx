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
  if (dark) {
    return (
      <section className="relative bg-nero text-bianco py-[120px] overflow-hidden">
        {/* Venice canal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-nero/90 via-nero/70 to-nero/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,40,50,0.8)_0%,_transparent_70%)]" />
        <div className="container-site relative z-10">
          <FadeInOnScroll className="text-center max-w-2xl mx-auto">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-bianco">
              {title}
            </h2>
            <p className="text-subheadline mt-4 text-bianco/70">
              {subtitle}
            </p>
            <div className="mt-8">
              <Button href={buttonHref}>{buttonText}</Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    );
  }

  return (
    <SectionWrapper bg="white">
      <FadeInOnScroll className="text-center max-w-2xl mx-auto">
        <h2 className="text-section">{title}</h2>
        <p className="text-subheadline mt-4 text-grigio-scuro">
          {subtitle}
        </p>
        <div className="mt-8">
          <Button href={buttonHref}>{buttonText}</Button>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}

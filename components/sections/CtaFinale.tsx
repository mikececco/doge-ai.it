"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

type CtaFinaleProps = {
  title?: string;
  subtitle?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  dark?: boolean;
  giallo?: boolean;
  veniceImage?: boolean;
};

export default function CtaFinale({
  title = "Vinci la prossima decade.",
  subtitle = "Parla con noi. Nessun impegno, solo chiarezza.",
  buttonText = "Prenota una call",
  buttonHref = "/contatti",
  dark = false,
  giallo = false,
  veniceImage = false,
}: CtaFinaleProps) {
  if (veniceImage) {
    return (
      <section data-navbar-theme="dark" className="relative bg-nero text-bianco md:min-h-screen flex items-center overflow-hidden">
        {/* Venice B&W full background */}
        <div className="absolute inset-0">
          <Image
            src="/hero/venice-canal.jpeg"
            alt=""
            fill
            className="object-cover object-top opacity-50"
          />
        </div>
        {/* Dark overlay + gradient that fades to footer black */}
        <div className="absolute inset-0 bg-gradient-to-b from-nero/70 via-nero/50 to-nero" />
        <div className="container-site relative z-10 py-24 md:py-32">
          <FadeInOnScroll className="text-center">
            <Image
              src="/icon/logoY-noBG.png"
              alt="Doge"
              width={48}
              height={48}
              className="mx-auto mb-6"
            />
            <h2 className="text-hero uppercase text-giallo">
              {title}
            </h2>
            <p className="text-subheadline mt-4 text-bianco/70 max-w-[700px] mx-auto">
              {subtitle}
            </p>
            <div className="mt-8">
              <Button href={buttonHref} arrow>{buttonText}</Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    );
  }

  if (giallo) {
    return (
      <SectionWrapper bg="giallo">
        <FadeInOnScroll className="text-center max-w-2xl mx-auto">
          <h2 className="text-hero uppercase text-nero">{title}</h2>
          <p className="text-subheadline mt-4 text-nero/70">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button variant="dark" href={buttonHref} arrow>{buttonText}</Button>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>
    );
  }

  if (dark) {
    return (
      <section data-navbar-theme="dark" className="relative bg-nero text-bianco py-16 md:py-[120px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nero/90 via-nero/70 to-nero/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,40,50,0.8)_0%,_transparent_70%)]" />
        <div className="container-site relative z-10">
          <FadeInOnScroll className="text-center max-w-2xl mx-auto">
            <h2 className="text-hero uppercase text-bianco">
              {title}
            </h2>
            <p className="text-subheadline mt-4 text-bianco/70">
              {subtitle}
            </p>
            <div className="mt-8">
              <Button href={buttonHref} arrow>{buttonText}</Button>
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
          <Button href={buttonHref} arrow>{buttonText}</Button>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}

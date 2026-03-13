"use client";

import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

type HeroPageProps = {
  label: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  dark?: boolean;
};

export default function HeroPage({
  label,
  title,
  subtitle,
  ctaText,
  ctaHref,
  dark = false,
}: HeroPageProps) {
  return (
    <section
      className={`pt-32 pb-20 ${dark ? "bg-nero text-bianco" : "bg-bianco text-nero"}`}
    >
      <div className="container-site">
        <Label className={dark ? "text-bianco/50" : ""}>{label}</Label>
        <TextReveal
          text={title}
          as="h1"
          className="text-hero mt-4 max-w-4xl"
        />
        {subtitle && (
          <FadeInOnScroll>
            <p className={`text-subheadline mt-6 max-w-2xl ${dark ? "text-bianco/70" : "text-grigio-scuro"}`}>
              {subtitle}
            </p>
          </FadeInOnScroll>
        )}
        {ctaText && ctaHref && (
          <FadeInOnScroll className="mt-8">
            <Button href={ctaHref}>{ctaText}</Button>
          </FadeInOnScroll>
        )}
      </div>
    </section>
  );
}

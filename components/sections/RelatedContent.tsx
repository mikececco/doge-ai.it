import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

type RelatedItem = {
  href: string;
  title: string;
  subtitle?: string;
  meta?: string;
};

type RelatedContentProps = {
  label: string;
  items: RelatedItem[];
  variant: "cards" | "links";
  bg?: "white" | "light";
};

export default function RelatedContent({
  label,
  items,
  variant,
  bg = "white",
}: RelatedContentProps) {
  if (items.length === 0) return null;

  const bgClass = bg === "light" ? "bg-grigio-chiaro" : "bg-bianco";

  if (variant === "links") {
    return (
      <section className={`${bgClass} py-20`}>
        <div className="container-site">
          <FadeInOnScroll>
            <Label>{label}</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-8 flex flex-wrap gap-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 border border-grigio-chiaro bg-bianco px-5 py-3 text-sm font-semibold text-nero hover:border-nero transition-colors"
                >
                  {item.title}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    );
  }

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container-site">
        <FadeInOnScroll>
          <Label>{label}</Label>
        </FadeInOnScroll>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <FadeInOnScroll key={item.href}>
              <Link
                href={item.href}
                className="group bg-bianco border border-grigio-chiaro hover:border-nero transition-colors p-6 flex flex-col h-full"
              >
                {item.subtitle && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-grigio-medio">
                    {item.subtitle}
                  </span>
                )}
                <h3 className="mt-2 text-base font-bold text-nero leading-snug group-hover:text-grigio-scuro transition-colors">
                  {item.title}
                </h3>
                {item.meta && (
                  <div className="mt-4 text-sm text-grigio-medio">
                    {item.meta}
                  </div>
                )}
                <span className="mt-3 text-sm font-semibold text-nero group-hover:text-giallo-hover transition-colors inline-flex items-center gap-1">
                  Leggi
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

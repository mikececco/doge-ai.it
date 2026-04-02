import Link from "next/link";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

type RisorsaLink = {
  href: string;
  label: string;
};

type RisorseCorrelateProps = {
  links: RisorsaLink[];
  bg?: "white" | "light";
};

export default function RisorseCorrelate({
  links,
  bg = "white",
}: RisorseCorrelateProps) {
  if (links.length === 0) return null;

  const bgClass = bg === "light" ? "bg-grigio-chiaro" : "bg-bianco";

  return (
    <section className={`${bgClass} pb-16`}>
      <div className="container-site">
        <FadeInOnScroll>
          <div className="border-t border-nero/10 pt-10">
            <h3 className="text-lg font-bold text-nero mb-5">
              Risorse correlate
            </h3>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-nero underline decoration-giallo decoration-2 underline-offset-4 hover:text-giallo-hover transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { BLOG_POSTS } from "@/lib/blog-data";
import BlogSearch from "./BlogSearch";

export const metadata: Metadata = {
  title: "Blog — Insights AI per le PMI italiane",
  description:
    "Articoli, analisi e guide pratiche sull'adozione dell'AI nelle PMI italiane. Casi concreti, numeri reali, zero teoria inutile.",
  openGraph: {
    title: "Blog — Insights AI per le PMI italiane",
    description:
      "Articoli, analisi e guide pratiche sull'adozione dell'AI nelle PMI italiane. Casi concreti, numeri reali, zero teoria inutile.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nero text-bianco pt-40 pb-12">
        <div className="container-site">
          <FadeInOnScroll>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] max-w-3xl uppercase">
              Insights AI per le PMI italiane
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-lg text-bianco/60 mt-6 max-w-[640px]">
              Casi concreti, numeri reali, zero teoria inutile. Come
              l&apos;intelligenza artificiale sta cambiando il modo di lavorare
              delle PMI italiane.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Articles Grid — Dark background */}
      <section className="bg-nero py-12 pb-20">
        <div className="container-site">
          <BlogSearch posts={BLOG_POSTS} />
        </div>
      </section>

      {/* CTA — Yellow style */}
      <CtaFinale
        title="Vinci la prossima decade."
        subtitle="Parla con noi. Nessun impegno, solo chiarezza."
        buttonText="Contattaci &rarr;"
        buttonHref="/contatti"
      />
    </>
  );
}

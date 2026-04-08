import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import RelatedContent from "@/components/sections/RelatedContent";
import { SOLUZIONI_PAGES } from "@/lib/soluzioni-data";
import {
  getLinksForSoluzione,
  getStrategicLinksForSoluzione,
} from "@/lib/internal-links";
import RisorseCorrelate from "@/components/sections/RisorseCorrelate";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SOLUZIONI_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = SOLUZIONI_PAGES.find((p) => p.slug === slug);
  if (!page) return {};

  const canonicalUrl = `${BASE_URL}/soluzioni/${page.slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "DOGE di Venezia",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
    },
  };
}

export default async function SoluzioneSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = SOLUZIONI_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const canonicalUrl = `${BASE_URL}/soluzioni/${page.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "Organization",
      name: "DOGE di Venezia",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    serviceType: page.targetQuery,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-nero text-bianco pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label className="text-giallo">SOLUZIONI</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-3xl">{page.h1}</h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-bianco/70 mt-6 max-w-[640px] leading-relaxed">
              {page.intro}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-10">
              <Button variant="primary" size="md" href="/contatti">
                Parla con noi →
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Perché funziona</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.benefits.map((benefit) => (
              <FadeInOnScroll key={benefit.title}>
                <div className="border border-grigio-chiaro p-8 h-full">
                  <h3 className="text-xl font-bold text-nero mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Casi d&apos;uso concreti</h2>
          </FadeInOnScroll>
          <div className="max-w-3xl">
            {page.useCases.map((useCase, index) => (
              <FadeInOnScroll key={index}>
                <div className="flex items-start gap-4 py-5 border-b border-grigio-medio last:border-0">
                  <span className="flex-shrink-0 w-8 h-8 bg-giallo text-nero font-bold text-sm flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body text-nero leading-relaxed pt-1">{useCase}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Domande frequenti</h2>
          </FadeInOnScroll>
          <div className="max-w-3xl space-y-8">
            {page.faq.map((item) => (
              <FadeInOnScroll key={item.question}>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    {item.question}
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <RelatedContent
        label="ARTICOLI CORRELATI"
        bg="light"
        variant="cards"
        items={getLinksForSoluzione(page.slug).blogPosts.map((post) => ({
          href: `/blog/${post.slug}`,
          title: post.title,
          subtitle: post.category,
          meta: `${post.readTime} lettura`,
        }))}
      />

      {/* Related Cities */}
      <RelatedContent
        label="CONSULENZA AI SUL TERRITORIO"
        bg="white"
        variant="links"
        items={getLinksForSoluzione(page.slug).cities.map((city) => ({
          href: `/consulenza-ai/${city.slug}`,
          title: `Consulenza AI a ${city.name}`,
        }))}
      />

      {/* Risorse Correlate */}
      <RisorseCorrelate
        links={getStrategicLinksForSoluzione()}
      />

      {/* CTA Finale */}
      <CtaFinale
        dark
        title="Pronto a portare l'AI nella tua azienda?"
        subtitle="La prima conversazione è gratuita. Nessun impegno, solo chiarezza."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

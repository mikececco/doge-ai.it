import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import RisorseCorrelate from "@/components/sections/RisorseCorrelate";
import { CASI_STUDIO } from "@/lib/casi-studio-data";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return CASI_STUDIO.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = CASI_STUDIO.find((c) => c.slug === params.slug);
  if (!cs) return {};

  const canonicalUrl = `${BASE_URL}/casi-studio/${params.slug}`;
  const topResult = cs.results[0];
  const title = `${cs.title} | Caso Studio AI - DOGE di Venezia`;
  const description = `${cs.company}. Risultato chiave: ${topResult.metric} ${topResult.value}. Scopri sfida, soluzione AI, risultati e investimento.`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      siteName: "DOGE di Venezia",
      images: [
        {
          url: "/icon/logoB-noBG.png",
          width: 512,
          height: 512,
          alt: "il Doge di Venezia",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function CasoStudioPage({ params }: Props) {
  const cs = CASI_STUDIO.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const canonicalUrl = `${BASE_URL}/casi-studio/${cs.slug}`;

  // Related case studies: same sector first, then others
  const related = CASI_STUDIO.filter((c) => c.slug !== cs.slug)
    .sort((a, b) => {
      const aMatch = a.sector === cs.sector ? 1 : 0;
      const bMatch = b.sector === cs.sector ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.challenge.slice(0, 200),
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: "DOGE di Venezia",
    },
    publisher: {
      "@type": "Organization",
      name: "DOGE di Venezia",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon/logoB-noBG.png`,
      },
    },
    about: {
      "@type": "Thing",
      name: cs.sector,
    },
  };

  const strategicLinks = [
    { href: "/casi-duso", label: "Tutti i casi d'uso AI per PMI" },
    {
      href: "/incentivi",
      label: "Incentivi per finanziare il tuo progetto AI",
    },
    { href: "/metodo", label: "Il nostro metodo di lavoro" },
    { href: "/contatti", label: "Parla con un esperto" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-nero text-bianco pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nero/90 via-nero/70 to-nero/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,40,50,0.8)_0%,_transparent_70%)]" />
        <div className="container-site relative z-10">
          <FadeInOnScroll>
            <Label className="text-bianco/40">
              CASO STUDIO &middot; {cs.sector.toUpperCase()}
            </Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl">{cs.title}</h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-bianco/60 mt-6 max-w-[640px] leading-relaxed">
              {cs.company}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-wrap gap-2 mt-8">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-bianco/60 bg-bianco/10 px-4 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Key Results Bar */}
      <section className="bg-giallo py-8">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cs.results.slice(0, 5).map((r) => (
              <div key={r.metric} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-nero">{r.value}</p>
                <p className="text-xs text-nero/60 mt-1">{r.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <Label className="text-grigio-medio">LA SFIDA</Label>
              <h2 className="text-section text-nero mt-4 mb-8">
                Il problema da risolvere
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-body text-grigio-scuro leading-relaxed text-lg">
                {cs.challenge}
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <Label className="text-grigio-medio">LA SOLUZIONE</Label>
              <h2 className="text-section text-nero mt-4 mb-8">
                Cosa abbiamo implementato
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-body text-grigio-scuro leading-relaxed text-lg">
                {cs.solution}
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="bg-bianco py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <Label className="text-grigio-medio">I RISULTATI</Label>
              <h2 className="text-section text-nero mt-4 mb-12">
                Impatto misurato
              </h2>
            </FadeInOnScroll>
            <div className="space-y-0">
              {cs.results.map((r, index) => (
                <FadeInOnScroll key={r.metric}>
                  <div className="flex items-start justify-between gap-6 py-5 border-b border-grigio-chiaro last:border-0">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-giallo text-nero font-bold text-sm flex items-center justify-center">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-body text-nero pt-1">{r.metric}</p>
                    </div>
                    <p className="text-lg font-bold text-nero whitespace-nowrap pt-1">
                      {r.value}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Investment */}
      <section className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    Timeline
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {cs.timeline}
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className="border-l-4 border-giallo pl-6">
                  <h3 className="text-lg font-bold text-nero mb-2">
                    Investimento
                  </h3>
                  <p className="text-body text-grigio-scuro leading-relaxed">
                    {cs.investment}
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {related.length > 0 && (
        <section className="bg-bianco py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <Label className="text-grigio-medio">ALTRI CASI STUDIO</Label>
              <h2 className="text-section text-nero mt-4 mb-12">
                Progetti simili
              </h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <FadeInOnScroll key={rel.slug}>
                  <Link
                    href={`/casi-studio/${rel.slug}`}
                    className="block border border-grigio-chiaro p-8 h-full hover:border-giallo transition-colors group"
                  >
                    <span className="text-xs font-medium text-grigio-medio uppercase tracking-wider">
                      {rel.sector}
                    </span>
                    <h3 className="text-lg font-bold text-nero mt-2 mb-3 group-hover:text-giallo/80 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-grigio-scuro line-clamp-2">
                      {rel.company}
                    </p>
                    <div className="mt-4 border-t border-grigio-chiaro pt-3">
                      <div className="flex justify-between">
                        <span className="text-xs text-grigio-scuro">
                          {rel.results[0].metric}
                        </span>
                        <span className="text-xs font-bold text-nero">
                          {rel.results[0].value}
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll>
              <div className="mt-8 text-center">
                <Link
                  href="/casi-studio"
                  className="text-sm font-semibold text-nero hover:text-giallo-hover transition-colors underline underline-offset-4"
                >
                  Vedi tutti i casi studio →
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* Risorse Correlate */}
      <RisorseCorrelate links={strategicLinks} bg="light" />

      {/* CTA Finale */}
      <CtaFinale
        dark
        title="Vuoi risultati simili nella tua azienda?"
        subtitle="Analizziamo gratuitamente i tuoi processi e ti mostriamo dove l'AI puo generare il massimo impatto."
        buttonText="Parla con noi →"
        buttonHref="/contatti"
      />
    </>
  );
}

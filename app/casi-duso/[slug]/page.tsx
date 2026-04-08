import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CtaFinale from "@/components/sections/CtaFinale";
import { CASI_DUSO } from "@/lib/casi-duso-data";
import type { CasoDuso } from "@/lib/casi-duso-data";
import Button from "@/components/ui/Button";
import RisorseCorrelate from "@/components/sections/RisorseCorrelate";
import { getStrategicLinksForCasoDuso } from "@/lib/internal-links";

const BASE_URL = "https://doge-ai.it";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ─── Static params for all 65 use cases ─── */

export function generateStaticParams() {
  return CASI_DUSO.map((caso) => ({ slug: caso.id }));
}

/* ─── Dynamic metadata ─── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caso = CASI_DUSO.find((c) => c.id === slug);
  if (!caso) return {};

  const canonicalUrl = `${BASE_URL}/casi-duso/${caso.id}`;
  const title = `${caso.title} - AI per PMI | IL DOGE DI VENEZIA`;
  const description = caso.description.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "IL DOGE DI VENEZIA",
      images: [
        {
          url: "/icon/logoB-noBG.png",
          width: 512,
          height: 512,
          alt: "IL DOGE DI VENEZIA",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/* ─── Benefits generator ─── */

function getBenefits(caso: CasoDuso) {
  return [
    {
      number: "01",
      title: "ROI Misurabile",
      description: `Implementare "${caso.title.toLowerCase()}" genera un ritorno sull'investimento concreto e tracciabile, con metriche chiare fin dal primo mese di utilizzo nel reparto ${caso.department}.`,
    },
    {
      number: "02",
      title: "Efficienza Operativa",
      description: `Automatizzando i processi legati a ${caso.tags[0]?.replace("#", "").toLowerCase() || "questo caso d'uso"}, il tuo team risparmia ore ogni settimana su attivita ripetitive e si concentra su lavoro ad alto valore.`,
    },
    {
      number: "03",
      title: "Scalabilita",
      description: `La soluzione cresce con la tua azienda: pensata per il settore ${caso.sector}, si adatta a volumi crescenti senza richiedere risorse aggiuntive proporzionali.`,
    },
  ];
}

/* ─── Related use cases ─── */

function getRelated(caso: CasoDuso): CasoDuso[] {
  // Prefer same department, then same sector, exclude self
  const sameDept = CASI_DUSO.filter(
    (c) => c.id !== caso.id && c.department === caso.department
  );
  const sameSector = CASI_DUSO.filter(
    (c) => c.id !== caso.id && c.sector === caso.sector && c.department !== caso.department
  );

  const combined = [...sameDept, ...sameSector];
  // Deduplicate
  const seen = new Set<string>();
  const unique: CasoDuso[] = [];
  for (const c of combined) {
    if (!seen.has(c.id)) {
      seen.add(c.id);
      unique.push(c);
    }
  }
  return unique.slice(0, 4);
}

/* ─── Page Component ─── */

export default async function CasoDusoSlugPage({ params }: Props) {
  const { slug } = await params;
  const caso = CASI_DUSO.find((c) => c.id === slug);
  if (!caso) notFound();

  const benefits = getBenefits(caso);
  const related = getRelated(caso);
  const canonicalUrl = `${BASE_URL}/casi-duso/${caso.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: caso.title,
    description: caso.description,
    url: canonicalUrl,
    provider: {
      "@type": "Organization",
      name: "IL DOGE DI VENEZIA",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    serviceType: `AI ${caso.department}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero - Yellow ─────────────────────────────────── */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero pt-40 pb-20 overflow-hidden">
        <div className="container-site relative z-10">
          <Link href="/casi-duso" className="inline-flex items-center gap-2 text-sm text-nero/60 hover:text-nero transition-colors mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            Tutti i casi d&rsquo;uso
          </Link>
          <FadeInOnScroll>
            <Label className="text-nero/60">{caso.sector.toUpperCase()}</Label>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl uppercase">{caso.title}</h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-subheadline text-nero/70 mt-6 max-w-[640px] leading-relaxed">
              {caso.description}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <span className="text-sm font-semibold text-nero/80 bg-nero/10 px-4 py-1.5 uppercase tracking-wider">
                {caso.department}
              </span>
              <Button variant="dark" size="md" uppercase href="/contatti">
                Parla con noi
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Come Funziona ─────────────────────────────────── */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Come funziona</h2>
          </FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {caso.bullets.map((bullet, i) => (
                <FadeInOnScroll key={i}>
                  <div
                    className={`p-8 ${
                      i < caso.bullets.length - 1
                        ? "border-b border-nero md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <span className="text-4xl font-bold text-giallo">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body text-nero/80 leading-relaxed mt-4">
                      {bullet}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Perche Implementarlo ──────────────────────────── */}
      <section data-navbar-theme="light" className="bg-grigio-chiaro py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">
              Perch&eacute; implementarlo
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <FadeInOnScroll key={benefit.number}>
                <div className="bg-bianco border border-grigio-chiaro p-8 h-full">
                  <span className="text-3xl font-bold text-giallo">
                    {benefit.number}
                  </span>
                  <h3 className="text-xl font-bold text-nero mt-4 mb-3">
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

      {/* ── Per Chi ───────────────────────────────────────── */}
      <section data-navbar-theme="light" className="bg-bianco py-20">
        <div className="container-site">
          <FadeInOnScroll>
            <h2 className="text-section text-nero mb-12">Per chi</h2>
          </FadeInOnScroll>
          <div className="max-w-3xl">
            <FadeInOnScroll>
              <div className="mb-8">
                <p className="text-xs text-grigio-medio uppercase tracking-wider font-semibold mb-3">
                  Settore
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-nero bg-giallo/20 px-4 py-1.5 border border-giallo/30">
                    {caso.sector}
                  </span>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="mb-8">
                <p className="text-xs text-grigio-medio uppercase tracking-wider font-semibold mb-3">
                  Reparto
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-nero bg-giallo/20 px-4 py-1.5 border border-giallo/30">
                    {caso.department}
                  </span>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div>
                <p className="text-xs text-grigio-medio uppercase tracking-wider font-semibold mb-3">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {caso.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium text-nero/80 bg-nero/5 px-4 py-1.5 border border-nero/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── Casi d'Uso Correlati ──────────────────────────── */}
      {related.length > 0 && (
        <section data-navbar-theme="dark" className="bg-nero text-bianco py-20">
          <div className="container-site">
            <FadeInOnScroll>
              <Label className="text-giallo">ESPLORA</Label>
              <h2 className="text-section text-bianco mt-4 mb-12">
                Casi d&apos;uso correlati
              </h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel) => (
                <FadeInOnScroll key={rel.id}>
                  <Link
                    href={`/casi-duso/${rel.id}`}
                    className="block border border-bianco/10 p-6 h-full hover:border-giallo transition-colors group"
                  >
                    <span className="text-xs font-semibold text-giallo uppercase tracking-wider">
                      {rel.department}
                    </span>
                    <h3 className="text-sm font-bold text-bianco mt-2 mb-3 uppercase group-hover:text-giallo transition-colors">
                      <span className="underline decoration-giallo decoration-[2px] underline-offset-4">
                        {rel.title}
                      </span>
                    </h3>
                    <p className="text-sm text-bianco/60 line-clamp-3 leading-relaxed">
                      {rel.description}
                    </p>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll>
              <div className="mt-10 text-center">
                <Link
                  href="/casi-duso"
                  className="text-sm font-semibold text-bianco hover:text-giallo transition-colors underline underline-offset-4"
                >
                  Vedi tutti i casi d&apos;uso →
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* ── Risorse Correlate ─────────────────────────────── */}
      <RisorseCorrelate links={getStrategicLinksForCasoDuso(caso.sector)} />

      {/* ── CTA Finale ────────────────────────────────────── */}
      <CtaFinale
        dark
        title="Pronto a implementarlo?"
        subtitle="Analizziamo insieme come questo caso d'uso puo trasformare la tua azienda. La prima call e gratuita."
        buttonText="Parla con noi"
        buttonHref="/contatti"
      />
    </>
  );
}

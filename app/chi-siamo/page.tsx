import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Label from "@/components/ui/Label";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import AnimatedUnderline from "@/components/animations/AnimatedUnderline";
import CtaFinale from "@/components/sections/CtaFinale";
import { TEAM_MEMBERS } from "@/lib/constants";
import TeamGrid from "./TeamGrid";

export const metadata: Metadata = {
  title: "Chi Siamo — Il Doge di Venezia",
  description:
    "Il team dietro Il Doge di Venezia: AI strategy, engineering e design.",
  openGraph: {
    title: "Chi Siamo — Il Doge di Venezia",
    description:
      "Il team dietro Il Doge di Venezia: AI strategy, engineering e design.",
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-bianco text-nero pt-40 pb-20">
        <div className="container-site">
          <FadeInOnScroll>
            <Label>CHI SIAMO</Label>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <h1 className="text-hero mt-4 max-w-4xl">
              Siamo tornati in Italia perch&eacute; qui c&rsquo;&egrave;
              l&rsquo;
              <AnimatedUnderline>opportunit&agrave;</AnimatedUnderline> pi&ugrave;
              grande.
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="text-xl text-grigio-scuro mt-8 max-w-[680px] space-y-6">
              <p>
                Le PMI italiane hanno prodotti straordinari, riconosciuti in
                tutto il mondo. Ma le loro operations sono spesso manuali, i
                loro dati frammentati, i loro processi gestiti &ldquo;a
                occhio&rdquo;. Nessuno sta aiutando queste aziende nella
                transizione pi&ugrave; importante della storia: le grandi
                consulenze vendono slide, le software house vendono tool.
              </p>
              <p>
                Il Doge nasce per colmare questo gap. Strategia +
                implementazione end-to-end, con la velocit&agrave; di una
                startup e la profondit&agrave; di chi ha lavorato alla frontiera
                dell&rsquo;AI nei principali hub tecnologici europei.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 2 — Perché "Il Doge" */}
      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <FadeInOnScroll>
            <h2 className="text-section">
              Perch&eacute; &ldquo;Il Doge&rdquo;?
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="text-lg text-grigio-scuro space-y-6">
              <p>
                Venezia ha costruito il pi&ugrave; grande impero commerciale del
                Medioevo non con la forza bruta, ma con l&rsquo;intelligenza
                delle rotte, la gestione dei dati commerciali, le alleanze
                strategiche.
              </p>
              <p>
                Il Doge non era un re &mdash; era un leader pragmatico, al
                servizio della prosperit&agrave; della Repubblica.
              </p>
              <p>
                Quella stessa mentalit&agrave; guida il nostro approccio:
                nessuna ideologia tecnologica, nessun hype, nessuna
                presentazione da 200 pagine. Solo risultati concreti per le
                aziende che ci affidano la loro trasformazione.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* Section 3 — Il Team */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <h2 className="text-section">Il team</h2>
        </FadeInOnScroll>

        <TeamGrid members={[...TEAM_MEMBERS]} />

        <FadeInOnScroll>
          <p className="text-grigio-medio mt-8 text-center">
            + 20 sviluppatori e ingegneri AI pronti a costruire e implementare
            qualsiasi tipo di soluzione solida e scalabile.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* Section 4 — Lavora con Noi */}
      <SectionWrapper bg="dark" className="py-20">
        <FadeInOnScroll className="text-center">
          <h2 className="text-section text-bianco">
            Costruiamo un team che ridefinisce cosa significa lavorare
            nell&rsquo;AI.
          </h2>
          <div className="mt-8">
            <a
              href="https://stabilidea.it/it/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sm bg-giallo text-nero px-5 py-2.5 rounded-button hover:bg-giallo-hover active:scale-[0.98] transition-all duration-300"
            >
              Vedi le posizioni aperte →
            </a>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* Section 5 — CTA Finale */}
      <CtaFinale />
    </>
  );
}

export type TeamMember = {
  name: string;
  role: string;
  flags: string;
  image: string;
  bio: string;
};

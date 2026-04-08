import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Label from "@/components/ui/Label";
import CtaFinale from "@/components/sections/CtaFinale";

export const metadata: Metadata = {
  title: "Lavora con Noi - Il Doge di Venezia",
  description:
    "Posizioni aperte presso Il Doge di Venezia. Unisciti al team che sta ridefinendo l'AI per le PMI italiane.",
};

const POSITIONS = [
  {
    title: "AI Engineer",
    description:
      "Sviluppa e implementa soluzioni di intelligenza artificiale per migliorare i processi aziendali dei nostri clienti. Un ruolo chiave per garantire innovazione e competitività.",
    requirements: [
      "Capacità di collaborazione in team",
      "Competenze in Python e librerie AI/ML",
      "Autonomia operativa e problem solving",
    ],
  },
  {
    title: "Full-stack Developer",
    description:
      "Progetta e sviluppa applicazioni web complete, lato client e server. Fondamentale per implementare soluzioni innovative e migliorare l'efficienza operativa.",
    requirements: [
      "Conoscenza approfondita di Node.js e PostgreSQL",
      "Esperienza con framework moderni (Next.js, React)",
      "Capacità di collaborazione e comunicazione",
    ],
  },
  {
    title: "Sales Development Representative (SDR)",
    description:
      "Identifica e qualifica potenziali clienti per il team commerciale. Essenziale per generare opportunità di business e supportare la crescita aziendale.",
    requirements: [
      "Eccellenti capacità comunicative e relazionali",
      "Esperienza in lead generation e qualificazione prospect",
      "Orientamento ai risultati e capacità di lavorare in team",
    ],
  },
  {
    title: "Business Development Representative (BDR)",
    description:
      "Identifica e sviluppa nuove opportunità di business. Fondamentale per espandere la base clienti e supportare la crescita.",
    requirements: [
      "Forti capacità comunicative e di costruzione relazioni",
      "Esperienza in lead generation e business development",
      "Approccio orientato ai risultati e collaborativo",
    ],
  },
];

export default function LavoraConNoi() {
  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="light" className="pt-40 pb-20 bg-bianco">
        <div className="container-site">
          <FadeInOnScroll>
            <Label>Lavora con noi</Label>
            <h1 className="text-hero mt-4 max-w-3xl">
              Costruiamo un team che ridefinisce cosa significa lavorare
              nell&apos;AI.
            </h1>
            <p className="text-subheadline text-grigio-scuro mt-6 max-w-2xl">
              Cerchiamo persone che vogliono avere impatto reale sulle aziende
              italiane. Niente burocrazia, niente slide - solo esecuzione.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Positions */}
      <SectionWrapper bg="light">
        <FadeInOnScroll>
          <h2 className="text-section">Posizioni aperte</h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {POSITIONS.map((pos, i) => (
            <FadeInOnScroll key={i}>
              <div className="bg-bianco border border-[#E8E8E8] p-8 h-full flex flex-col hover:-translate-y-1 hover:border-l-[3px] hover:border-l-giallo transition-all duration-200">
                <h3 className="text-xl font-bold">{pos.title}</h3>
                <p className="text-body text-grigio-scuro mt-3 flex-1">
                  {pos.description}
                </p>
                <div className="mt-6">
                  <p className="text-label text-grigio-medio mb-2">
                    Requisiti
                  </p>
                  <ul className="space-y-1.5">
                    {pos.requirements.map((req, j) => (
                      <li
                        key={j}
                        className="text-sm text-grigio-scuro flex items-start gap-2"
                      >
                        <span className="text-giallo mt-0.5">→</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={`mailto:dogedivenezia.ai@gmail.com?subject=Candidatura: ${pos.title}`}
                  external
                  className="mt-6 self-start"
                >
                  Candidati →
                </Button>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <CtaFinale
        title="Non trovi la posizione giusta?"
        subtitle="Mandaci una candidatura spontanea. Cerchiamo sempre persone di talento."
        buttonText="Contattaci"
        buttonHref="/contatti"
      />
    </>
  );
}

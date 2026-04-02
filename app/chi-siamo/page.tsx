import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export const metadata: Metadata = {
  title: "Chi Siamo - Il Doge di Venezia",
  description:
    "Il team dietro Il Doge di Venezia: AI strategy, engineering e design.",
  openGraph: {
    title: "Chi Siamo - Il Doge di Venezia",
    description:
      "Il team dietro Il Doge di Venezia: AI strategy, engineering e design.",
    type: "website",
    images: [
      {
        url: "/icon/logoB-noBG.png",
        width: 512,
        height: 512,
        alt: "il Doge di Venezia",
      },
    ],
  },
};

const BUILDERS = [
  "Product Managers",
  "Data Scientists",
  "AI Engineers",
  "Full Stack Developers",
  "Technical Project Managers",
  "QA/UX Designers",
];

const HUSTLERS = [
  "AI Implementation Strategists",
  "Business Development Representatives",
  "Founder's Associates",
  "Growth Associates",
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Section 1 - Yellow Hero: Manifesto */}
      <section className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-center pt-24 pb-40 md:pb-48">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero/60 tracking-widest">
              Manifesto
            </span>
            <h1 className="text-section uppercase mt-4 max-w-[900px] mx-auto">
              Perch&eacute; abbiamo scelto &lsquo;Il Doge di Venezia&rsquo;?
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="text-body text-nero/80 mt-8 max-w-[680px] mx-auto space-y-6">
              <p>
                Venezia ha costruito l&rsquo;impero commerciale pi&ugrave;
                grande del mondo non con eserciti, ma con{" "}
                <strong className="text-nero">intelligenza</strong>. Rotte
                ottimizzate, <strong className="text-nero">alleanze strategiche</strong>,{" "}
                <strong className="text-nero">dati commerciali</strong> quando il
                resto del mondo ragionava ancora con le spade. Al centro di
                tutto, il Doge: un{" "}
                <strong className="text-nero">leader pragmatico</strong> al servizio della
                prosperit&agrave; della Repubblica.
              </p>
              <p className="italic">
                Quella mentalit&agrave; non &egrave; andata da nessuna parte.
                Vive nel <strong className="text-nero">tessuto industriale italiano</strong>,
                nei <strong className="text-nero">prodotti unici</strong>, nel{" "}
                <strong className="text-nero">saper fare</strong> che non ha eguali al mondo.
                La nostra missione &egrave; portare quella stessa{" "}
                <strong className="text-nero">intelligenza operativa</strong>{" "}
                nell&rsquo;era dell&rsquo;AI, prima che questa trasformazione
                arrivi senza di noi.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Venice skyline pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <img
            src="/hero/landscape venezia (no-bg).png"
            alt="Venice skyline"
            className="w-full h-auto opacity-30"
          />
        </div>
      </section>

      {/* Section 2 - Chi Siamo + Team */}
      <SectionWrapper bg="white">
        {/* Header */}
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <span className="text-label uppercase text-grigio-medio tracking-widest">
              Chi siamo
            </span>
            <h2 className="text-section uppercase mt-4">
              Siamo stati alla frontiera. Ora siamo qui.
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Grid: photos left, text right */}
        <FadeInOnScroll>
          <div className="border border-nero">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left - Team photos 2x2 */}
              <div className="md:border-r border-nero p-4 md:p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 max-w-[200px] md:max-w-[280px]">
                  <img src="/team/image14.png" alt="Team member" className="w-full h-auto object-cover aspect-square grayscale" />
                  <img src="/team/image15.png" alt="Team member" className="w-full h-auto object-cover aspect-square grayscale" />
                  <img src="/team/image13.png" alt="Team member" className="w-full h-auto object-cover aspect-square grayscale" />
                  <img src="/team/image18.jpg" alt="Team member" className="w-full h-auto object-cover aspect-square grayscale" />
                </div>
              </div>

              {/* Right - Text */}
              <div className="px-4 py-4 md:px-8 md:py-8 flex flex-col justify-center">
                <p className="text-body text-nero leading-relaxed">
                  Strategia e codice nello stesso team. Non in sequenza, in
                  parallelo. Veniamo da fondi VC europei, startup AI
                  internazionali ed exit con milioni di utenti. Abbiamo visto da
                  vicino cosa separa le aziende che guidano questa
                  trasformazione da quelle che la subiscono.
                </p>
                <p className="text-body text-nero leading-relaxed mt-6">
                  Potevamo restare all&rsquo;estero, ma abbiamo scelto di
                  tornare perch&eacute; abbiamo visto qualcosa che valeva:
                  un&rsquo;economia straordinaria, con prodotti unici e
                  imprenditori visionari, che rischiava di arrivare tardi alla
                  trasformazione pi&ugrave; importante degli ultimi decenni.
                </p>
                <p className="text-body text-nero leading-relaxed mt-6 italic">
                  Siamo qui per colmare quel gap.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* Section 4 - Lavora con Noi */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <h2 className="text-section uppercase mb-12">Lavora con noi</h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
          {/* Builders */}
          <FadeInOnScroll>
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                Builders
              </h3>
              <ul className="mt-6 space-y-3">
                {BUILDERS.map((role) => (
                  <li
                    key={role}
                    className="text-lg text-grigio-scuro flex items-start gap-3 cursor-default hover:underline hover:-translate-y-[3px] transition-transform duration-200"
                  >
                    <span className="text-giallo mt-0.5 font-bold">&rarr;</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          {/* Hustlers */}
          <FadeInOnScroll>
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                Hustlers
              </h3>
              <ul className="mt-6 space-y-3">
                {HUSTLERS.map((role) => (
                  <li
                    key={role}
                    className="text-lg text-grigio-scuro flex items-start gap-3 cursor-default hover:underline hover:-translate-y-[3px] transition-transform duration-200"
                  >
                    <span className="text-giallo mt-0.5 font-bold">&rarr;</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll>
          <div className="mt-12">
            <Button href="mailto:dogedivenezia.ai@gmail.com">
              Candidati &rarr;
            </Button>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

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

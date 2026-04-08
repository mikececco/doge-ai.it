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


export default function ChiSiamoPage() {
  return (
    <>
      {/* Section 1 - Yellow Hero: Manifesto */}
      <section data-navbar-theme="giallo" className="relative bg-giallo text-nero min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-site relative z-10 text-left pt-24 pb-20 md:pb-24">
          <FadeInOnScroll>
            <span className="text-label uppercase text-nero tracking-widest">
              Manifesto
            </span>
            <h1 className="text-hero uppercase mt-4">
              Perch&eacute; abbiamo scelto<span className="hidden md:inline"><br /></span>{" "}&lsquo;Il Doge di Venezia&rsquo;?
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="text-xl md:text-2xl font-medium text-nero/80 mt-8 space-y-6 leading-relaxed">
              <p>
                Venezia ha costruito l&rsquo;impero commerciale pi&ugrave;
                grande del mondo non con eserciti, ma con{" "}
                <strong className="text-nero">intelligenza</strong>. Rotte
                ottimizzate,{" "}
                <strong className="text-nero">alleanze strategiche</strong>,{" "}
                <strong className="text-nero">dati commerciali</strong>{" "}
                quando il resto del mondo ragionava ancora con le spade. Al
                centro di tutto, il Doge: un{" "}
                <strong className="text-nero">leader pragmatico</strong>{" "}
                al servizio della prosperit&agrave; della Repubblica.
              </p>
              <p className="italic">
                Quella mentalit&agrave; non &egrave; andata da nessuna parte.
                Vive nel{" "}
                <strong className="text-nero">tessuto industriale italiano</strong>,{" "}
                nei{" "}
                <strong className="text-nero">prodotti unici</strong>, nel{" "}
                <strong className="text-nero">saper fare</strong>{" "}
                che non ha eguali al mondo. La nostra missione &egrave;
                portare quella stessa{" "}
                <strong className="text-nero">intelligenza operativa</strong>{" "}
                nell&rsquo;era dell&rsquo;AI, prima che questa trasformazione
                arrivi senza di noi.
              </p>
            </div>
          </FadeInOnScroll>
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

        <FadeInOnScroll>
          <div className="text-center max-w-[700px] mx-auto">
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
            <div className="mt-8">
              <Button variant="dark" href="/contatti" arrow>Parla con noi</Button>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* Section 3 - Lavora con Noi */}
      <SectionWrapper bg="white">
        <FadeInOnScroll>
          <div className="text-center">
            <h2 className="text-section uppercase mb-6">Lavora con noi</h2>
            <p className="text-body text-nero/70 max-w-[600px] mx-auto mb-8">
              Cerchiamo builders e hustlers per costruire il futuro dell&apos;AI in Italia.
            </p>
            <Button variant="dark" href="https://substantial-reply-7e2.notion.site/Lavora-con-noi-3349baac747380e880d2f1ab8121427c" arrow>
              Vedi le posizioni aperte
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

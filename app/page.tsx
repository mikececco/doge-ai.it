import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrasformazioneAI from "@/components/sections/home/TrasformazioneAI";
import EntrareCorrereCostruire from "@/components/sections/home/EntrareCorrereCostruire";
import INumeri from "@/components/sections/home/INumeri";
import IlManifesto from "@/components/sections/home/IlManifesto";
import RealtaScomode from "@/components/sections/home/RealtaScomode";
import CtaFinale from "@/components/sections/CtaFinale";

export const metadata: Metadata = {
  title: "IL DOGE DI VENEZIA - Trasformazione AI per PMI e Fondi",
  description:
    "Definiamo e realizziamo la strategia AI della tua azienda alla velocità di una startup. Risultati misurabili in 30 giorni.",
  openGraph: {
    title: "IL DOGE DI VENEZIA - Trasformazione AI per PMI e Fondi",
    description:
      "Definiamo e realizziamo la strategia AI della tua azienda alla velocità di una startup.",
    type: "website",
    images: [
      {
        url: "/icon/logoB-noBG.png",
        width: 512,
        height: 512,
        alt: "IL DOGE DI VENEZIA",
      },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IL DOGE DI VENEZIA",
  url: "https://doge-ai.it",
  logo: "https://doge-ai.it/icon/logoB-noBG.png",
  description: "Consulenza AI per PMI e fondi di investimento italiani",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Polver del Fuoco 827/A",
    addressLocality: "Venezia",
    addressCountry: "IT",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+39-346-888-9545",
    email: "dogedivenezia.ai@gmail.com",
    contactType: "sales",
  },
  sameAs: ["https://www.linkedin.com/company/il-doge-di-venezia"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection />
      <TrasformazioneAI />
      <EntrareCorrereCostruire />
      <INumeri />
      <IlManifesto />
      <RealtaScomode />
      <CtaFinale
        veniceImage
        title="Vinci la prossima decade."
        subtitle="Scopri dove l'AI ha il massimo impatto nella tua azienda."
        buttonText="Prenota una call"
        buttonHref="/contatti"
      />
    </>
  );
}

import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrasformazioneAI from "@/components/sections/home/TrasformazioneAI";
import EntrareCorrereCostruire from "@/components/sections/home/EntrareCorrereCostruire";
import INumeri from "@/components/sections/home/INumeri";
import IlManifesto from "@/components/sections/home/IlManifesto";
import RealtaScomode from "@/components/sections/home/RealtaScomode";
import CtaFinale from "@/components/sections/CtaFinale";

export const metadata: Metadata = {
  title: "DOGE di Venezia — Trasformazione AI per PMI e Fondi",
  description:
    "Definiamo e realizziamo la strategia AI della tua azienda alla velocità di una startup. Risultati misurabili in 30 giorni.",
  openGraph: {
    title: "DOGE di Venezia — Trasformazione AI per PMI e Fondi",
    description:
      "Definiamo e realizziamo la strategia AI della tua azienda alla velocità di una startup.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrasformazioneAI />
      <EntrareCorrereCostruire />
      <INumeri />
      <IlManifesto />
      <RealtaScomode />
      <CtaFinale
        dark
        title="Vinci la prossima decade."
        subtitle="Scopri dove l'AI ha il massimo impatto nella tua azienda."
        buttonText="Prenota una call →"
        buttonHref="/contatti"
      />
    </>
  );
}

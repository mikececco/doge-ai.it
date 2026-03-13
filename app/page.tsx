import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import RealtaScomode from "@/components/sections/home/RealtaScomode";
import CosaFacciamo from "@/components/sections/home/CosaFacciamo";
import DuePercorsi from "@/components/sections/home/DuePercorsi";
import INumeri from "@/components/sections/home/INumeri";
import IlManifesto from "@/components/sections/home/IlManifesto";
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
      <RealtaScomode />
      <CosaFacciamo />
      <DuePercorsi />
      <INumeri />
      <IlManifesto />
      <CtaFinale
        title="Vinci la prossima decade."
        subtitle="Scopri quanto vale l'AI per la tua azienda — con numeri alla mano."
        buttonText="Prenota una call →"
        buttonHref="/contatti"
      />
    </>
  );
}

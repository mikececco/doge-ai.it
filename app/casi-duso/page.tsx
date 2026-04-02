import type { Metadata } from "next";
import CasiDusoPage from "./CasiDusoPage";

export const metadata: Metadata = {
  title: "Casi d'Uso AI - Il Doge di Venezia",
  description:
    "50+ casi d'uso concreti di AI per PMI italiane. Cerca per settore, reparto o funzione.",
  openGraph: {
    title: "Casi d'Uso AI - Il Doge di Venezia",
    description:
      "50+ casi d'uso concreti di AI per PMI italiane. Cerca per settore, reparto o funzione.",
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

export default function Page() {
  return <CasiDusoPage />;
}

import type { Metadata } from "next";
import PartnerPage from "./PartnerPage";

export const metadata: Metadata = {
  title: "Programma Partner - IL DOGE DI VENEZIA",
  description:
    "Porta l'AI ai tuoi clienti senza costruirla da zero. Revenue share su ogni progetto referenziato.",
  openGraph: {
    title: "Programma Partner - IL DOGE DI VENEZIA",
    description:
      "Porta l'AI ai tuoi clienti senza costruirla da zero. Revenue share su ogni progetto referenziato.",
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

export default function Page() {
  return <PartnerPage />;
}

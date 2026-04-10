import type { Metadata } from "next";
import PartnerPage from "./PartnerPage";

export const metadata: Metadata = {
  title: "Programma Partner - IL DOGE DI VENEZIA",
  description:
    "Porta l'AI ai tuoi clienti senza costruire niente internamente. Programma partnership per agenzie e consulenti.",
  openGraph: {
    title: "Programma Partner - IL DOGE DI VENEZIA",
    description:
      "Porta l'AI ai tuoi clienti senza costruire niente internamente. Programma partnership per agenzie e consulenti.",
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
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <PartnerPage />;
}

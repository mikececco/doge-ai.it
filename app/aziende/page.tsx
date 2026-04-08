import type { Metadata } from "next";
import AziendePage from "./AziendePage";

export const metadata: Metadata = {
  title: "AI Transformation per le Aziende - IL DOGE DI VENEZIA",
  description:
    "Trasformiamo le operazioni delle PMI italiane con AI. Risultati misurabili in 60 giorni.",
  openGraph: {
    title: "AI Transformation per le Aziende - IL DOGE DI VENEZIA",
    description:
      "Trasformiamo le operazioni delle PMI italiane con AI. Risultati misurabili in 60 giorni.",
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
  return <AziendePage />;
}

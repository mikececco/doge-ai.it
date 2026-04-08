import type { Metadata } from "next";
import GlossarioPage from "./GlossarioPage";

export const metadata: Metadata = {
  title: "Glossario AI - 200 Termini Spiegati per PMI | IL DOGE DI VENEZIA",
  description:
    "Il glossario completo dell'intelligenza artificiale per PMI italiane. 200 termini AI spiegati in modo pratico: machine learning, NLP, automazione, business strategy e strumenti.",
  openGraph: {
    title: "Glossario AI - 200 Termini Spiegati per PMI | IL DOGE DI VENEZIA",
    description:
      "Il glossario completo dell'intelligenza artificiale per PMI italiane. 200 termini spiegati in modo pratico.",
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
  return <GlossarioPage />;
}

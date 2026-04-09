import type { Metadata } from "next";
import ProgrammaPartnerPage from "./ProgrammaPartnerPage";

export const metadata: Metadata = {
  title: "Advisory Partner Program - IL DOGE DI VENEZIA",
  description:
    "Collaborazione strutturata per advisor e consulenti strategici. AI Readiness Audit congiunto per i tuoi clienti.",
  openGraph: {
    title: "Advisory Partner Program - IL DOGE DI VENEZIA",
    description:
      "Collaborazione strutturata per advisor e consulenti strategici. AI Readiness Audit congiunto per i tuoi clienti.",
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
  return <ProgrammaPartnerPage />;
}

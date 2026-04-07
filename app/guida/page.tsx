import type { Metadata } from "next";
import GuidaLandingPage from "./GuidaLandingPage";

export const metadata: Metadata = {
  title: "Guide AI per PMI - 30 Guide Complete | Il Doge di Venezia",
  description:
    "30 guide approfondite sull'AI per PMI italiane. Manifattura, customer service, vendite, HR, finance, logistica e molto altro. Strategie pratiche e ROI concreto.",
  openGraph: {
    title: "Guide AI per PMI - 30 Guide Complete | Il Doge di Venezia",
    description:
      "30 guide approfondite sull'AI per PMI italiane. Strategie pratiche e ROI concreto.",
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
  return <GuidaLandingPage />;
}

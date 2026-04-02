import type { Metadata } from "next";
import CasiDusoPage from "./CasiDusoPage";

export const metadata: Metadata = {
  title: "Cosa Possiamo Fare — Il Doge di Venezia",
  description:
    "10 casi d'uso concreti di AI transformation per le PMI italiane.",
  openGraph: {
    title: "Cosa Possiamo Fare — Il Doge di Venezia",
    description:
      "10 casi d'uso concreti di AI transformation per le PMI italiane.",
    type: "website",
  },
};

export default function Page() {
  return <CasiDusoPage />;
}

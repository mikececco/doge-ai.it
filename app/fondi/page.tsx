import type { Metadata } from "next";
import FondiPage from "./FondiPage";

export const metadata: Metadata = {
  title: "AI Operating Partner per Fondi PE — Il Doge di Venezia",
  description:
    "EBITDA uplift nelle portfolio companies. Dalla due diligence all'exit.",
  openGraph: {
    title: "AI Operating Partner per Fondi PE — Il Doge di Venezia",
    description:
      "EBITDA uplift nelle portfolio companies. Dalla due diligence all'exit.",
  },
};

export default function Page() {
  return <FondiPage />;
}

import type { Metadata } from "next";
import ConfrontoPage from "./ConfrontoPage";

export const metadata: Metadata = {
  title: "Confronto Strumenti AI - 50 Comparazioni | IL DOGE DI VENEZIA",
  description:
    "50 confronti dettagliati tra strumenti AI, CRM, ERP e piattaforme di automazione per PMI italiane. Pro, contro e verdetto per ogni coppia.",
  openGraph: {
    title: "Confronto Strumenti AI - 50 Comparazioni | IL DOGE DI VENEZIA",
    description:
      "50 confronti dettagliati tra strumenti AI, CRM, ERP e piattaforme di automazione per PMI italiane.",
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
  return <ConfrontoPage />;
}

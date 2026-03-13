import type { Metadata } from "next";
import MetodoPage from "./MetodoPage";

export const metadata: Metadata = {
  title: "Il Codice del Doge — Il Nostro Processo AI",
  description:
    "Il framework completo che seguiamo per ogni progetto di AI transformation. Aperto al pubblico.",
  openGraph: {
    title: "Il Codice del Doge — Il Nostro Processo AI",
    description:
      "Il framework completo che seguiamo per ogni progetto di AI transformation. Aperto al pubblico.",
    type: "website",
  },
};

export default function Page() {
  return <MetodoPage />;
}

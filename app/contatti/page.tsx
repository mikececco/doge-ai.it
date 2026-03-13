import type { Metadata } from "next";
import ContattiPage from "./ContattiPage";

export const metadata: Metadata = {
  title: "Contatti — Il Doge di Venezia",
  description: "Parla con noi. La prima conversazione è gratuita.",
  openGraph: {
    title: "Contatti — Il Doge di Venezia",
    description: "Parla con noi. La prima conversazione è gratuita.",
    type: "website",
  },
};

export default function Page() {
  return <ContattiPage />;
}

import type { Metadata } from "next";
import ContattiPage from "./ContattiPage";

export const metadata: Metadata = {
  title: "Contatti - IL DOGE DI VENEZIA",
  description: "Parla con noi. La prima conversazione è gratuita.",
  openGraph: {
    title: "Contatti - IL DOGE DI VENEZIA",
    description: "Parla con noi. La prima conversazione è gratuita.",
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

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contattaci - IL DOGE DI VENEZIA",
  url: "https://doge-ai.it/contatti",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContattiPage />
    </>
  );
}

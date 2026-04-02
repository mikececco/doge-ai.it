import type { Metadata } from "next";
import ContattiPage from "./ContattiPage";

export const metadata: Metadata = {
  title: "Contatti - Il Doge di Venezia",
  description: "Parla con noi. La prima conversazione è gratuita.",
  openGraph: {
    title: "Contatti - Il Doge di Venezia",
    description: "Parla con noi. La prima conversazione è gratuita.",
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

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contattaci - il Doge di Venezia",
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

import type { Metadata } from "next";
import { Barlow_Condensed, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import CookieBanner from "@/components/CookieBanner";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IL DOGE DI VENEZIA - Consulenza AI per PMI Italiane",
    template: "%s | IL DOGE DI VENEZIA",
  },
  description:
    "Strategia e implementazione AI per PMI e fondi di investimento italiani. Automazione, agenti AI, digital twin. Risultati misurabili in 30 giorni.",
  metadataBase: new URL("https://doge-ai.it"),
  alternates: {
    canonical: "https://doge-ai.it",
    languages: { "it": "https://doge-ai.it" },
  },
  openGraph: {
    title: "IL DOGE DI VENEZIA - Consulenza AI per PMI Italiane",
    description:
      "Strategia e implementazione AI per PMI e fondi di investimento italiani. Automazione, agenti AI, digital twin.",
    url: "https://doge-ai.it",
    siteName: "IL DOGE DI VENEZIA",
    locale: "it_IT",
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
  twitter: {
    card: "summary_large_image",
    title: "IL DOGE DI VENEZIA - Consulenza AI per PMI Italiane",
    description:
      "Strategia e implementazione AI per PMI e fondi di investimento italiani.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${barlowCondensed.variable} ${archivo.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

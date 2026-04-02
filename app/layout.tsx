import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import CookieBanner from "@/components/CookieBanner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "il Doge di Venezia - Consulenza AI per PMI Italiane",
    template: "%s | il Doge di Venezia",
  },
  description:
    "Strategia e implementazione AI per PMI e fondi di investimento italiani. Automazione, agenti AI, digital twin. Risultati misurabili in 30 giorni.",
  metadataBase: new URL("https://doge-ai.it"),
  alternates: {
    canonical: "https://doge-ai.it",
    languages: { "it": "https://doge-ai.it" },
  },
  openGraph: {
    title: "il Doge di Venezia - Consulenza AI per PMI Italiane",
    description:
      "Strategia e implementazione AI per PMI e fondi di investimento italiani. Automazione, agenti AI, digital twin.",
    url: "https://doge-ai.it",
    siteName: "il Doge di Venezia",
    locale: "it_IT",
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
  twitter: {
    card: "summary_large_image",
    title: "il Doge di Venezia - Consulenza AI per PMI Italiane",
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
    <html lang="it" className={spaceGrotesk.variable}>
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

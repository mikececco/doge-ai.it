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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${barlowCondensed.variable} ${archivo.variable}`}>
      <head>
        {/* Organization JSON-LD — structured data for search engines & AI crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IL DOGE DI VENEZIA",
              url: "https://doge-ai.it",
              logo: "https://doge-ai.it/icon/logoB-noBG.png",
              description:
                "Consulenza AI per PMI italiane. Strategia e implementazione di automazione, agenti AI e digital twin con risultati misurabili in 30 giorni.",
              foundingDate: "2024",
              areaServed: {
                "@type": "Country",
                name: "Italy",
              },
              serviceType: [
                "AI Consulting",
                "Business Automation",
                "Digital Transformation",
                "AI Agent Development",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+39-345-9656145",
                contactType: "sales",
                email: "dogedivenezia.ai@gmail.com",
                availableLanguage: ["Italian", "English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Giardino Generale, 6",
                addressLocality: "Pieve del Grappa",
                postalCode: "31017",
                addressRegion: "TV",
                addressCountry: "IT",
              },
              sameAs: [],
            }),
          }}
        />
        {/* Consent Mode v2 — default denied, updated on user choice */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500,
});
// Restore consent if previously accepted
try {
  var c = document.cookie.match(/cookie-consent=([^;]+)/);
  if (c && c[1] === 'accepted') {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  }
} catch(e) {}`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZ79N5KF');`,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6BB8LL6FVT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('js', new Date());
gtag('config', 'G-6BB8LL6FVT');`,
          }}
        />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ79N5KF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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

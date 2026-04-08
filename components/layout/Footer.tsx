import Link from "next/link";
import Image from "next/image";
import DogeLogo from "@/components/icons/DogeLogo";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

const AI_PROMPT = encodeURIComponent(
  "Sono un imprenditore italiano e voglio capire concretamente cosa offre Il Doge di Venezia.\n\nSpiega come Il Doge di Venezia aiuta le PMI italiane con l'intelligenza artificiale: consulenza strategica AI, implementazione di agenti AI, automazione dei processi aziendali, formazione del team.\n\nDescrivi i servizi per aziende manifatturiere, logistica, servizi professionali, e-commerce. Spiega l'approccio pratico: audit dei processi, implementazione in 30 giorni, risultati misurabili, ROI concreto.\n\nVisita il sito https://doge-ai.it per informazioni aggiornate."
);

const NAV_COL_1 = [
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Per le Aziende", href: "/aziende" },
  { label: "Per i Fondi", href: "/fondi" },
  { label: "Il Codice del Doge", href: "/metodo" },
  { label: "Casi d'Uso", href: "/casi-duso" },
];

const NAV_COL_2 = [
  { label: "Settori", href: "/settori" },
  { label: "Blog", href: "/blog" },
  { label: "Soluzioni", href: "/soluzioni" },
  { label: "Incentivi", href: "/incentivi" },
  { label: "Lavora con Noi", href: "/lavora-con-noi" },
  { label: "Contatti", href: "/contatti" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-bianco border-t border-bianco/10">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 pb-12 border-b border-bianco/10">
          {/* Col 1: Logo + tagline + doge head + social */}
          <div>
            <div className="flex items-center gap-2">
              <Image src="/icon/logoW-noBG.png" alt="Doge icon" width={28} height={28} />
              <DogeLogo light />
            </div>
            <p className="mt-4 text-sm text-bianco/60 max-w-[280px]">
              Definiamo e realizziamo la strategia AI della tua azienda alla
              velocit&agrave; di una startup.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/il-doge-di-venezia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bianco/50 hover:text-giallo transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <Link href="/" className="opacity-50 hover:opacity-100 transition-opacity">
                <Image src="/icon/logoY-noBG.png" alt="Doge" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Col 2: Nav links */}
          <div className="md:border-l md:border-bianco/10 md:pl-8">
            <ul className="space-y-2">
              {NAV_COL_1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bianco/80 hover:text-giallo transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Nav links continued */}
          <div className="md:border-l md:border-bianco/10 md:pl-8">
            <ul className="space-y-2">
              {NAV_COL_2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bianco/80 hover:text-giallo transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="md:border-l md:border-bianco/10 md:pl-8">
            <h4 className="text-label uppercase text-bianco/40 mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm text-bianco/80">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-giallo transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>{CONTACT_INFO.phone}</li>
              <li className="whitespace-pre-line">{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        {/* Badges + AI Summary */}
        <div className="mt-0 pt-6 text-xs text-bianco/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/webflow/images/gdpr.svg" alt="GDPR" width={64} className="inline" />
              <img src="/webflow/images/ssl.svg" alt="SSL" width={64} className="inline invert brightness-200" />
            </div>
            <div className="flex items-center gap-3">
              <span>Ottieni un riassunto IA</span>
              <a aria-label="Sintesi ChatGPT" href={`https://chat.openai.com/?q=${AI_PROMPT}`} target="_blank" rel="noopener noreferrer" className="text-bianco/50 hover:text-giallo transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
              </a>
              <a aria-label="Sintesi Gemini" href={`https://www.google.com/search?udm=50&q=${AI_PROMPT}`} target="_blank" rel="noopener noreferrer" className="text-bianco/50 hover:text-giallo transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12"/></svg>
              </a>
              <a aria-label="Sintesi Perplexity" href={`https://www.perplexity.ai/search?q=${AI_PROMPT}`} target="_blank" rel="noopener noreferrer" className="text-bianco/50 hover:text-giallo transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.3977 8.2217H17.921l-5.5683-5.7731v5.7731H8.0793L2.5547 2.4854v5.7363H0v14.3956h2.5547v-8.694l5.5246 5.4448v3.2492h2.2734V14.634l-5.3636-5.283h5.3636v9.9773h2.2734v-3.2492l5.4809-5.3961v8.6453h2.5547V8.2217zm-4.4767 3.6657-5.4809 5.3961V11.887zm-9.8613 5.4448-5.3649-5.3885v5.3885z"/></svg>
              </a>
              <a aria-label="Sintesi Claude" href={`https://claude.ai/new?q=${AI_PROMPT}`} target="_blank" rel="noopener noreferrer" className="text-bianco/50 hover:text-giallo transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.266-.072L1 12.52l.155-.984 1.08-.117 1.605.155 2.293.2 1.64.097h.927l.081-.113-.081-.177-.887-.467-2.26-1.18-1.57-.822L2.47 8.234l-.527-1.032.403-.812 1.015.07.895.616 1.844 1.252 1.924 1.268.691.433.163-.08V9.78l-.258-1.579-.353-2.405L7.372 3.57l.032-1.43L8.195 1l1.046.395.43 1.047.314 2.067.387 2.502.177 1.636.113.08.137-.08.644-1.329 1.175-2.067 1.047-1.748.822-.967 1.189-.532.823.74-.468 1.208-1.048 1.764-.887 1.62-.741 1.62-.29.58.145.112h.08l1.257-.854 1.909-1.189 1.732-.966 1.167-.403.483.403-.064.934-.548.725-1.765 1.06-1.684 1.05-.945.677.016.145.145.048 1.812-.258 2.228-.29 1.829-.113.806.645-.258.95-1.077.37-2.164.177-2.535.258-.645.113-.048.161.258.306.95 1.045 1.15 1.378.822 1.18.306 1.045-.516.645-1.045-.306-1.62-1.732-1.07-1.224-.644-.725-.225.08-.048.176.29 1.135.564 2.293.29 1.861v1.045l-.45.724-.95.096-.789-.628-.596-1.587-.66-2.26-.45-1.394-.177-.45-.193.031-.112.193-.354 1.748-.628 2.228-.627 1.7-.773 1.006-1.094.21-.563-.742.16-1.046.822-2.148.564-1.926.274-1.409-.016-.193-.177-.048-1.045.79-2.035 1.49-1.78 1.1-1.4.498-1.045-.338.016-.983z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-bianco/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bianco/40">
          <span>
            &copy; {new Date().getFullYear()} Il Doge di Venezia &middot;{" "}
            <a href="https://supalabs.co" target="_blank" rel="noopener noreferrer" className="hover:text-bianco/70 transition-colors">
              {CONTACT_INFO.piva}
            </a>
          </span>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-bianco/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Venice landscape full width */}
      <div className="w-full">
        <img
          src="/hero/landscape venezia (no-bg).png"
          alt="Venice skyline"
          className="w-full h-auto invert"
        />
      </div>
    </footer>
  );
}

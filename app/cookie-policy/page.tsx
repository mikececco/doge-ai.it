import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Cookie Policy - Il Doge di Venezia",
  description:
    "Informativa sull'utilizzo dei cookie sul sito doge-ai.it de Il Doge di Venezia.",
};

export default function CookiePolicy() {
  return (
    <SectionWrapper className="pt-40 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-section">Cookie Policy</h1>
        <p className="text-body text-grigio-scuro mt-4">
          Informativa sull&apos;utilizzo dei cookie ai sensi dell&apos;art. 122
          del D.Lgs. 196/2003 e del Regolamento UE 2016/679 (GDPR)
        </p>
        <p className="text-sm text-grigio-medio mt-2">
          Ultimo aggiornamento: 2 aprile 2026
        </p>

        <div className="blog-prose mt-12">
          <h2>1. Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti web visitati
            inviano al terminale dell&apos;utente (computer, tablet,
            smartphone), dove vengono memorizzati per essere ritrasmessi agli
            stessi siti alla visita successiva. I cookie sono utilizzati per
            diverse finalità, tra cui memorizzare le preferenze di navigazione,
            migliorare l&apos;esperienza dell&apos;utente e raccogliere
            informazioni statistiche anonime sulle visite.
          </p>

          <h2>2. Cookie tecnici (necessari)</h2>
          <p>
            Il sito utilizza cookie tecnici strettamente necessari al
            funzionamento e alla navigazione. Questi cookie non richiedono il
            consenso dell&apos;utente in quanto indispensabili per
            l&apos;erogazione del servizio.
          </p>
          <p>I cookie tecnici utilizzati includono:</p>
          <ul>
            <li>
              <strong>Cookie di sessione:</strong> necessari per gestire la
              sessione di navigazione e vengono cancellati alla chiusura del
              browser.
            </li>
            <li>
              <strong>Cookie di preferenza:</strong> utilizzati per memorizzare
              le preferenze dell&apos;utente (ad esempio, la scelta relativa al
              banner cookie).
            </li>
          </ul>

          <h2>3. Cookie analitici (Google Analytics)</h2>
          <p>
            Il sito utilizza Google Analytics, un servizio di analisi web fornito
            da Google LLC (&quot;Google&quot;). Google Analytics utilizza cookie
            per raccogliere e analizzare informazioni statistiche anonime
            sull&apos;utilizzo del sito.
          </p>
          <p>
            Le informazioni generate dal cookie sull&apos;utilizzo del sito
            (compreso l&apos;indirizzo IP, anonimizzato tramite la funzione{" "}
            <em>IP Anonymization</em>) vengono trasmesse a Google e depositate
            presso i suoi server.
          </p>
          <p>I cookie analitici utilizzati includono:</p>
          <ul>
            <li>
              <strong>_ga:</strong> utilizzato per distinguere gli utenti.
              Durata: 24 mesi.
            </li>
            <li>
              <strong>_ga_*:</strong> utilizzato per mantenere lo stato della
              sessione. Durata: 24 mesi.
            </li>
          </ul>
          <p>
            Google potrà trasferire queste informazioni a terzi ove ciò sia
            imposto dalla legge o laddove tali terzi trattino le suddette
            informazioni per conto di Google. Google non assocerà il vostro
            indirizzo IP a nessun altro dato posseduto da Google.
          </p>

          <h2>4. Cookie di profilazione</h2>
          <p>
            Allo stato attuale, il sito <strong>non utilizza</strong> cookie di
            profilazione propri. Qualora in futuro venissero implementati cookie
            di profilazione, la presente policy sarà aggiornata e sarà richiesto
            il consenso esplicito dell&apos;utente prima della loro
            installazione.
          </p>

          <h2>5. Come gestire e disabilitare i cookie</h2>
          <p>
            L&apos;utente può gestire le preferenze relative ai cookie
            direttamente tramite il banner di consenso presente sul sito, oppure
            attraverso le impostazioni del proprio browser.
          </p>
          <p>
            Di seguito i link alle istruzioni per la gestione dei cookie nei
            principali browser:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            La disabilitazione dei cookie potrebbe limitare la possibilità di
            utilizzare alcune funzionalità del sito.
          </p>
          <p>
            Per disabilitare specificamente i cookie di Google Analytics, è
            possibile installare il componente aggiuntivo del browser per la
            disattivazione di Google Analytics disponibile al seguente link:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2>6. Cookie policy di terze parti</h2>
          <p>
            Per maggiori informazioni sui cookie utilizzati dai servizi di terze
            parti, si prega di consultare le rispettive informative:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google - Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google - Utilizzo dei cookie
              </a>
            </li>
            <li>
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify - Privacy Policy
              </a>
            </li>
          </ul>

          <h2>7. Aggiornamenti alla presente policy</h2>
          <p>
            Il Titolare del trattamento si riserva il diritto di modificare la
            presente Cookie Policy in qualsiasi momento. Le eventuali modifiche
            saranno pubblicate su questa pagina con indicazione della data di
            ultimo aggiornamento. Si consiglia di consultare periodicamente
            questa pagina.
          </p>

          <h2>8. Contatti</h2>
          <p>
            Per qualsiasi domanda o richiesta relativa alla presente Cookie
            Policy, è possibile contattare il Titolare del trattamento:
          </p>
          <p>
            <strong>Il Doge di Venezia</strong>
            <br />
            Calle Polver del Fuoco 827/A, VENEZIA (VE), Italia
            <br />
            Email:{" "}
            <a href="mailto:dogedivenezia.ai@gmail.com">
              dogedivenezia.ai@gmail.com
            </a>
            <br />
            Sito web:{" "}
            <a
              href="https://doge-ai.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              doge-ai.it
            </a>
          </p>

          <p>
            Per ulteriori informazioni sul trattamento dei dati personali, si
            rimanda alla nostra <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

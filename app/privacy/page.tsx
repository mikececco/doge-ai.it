import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — Il Doge di Venezia",
  description:
    "Informativa sulla privacy ai sensi del Regolamento UE 2016/679 (GDPR) de Il Doge di Venezia.",
};

export default function Privacy() {
  return (
    <SectionWrapper className="pt-40 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-section">Privacy Policy</h1>
        <p className="text-body text-grigio-scuro mt-4">
          Informativa sul trattamento dei dati personali ai sensi dell&apos;art.
          13 del Regolamento UE 2016/679 (GDPR)
        </p>
        <p className="text-sm text-grigio-medio mt-2">
          Ultimo aggiornamento: 2 aprile 2026
        </p>

        <div className="blog-prose mt-12">
          <h2>1. Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati personali è{" "}
            <strong>Il Doge di Venezia</strong>, con sede legale in Calle Polver
            del Fuoco 827/A, VENEZIA (VE), Italia.
          </p>
          <p>
            P.IVA: IT04596950248
            <br />
            Email:{" "}
            <a href="mailto:dogedivenezia.ai@gmail.com">
              dogedivenezia.ai@gmail.com
            </a>
            <br />
            Telefono: <a href="tel:+393468889545">+39 346 8889545</a>
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

          <h2>2. Dati raccolti</h2>
          <p>
            Il Titolare raccoglie e tratta le seguenti categorie di dati
            personali:
          </p>
          <h3>Dati forniti volontariamente dall&apos;utente</h3>
          <ul>
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Nome dell&apos;azienda</li>
            <li>
              Qualsiasi altra informazione fornita tramite i moduli di contatto
            </li>
          </ul>
          <h3>Dati raccolti automaticamente</h3>
          <ul>
            <li>Indirizzo IP (anonimizzato)</li>
            <li>Tipo di browser e dispositivo</li>
            <li>Pagine visitate e tempo di permanenza</li>
            <li>Sorgente di traffico (referral)</li>
            <li>
              Dati di navigazione raccolti tramite cookie (vedi{" "}
              <a href="/cookie-policy">Cookie Policy</a>)
            </li>
          </ul>

          <h2>3. Finalità del trattamento</h2>
          <p>I dati personali sono trattati per le seguenti finalità:</p>
          <ul>
            <li>
              <strong>Gestione delle richieste di contatto:</strong> rispondere
              alle richieste inviate tramite il modulo di contatto o via email.
            </li>
            <li>
              <strong>Invio di comunicazioni informative (newsletter):</strong>{" "}
              previo consenso esplicito, per inviare aggiornamenti su servizi,
              contenuti e novità.
            </li>
            <li>
              <strong>Analisi statistiche:</strong> per comprendere come gli
              utenti utilizzano il sito e migliorarne l&apos;esperienza di
              navigazione.
            </li>
            <li>
              <strong>Adempimenti legali:</strong> per rispondere ad obblighi
              previsti dalla legge, da regolamenti o dalla normativa europea.
            </li>
          </ul>

          <h2>4. Base giuridica del trattamento</h2>
          <p>
            Il trattamento dei dati personali si basa sulle seguenti basi
            giuridiche:
          </p>
          <ul>
            <li>
              <strong>Consenso (art. 6, par. 1, lett. a GDPR):</strong> per
              l&apos;invio di newsletter e comunicazioni di marketing.
            </li>
            <li>
              <strong>
                Esecuzione di misure precontrattuali (art. 6, par. 1, lett. b
                GDPR):
              </strong>{" "}
              per la gestione delle richieste di contatto e informazioni sui
              servizi.
            </li>
            <li>
              <strong>
                Legittimo interesse (art. 6, par. 1, lett. f GDPR):
              </strong>{" "}
              per l&apos;analisi statistica del traffico web e il miglioramento
              del servizio.
            </li>
            <li>
              <strong>Obbligo legale (art. 6, par. 1, lett. c GDPR):</strong>{" "}
              per adempiere a obblighi di legge.
            </li>
          </ul>

          <h2>5. Destinatari dei dati</h2>
          <p>
            I dati personali potranno essere comunicati alle seguenti categorie
            di soggetti:
          </p>
          <ul>
            <li>
              <strong>Netlify, Inc.</strong> — servizio di hosting del sito web
              (server situati nell&apos;UE/USA, conforme alle Standard
              Contractual Clauses).
            </li>
            <li>
              <strong>Google LLC (Google Analytics)</strong> — servizio di
              analisi web con IP anonimizzato (conforme alle Standard Contractual
              Clauses).
            </li>
            <li>
              <strong>Consulenti e professionisti</strong> — ove necessario per
              adempimenti fiscali, legali o contabili.
            </li>
          </ul>
          <p>
            I dati non saranno in alcun caso venduti a terze parti o diffusi
            senza il consenso dell&apos;interessato.
          </p>

          <h2>6. Trasferimento dei dati extra-UE</h2>
          <p>
            Alcuni dei servizi terzi utilizzati (Netlify, Google Analytics)
            potrebbero comportare il trasferimento dei dati verso gli Stati
            Uniti. Tali trasferimenti avvengono sulla base di adeguate garanzie
            ai sensi dell&apos;art. 46 del GDPR, incluse le Standard Contractual
            Clauses approvate dalla Commissione Europea e la decisione di
            adeguatezza del EU-U.S. Data Privacy Framework.
          </p>

          <h2>7. Periodo di conservazione</h2>
          <p>I dati personali saranno conservati per i seguenti periodi:</p>
          <ul>
            <li>
              <strong>Dati di contatto:</strong> per il tempo necessario a
              gestire la richiesta e per un massimo di 24 mesi dalla raccolta,
              salvo diversa necessità legale.
            </li>
            <li>
              <strong>Dati per newsletter:</strong> fino alla revoca del consenso
              da parte dell&apos;interessato.
            </li>
            <li>
              <strong>Dati di navigazione e analytics:</strong> per un massimo di
              26 mesi dalla raccolta, in forma anonimizzata.
            </li>
            <li>
              <strong>Dati per obblighi legali:</strong> per il periodo richiesto
              dalla normativa applicabile.
            </li>
          </ul>

          <h2>8. Diritti dell&apos;interessato</h2>
          <p>
            Ai sensi degli articoli 15-22 del GDPR, l&apos;interessato ha il
            diritto di:
          </p>
          <ul>
            <li>
              <strong>Accesso:</strong> ottenere conferma dell&apos;esistenza di
              un trattamento e accedere ai propri dati personali.
            </li>
            <li>
              <strong>Rettifica:</strong> ottenere la correzione di dati
              inesatti o l&apos;integrazione di dati incompleti.
            </li>
            <li>
              <strong>Cancellazione:</strong> ottenere la cancellazione dei
              propri dati personali, ove ne ricorrano i presupposti.
            </li>
            <li>
              <strong>Limitazione:</strong> ottenere la limitazione del
              trattamento nei casi previsti dalla normativa.
            </li>
            <li>
              <strong>Portabilità:</strong> ricevere i propri dati in formato
              strutturato e leggibile da dispositivo automatico.
            </li>
            <li>
              <strong>Opposizione:</strong> opporsi al trattamento dei propri
              dati per motivi legittimi.
            </li>
            <li>
              <strong>Revoca del consenso:</strong> revocare in qualsiasi momento
              il consenso prestato, senza pregiudicare la liceità del
              trattamento basato sul consenso prestato prima della revoca.
            </li>
          </ul>
          <p>
            Per esercitare tali diritti, è possibile contattare il Titolare
            all&apos;indirizzo email{" "}
            <a href="mailto:dogedivenezia.ai@gmail.com">
              dogedivenezia.ai@gmail.com
            </a>
            .
          </p>
          <p>
            L&apos;interessato ha inoltre il diritto di proporre reclamo
            all&apos;Autorità Garante per la Protezione dei Dati Personali (
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.garanteprivacy.it
            </a>
            ).
          </p>

          <h2>9. Cookie</h2>
          <p>
            Il sito utilizza cookie tecnici e, previo consenso, cookie analitici.
            Per informazioni dettagliate sui cookie utilizzati, si rimanda alla{" "}
            <a href="/cookie-policy">Cookie Policy</a>.
          </p>

          <h2>10. Modifiche alla presente informativa</h2>
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla
            presente informativa in qualsiasi momento. Le modifiche saranno
            pubblicate su questa pagina con indicazione della data di ultimo
            aggiornamento. Si invitano gli utenti a consultare periodicamente
            questa pagina per verificare eventuali aggiornamenti.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

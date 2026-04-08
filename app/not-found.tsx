import Link from "next/link";
import Button from "@/components/ui/Button";

const SUGGESTED_LINKS = [
  { label: "Home", href: "/", description: "Torna alla pagina principale" },
  { label: "Soluzioni AI", href: "/soluzioni", description: "Scopri le nostre soluzioni per le PMI" },
  { label: "Casi d'Uso", href: "/casi-duso", description: "Esplora come l'AI trasforma le aziende" },
  { label: "Blog", href: "/blog", description: "Articoli e approfondimenti sull'AI" },
  { label: "Chi Siamo", href: "/chi-siamo", description: "Il team dietro IL DOGE DI VENEZIA" },
  { label: "Contatti", href: "/contatti", description: "Parliamo del tuo progetto" },
];

export default function NotFound() {
  return (
    <section className="bg-nero text-bianco min-h-screen flex flex-col justify-center">
      <div className="container-site py-24 text-center">
        <span className="text-label uppercase text-giallo tracking-widest">
          Errore 404
        </span>
        <h1 className="text-hero uppercase mt-4 text-bianco">
          Pagina non trovata.
        </h1>
        <p className="text-subheadline mt-6 text-bianco/60 max-w-[600px] mx-auto">
          La pagina che cerchi non esiste o &egrave; stata spostata.
          Ecco alcune pagine che potrebbero interessarti.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-16 border border-bianco/20 max-w-[900px] mx-auto">
          {SUGGESTED_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group p-6 text-left hover:bg-giallo hover:text-nero transition-colors duration-200
                ${i < 3 ? "border-b border-bianco/20" : ""}
                ${i % 3 !== 2 ? "lg:border-r border-bianco/20" : ""}
                ${i % 2 === 0 && i < 4 ? "sm:border-r border-bianco/20" : ""}
              `}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {link.label}
              </h3>
              <p className="text-xs text-bianco/50 group-hover:text-nero/60 mt-2 transition-colors">
                {link.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Button variant="primary" href="/" arrow>
            Torna alla Home
          </Button>
        </div>
      </div>
    </section>
  );
}

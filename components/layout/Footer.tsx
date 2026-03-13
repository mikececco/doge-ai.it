import Link from "next/link";
import DogeLogo from "@/components/icons/DogeLogo";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-nero text-bianco">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <DogeLogo light />
            <p className="mt-4 text-sm text-bianco/60 max-w-[280px]">
              Definiamo e realizziamo la strategia AI della tua azienda alla velocità di una startup.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-label uppercase text-bianco/40 mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bianco/70 hover:text-giallo transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <h4 className="text-label uppercase text-bianco/40 mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm text-bianco/70">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-giallo transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-bianco/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bianco/40">
          <span>
            © {new Date().getFullYear()} Il Doge di Venezia · {CONTACT_INFO.piva} · In collaborazione con{" "}
            <a href="https://supalabs.co" target="_blank" rel="noopener noreferrer" className="hover:text-bianco/70 transition-colors">
              supalabs.co
            </a>
          </span>
          <div className="flex gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-bianco/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

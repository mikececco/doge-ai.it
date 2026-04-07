"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "@/components/ui/Button";

const GATE_COOKIE = "codice-del-doge-access";
const FREE_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "libero.it", "virgilio.it", "alice.it", "tin.it", "tiscali.it"];

type EmailGateProps = {
  children: React.ReactNode;
  preview: React.ReactNode;
};

export default function EmailGate({ children, preview }: EmailGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (Cookies.get(GATE_COOKIE) || localStorage.getItem(GATE_COOKIE)) {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim().toLowerCase();

    // Basic email validation
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setError("Inserisci un indirizzo email valido.");
      return;
    }

    // Check for work email
    const domain = trimmed.split("@")[1];
    if (FREE_DOMAINS.includes(domain)) {
      setError("Per favore usa la tua email aziendale.");
      return;
    }

    setSubmitting(true);

    // Save to cookie (365 days) + localStorage as backup
    Cookies.set(GATE_COOKIE, trimmed, { expires: 365 });
    localStorage.setItem(GATE_COOKIE, trimmed);

    // TODO: Send email to your CRM/Notion/webhook here
    // For now just unlock
    setTimeout(() => {
      setUnlocked(true);
      setSubmitting(false);
    }, 500);
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Preview content with fade overlay */}
      <div className="relative">
        {preview}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-bianco to-transparent pointer-events-none" />
      </div>

      {/* Email gate */}
      <section className="bg-bianco text-nero py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-[500px] mx-auto text-center">
            <div className="mb-6">
              <img src="/icon/logoB-noBG.png" alt="" width={48} height={48} className="mx-auto opacity-60" />
            </div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold uppercase">
              Il Codice del Doge
            </h2>
            <p className="text-body text-nero/70 mt-4">
              Il nostro processo, completamente aperto. Inserisci la tua email
              aziendale per accedere al framework completo.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="nome@tuaazienda.it"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border-2 border-nero/20 text-sm focus:border-nero focus:outline-none transition-colors"
                />
                <Button variant="dark" size="md" uppercase type="submit" disabled={submitting} className="shrink-0">
                  {submitting ? "..." : "Accedi"}
                </Button>
              </div>
              {error && (
                <p className="text-sm text-red-600 mt-3 text-left">{error}</p>
              )}
              <p className="text-xs text-nero/40 mt-4">
                Nessuno spam. Solo il framework. Usiamo la tua email per capire chi legge il nostro processo.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

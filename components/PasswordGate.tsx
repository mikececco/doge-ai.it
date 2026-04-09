"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "@/components/ui/Button";

const GATE_COOKIE = "programma-partner-access";
const PASSWORD = "doge2026";

type PasswordGateProps = {
  children: React.ReactNode;
};

export default function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (Cookies.get(GATE_COOKIE) || localStorage.getItem(GATE_COOKIE)) {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== PASSWORD) {
      setError("Password non valida.");
      return;
    }

    Cookies.set(GATE_COOKIE, "true", { expires: 30 });
    localStorage.setItem(GATE_COOKIE, "true");
    setUnlocked(true);
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <section data-navbar-theme="light" className="bg-bianco text-nero min-h-screen flex items-center">
      <div className="container-site">
        <div className="max-w-[420px] mx-auto text-center">
          <div className="mb-6">
            <img src="/icon/logoB-noBG.png" alt="" width={48} height={48} className="mx-auto opacity-60" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold uppercase">
            Accedi
          </h2>
          <p className="text-body text-nero/70 mt-4">
            Questa pagina è riservata. Inserisci la password per accedere.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 px-4 py-2 border-2 border-nero/20 text-sm focus:border-nero focus:outline-none transition-colors"
              />
              <Button variant="dark" size="md" uppercase type="submit" className="shrink-0">
                Accedi
              </Button>
            </div>
            {error && (
              <p className="text-sm text-red-600 mt-3 text-left">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

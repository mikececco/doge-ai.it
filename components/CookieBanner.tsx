"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    Cookies.set(COOKIE_KEY, "accepted", { expires: 365 });
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
    setVisible(false);
  };

  const reject = () => {
    Cookies.set(COOKIE_KEY, "rejected", { expires: 365 });
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-nero text-bianco border-t border-bianco/10"
        >
          <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-bianco/80">
              Questo sito utilizza cookie per migliorare la tua esperienza.{" "}
              <Link
                href="/cookie-policy"
                className="underline decoration-giallo underline-offset-2 hover:text-giallo transition-colors"
              >
                Cookie Policy
              </Link>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={reject}
                className="px-3 py-1 sm:px-5 text-sm font-semibold border border-bianco/30 text-bianco hover:border-bianco transition-colors cursor-pointer"
              >
                Rifiuta
              </button>
              <button
                onClick={accept}
                className="px-3 py-1 sm:px-5 text-sm font-semibold bg-giallo text-nero hover:bg-giallo-hover transition-colors cursor-pointer"
              >
                Accetta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

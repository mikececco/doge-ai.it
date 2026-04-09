"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import Button from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const ACCORDION_ITEMS = ["/settori", "/incentivi", "/soluzioni"];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [risorseOpen, setRisorseOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-nero flex flex-col justify-center items-center pt-16 lg:hidden"
        >
          <nav className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => {
              if ("children" in item) {
                const primary = item.children.filter(
                  (c) => !ACCORDION_ITEMS.includes(c.href)
                );
                const secondary = item.children.filter((c) =>
                  ACCORDION_ITEMS.includes(c.href)
                );

                return [
                  ...primary.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="text-2xl font-semibold text-bianco hover:text-giallo transition-colors"
                    >
                      {child.label}
                    </Link>
                  )),
                  secondary.length > 0 && (
                    <div key="risorse" className="flex flex-col items-center">
                      <button
                        onClick={() => setRisorseOpen(!risorseOpen)}
                        className="text-2xl font-semibold text-bianco hover:text-giallo transition-colors cursor-pointer flex items-center gap-2"
                      >
                        Risorse
                        <span
                          className={`text-sm transition-transform duration-200 ${
                            risorseOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                      <AnimatePresence>
                        {risorseOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden flex flex-col items-center gap-3 mt-3"
                          >
                            {secondary.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="text-lg text-bianco/60 hover:text-giallo transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ),
                ];
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl font-semibold text-bianco hover:text-giallo transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-6" onClick={onClose}>
              <Button href="/contatti" variant="primary">
                Contattaci
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

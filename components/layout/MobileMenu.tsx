"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import Button from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-nero flex flex-col justify-center items-center lg:hidden"
        >
          <nav className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => {
              if ("children" in item) {
                return item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="text-2xl font-semibold text-bianco hover:text-giallo transition-colors"
                  >
                    {child.label}
                  </Link>
                ));
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
            <div className="mt-6">
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

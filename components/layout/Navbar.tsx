"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import DogeLogo from "@/components/icons/DogeLogo";
import Button from "@/components/ui/Button";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [compact, setCompact] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
    }

    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (isHome) setScrolled(y > 80);
      // Compact when scrolling down past 50px
      setCompact(y > 50 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /** Check if a nav link is active based on current pathname */
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  /** Check if any child of a dropdown is active */
  const isDropdownActive = (children: readonly { href: string }[]) =>
    children.some((c) => isActive(c.href));

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
          compact ? "h-[52px] backdrop-blur-lg bg-bianco/98 shadow-navbar" :
          scrolled
            ? "h-16 bg-bianco/95 backdrop-blur-md shadow-navbar"
            : "h-16 bg-transparent text-nero"
        }`}
      >
        <div className="container-site flex items-center justify-between w-full">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <Image src="/icon/logoB-noBG.png" alt="Doge icon" width={28} height={28} priority />
            <DogeLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              if ("children" in item) {
                const active = isDropdownActive(item.children);
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors cursor-pointer pb-1 ${
                        active ? "border-b-2 border-[#FDE732]" : ""
                      } ${
                        scrolled ? "text-nero hover:text-giallo-hover" : "text-nero/80 hover:text-nero"
                      }`}
                    >
                      {item.label}
                      <span className="ml-1 text-xs">▾</span>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-bianco   py-2 min-w-[180px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-nero hover:bg-grigio-chiaro hover:text-giallo-hover transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors pb-1 ${
                    active ? "border-b-2 border-[#FDE732]" : ""
                  } ${
                    scrolled ? "text-nero hover:text-giallo-hover" : "text-nero/80 hover:text-nero"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button variant="dark" href="/contatti">
              Contattaci
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-2 bg-bianco"
                : "bg-nero"
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : "bg-nero"
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-2 bg-bianco"
                : "bg-nero"
            }`} />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

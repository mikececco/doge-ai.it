"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Image from "next/image";
import DogeLogo from "@/components/icons/DogeLogo";
import MobileMenu from "./MobileMenu";

type NavTheme = "light" | "dark" | "giallo";

const themeConfig = {
  light: {
    bg: "bg-bianco/95 backdrop-blur-md",
    text: "text-nero",
    border: "border-nero",
    hoverText: "hover:text-giallo-hover",
    icon: "/icon/logoB-noBG.png",
    logoLight: false,
    dropdownBg: "bg-bianco",
    dropdownText: "text-nero",
    dropdownHover: "hover:bg-grigio-chiaro hover:text-giallo-hover",
    hamburger: "bg-nero",
  },
  dark: {
    bg: "bg-nero/95 backdrop-blur-md",
    text: "text-bianco",
    border: "border-bianco/20",
    hoverText: "hover:text-giallo",
    icon: "/icon/logoW-noBG.png",
    logoLight: true,
    dropdownBg: "bg-nero",
    dropdownText: "text-bianco",
    dropdownHover: "hover:bg-bianco/10 hover:text-giallo",
    hamburger: "bg-bianco",
  },
  giallo: {
    bg: "bg-giallo/95 backdrop-blur-md",
    text: "text-nero",
    border: "border-nero",
    hoverText: "hover:text-nero/70",
    icon: "/icon/logoB-noBG.png",
    logoLight: false,
    dropdownBg: "bg-giallo",
    dropdownText: "text-nero",
    dropdownHover: "hover:bg-nero/10",
    hamburger: "bg-nero",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<NavTheme>("light");

  // Detect navbar theme from the section currently at the top of the viewport
  useEffect(() => {
    const detect = () => {
      const sections = document.querySelectorAll("[data-navbar-theme]");
      if (sections.length === 0) return;

      // Find the section whose top is closest to (but not far below) the navbar
      let best: HTMLElement | undefined;
      let bestTop = -Infinity;
      const navBottom = 64; // navbar height

      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        const top = rect.top;
        if (top <= navBottom && top > bestTop) {
          bestTop = top;
          best = s as HTMLElement;
        }
      });

      const target = best ?? (sections[0] as HTMLElement);
      const theme = target?.dataset.navbarTheme as NavTheme | undefined;
      if (theme) setNavTheme(theme);
    };

    // Run immediately + after paint (for client-side nav)
    detect();
    const rafId = requestAnimationFrame(detect);

    // Listen to scroll
    window.addEventListener("scroll", detect, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", detect);
    };
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isDropdownActive = (children: readonly { href: string }[]) =>
    children.some((c) => isActive(c.href));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const theme = themeConfig[navTheme];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center h-16 transition-all duration-300 border-t-[2px] border-b-[2px] ${theme.bg} ${theme.border}`}
      >
        <div className="container-site flex items-center justify-between w-full h-full">
          <div className="hidden lg:flex items-center gap-6 h-full">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 h-full">
              <Image src={theme.icon} alt="Doge icon" width={28} height={28} priority />
              <DogeLogo light={theme.logoLight} />
            </Link>
            <div className={`w-0 h-full border-l-[2px] ${theme.border}`} />
          </div>
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex lg:hidden items-center gap-2">
            <Image src={theme.icon} alt="Doge icon" width={28} height={28} priority />
            <DogeLogo light={theme.logoLight} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {NAV_ITEMS.map((item) => {
              if ("children" in item) {
                const active = isDropdownActive(item.children);
                return (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors cursor-pointer ${
                        active ? "underline decoration-2 decoration-[#FDE732] underline-offset-4" : ""
                      } ${theme.text} ${theme.hoverText}`}
                    >
                      {item.label}
                      <span className="ml-1 text-xs">▾</span>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className={`${theme.dropdownBg} py-2 min-w-[180px]`}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2 text-sm ${theme.dropdownText} ${theme.dropdownHover} transition-colors`}
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
                  className={`text-sm font-medium transition-colors ${
                    active ? "underline decoration-2 decoration-[#FDE732] underline-offset-4" : ""
                  } ${theme.text} ${theme.hoverText}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className={`w-0 h-full border-l-[2px] ${theme.border}`} />
            <Button variant="dark" href="/contatti" arrow>
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
              mobileOpen ? "rotate-45 translate-y-2 bg-bianco" : theme.hamburger
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : theme.hamburger
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2 bg-bianco" : theme.hamburger
            }`} />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nero: "#1A1A1A",
        bianco: "#FFFFFF",
        giallo: "#FDE732",
        "giallo-hover": "#E3D02D",
        "grigio-chiaro": "#F5F5F5",
        "grigio-medio": "#888888",
        "grigio-scuro": "#444444",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Home hero (biggest)
        "hero-home": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1.05", fontWeight: "700" }],
        // Hero
        "hero": ["clamp(1.75rem, 5.5vw, 4.5rem)", { lineHeight: "1.05", fontWeight: "700" }],
        // Section title
        "section": ["clamp(1.75rem, 5.5vw, 4.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        // Subheadline
        "subheadline": ["clamp(1.35rem, 2.2vw, 1.65rem)", { lineHeight: "1.3", fontWeight: "400" }],
        // Body
        "body": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        // Label
        "label": ["0.8125rem", { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.08em" }],
        // Metric numbers
        "metric": ["clamp(2.5rem, 4vw, 4rem)", { lineHeight: "1", fontWeight: "700" }],
      },
      maxWidth: {
        site: "1680px",
      },
      spacing: {
        section: "96px",
        "section-mobile": "48px",
      },
      borderWidth: {
        DEFAULT: "4px",
      },
      borderRadius: {
        card: "0px",
        button: "0px",
      },
      boxShadow: {
        card: "none",
        "card-hover": "none",
        navbar: "0 1px 0 rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-speed, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

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
        giallo: "#FFE500",
        "giallo-hover": "#E6CE00",
        "grigio-chiaro": "#F5F5F5",
        "grigio-medio": "#888888",
        "grigio-scuro": "#444444",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Hero
        "hero": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", fontWeight: "700" }],
        // Section title
        "section": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", fontWeight: "700" }],
        // Subheadline
        "subheadline": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3", fontWeight: "400" }],
        // Body
        "body": ["1.0625rem", { lineHeight: "1.6", fontWeight: "400" }],
        // Label
        "label": ["0.8125rem", { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.08em" }],
        // Metric numbers
        "metric": ["clamp(2.5rem, 4vw, 4rem)", { lineHeight: "1", fontWeight: "700" }],
      },
      maxWidth: {
        site: "1200px",
      },
      spacing: {
        section: "96px",
        "section-mobile": "64px",
      },
      borderRadius: {
        card: "6px",
        button: "6px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 6px 24px rgba(0, 0, 0, 0.10)",
        navbar: "0 2px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;

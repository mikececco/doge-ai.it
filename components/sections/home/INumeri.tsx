"use client";

import Counter from "@/components/animations/Counter";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const metrics = [
  {
    target: 30,
    suffix: "%",
    prefix: "",
    label: "Riduzione costi target, con ROI misurabile in 6 mesi.",
  },
  {
    target: 3,
    suffix: " MESI",
    prefix: "<",
    label: "Payback medio sull'investimento.",
  },
  {
    target: 60,
    suffix: " GIORNI",
    prefix: "<",
    label: "Dal primo audit all'AI in produzione.",
  },
  {
    target: 25,
    suffix: "",
    prefix: "+",
    label: "Professionisti da strategia a implementazione.",
  },
  {
    target: 100,
    suffix: "",
    prefix: "+",
    label: "Startup partner per accedere alle migliori soluzioni.",
  },
];

export default function INumeri() {
  return (
    <section data-navbar-theme="light" className="text-nero" id="i-numeri">
      {/* Metrics grid with black border cells */}
      <FadeInOnScroll>
        <div className="max-w-site mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 border border-nero bg-giallo">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`px-3 py-4 md:px-6 md:py-8 text-center ${i < metrics.length - 1 ? "md:border-r border-nero" : ""} ${i < metrics.length - 2 ? "border-b md:border-b-0 border-nero" : ""}`}
            >
              <Counter
                target={metric.target}
                suffix={metric.suffix}
                prefix={metric.prefix}
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-nero leading-none"
              />
              <p className="text-xs text-nero/70 mt-3 leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}

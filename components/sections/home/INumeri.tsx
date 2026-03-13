"use client";

import Counter from "@/components/animations/Counter";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const metrics = [
  {
    target: 30,
    suffix: "%",
    prefix: "15–",
    label: "Riduzione costi target",
  },
  {
    target: 30,
    suffix: " GG",
    prefix: "",
    label: "Dal primo audit all’AI in produzione",
  },
  {
    target: 33,
    suffix: "x",
    prefix: "",
    label: "Moltiplicatore sull’investimento",
  },
  {
    target: 25,
    suffix: "",
    prefix: "+",
    label: "Professionisti AI nel team",
  },
];

export default function INumeri() {
  return (
    <section className="bg-grigio-chiaro py-20" id="i-numeri">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {metrics.map((metric, i) => (
            <FadeInOnScroll key={i}>
              <div className="flex flex-col items-center gap-3">
                <Counter
                  target={metric.target}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  className="text-metric text-nero"
                />
                <span className="text-label uppercase text-grigio-medio tracking-widest">
                  {metric.label}
                </span>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

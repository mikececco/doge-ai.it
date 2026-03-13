"use client";

import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export default function IlManifesto() {
  return (
    <section className="bg-nero py-[120px]" id="manifesto">
      <div className="container-site">
        <FadeInOnScroll className="max-w-[800px] mx-auto text-center">
          <h2 className="text-bianco text-[clamp(2.5rem,4vw,4rem)] font-bold leading-tight">
            La finestra &egrave; aperta. Per altri 18 mesi.
          </h2>
          <p className="text-bianco/60 text-xl leading-[1.7] mt-10">
            L&rsquo;AI ha raggiunto l&rsquo;inflection point. I modelli del
            2026 fanno cose che 12 mesi fa erano fantascienza. La maggior parte
            delle PMI italiane &egrave; ferma. Chi si muove adesso costruisce un
            vantaggio che diventa strutturale. Chi aspetta trova solo il costo di
            stare nel mercato.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

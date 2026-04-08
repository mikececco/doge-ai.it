"use client";

import { useState } from "react";

export default function EbitdaCalculator() {
  const [investimento, setInvestimento] = useState(300);
  const [savingPct, setSavingPct] = useState(500);
  const [multiplo, setMultiplo] = useState(10);

  const savingAnnuo = savingPct;
  const impatto = savingAnnuo * multiplo;
  const roi = savingAnnuo > 0 ? Math.round((impatto / investimento) * 10) / 10 : 0;

  const fmt = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}M`;
    return `${n}K`;
  };

  return (
    <div className="border border-nero">
      {/* Header */}
      <div className="px-4 py-6 md:px-8 md:py-8 text-center border-b border-nero">
        <p className="text-body text-nero leading-relaxed max-w-[600px] mx-auto">
          Assumendo un multiplo su EBITDA di{" "}
          <strong className="text-nero">{multiplo}x</strong>, ogni{" "}
          <strong className="text-nero">&euro;{fmt(investimento)}</strong> investiti generano{" "}
          <strong className="text-nero">&euro;{fmt(impatto)}</strong> di valuation in pi&ugrave; all&rsquo;exit.
        </p>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-nero">
        {/* Investimento */}
        <div className="px-4 py-5 md:px-6 md:py-6 md:border-r border-b md:border-b-0 border-nero">
          <label className="text-xs font-bold uppercase tracking-wider text-nero/60 block mb-3">
            Investimento AI
          </label>
          <input
            type="range"
            min={50}
            max={2000}
            step={50}
            value={investimento}
            onChange={(e) => setInvestimento(Number(e.target.value))}
            className="w-full accent-giallo cursor-pointer"
          />
          <div className="text-xl md:text-2xl font-bold text-nero mt-2">
            &euro;{fmt(investimento)}
          </div>
        </div>

        {/* Saving Annuo */}
        <div className="px-4 py-5 md:px-6 md:py-6 md:border-r border-b md:border-b-0 border-nero">
          <label className="text-xs font-bold uppercase tracking-wider text-nero/60 block mb-3">
            Saving operativo annuo
          </label>
          <input
            type="range"
            min={50}
            max={5000}
            step={100}
            value={savingPct}
            onChange={(e) => setSavingPct(Number(e.target.value))}
            className="w-full accent-giallo cursor-pointer"
          />
          <div className="text-xl md:text-2xl font-bold text-nero mt-2">
            &euro;{fmt(savingAnnuo)}
          </div>
        </div>

        {/* Multiplo EBITDA */}
        <div className="px-4 py-5 md:px-6 md:py-6">
          <label className="text-xs font-bold uppercase tracking-wider text-nero/60 block mb-3">
            Multiplo EBITDA
          </label>
          <input
            type="range"
            min={5}
            max={20}
            step={1}
            value={multiplo}
            onChange={(e) => setMultiplo(Number(e.target.value))}
            className="w-full accent-giallo cursor-pointer"
          />
          <div className="text-xl md:text-2xl font-bold text-nero mt-2">{multiplo}x</div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="px-4 py-4 md:px-6 md:py-5 md:border-r border-b md:border-b-0 border-nero text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-nero/60">
            Investimento
          </p>
          <p className="text-xl font-bold text-nero mt-1">
            &euro;{fmt(investimento)}
          </p>
        </div>
        <div className="px-4 py-4 md:px-6 md:py-5 md:border-r border-b md:border-b-0 border-nero text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-nero/60">
            Saving annuo
          </p>
          <p className="text-xl font-bold text-nero mt-1">
            &euro;{fmt(savingAnnuo)}
          </p>
        </div>
        <div className="px-4 py-4 md:px-6 md:py-5 md:border-r border-b md:border-b-0 border-nero text-center bg-giallo">
          <p className="text-xs font-bold uppercase tracking-wider text-nero/60">
            Impatto valuation
          </p>
          <p className="text-2xl font-bold text-nero mt-1">
            &euro;{fmt(impatto)}
          </p>
        </div>
        <div className="px-4 py-4 md:px-6 md:py-5 text-center bg-nero text-bianco">
          <p className="text-xs font-bold uppercase tracking-wider text-bianco/60">
            ROI
          </p>
          <p className="text-2xl font-bold text-giallo mt-1">{roi}x</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

const FONTE_OPTIONS = [
  { value: "", label: "Seleziona..." },
  { value: "linkedin", label: "LinkedIn" },
  { value: "passaparola", label: "Passaparola" },
  { value: "fondo-pe", label: "Fondo PE" },
  { value: "altro", label: "Altro" },
];

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full border border-[#DDDDDD] p-3 text-base focus:border-nero outline-none transition-colors";
  const labelClass = "block text-xs font-bold uppercase tracking-wider text-grigio-medio mb-2";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-10 bg-bianco">
        <div className="container-site">
          <FadeInOnScroll>
            <h1 className="text-hero max-w-3xl">
              La prima conversazione è gratuita. Sempre.
            </h1>
            <p className="text-subheadline text-grigio-scuro mt-6 max-w-[560px]">
              Non vendiamo nulla alla prima call. Ascoltiamo, facciamo le domande
              giuste, e diciamo onestamente se e dove l&apos;AI può avere impatto
              per la tua azienda.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Form + Contatti Diretti */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form — 60% */}
          <div className="lg:col-span-3">
            {submitted ? (
              <FadeInOnScroll>
                <div className="bg-grigio-chiaro p-12 text-center">
                  <h2 className="text-2xl font-bold">Messaggio inviato.</h2>
                  <p className="text-grigio-scuro mt-4">
                    Ti risponderemo entro 24 ore.
                  </p>
                </div>
              </FadeInOnScroll>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                  <input type="text" tabIndex={-1} {...register("honeypot")} />
                </div>

                <div>
                  <label htmlFor="nome" className={labelClass}>
                    Nome e Cognome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    className={inputClass}
                    {...register("nome")}
                  />
                  {errors.nome && (
                    <p className={errorClass}>{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="azienda" className={labelClass}>
                    Azienda
                  </label>
                  <input
                    id="azienda"
                    type="text"
                    className={inputClass}
                    {...register("azienda")}
                  />
                  {errors.azienda && (
                    <p className={errorClass}>{errors.azienda.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="ruolo" className={labelClass}>
                    Ruolo
                  </label>
                  <input
                    id="ruolo"
                    type="text"
                    className={inputClass}
                    {...register("ruolo")}
                  />
                  {errors.ruolo && (
                    <p className={errorClass}>{errors.ruolo.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputClass}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className={errorClass}>{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" className={labelClass}>
                    Telefono (opzionale)
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    className={inputClass}
                    {...register("telefono")}
                  />
                </div>

                <div>
                  <label htmlFor="messaggio" className={labelClass}>
                    Come possiamo aiutarti?
                  </label>
                  <textarea
                    id="messaggio"
                    className={`${inputClass} h-[140px] resize-none`}
                    maxLength={500}
                    {...register("messaggio")}
                  />
                  {errors.messaggio && (
                    <p className={errorClass}>{errors.messaggio.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="fonte" className={labelClass}>
                    Come ci hai trovato?
                  </label>
                  <select
                    id="fonte"
                    className={inputClass}
                    {...register("fonte")}
                  >
                    {FONTE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={!opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.fonte && (
                    <p className={errorClass}>{errors.fonte.message}</p>
                  )}
                </div>

                <Button type="submit" disabled={submitting}>
                  {submitting ? "Invio in corso..." : "Invia →"}
                </Button>

                <p className="text-label text-grigio-medio">
                  Risponderemo entro 24 ore.
                </p>
              </form>
            )}
          </div>

          {/* Contatti diretti — 40% */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold">Contatti diretti</h2>

            <div className="mt-8 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-grigio-medio">
                  Email
                </p>
                <a
                  href="mailto:dogedivenezia.ai@gmail.com"
                  className="text-nero hover:text-giallo-hover transition-colors mt-1 block"
                >
                  dogedivenezia.ai@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-grigio-medio">
                  Telefono
                </p>
                <p className="mt-1">+39 345 9656145</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-grigio-medio">
                  Indirizzo
                </p>
                <p className="mt-1">
                  Via Giardino Generale, 6
                  <br />
                  31017, Pieve del Grappa (TV)
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

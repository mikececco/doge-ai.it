"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { motion, AnimatePresence } from "framer-motion";

type FormStage = "idle" | "submitting" | "success" | "error";

function AnimatedCheckmark() {
  return (
    <svg
      viewBox="0 0 52 52"
      className="w-16 h-16 mx-auto"
      aria-hidden="true"
    >
      <circle
        cx="26"
        cy="26"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-nero/20"
      />
      <motion.path
        d="M14 27l8 8 16-16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-nero"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 inline-block"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />
      <path
        d="M4 12a8 8 0 018-8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-75"
      />
    </svg>
  );
}

const CONTATTO_OPTIONS = [
  { value: "", label: "Seleziona..." },
  { value: "email", label: "Email" },
  { value: "telefono", label: "Telefono" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "videochiamata", label: "Videochiamata" },
];

export default function ContattiPage() {
  const [stage, setStage] = useState<FormStage>("idle");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setStage("submitting");
    try {
      const res = await fetch("https://doge-contact.hellosupalabs.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStage("success");
      } else {
        setStage("error");
      }
    } catch {
      setStage("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b-2 border-nero/20 py-2 text-base text-nero placeholder:text-nero/40 focus:border-nero outline-none transition-colors";
  const labelClass =
    "block text-xs font-bold uppercase tracking-wider text-nero/60 mb-2";
  const errorClass = "text-red-600 text-xs mt-1";

  return (
    <>
      {/* Full-width yellow background */}
      <section data-navbar-theme="giallo" className="bg-giallo text-nero pt-40 pb-20 min-h-screen">
        <div className="container-site">
          {/* Title */}
          <FadeInOnScroll>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] max-w-4xl uppercase">
              La prima conversazione<br />&egrave; sempre gratuita.
            </h1>
          </FadeInOnScroll>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
            {/* Left - Form / Success / Error */}
            <FadeInOnScroll>
              <AnimatePresence mode="wait">
                {stage === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-nero/5 p-12 text-center"
                  >
                    <AnimatedCheckmark />
                    <h2 className="text-2xl font-bold mt-6">
                      Messaggio inviato.
                    </h2>
                    <p className="text-nero/70 mt-4 max-w-md mx-auto">
                      Ti risponderemo entro 24 ore. Nel frattempo, puoi
                      esplorare il{" "}
                      <a
                        href="/metodo"
                        className="underline font-semibold hover:text-nero transition-colors"
                      >
                        Codice del Doge
                      </a>
                      .
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Honeypot */}
                    <div
                      className="absolute opacity-0 pointer-events-none"
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        tabIndex={-1}
                        {...register("honeypot")}
                      />
                    </div>

                    <div>
                      <label htmlFor="nome" className={labelClass}>
                        Nome e Cognome
                      </label>
                      <input
                        id="nome"
                        type="text"
                        className={inputClass}
                        placeholder="Mario Rossi"
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
                        placeholder="Nome azienda"
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
                        placeholder="CEO, CTO, Operations..."
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
                        placeholder="mario@azienda.it"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className={errorClass}>{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="messaggio" className={labelClass}>
                        Messaggio
                      </label>
                      <textarea
                        id="messaggio"
                        className={`${inputClass} h-[120px] resize-none`}
                        maxLength={500}
                        placeholder="Raccontaci come possiamo aiutarti..."
                        {...register("messaggio")}
                      />
                      {errors.messaggio && (
                        <p className={errorClass}>{errors.messaggio.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contatto_preferito"
                        className={labelClass}
                      >
                        Come preferisci essere contattato?
                      </label>
                      <select
                        id="contatto_preferito"
                        className={`${inputClass} bg-transparent cursor-pointer`}
                        {...register("contatto_preferito")}
                      >
                        {CONTATTO_OPTIONS.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            disabled={!opt.value}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.contatto_preferito && (
                        <p className={errorClass}>
                          {errors.contatto_preferito.message}
                        </p>
                      )}
                    </div>

                    {watch("contatto_preferito") === "telefono" && (
                      <div>
                        <label htmlFor="telefono" className={labelClass}>
                          Numero di telefono
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          className={inputClass}
                          placeholder="+39 333 1234567"
                          {...register("telefono")}
                        />
                      </div>
                    )}

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="dark"
                        disabled={stage === "submitting"}
                      >
                        {stage === "submitting" ? (
                          <span className="inline-flex items-center gap-2">
                            <Spinner />
                            Invio in corso...
                          </span>
                        ) : (
                          "Invia messaggio \u2192"
                        )}
                      </Button>
                    </div>

                    {stage === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-700 text-sm mt-2"
                      >
                        Qualcosa &egrave; andato storto. Riprova o scrivici
                        direttamente a{" "}
                        <a
                          href="mailto:dogedivenezia.ai@gmail.com"
                          className="underline font-semibold"
                        >
                          dogedivenezia.ai@gmail.com
                        </a>
                      </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </FadeInOnScroll>

            {/* Right - Contatto Diretto */}
            <FadeInOnScroll>
              <div>
                <h2 className="text-2xl font-bold uppercase">
                  Contatto Diretto
                </h2>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-nero/60">
                      Email
                    </p>
                    <a
                      href="mailto:dogedivenezia.ai@gmail.com"
                      className="text-nero text-lg font-semibold hover:underline mt-1 block"
                    >
                      dogedivenezia.ai@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-nero/60">
                      Telefono
                    </p>
                    <a
                      href="tel:+393468889545"
                      className="text-nero text-lg font-semibold hover:underline mt-1 block"
                    >
                      +39 346 8889545
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-nero/60">
                      Ci puoi trovare a
                    </p>
                    <p className="text-nero text-lg font-semibold mt-1">
                      Calle Polver del Fuoco 827/A
                      <br />
                      VENEZIA
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

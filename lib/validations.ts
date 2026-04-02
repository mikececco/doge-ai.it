import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().min(2, "Il nome \u00e8 obbligatorio"),
  azienda: z.string().min(1, "Il nome dell'azienda \u00e8 obbligatorio"),
  ruolo: z.string().min(1, "Il ruolo \u00e8 obbligatorio"),
  email: z.string().email("Inserisci un'email valida"),
  telefono: z.string().optional(),
  messaggio: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri").max(500),
  fonte: z.string().optional(),
  contatto_preferito: z.string().min(1, "Seleziona come preferisci essere contattato"),
  honeypot: z.string().max(0),
});

export type ContactFormData = z.infer<typeof contactSchema>;

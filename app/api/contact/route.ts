import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Honeypot check
    if (data.honeypot) {
      return NextResponse.json({ success: true }); // silently ignore spam
    }

    // TODO: When Resend API key is available, send email:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'DOGE Website <noreply@dogedivenezia.ai>',
    //   to: 'dogedivenezia.ai@gmail.com',
    //   subject: `Nuovo contatto: ${data.nome} - ${data.azienda}`,
    //   html: `...`,
    // });

    // For now, log the submission
    console.log("Contact form submission:", {
      nome: data.nome,
      azienda: data.azienda,
      ruolo: data.ruolo,
      email: data.email,
      telefono: data.telefono,
      messaggio: data.messaggio,
      fonte: data.fonte,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Errore nell'invio del messaggio." },
      { status: 400 }
    );
  }
}

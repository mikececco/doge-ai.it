export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const data = await request.json();

      // Route by action
      if (data.action === "codice-del-doge") {
        return handleCodiceDoge(data, env);
      }

      // Basic validation
      if (!data.nome || !data.email || !data.azienda) {
        return corsResponse({ success: false, error: "Campi obbligatori mancanti." }, 400);
      }

      // Honeypot check
      if (data.honeypot) {
        return corsResponse({ success: true });
      }

      // Send notification email via Resend
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Doge AI Contatti <noreply@notifications.doge-ai.it>",
          to: "info@doge-ai.it",
          reply_to: data.email,
          subject: `Nuovo contatto: ${data.nome} — ${data.azienda}`,
          html: formatEmail(data),
        }),
      });

      const resBody = await res.json();

      if (!res.ok || resBody.error) {
        console.error("Resend error:", res.status, JSON.stringify(resBody));
        return corsResponse({ success: false, error: "Errore nell'invio dell'email." }, 500);
      }

      console.log("Email sent:", JSON.stringify(resBody));
      return corsResponse({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return corsResponse({ success: false, error: "Errore nell'invio." }, 400);
    }
  },
};

function formatEmail(data) {
  const field = (label, value) =>
    value ? `<tr><td style="padding:8px 12px;font-weight:600;color:#555;white-space:nowrap">${label}</td><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>` : "";

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1a1a1a;border-bottom:2px solid #c8a951;padding-bottom:8px">Nuovo contatto dal sito</h2>
      <table style="width:100%;border-collapse:collapse">
        ${field("Nome", data.nome)}
        ${field("Azienda", data.azienda)}
        ${field("Ruolo", data.ruolo)}
        ${field("Email", data.email)}
        ${field("Telefono", data.telefono)}
        ${field("Contatto preferito", data.contatto_preferito)}
      </table>
      <div style="margin-top:16px;padding:12px;background:#f5f5f5;border-radius:6px">
        <strong>Messaggio:</strong>
        <p style="margin:8px 0 0;white-space:pre-wrap">${escapeHtml(data.messaggio || "—")}</p>
      </div>
      <p style="margin-top:16px;font-size:12px;color:#999">${new Date().toISOString()}</p>
    </div>
  `;
}

async function handleCodiceDoge(data, env) {
  if (!data.email) {
    return corsResponse({ success: false, error: "Email mancante." }, 400);
  }

  const resendHeaders = {
    Authorization: `Bearer ${env.RESEND_API_KEY}`,
    "Content-Type": "application/json",
  };

  const [welcomeResult, notifyResult] = await Promise.allSettled([
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: resendHeaders,
      body: JSON.stringify({
        from: "Il Doge di Venezia <noreply@notifications.doge-ai.it>",
        to: data.email,
        subject: "Il Codice del Doge — Il tuo accesso",
        html: formatWelcomeEmail(),
      }),
    }),
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: resendHeaders,
      body: JSON.stringify({
        from: "Doge AI Lead Alert <noreply@notifications.doge-ai.it>",
        to: "info@doge-ai.it",
        subject: `Nuovo lead Codice del Doge: ${data.email}`,
        html: formatLeadNotification(data.email),
      }),
    }),
  ]);

  if (welcomeResult.status === "rejected") {
    console.error("Welcome email failed:", welcomeResult.reason);
  }
  if (notifyResult.status === "rejected") {
    console.error("Lead notification failed:", notifyResult.reason);
  }

  return corsResponse({ success: true });
}

function formatWelcomeEmail() {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="text-align:center;padding:32px 0 16px">
        <h1 style="font-size:22px;margin:0;letter-spacing:1px">IL DOGE DI VENEZIA</h1>
        <div style="width:60px;height:2px;background:#c8a951;margin:12px auto 0"></div>
      </div>
      <div style="padding:24px">
        <p style="margin:0 0 20px;line-height:1.6">
          Grazie per il tuo interesse nel nostro metodo. Ecco cosa facciamo
          concretamente per le PMI italiane:
        </p>
        <table style="width:100%;border-collapse:collapse;margin:0 0 20px">
          <tr>
            <td style="padding:12px 16px;border-left:3px solid #c8a951;background:#fafafa;margin-bottom:8px">
              <strong>Automazione processi</strong><br>
              <span style="color:#555;font-size:14px">Workflow ripetitivi trasformati in sistemi autonomi — dal customer service alla gestione ordini</span>
            </td>
          </tr>
          <tr><td style="padding:4px"></td></tr>
          <tr>
            <td style="padding:12px 16px;border-left:3px solid #c8a951;background:#fafafa">
              <strong>Agenti AI personalizzati</strong><br>
              <span style="color:#555;font-size:14px">Assistenti intelligenti costruiti sui tuoi dati e processi, integrati nei tool che già usi</span>
            </td>
          </tr>
          <tr><td style="padding:4px"></td></tr>
          <tr>
            <td style="padding:12px 16px;border-left:3px solid #c8a951;background:#fafafa">
              <strong>Consulenza strategica AI</strong><br>
              <span style="color:#555;font-size:14px">Audit completo, roadmap implementativa e formazione del team — dal giorno uno al ROI</span>
            </td>
          </tr>
        </table>
        <p style="margin:0 0 24px;line-height:1.6">
          Ogni progetto parte da una call gratuita dove analizziamo i tuoi processi
          e identifichiamo dove l'AI può avere impatto reale.
        </p>
        <div style="text-align:center;margin:32px 0">
          <a href="https://doge-ai.it/contatti"
             style="display:inline-block;background:#1a1a1a;color:#ffffff;padding:14px 32px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase">
            Prenota una call gratuita
          </a>
        </div>
      </div>
      <div style="border-top:1px solid #e5e5e5;padding:16px 24px;text-align:center">
        <p style="margin:0;font-size:12px;color:#999">
          Il Doge di Venezia — AI per le PMI italiane<br>
          <a href="https://doge-ai.it" style="color:#999">doge-ai.it</a>
        </p>
      </div>
    </div>
  `;
}

function formatLeadNotification(email) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1a1a1a;border-bottom:2px solid #c8a951;padding-bottom:8px">
        Nuovo lead — Codice del Doge
      </h2>
      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#555">Email</td>
          <td style="padding:8px 12px">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#555">Fonte</td>
          <td style="padding:8px 12px">/metodo — Il Codice del Doge</td>
        </tr>
      </table>
      <p style="margin-top:16px;font-size:12px;color:#999">${new Date().toISOString()}</p>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function corsResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

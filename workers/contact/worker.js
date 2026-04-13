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
          from: "Doge AI Contatti <onboarding@resend.dev>",
          to: "info@doge-ai.it",
          reply_to: data.email,
          subject: `Nuovo contatto: ${data.nome} — ${data.azienda}`,
          html: formatEmail(data),
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", res.status, err);
        return corsResponse({ success: false, error: "Errore nell'invio dell'email." }, 500);
      }

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

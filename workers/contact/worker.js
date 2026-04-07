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

      // Send email via Cloudflare Email Workers or log for now
      // TODO: integrate with Resend/SendGrid when API key is added
      console.log("Contact form submission:", JSON.stringify({
        nome: data.nome,
        azienda: data.azienda,
        ruolo: data.ruolo,
        email: data.email,
        telefono: data.telefono,
        messaggio: data.messaggio,
        fonte: data.fonte,
        timestamp: new Date().toISOString(),
      }));

      return corsResponse({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return corsResponse({ success: false, error: "Errore nell'invio." }, 400);
    }
  },
};

function corsResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

import { Router, type IRouter } from "express";
import type { Request, Response } from "express";

const router: IRouter = Router();

interface EmailFormData {
  goal: string;
  services: string[];
  website: string;
  company: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

router.post("/send-email", async (req: Request, res: Response) => {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "E-Mail-Service nicht konfiguriert" });
    return;
  }

  const body = req.body as Partial<EmailFormData>;

  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const goalRaw = typeof body.goal === "string" ? body.goal : "";
  const timelineRaw = typeof body.timeline === "string" ? body.timeline : "";
  const servicesRaw = Array.isArray(body.services)
    ? body.services.filter((s): s is string => typeof s === "string")
    : [];

  if (!firstName || !lastName || !email) {
    res.status(400).json({ error: "Pflichtfelder fehlen (Vorname, Nachname, E-Mail)" });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Ungültige E-Mail-Adresse" });
    return;
  }

  const goalMap: Record<string, string> = {
    seo: "Online besser gefunden werden",
    neukunden: "Mehr Neukunden gewinnen",
    fachkraefte: "Mehr Fachkräfte gewinnen",
    andere: "Etwas anderes",
  };

  const serviceMap: Record<string, string> = {
    webdesign: "Webdesign",
    webdev: "Web Entwicklung",
    fotovideo: "Foto/Video",
    seo: "SEO",
    sea: "SEA",
    wartung: "Wartung",
  };

  const timelineMap: Record<string, string> = {
    asap: "Am besten schon gestern",
    nopressure: "Kein Zeitdruck",
  };

  const goal = goalMap[goalRaw] || goalRaw || "–";
  const services = servicesRaw.map((s) => serviceMap[s] || s).join(", ") || "–";
  const timeline = timelineMap[timelineRaw] || timelineRaw || "–";

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
        Neue Anfrage über Website
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 14px; font-weight: bold; width: 160px; border: 1px solid #e2e8f0;">Vorname</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(firstName)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">Nachname</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(lastName)}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">E-Mail</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">
            <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">Telefon</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(phone || "–")}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">Primäres Ziel</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(goal)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">Leistungen</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(services)}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">Website</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(website || "–")}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">Unternehmen</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(company || "–")}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0;">Zeitrahmen</td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">${escapeHtml(timeline)}</td>
        </tr>
      </table>

      <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
        Diese Nachricht wurde automatisch über das CleanWeb Agency Anfrageformular gesendet.
      </p>
    </div>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "CleanWeb Agency", email: "info@cleanwebag.de" },
        to: [{ email: "info@cleanwebag.de", name: "CleanWeb Agency" }],
        subject: "Neue Anfrage über Website",
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Brevo API error:", response.status, errorBody);
      res.status(502).json({ error: "E-Mail konnte nicht gesendet werden" });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Brevo request failed:", err);
    res.status(502).json({ error: "E-Mail-Service nicht erreichbar" });
  }
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default router;

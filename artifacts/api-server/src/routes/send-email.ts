import { Router, type IRouter } from "express";
import type { Request, Response } from "express";
import { logger } from "../lib/logger";

const router: IRouter = Router();

interface EmailRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  goal: string;
  website: string;
  company: string;
  timeline: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBody(body: unknown): body is EmailRequestBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.firstName === "string" &&
    b.firstName.trim().length > 0 &&
    typeof b.lastName === "string" &&
    b.lastName.trim().length > 0 &&
    typeof b.email === "string" &&
    EMAIL_REGEX.test(b.email.trim()) &&
    typeof b.phone === "string" &&
    typeof b.goal === "string" &&
    b.goal.trim().length > 0 &&
    typeof b.website === "string" &&
    typeof b.company === "string" &&
    b.company.trim().length > 0 &&
    typeof b.timeline === "string" &&
    b.timeline.trim().length > 0
  );
}

function buildHtmlContent(data: EmailRequestBody): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
        Neue Anfrage über Website
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151; width: 40%;">Vorname</td>
          <td style="padding: 12px 8px; color: #111827;">${escapeHtml(data.firstName)}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Nachname</td>
          <td style="padding: 12px 8px; color: #111827;">${escapeHtml(data.lastName)}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151;">E-Mail</td>
          <td style="padding: 12px 8px; color: #111827;">
            <a href="mailto:${escapeHtml(data.email)}" style="color: #2563EB;">${escapeHtml(data.email)}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Telefon</td>
          <td style="padding: 12px 8px; color: #111827;">${escapeHtml(data.phone || "Nicht angegeben")}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Primäres Ziel</td>
          <td style="padding: 12px 8px; color: #111827;">${escapeHtml(data.goal || "Nicht angegeben")}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Website</td>
          <td style="padding: 12px 8px; color: #111827;">${escapeHtml(data.website || "Nicht angegeben")}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Unternehmen</td>
          <td style="padding: 12px 8px; color: #111827;">${escapeHtml(data.company || "Nicht angegeben")}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Zeitrahmen</td>
          <td style="padding: 12px 8px; color: #111827;">${escapeHtml(data.timeline || "Nicht angegeben")}</td>
        </tr>
      </table>
    </div>
  `;
}

/**
 * Builds the HTML content for the customer confirmation email.
 */
function buildConfirmationHtml(data: EmailRequestBody): string {
  return `
<!DOCTYPE html PUBLIC "-//W3C//90//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ihre Anfrage bei CleanWeb Agency</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #030712; color: #f9fafb; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 40px 0 40px 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; background-color: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden;">
          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding: 40px 0 30px 0;">
              <div style="font-size: 28px; font-weight: bold; letter-spacing: -0.025em;">
                <span style="color: #3b82f6;">Clean</span><span style="color: #ffffff;">Web</span>
              </div>
            </td>
          </tr>
          
          <!-- Accent Bar -->
          <tr>
            <td height="4" style="background: linear-gradient(to right, #2563eb, #60a5fa);"></td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 40px 30px 40px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <div style="background-color: rgba(37, 99, 235, 0.1); border-radius: 50%; width: 64px; height: 64px; line-height: 64px; text-align: center;">
                      <span style="font-size: 32px; color: #3b82f6;">✓</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="color: #ffffff; font-size: 24px; font-weight: 700; padding-bottom: 16px;">
                    Anfrage erhalten
                  </td>
                </tr>
                <tr>
                  <td style="color: #9ca3af; font-size: 16px; line-height: 24px; text-align: center; padding-bottom: 32px;">
                    Hallo ${escapeHtml(data.firstName)}, vielen Dank für Ihr Interesse an einer Zusammenarbeit mit der CleanWeb Agency. Wir haben Ihre Anfrage erhalten und werden uns innerhalb der nächsten 24 Stunden bei Ihnen melden.
                  </td>
                </tr>
                
                <!-- Divider -->
                <tr>
                  <td style="border-top: 1px solid #1f2937; padding-top: 32px; padding-bottom: 16px;">
                    <span style="color: #ffffff; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Zusammenfassung Ihrer Angaben</span>
                  </td>
                </tr>

                <!-- Data Table -->
                <tr>
                  <td>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #030712; border-radius: 8px;">
                      <tr>
                        <td style="padding: 16px; border-bottom: 1px solid #1f2937;">
                          <span style="color: #6b7280; font-size: 13px; display: block; margin-bottom: 4px;">Ziel</span>
                          <span style="color: #e5e7eb; font-size: 15px;">${escapeHtml(data.goal)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px; border-bottom: 1px solid #1f2937;">
                          <span style="color: #6b7280; font-size: 13px; display: block; margin-bottom: 4px;">Unternehmen</span>
                          <span style="color: #e5e7eb; font-size: 15px;">${escapeHtml(data.company || "–")}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px;">
                          <span style="color: #6b7280; font-size: 13px; display: block; margin-bottom: 4px;">Zeitrahmen</span>
                          <span style="color: #e5e7eb; font-size: 15px;">${escapeHtml(data.timeline)}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td align="center" style="padding-top: 40px; padding-bottom: 20px;">
                    <a href="https://cleanwebag.de" target="_blank" style="background-color: #2563eb; color: #ffffff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;">
                      Zur Website
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td align="center" style="color: #6b7280; font-size: 14px; padding-top: 10px;">
                    Sollte es eilen, erreichen Sie uns auch unter <br/>
                    <a href="tel:+491772047113" style="color: #3b82f6; text-decoration: none; font-weight: 500;">+49 177 204 7113</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #1f2937; padding-top: 30px;">
                <tr>
                  <td align="center" style="color: #4b5563; font-size: 12px; line-height: 18px;">
                    <strong style="color: #9ca3af; font-size: 13px;">CleanWeb Agency</strong><br />
                    Professional Web Solutions<br />
                    <a href="mailto:info@cleanwebag.de" style="color: #4b5563; text-decoration: none;">info@cleanwebag.de</a><br /><br />
                    &copy; ${new Date().getFullYear()} CleanWeb Agency. Alle Rechte vorbehalten.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Builds the plain text content for the customer confirmation email.
 */
function buildConfirmationPlainText(data: EmailRequestBody): string {
  return `
Hallo ${data.firstName},

vielen Dank für Ihr Interesse an einer Zusammenarbeit mit der CleanWeb Agency. Wir haben Ihre Anfrage erhalten und werden uns innerhalb der nächsten 24 Stunden bei Ihnen melden.

Zusammenfassung Ihrer Angaben:
- Ziel: ${data.goal}
- Unternehmen: ${data.company || "–"}
- Zeitrahmen: ${data.timeline}

Sollte es eilen, erreichen Sie uns auch unter +49 177 204 7113.

Beste Grüße,
Ihr CleanWeb Agency Team
https://cleanwebag.de
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

router.post("/send-email", async (req: Request, res: Response) => {
  try {
    if (!validateBody(req.body)) {
      res.status(400).json({ error: "Ungültige Formulardaten. Bitte füllen Sie alle Pflichtfelder aus." });
      return;
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      logger.error("BREVO_API_KEY environment variable is not set");
      res.status(500).json({ error: "E-Mail-Dienst ist nicht konfiguriert." });
      return;
    }

    const htmlContent = buildHtmlContent(req.body);

    // 1. Send internal notification email
    const internalResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "CleanWeb AG Website", email: "info@cleanwebag.de" },
        to: [{ email: "info@cleanwebag.de", name: "CleanWeb AG" }],
        replyTo: { email: req.body.email, name: `${req.body.firstName} ${req.body.lastName}` },
        subject: "Neue Anfrage über Website",
        htmlContent,
      }),
    });

    if (!internalResponse.ok) {
      const errorBody = await internalResponse.text();
      logger.error({ status: internalResponse.status, body: errorBody }, "Brevo API error (internal notification)");
      res.status(502).json({ error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." });
      return;
    }

    // 2. Send confirmation email to customer (don't block on failure)
    try {
      const confirmationHtml = buildConfirmationHtml(req.body);
      const confirmationText = buildConfirmationPlainText(req.body);

      const confirmationResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "CleanWeb Agency", email: "info@cleanwebag.de" },
          to: [{ email: req.body.email, name: `${req.body.firstName} ${req.body.lastName}` }],
          subject: "Ihre Anfrage bei CleanWeb Agency",
          htmlContent: confirmationHtml,
          textContent: confirmationText,
        }),
      });

      if (!confirmationResponse.ok) {
        const errorBody = await confirmationResponse.text();
        logger.error({ status: confirmationResponse.status, body: errorBody }, "Brevo API error (customer confirmation)");
      } else {
        logger.info({ email: req.body.email }, "Customer confirmation email sent");
      }
    } catch (confErr) {
      logger.error(confErr, "Failed to send customer confirmation email");
    }

    logger.info(
      { email: req.body.email, name: `${req.body.firstName} ${req.body.lastName}` },
      "Contact form email sequence completed",
    );

    res.json({ success: true });
  } catch (err) {
    logger.error(err, "Failed to process contact form submission");
    res.status(500).json({ error: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." });
  }
});

export default router;

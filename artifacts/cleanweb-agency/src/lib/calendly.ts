interface CalendlyPopupWidgetOptions {
  url: string;
}

interface CalendlyGlobal {
  initPopupWidget(options: CalendlyPopupWidgetOptions): void;
}

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

const CALENDLY_URL =
  "https://calendly.com/cleanwebag-info/kostenlose-website-beratung-wir-rufen-dich-an";

export function openCalendly(): void {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";
import { Button } from "@/components/ui/button";

/* ── Package data ── */
const PACKAGES = [
  {
    id: "sichtbar",
    name: "SICHTBAR",
    tagline: "Dein professioneller Auftritt",
    subtitle: "Für Betriebe, die endlich professionell online präsent sein wollen.",
    price: "999",
    note: "ab · netto",
    badge: null,
    deliveryTime: "ca. 1–2 Wochen",
    features: [
      "Moderne, professionelle Website (bis 3–5 Seiten)",
      "Perfekt auf Smartphones optimiert",
      "Klare Darstellung deiner Leistungen",
      "Kontaktformular für direkte Anfragen",
      "WhatsApp-Button integriert",
      "Rechtssicher (Impressum & Datenschutz)",
      "Grundlage, damit deine Website bei Google gefunden werden kann",
    ],
  },
  {
    id: "anfragen",
    name: "ANFRAGEN",
    tagline: "Dein digitaler Vertriebskanal",
    subtitle: "Für Unternehmen, die aktiv Kunden über ihre Website gewinnen wollen.",
    price: "2.290",
    note: "ab · netto",
    badge: "Meistgewählt",
    deliveryTime: "ca. 2–3 Wochen",
    features: [
      "Individuelle Website (bis 6–10 Seiten)",
      "Struktur, die gezielt Anfragen erzeugt",
      "Starker erster Eindruck (Vertrauen beim Kunden)",
      "Optimiert für Smartphones & schnelle Ladezeiten",
      "Klare Handlungsaufforderungen (Anruf / Anfrage / Kontakt)",
      "Darstellung von Leistungen und Referenzen",
      "Integration von Google (z.\u00A0B. Maps, Bewertungen)",
      "Erweiterte Grundlage für bessere Auffindbarkeit",
    ],
  },
  {
    id: "dominanz",
    name: "DOMINANZ",
    tagline: "Maximale Wirkung",
    subtitle: "Für Unternehmen, die sich klar vom Wettbewerb abheben und wachsen wollen.",
    price: "4.490",
    note: "ab · netto",
    badge: null,
    deliveryTime: "ca. 3–5 Wochen",
    features: [
      "Individuelles Premium-Design",
      "Strategischer Aufbau für maximale Wirkung",
      "Hochwertige Darstellung für starke Außenwirkung",
      "Erweiterte Inhalte (z.\u00A0B. Team, Karriere, Referenzen)",
      "Fokus auf hochwertige Kundenanfragen",
      "Erweiterte Struktur für bessere Sichtbarkeit",
      "Möglichkeit für spezielle Funktionen (z.\u00A0B. Buchung, Shop)",
    ],
  },
];

/* ── Browser Chrome Wrapper ── */
function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-navy-900/90 border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <div className="ml-3 flex-1 h-5 rounded bg-white/6 flex items-center px-2">
          <span className="text-[9px] text-white/30 font-mono truncate">cleanweb.agency/preview</span>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ── Demo scenes inside the browser ── */

function SichtbarDemo() {
  return (
    <div className="bg-[#F8FAFC] min-h-0 h-full">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-slate-200/80">
        <div className="h-3 w-20 bg-slate-800 rounded-sm opacity-70" />
        <div className="flex gap-3">
          <div className="h-2 w-10 bg-slate-300 rounded-sm" />
          <div className="h-2 w-10 bg-slate-300 rounded-sm" />
          <div className="h-5 w-14 bg-blue-600 rounded opacity-80" />
        </div>
      </div>
      <div className="px-4 py-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="h-3 w-3/5 bg-slate-700 rounded-sm mb-2 opacity-70" />
        <div className="h-2 w-2/5 bg-slate-500 rounded-sm mb-4 opacity-50" />
        <div className="h-6 w-24 bg-blue-600 rounded opacity-80" />
      </div>
      <div className="px-4 py-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="bg-white rounded border border-slate-200 p-2 space-y-1.5">
            <div className="h-5 w-5 rounded bg-blue-100" />
            <div className="h-2 w-full bg-slate-200 rounded-sm" />
            <div className="h-2 w-3/4 bg-slate-100 rounded-sm" />
          </div>
        ))}
      </div>
      <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center">
        <div className="h-2 w-20 bg-slate-300 rounded-sm opacity-60" />
        <div className="h-2 w-16 bg-slate-300 rounded-sm opacity-50" />
      </div>
    </div>
  );
}

function AnfragenDemo() {
  return (
    <div className="bg-white min-h-0 h-full">
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-950 border-b border-white/10">
        <div className="h-3 w-20 bg-white/70 rounded-sm" />
        <div className="flex gap-3">
          <div className="h-2 w-10 bg-white/25 rounded-sm" />
          <div className="h-2 w-10 bg-white/25 rounded-sm" />
          <div className="h-5 w-14 bg-blue-600 rounded opacity-90" />
        </div>
      </div>
      <div className="grid grid-cols-5 bg-navy-950 px-4 py-5 gap-3">
        <div className="col-span-3 space-y-2">
          <div className="h-2 w-16 bg-blue-500/50 rounded-sm" />
          <div className="h-3 w-full bg-white/80 rounded-sm" />
          <div className="h-3 w-4/5 bg-white/70 rounded-sm" />
          <div className="h-2 w-3/5 bg-white/35 rounded-sm mt-1" />
          <div className="flex gap-2 mt-2">
            <div className="h-5 w-16 bg-blue-600 rounded" />
            <div className="h-5 w-14 bg-white/10 rounded border border-white/20" />
          </div>
        </div>
        <div className="col-span-2 bg-white/6 rounded border border-white/10" />
      </div>
      <div className="px-4 py-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-4 w-4 rounded bg-blue-100" />
            <div className="h-2 w-full bg-slate-200 rounded-sm" />
            <div className="h-1.5 w-3/4 bg-slate-100 rounded-sm" />
            <div className="h-1.5 w-2/3 bg-slate-100 rounded-sm" />
          </div>
        ))}
      </div>
      <div className="mx-4 mb-4 px-3 py-2 bg-blue-50 rounded border border-blue-100 space-y-1">
        <div className="h-1.5 w-full bg-slate-300 rounded-sm" />
        <div className="h-1.5 w-4/5 bg-slate-300 rounded-sm" />
        <div className="h-1.5 w-20 bg-blue-400/40 rounded-sm mt-1" />
      </div>
    </div>
  );
}

function DominanzDemo() {
  return (
    <div className="bg-navy-950 min-h-0 h-full">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8">
        <div className="h-3 w-20 bg-white/75 rounded-sm" />
        <div className="flex gap-3">
          <div className="h-2 w-10 bg-white/20 rounded-sm" />
          <div className="h-2 w-10 bg-white/20 rounded-sm" />
          <div className="h-5 w-14 bg-blue-600 rounded" />
        </div>
      </div>
      <div className="px-4 py-5 space-y-2" style={{ background: "linear-gradient(135deg, #0B1220 0%, #111827 100%)" }}>
        <div className="h-1.5 w-12 bg-blue-500/60 rounded-sm" />
        <div className="h-4 w-4/5 bg-white/85 rounded-sm" />
        <div className="h-4 w-3/5 bg-white/70 rounded-sm" />
        <div className="h-2 w-3/5 bg-white/30 rounded-sm" />
        <div className="flex gap-2 mt-3">
          <div className="h-5 w-18 bg-blue-600 rounded px-1.5" />
          <div className="h-5 w-14 bg-white/8 rounded border border-white/15" />
        </div>
      </div>
      <div className="px-4 py-3 grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-white/4 rounded border border-white/8 p-2 space-y-1">
            <div className="h-3 w-3 rounded bg-blue-500/40" />
            <div className="h-1.5 w-full bg-white/25 rounded-sm" />
            <div className="h-1.5 w-3/4 bg-white/15 rounded-sm" />
          </div>
        ))}
      </div>
      <div className="mx-4 mb-3 h-8 bg-blue-600/15 rounded border border-blue-500/20 flex items-center justify-between px-3">
        <div className="h-2 w-24 bg-white/40 rounded-sm" />
        <div className="h-4 w-12 bg-blue-600 rounded" />
      </div>
    </div>
  );
}

const DEMOS: Record<string, React.ReactNode> = {
  sichtbar: <SichtbarDemo />,
  anfragen: <AnfragenDemo />,
  dominanz: <DominanzDemo />,
};

/* ── Package card ── */
function PackageCard({
  pkg,
  isActive,
  onHover,
}: {
  pkg: (typeof PACKAGES)[number];
  isActive: boolean;
  onHover: () => void;
}) {
  const highlighted = pkg.id === "anfragen";

  return (
    <motion.div
      onMouseEnter={onHover}
      className={`relative rounded-2xl p-6 cursor-default transition-all duration-300 ${
        highlighted
          ? "border-2 border-electric/50 bg-electric/[0.07] shadow-[0_0_30px_-5px_rgba(37,99,235,0.2)]"
          : "border border-white/8 bg-white/3"
      } ${isActive ? "ring-1 ring-electric/40 scale-[1.015]" : "hover:border-white/18"}`}
    >
      {pkg.badge && (
        <div className="absolute -top-3.5 left-5">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase bg-electric text-white px-3.5 py-1.5 rounded-full shadow-lg shadow-electric/25">
            <Star size={10} className="fill-current" />
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-electric/60 mb-1">
            {pkg.tagline}
          </p>
          <h3 className="text-xl font-extrabold text-white">{pkg.name}</h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-extrabold text-white">€{pkg.price}</p>
          <p className="text-[10px] text-white/30 mt-0.5">{pkg.note}</p>
        </div>
      </div>

      <p className="text-xs text-white/40 leading-relaxed mb-4">
        {pkg.subtitle}
      </p>

      <ul className="space-y-2 mb-4">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
            <Check size={13} className="text-electric shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-xs text-white/35 border-t border-white/8 pt-3 mb-4">
        <Clock size={12} className="text-electric/50 shrink-0" />
        <span>Lieferzeit: <span className="text-white/50 font-medium">{pkg.deliveryTime}</span></span>
      </div>

      <Button
        variant={highlighted ? "primary" : "glass"}
        size="sm"
        className={`w-full ${highlighted ? "shadow-lg shadow-electric/20" : ""}`}
        onClick={() => {
          const el = document.getElementById("kontakt");
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }}
      >
        Jetzt anfragen
      </Button>
    </motion.div>
  );
}

/* ── Main section ── */
export function Pakete() {
  const [active, setActive] = useState("anfragen");

  return (
    <section id="pakete" className="relative bg-navy-950 py-32 overflow-hidden">
      <SectionDivider position="top" fillColor="fill-white" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="mb-16 lg:mb-20">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric/55 mb-3 block">
              Investition
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] max-w-lg">
                Transparent.
                <br />
                Fair. Klar.
              </h2>
              <p className="text-white/38 text-sm leading-relaxed max-w-xs lg:text-right">
                Drei Pakete für drei Wachstumsphasen —
                <br />
                immer mit Festpreis und klarem Ergebnis.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <FadeIn direction="left">
            <div className="lg:sticky lg:top-24">
              <BrowserChrome>
                <div className="overflow-hidden" style={{ height: 340 }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      className="h-full"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                    >
                      {DEMOS[active]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </BrowserChrome>

              <div className="mt-4 flex items-center gap-2 text-sm text-white/35">
                <span className="w-1.5 h-1.5 rounded-full bg-electric/60" />
                <span>
                  Vorschau:{" "}
                  <span className="text-white/60 font-medium">
                    {PACKAGES.find((p) => p.id === active)?.name}-Paket
                  </span>
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-5">
              {PACKAGES.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isActive={active === pkg.id}
                  onHover={() => setActive(pkg.id)}
                />
              ))}

              <p className="text-xs text-white/25 pt-2 text-center">
                Alle Preise zzgl. gesetzlicher MwSt. · Kein verstecktes Kleingedrucktes.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

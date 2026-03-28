import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";
import { Button } from "@/components/ui/button";

/* ── Package data ── */
const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Visitenkarte im Netz",
    price: "1.490",
    note: "Einmalpreis, netto",
    badge: null,
    features: [
      "Bis zu 5 Seiten",
      "Mobile-optimiertes Design",
      "Kontaktformular",
      "SSL & Hosting-Setup",
      "2 Wochen Lieferzeit",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "Ihr digitaler Vertriebskanal",
    price: "2.990",
    note: "Einmalpreis, netto",
    badge: "Beliebteste Wahl",
    features: [
      "Bis zu 10 Seiten",
      "SEO-Grundoptimierung",
      "Blog & News-Bereich",
      "Google Analytics",
      "3 Wochen Lieferzeit",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Ihre digitale Marke",
    price: "ab 4.990",
    note: "Individuelles Angebot",
    badge: null,
    features: [
      "Individuelles Design",
      "E-Commerce möglich",
      "CMS-Integration",
      "Laufende Betreuung",
      "4 Wochen Lieferzeit",
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

function StarterDemo() {
  return (
    <div className="bg-[#F8FAFC] min-h-0 h-full">
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-slate-200/80">
        <div className="h-3 w-20 bg-slate-800 rounded-sm opacity-70" />
        <div className="flex gap-3">
          <div className="h-2 w-10 bg-slate-300 rounded-sm" />
          <div className="h-2 w-10 bg-slate-300 rounded-sm" />
          <div className="h-5 w-14 bg-blue-600 rounded opacity-80" />
        </div>
      </div>
      {/* Hero */}
      <div className="px-4 py-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="h-3 w-3/5 bg-slate-700 rounded-sm mb-2 opacity-70" />
        <div className="h-2 w-2/5 bg-slate-500 rounded-sm mb-4 opacity-50" />
        <div className="h-6 w-24 bg-blue-600 rounded opacity-80" />
      </div>
      {/* 3-card row */}
      <div className="px-4 py-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="bg-white rounded border border-slate-200 p-2 space-y-1.5">
            <div className="h-5 w-5 rounded bg-blue-100" />
            <div className="h-2 w-full bg-slate-200 rounded-sm" />
            <div className="h-2 w-3/4 bg-slate-100 rounded-sm" />
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center">
        <div className="h-2 w-20 bg-slate-300 rounded-sm opacity-60" />
        <div className="h-2 w-16 bg-slate-300 rounded-sm opacity-50" />
      </div>
    </div>
  );
}

function BusinessDemo() {
  return (
    <div className="bg-white min-h-0 h-full">
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-950 border-b border-white/10">
        <div className="h-3 w-20 bg-white/70 rounded-sm" />
        <div className="flex gap-3">
          <div className="h-2 w-10 bg-white/25 rounded-sm" />
          <div className="h-2 w-10 bg-white/25 rounded-sm" />
          <div className="h-5 w-14 bg-blue-600 rounded opacity-90" />
        </div>
      </div>
      {/* Asymmetric hero */}
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
      {/* Feature strip */}
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
      {/* Testimonial strip */}
      <div className="mx-4 mb-4 px-3 py-2 bg-blue-50 rounded border border-blue-100 space-y-1">
        <div className="h-1.5 w-full bg-slate-300 rounded-sm" />
        <div className="h-1.5 w-4/5 bg-slate-300 rounded-sm" />
        <div className="h-1.5 w-20 bg-blue-400/40 rounded-sm mt-1" />
      </div>
    </div>
  );
}

function PremiumDemo() {
  return (
    <div className="bg-navy-950 min-h-0 h-full">
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8">
        <div className="h-3 w-20 bg-white/75 rounded-sm" />
        <div className="flex gap-3">
          <div className="h-2 w-10 bg-white/20 rounded-sm" />
          <div className="h-2 w-10 bg-white/20 rounded-sm" />
          <div className="h-5 w-14 bg-blue-600 rounded" />
        </div>
      </div>
      {/* Dark bold hero */}
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
      {/* Service grid */}
      <div className="px-4 py-3 grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-white/4 rounded border border-white/8 p-2 space-y-1">
            <div className="h-3 w-3 rounded bg-blue-500/40" />
            <div className="h-1.5 w-full bg-white/25 rounded-sm" />
            <div className="h-1.5 w-3/4 bg-white/15 rounded-sm" />
          </div>
        ))}
      </div>
      {/* CTA strip */}
      <div className="mx-4 mb-3 h-8 bg-blue-600/15 rounded border border-blue-500/20 flex items-center justify-between px-3">
        <div className="h-2 w-24 bg-white/40 rounded-sm" />
        <div className="h-4 w-12 bg-blue-600 rounded" />
      </div>
    </div>
  );
}

const DEMOS: Record<string, React.ReactNode> = {
  starter: <StarterDemo />,
  business: <BusinessDemo />,
  premium: <PremiumDemo />,
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
  const highlighted = pkg.id === "business";

  return (
    <motion.div
      onMouseEnter={onHover}
      className={`relative rounded-2xl p-6 cursor-default transition-all duration-300 ${
        highlighted
          ? "border border-electric/35 bg-electric/5"
          : "border border-white/8 bg-white/3"
      } ${isActive ? "ring-1 ring-electric/40 scale-[1.015]" : "hover:border-white/18"}`}
    >
      {/* Popular badge */}
      {pkg.badge && (
        <div className="absolute -top-3 left-5">
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase bg-electric text-white px-3 py-1 rounded-full">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
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

      <ul className="space-y-2 mb-5">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
            <Check size={13} className="text-electric shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "primary" : "glass"}
        size="sm"
        className="w-full"
        onClick={() =>
          document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Jetzt anfragen
      </Button>
    </motion.div>
  );
}

/* ── Main section ── */
export function Pakete() {
  const [active, setActive] = useState("business");

  return (
    <section id="pakete" className="relative bg-navy-950 py-32 overflow-hidden">
      <SectionDivider position="top" fillColor="fill-white" />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Browser mockup (sticky) */}
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

              {/* Active package label */}
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

          {/* Right — Package cards */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-4">
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

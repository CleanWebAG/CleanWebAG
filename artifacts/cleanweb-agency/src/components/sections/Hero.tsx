import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { openCalendly } from "@/lib/calendly";

const BG_CODE = [
  { text: "const convert = (visitors: number) => customers", x: "3%", dur: 28, delay: 0 },
  { text: "import { growth, trust } from '@cleanweb/agency'", x: "54%", dur: 32, delay: 4 },
  { text: "function buildCompetitiveAdvantage(brand: SMB) {", x: "16%", dur: 26, delay: 9 },
  { text: "  return { revenue: revenue * 3, clients: ++leads }", x: "16%", dur: 26, delay: 9.55 },
  { text: "}", x: "16%", dur: 26, delay: 10.1 },
  { text: "<Hero headline='Wettbewerbsvorteil' premium={true} />", x: "40%", dur: 30, delay: 15 },
  { text: "const satisfaction: Percentage = 100", x: "64%", dur: 24, delay: 7 },
  { text: "api.design({ fast: true, premium: true, measurable: true })", x: "6%", dur: 35, delay: 20 },
  { text: "type SMBGoal = { ambition: 'max'; results: 'guaranteed' }", x: "38%", dur: 27, delay: 2 },
  { text: "export const WebSuccess = buildTrust(brand) => results", x: "58%", dur: 31, delay: 18 },
  { text: "// converting visitors into loyal customers", x: "22%", dur: 29, delay: 13 },
  { text: "const leads = await Agency.generateResults(website)", x: "48%", dur: 33, delay: 25 },
];

const STATIC_CODE = [
  { text: "const trust = design()", top: "18%", left: "3%", opacity: 0.05 },
  { text: "return premium", top: "42%", left: "78%", opacity: 0.04 },
  { text: "<Website />", top: "65%", left: "12%", opacity: 0.045 },
  { text: "async build()", top: "80%", left: "62%", opacity: 0.04 },
  { text: "type Success", top: "30%", left: "85%", opacity: 0.038 },
];

function BackgroundCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>
      {BG_CODE.map((line, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: line.x,
            fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
            fontSize: 10,
            color: "rgba(37,99,235,0.06)",
            whiteSpace: "nowrap",
            letterSpacing: "0.02em",
          }}
          initial={{ y: "110vh" }}
          animate={{ y: "-20vh" }}
          transition={{ duration: line.dur, delay: line.delay, repeat: Infinity, ease: "linear" }}
        >
          {line.text}
        </motion.div>
      ))}
      {STATIC_CODE.map((f, i) => (
        <div
          key={"s" + i}
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            fontFamily: "monospace",
            fontSize: 9,
            color: `rgba(37,99,235,${f.opacity})`,
            whiteSpace: "nowrap",
          }}
        >
          {f.text}
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950">

      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(9,18,40,0.95) 0%, #0B1220 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120% 110% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      <BackgroundCode />

      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.28) 40%, rgba(255,255,255,0.09) 50%, rgba(37,99,235,0.28) 60%, transparent)",
          zIndex: 30,
        }}
        initial={{ top: "0%", opacity: 1 }}
        animate={{ top: "105%", opacity: 0.15 }}
        transition={{ duration: 2.2, delay: 0.1, ease: "linear" }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/25 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "monospace",
            fontSize: "0.7rem",
            color: "rgba(37,99,235,0.55)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {"< PREMIUM WEB DESIGN AGENCY />"}
        </motion.div>

        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
            textAlign: "center",
          }}
          className="text-[1.65rem] sm:text-[3rem] lg:text-[3.8rem]"
        >
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "block", color: "white", marginBottom: 8 }}
          >
            Wir bauen keine Websites.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "block", color: "#2563EB" }}
          >
            Wir bauen Wettbewerbsvorteile.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 520,
            marginBottom: 32,
          }}
        >
          Modernes Webdesign für Unternehmen, die professionell auftreten
          und mehr Kunden gewinnen wollen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}
        >
          <button
            onClick={() => openCalendly()}
            style={{
              padding: "15px 32px",
              background: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: "0 4px 24px rgba(37,99,235,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 30px rgba(37,99,235,0.5)";
              e.currentTarget.style.background = "#1d4ed8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,99,235,0.35)";
              e.currentTarget.style.background = "#2563EB";
            }}
          >
            Kostenlose Beratung sichern <ArrowRight size={17} />
          </button>
          <button
            onClick={() => scrollTo("pakete")}
            style={{
              padding: "15px 32px",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            Pakete ansehen
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            marginTop: 44,
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.04em",
          }}
        >
          Vertrauen von Unternehmen aus ganz Deutschland
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} style={{ color: "rgba(255,255,255,0.2)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

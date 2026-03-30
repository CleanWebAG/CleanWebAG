import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";

type Token = { t: string; c: string };

const C = {
  kw: "#C586C0",
  str: "#CE9178",
  typ: "#4EC9B0",
  cmt: "#6A9955",
  tag: "#E06C75",
  fn: "#DCDCAA",
  var: "#9CDCFE",
  op: "#D4D4D4",
  num: "#B5CEA8",
  attr: "#9CDCFE",
  prop: "#9CDCFE",
};

const BG_CODE: { tokens: Token[]; x: string; dur: number; delay: number }[] = [
  { tokens: [
    { t: "const", c: C.kw }, { t: " ", c: C.op }, { t: "convert", c: C.var }, { t: " = (", c: C.op },
    { t: "visitors", c: C.var }, { t: ": ", c: C.op }, { t: "number", c: C.typ }, { t: ") => ", c: C.op },
    { t: "customers", c: C.var },
  ], x: "3%", dur: 28, delay: 0 },
  { tokens: [
    { t: "import", c: C.kw }, { t: " { ", c: C.op }, { t: "growth", c: C.var }, { t: ", ", c: C.op },
    { t: "trust", c: C.var }, { t: " } ", c: C.op }, { t: "from", c: C.kw },
    { t: " '@cleanweb/agency'", c: C.str },
  ], x: "54%", dur: 32, delay: 4 },
  { tokens: [
    { t: "function", c: C.kw }, { t: " ", c: C.op }, { t: "buildCompetitiveAdvantage", c: C.fn },
    { t: "(", c: C.op }, { t: "brand", c: C.var }, { t: ": ", c: C.op }, { t: "SMB", c: C.typ },
    { t: ") {", c: C.op },
  ], x: "16%", dur: 26, delay: 9 },
  { tokens: [
    { t: "  ", c: C.op }, { t: "return", c: C.kw }, { t: " { ", c: C.op }, { t: "revenue", c: C.prop },
    { t: ": ", c: C.op }, { t: "revenue", c: C.var }, { t: " * ", c: C.op }, { t: "3", c: C.num },
    { t: ", ", c: C.op }, { t: "clients", c: C.prop }, { t: ": ++", c: C.op }, { t: "leads", c: C.var },
    { t: " }", c: C.op },
  ], x: "16%", dur: 26, delay: 9.55 },
  { tokens: [
    { t: "}", c: C.op },
  ], x: "16%", dur: 26, delay: 10.1 },
  { tokens: [
    { t: "<", c: C.op }, { t: "Hero", c: C.tag }, { t: " ", c: C.op }, { t: "headline", c: C.attr },
    { t: "=", c: C.op }, { t: "'Wettbewerbsvorteil'", c: C.str }, { t: " ", c: C.op },
    { t: "premium", c: C.attr }, { t: "={", c: C.op }, { t: "true", c: C.kw }, { t: "}", c: C.op },
    { t: " />", c: C.op },
  ], x: "40%", dur: 30, delay: 15 },
  { tokens: [
    { t: "const", c: C.kw }, { t: " ", c: C.op }, { t: "satisfaction", c: C.var }, { t: ": ", c: C.op },
    { t: "Percentage", c: C.typ }, { t: " = ", c: C.op }, { t: "100", c: C.num },
  ], x: "64%", dur: 24, delay: 7 },
  { tokens: [
    { t: "api", c: C.var }, { t: ".", c: C.op }, { t: "design", c: C.fn }, { t: "({ ", c: C.op },
    { t: "fast", c: C.prop }, { t: ": ", c: C.op }, { t: "true", c: C.kw }, { t: ", ", c: C.op },
    { t: "premium", c: C.prop }, { t: ": ", c: C.op }, { t: "true", c: C.kw }, { t: ", ", c: C.op },
    { t: "measurable", c: C.prop }, { t: ": ", c: C.op }, { t: "true", c: C.kw }, { t: " })", c: C.op },
  ], x: "6%", dur: 35, delay: 20 },
  { tokens: [
    { t: "type", c: C.kw }, { t: " ", c: C.op }, { t: "SMBGoal", c: C.typ }, { t: " = { ", c: C.op },
    { t: "ambition", c: C.prop }, { t: ": ", c: C.op }, { t: "'max'", c: C.str }, { t: "; ", c: C.op },
    { t: "results", c: C.prop }, { t: ": ", c: C.op }, { t: "'guaranteed'", c: C.str },
    { t: " }", c: C.op },
  ], x: "38%", dur: 27, delay: 2 },
  { tokens: [
    { t: "export", c: C.kw }, { t: " ", c: C.op }, { t: "const", c: C.kw }, { t: " ", c: C.op },
    { t: "WebSuccess", c: C.var }, { t: " = ", c: C.op }, { t: "buildTrust", c: C.fn },
    { t: "(", c: C.op }, { t: "brand", c: C.var }, { t: ") => ", c: C.op },
    { t: "results", c: C.var },
  ], x: "58%", dur: 31, delay: 18 },
  { tokens: [
    { t: "// converting visitors into loyal customers", c: C.cmt },
  ], x: "22%", dur: 29, delay: 13 },
  { tokens: [
    { t: "const", c: C.kw }, { t: " ", c: C.op }, { t: "leads", c: C.var }, { t: " = ", c: C.op },
    { t: "await", c: C.kw }, { t: " ", c: C.op }, { t: "Agency", c: C.typ }, { t: ".", c: C.op },
    { t: "generateResults", c: C.fn }, { t: "(", c: C.op }, { t: "website", c: C.var },
    { t: ")", c: C.op },
  ], x: "48%", dur: 33, delay: 25 },
];

const STATIC_CODE: { tokens: Token[]; top: string; left: string; opacity: number }[] = [
  { tokens: [
    { t: "const", c: C.kw }, { t: " ", c: C.op }, { t: "trust", c: C.var }, { t: " = ", c: C.op },
    { t: "design", c: C.fn }, { t: "()", c: C.op },
  ], top: "18%", left: "3%", opacity: 0.09 },
  { tokens: [
    { t: "return", c: C.kw }, { t: " ", c: C.op }, { t: "premium", c: C.var },
  ], top: "42%", left: "78%", opacity: 0.07 },
  { tokens: [
    { t: "<", c: C.op }, { t: "Website", c: C.tag }, { t: " />", c: C.op },
  ], top: "65%", left: "12%", opacity: 0.08 },
  { tokens: [
    { t: "async", c: C.kw }, { t: " ", c: C.op }, { t: "build", c: C.fn }, { t: "()", c: C.op },
  ], top: "80%", left: "62%", opacity: 0.07 },
  { tokens: [
    { t: "type", c: C.kw }, { t: " ", c: C.op }, { t: "Success", c: C.typ },
  ], top: "30%", left: "85%", opacity: 0.065 },
];

const BG_OPACITY = 0.14;
const MONO_FONT = "'Fira Code', 'JetBrains Mono', monospace";

function renderTokens(tokens: Token[], opacity: number) {
  return tokens.map((tk, j) => {
    const [r, g, b] = [
      parseInt(tk.c.slice(1, 3), 16),
      parseInt(tk.c.slice(3, 5), 16),
      parseInt(tk.c.slice(5, 7), 16),
    ];
    return (
      <span key={j} style={{ color: `rgba(${r},${g},${b},${opacity})` }}>
        {tk.t}
      </span>
    );
  });
}

function BackgroundCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>
      {BG_CODE.map((line, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: line.x,
            fontFamily: MONO_FONT,
            fontSize: 10,
            whiteSpace: "nowrap",
            letterSpacing: "0.02em",
          }}
          initial={{ y: "110vh" }}
          animate={{ y: "-20vh" }}
          transition={{ duration: line.dur, delay: line.delay, repeat: Infinity, ease: "linear" }}
        >
          {renderTokens(line.tokens, BG_OPACITY)}
        </motion.div>
      ))}
      {STATIC_CODE.map((f, i) => (
        <div
          key={"s" + i}
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            fontFamily: MONO_FONT,
            fontSize: 9,
            whiteSpace: "nowrap",
          }}
        >
          {renderTokens(f.tokens, f.opacity)}
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const [, navigate] = useLocation();
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
            onClick={() => navigate("/anfrage")}
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

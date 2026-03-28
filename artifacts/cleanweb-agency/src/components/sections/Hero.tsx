import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────── */
type ScreenPhase = "dark" | "editor" | "building" | "website";

/* ─── Floating background code ───────────────────────────── */
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
  { text: "// converting visitors into loyal customers since 2020", x: "22%", dur: 29, delay: 13 },
  { text: "const leads = await Agency.generateResults(website)", x: "48%", dur: 33, delay: 25 },
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
            fontSize: 9.5,
            color: "rgba(37,99,235,0.065)",
            whiteSpace: "nowrap",
            letterSpacing: "0.02em",
          }}
          initial={{ top: "108%" }}
          animate={{ top: "-8%" }}
          transition={{ duration: line.dur, delay: line.delay, repeat: Infinity, ease: "linear" }}
        >
          {line.text}
        </motion.div>
      ))}
      {/* Static (non-moving) horizontal scattered fragments */}
      {[
        { text: "const trust = design()", top: "18%", left: "3%", opacity: 0.05 },
        { text: "return premium", top: "42%", left: "78%", opacity: 0.04 },
        { text: "<Website />", top: "65%", left: "12%", opacity: 0.045 },
        { text: "async build()", top: "80%", left: "62%", opacity: 0.04 },
        { text: "type Success", top: "30%", left: "85%", opacity: 0.038 },
      ].map((f, i) => (
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

/* ─── Editor: 30 lines of realistic code ─────────────────── */
const EDITOR_LINES = [
  { text: "import React, { useState, useEffect, useRef } from 'react'", color: "#c792ea", d: 0.00 },
  { text: "import { motion, AnimatePresence } from 'framer-motion'", color: "#c792ea", d: 0.05 },
  { text: "import { ArrowRight, Zap, TrendingUp } from 'lucide-react'", color: "#c792ea", d: 0.10 },
  { text: "import { Button, Section } from '@/components/ui'", color: "#c792ea", d: 0.15 },
  { text: "", color: "transparent", d: 0.20 },
  { text: "// ── Types ──────────────────────────────────", color: "#546e7a", d: 0.23 },
  { text: "interface HeroProps {", color: "#82aaff", d: 0.27 },
  { text: "  headline: string", color: "#a6accd", d: 0.31 },
  { text: "  subtext?: string", color: "#a6accd", d: 0.35 },
  { text: "  ctaLabel: string", color: "#a6accd", d: 0.39 },
  { text: "  onCtaClick?: () => void", color: "#a6accd", d: 0.43 },
  { text: "}", color: "#82aaff", d: 0.47 },
  { text: "", color: "transparent", d: 0.51 },
  { text: "// ── Component ──────────────────────────────", color: "#546e7a", d: 0.54 },
  { text: "export function Hero({ headline, subtext, ctaLabel }: HeroProps) {", color: "#82aaff", d: 0.58 },
  { text: "  const [visible, setVisible] = useState(false)", color: "#a6accd", d: 0.63 },
  { text: "  const [phase, setPhase] = useState<'idle' | 'active'>('idle')", color: "#a6accd", d: 0.68 },
  { text: "", color: "transparent", d: 0.72 },
  { text: "  useEffect(() => {", color: "#ffcb6b", d: 0.76 },
  { text: "    const t = setTimeout(() => setVisible(true), 600)", color: "#a6accd", d: 0.81 },
  { text: "    return () => clearTimeout(t)", color: "#a6accd", d: 0.86 },
  { text: "  }, [])", color: "#ffcb6b", d: 0.90 },
  { text: "", color: "transparent", d: 0.94 },
  { text: "  return (", color: "#a6accd", d: 0.98 },
  { text: "    <Section className='hero premium-layout'>", color: "#f07178", d: 1.03 },
  { text: "      <motion.div initial={{ opacity: 0, y: 30 }}", color: "#c3e88d", d: 1.08 },
  { text: "        animate={visible ? { opacity: 1, y: 0 } : {}}", color: "#a6accd", d: 1.13 },
  { text: "        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}",color: "#a6accd", d: 1.18 },
  { text: "      >", color: "#c3e88d", d: 1.22 },
  { text: "        <h1 className='text-5xl font-black text-white'>", color: "#f07178", d: 1.26 },
  { text: "          {headline}", color: "#ffcb6b", d: 1.30 },
  { text: "        </h1>", color: "#f07178", d: 1.34 },
  { text: "        <p className='text-lg text-white/60 mt-4'>", color: "#f07178", d: 1.38 },
  { text: "          {subtext}", color: "#ffcb6b", d: 1.42 },
  { text: "        </p>", color: "#f07178", d: 1.46 },
  { text: "        <div className='flex gap-4 mt-8'>", color: "#f07178", d: 1.50 },
  { text: "          <Button variant='primary'>", color: "#c3e88d", d: 1.54 },
  { text: "            {ctaLabel} <ArrowRight size={16} />", color: "#a6accd", d: 1.58 },
  { text: "          </Button>", color: "#c3e88d", d: 1.62 },
  { text: "          <Button variant='glass'>Pakete ansehen</Button>", color: "#c3e88d", d: 1.66 },
  { text: "        </div>", color: "#f07178", d: 1.70 },
  { text: "      </motion.div>", color: "#c3e88d", d: 1.74 },
  { text: "    </Section>", color: "#f07178", d: 1.78 },
  { text: "  )", color: "#a6accd", d: 1.82 },
  { text: "}", color: "#82aaff", d: 1.86 },
];

const FILE_TREE = [
  { name: "src/", indent: 0, folder: true },
  { name: "components/", indent: 1, folder: true },
  { name: "sections/", indent: 2, folder: true },
  { name: "Hero.tsx", indent: 3, folder: false, active: true },
  { name: "Services.tsx", indent: 3, folder: false },
  { name: "Pakete.tsx", indent: 3, folder: false },
  { name: "ui/", indent: 2, folder: true },
  { name: "Button.tsx", indent: 3, folder: false },
  { name: "index.css", indent: 1, folder: false },
  { name: "main.tsx", indent: 1, folder: false },
];

function ScreenPhaseDark() {
  return (
    <motion.div
      key="dark"
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#080e1a" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.0 } }}
    >
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 2, height: 18, background: "rgba(37,99,235,0.5)", borderRadius: 1 }}
      />
    </motion.div>
  );
}

function ScreenPhaseEditor() {
  return (
    <motion.div
      key="editor"
      className="absolute inset-0"
      style={{ background: "#1e1e2e", fontFamily: "'Fira Code','JetBrains Mono',monospace", display: "flex", flexDirection: "column" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      transition={{ duration: 0.7 }}
    >
      {/* Title bar */}
      <div style={{ height: 22, background: "#13131f", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", paddingLeft: 10, gap: 6, flexShrink: 0 }}>
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.28)" }}>Hero.tsx</span>
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.12)" }}>·</span>
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.18)" }}>CleanWeb Agency</span>
        <span style={{ marginLeft: "auto", marginRight: 8, fontSize: 7.5, color: "rgba(37,99,235,0.5)", fontFamily: "sans-serif" }}>TypeScript React</span>
      </div>

      {/* Editor body */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* File tree */}
        <div style={{ width: "20%", background: "#13131f", borderRight: "1px solid rgba(255,255,255,0.04)", paddingTop: 6, flexShrink: 0, overflow: "hidden" }}>
          <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.22)", padding: "0 8px 5px", letterSpacing: "0.12em", textTransform: "uppercase" }}>EXPLORER</div>
          {FILE_TREE.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 2, padding: "1.5px 0", paddingLeft: 6 + f.indent * 8, background: f.active ? "rgba(37,99,235,0.22)" : "transparent" }}>
              <span style={{ fontSize: 7, color: f.active ? "#89b4fa" : f.folder ? "#fab387" : "rgba(255,255,255,0.32)" }}>
                {f.folder ? "▸ " : "  "}{f.name}
              </span>
            </div>
          ))}
        </div>

        {/* Line numbers + code */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          <div style={{ width: 26, background: "#181828", paddingTop: 6, paddingRight: 4, textAlign: "right", flexShrink: 0 }}>
            {EDITOR_LINES.map((_, i) => (
              <div key={i} style={{ fontSize: 7, lineHeight: "14.5px", color: "rgba(255,255,255,0.16)" }}>{i + 1}</div>
            ))}
          </div>
          <div style={{ flex: 1, paddingTop: 6, paddingLeft: 10, overflow: "hidden" }}>
            {EDITOR_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.18, delay: line.d }}
                style={{ fontSize: 7.5, lineHeight: "14.5px", color: line.color, whiteSpace: "nowrap" }}
              >
                {line.text || "\u00a0"}
              </motion.div>
            ))}
            {/* Blinking cursor after last line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              style={{ display: "flex", alignItems: "center", marginTop: 1 }}
            >
              <span style={{ fontSize: 7.5, color: "#82aaff", lineHeight: "14.5px" }}>{"  "}</span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                style={{ width: 1.5, height: 10, background: "#89b4fa", borderRadius: 1, marginLeft: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ height: 14, background: "#2563eb", display: "flex", alignItems: "center", padding: "0 8px", gap: 12, flexShrink: 0 }}>
        <span style={{ fontSize: 6.5, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>main</span>
        <span style={{ fontSize: 6.5, color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif" }}>Hero.tsx — 44 lines · TypeScript</span>
      </div>
    </motion.div>
  );
}

/* ── Building phase: design editor view ───────────────────── */
function SelectionCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const style: React.CSSProperties = {
    position: "absolute",
    width: 4, height: 4,
    background: "white",
    border: "1px solid #2563eb",
    borderRadius: 0.5,
    zIndex: 10,
    ...(pos === "tl" ? { top: -2, left: -2 } : {}),
    ...(pos === "tr" ? { top: -2, right: -2 } : {}),
    ...(pos === "bl" ? { bottom: -2, left: -2 } : {}),
    ...(pos === "br" ? { bottom: -2, right: -2 } : {}),
  };
  return <div style={style} />;
}

function ScreenPhaseBuilding() {
  const bi = (delay: string): React.CSSProperties => ({
    animation: `macBuildIn 0.55s ease-out both`,
    animationDelay: delay,
  });

  return (
    <motion.div
      key="building"
      className="absolute inset-0"
      style={{ background: "#09101c", transformOrigin: "center center" }}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.6 } }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Editor toolbar */}
      <div style={{ height: 20, background: "#101828", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 10, padding: "0 8px", flexShrink: 0 }}>
        {["Pages", "Assets", "Components", "Settings"].map((t, i) => (
          <span key={t} style={{ fontSize: 7, color: i === 0 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.25)", borderBottom: i === 0 ? "1px solid #2563eb" : "none", paddingBottom: 2, fontFamily: "sans-serif" }}>{t}</span>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          <div style={{ width: 36, height: 12, borderRadius: 3, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 6, color: "white", fontFamily: "sans-serif" }}>Publish</span>
          </div>
        </div>
      </div>

      {/* Main canvas */}
      <div style={{ position: "absolute", top: 20, left: 0, right: 0, bottom: 0 }}>
        {/* Left panel hint */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 20, background: "#0d1420", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
          {["□", "T", "⬡", "◻"].map((icon, i) => (
            <div key={i} style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "rgba(255,255,255,0.2)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{icon}</div>
          ))}
        </div>

        {/* Website canvas area */}
        <div style={{ position: "absolute", left: 20, top: 0, right: 0, bottom: 0 }}>
          {/* Nav being placed */}
          <div style={{ ...bi("0.2s"), position: "absolute", top: 0, left: 0, right: 0, height: 26, background: "rgba(8,15,27,0.98)", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", outline: "1px solid rgba(37,99,235,0.5)" }}>
            <SelectionCorner pos="tl" />
            <SelectionCorner pos="tr" />
            <SelectionCorner pos="bl" />
            <SelectionCorner pos="br" />
            <div style={{ width: 42, height: 7, borderRadius: 3, background: "rgba(255,255,255,0.55)" }} />
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 22, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.16)" }} />
              <div style={{ width: 22, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.16)" }} />
              <div style={{ width: 36, height: 12, borderRadius: 3, background: "#2563eb" }} />
            </div>
          </div>

          {/* Hero background being placed */}
          <div style={{ ...bi("0.55s"), position: "absolute", top: 26, left: 0, right: 0, bottom: 0, background: "linear-gradient(140deg, #080e1c 0%, #0c1428 55%, #0f1e3d 100%)" }}>
            {/* Dot grid */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)", backgroundSize: "18px 18px" }} />

            {/* Headline placeholder being dragged in */}
            <div style={{ ...bi("0.9s"), position: "absolute", top: "18%", left: "50%", transform: "translateX(-50%)", width: "75%", outline: "1px dashed rgba(37,99,235,0.6)", padding: "4px 6px" }}>
              <SelectionCorner pos="tl" />
              <SelectionCorner pos="tr" />
              <SelectionCorner pos="bl" />
              <SelectionCorner pos="br" />
              <div style={{ height: 9, width: "90%", borderRadius: 3, background: "rgba(255,255,255,0.6)", marginBottom: 5 }} />
              <div style={{ height: 9, width: "78%", borderRadius: 3, background: "rgba(37,99,235,0.65)" }} />
            </div>

            {/* Subtext placeholder */}
            <div style={{ ...bi("1.3s"), position: "absolute", top: "46%", left: "50%", transform: "translateX(-50%)", width: "55%", display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ height: 5, width: "100%", borderRadius: 3, background: "rgba(255,255,255,0.18)" }} />
              <div style={{ height: 5, width: "75%", borderRadius: 3, background: "rgba(255,255,255,0.12)" }} />
            </div>

            {/* Button placeholders */}
            <div style={{ ...bi("1.65s"), position: "absolute", top: "60%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
              <div style={{ width: 60, height: 17, borderRadius: 5, background: "#2563eb", outline: "1px solid rgba(37,99,235,0.8)" }}>
                <SelectionCorner pos="tl" />
                <SelectionCorner pos="br" />
              </div>
              <div style={{ width: 52, height: 17, borderRadius: 5, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }} />
            </div>

            {/* Animated editing cursor */}
            <motion.div
              animate={{ x: [0, 80, 80, 0, -40, -40, 0], y: [0, -20, 30, 30, 10, -10, 0] }}
              transition={{ duration: 3.5, delay: 0.8, ease: "easeInOut" }}
              style={{ position: "absolute", top: "35%", left: "38%", width: 10, height: 16, pointerEvents: "none", zIndex: 20 }}
            >
              <svg viewBox="0 0 10 16" fill="white" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))", width: "100%", height: "100%" }}>
                <path d="M0 0 L0 12 L3.5 9 L6 14 L7.5 13.5 L5 8.5 L9 8.5 Z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Website phase: full hero with functional buttons ─────── */
function ScreenPhaseWebsite() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      key="website"
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(140deg, #080e1c 0%, #0c1428 55%, #0f1e3d 100%)", transformOrigin: "center center" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.07) 1px, transparent 0)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
      {/* Glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Website nav */}
      <div style={{ height: 32, background: "rgba(8,14,24,0.95)", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <img src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`} alt="CleanWeb" style={{ height: 18 }} />
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.38)", fontFamily: "sans-serif" }}>Leistungen</span>
          <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.38)", fontFamily: "sans-serif" }}>Referenzen</span>
          <button
            onClick={() => scrollTo("kontakt")}
            style={{ padding: "4px 10px", background: "#2563eb", border: "none", borderRadius: 5, fontSize: 8, color: "white", cursor: "pointer", fontWeight: 600, fontFamily: "sans-serif" }}
          >
            Beratung
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 28px", textAlign: "center", position: "relative" }}>

        {/* Code tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ fontFamily: "monospace", fontSize: 8, color: "rgba(37,99,235,0.5)", letterSpacing: "0.2em", marginBottom: 14 }}
        >
          {"<build trust. generate customers. />"}
        </motion.div>

        {/* Headline line 1 — clip-path build-in reveal */}
        <div style={{ overflow: "hidden", marginBottom: 5 }}>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 26, fontWeight: 800, color: "white", lineHeight: 1.08, fontFamily: "'Montserrat', sans-serif" }}
          >
            Wir bauen keine Websites.
          </motion.div>
        </div>

        {/* Headline line 2 — spring snap */}
        <div style={{ overflow: "hidden", marginBottom: 16 }}>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.88, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 26, fontWeight: 800, color: "#2563eb", lineHeight: 1.08, fontFamily: "'Montserrat', sans-serif" }}
          >
            Wir bauen Wettbewerbsvorteile.
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 9.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 290, marginBottom: 22, fontFamily: "sans-serif" }}
        >
          Strategisches Design. Schnelle Umsetzung. Messbare Ergebnisse — für Unternehmen, die keine Kompromisse machen.
        </motion.p>

        {/* CTA Buttons — spring snap into place */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22, delay: 1.45 }}
          style={{ display: "flex", gap: 10, justifyContent: "center" }}
        >
          <button
            onClick={() => scrollTo("kontakt")}
            style={{
              padding: "11px 22px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: 7,
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "sans-serif",
              boxShadow: "0 4px 20px rgba(37,99,235,0.38)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 26px rgba(37,99,235,0.52)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.38)"; }}
          >
            Kostenlose Beratung <ArrowRight size={11} />
          </button>
          <button
            onClick={() => scrollTo("pakete")}
            style={{
              padding: "11px 22px",
              background: "rgba(255,255,255,0.07)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 7,
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "sans-serif",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
          >
            Pakete ansehen
          </button>
        </motion.div>
      </div>

      {/* Stats footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.85, duration: 0.7 }}
        style={{ display: "flex", justifyContent: "center", gap: 24, padding: "9px 0", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}
      >
        {[["50+", "Projekte"], ["3×", "mehr Anfragen"], ["100 %", "Zufriedenheit"]].map(([n, l]) => (
          <span key={l} style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", fontFamily: "sans-serif" }}>
            <span style={{ color: "rgba(255,255,255,0.58)", fontWeight: 700 }}>{n}</span> {l}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── MacBook screen: browser chrome + phase content ──────── */
function MacScreen({ phase }: { phase: ScreenPhase }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#09101c", overflow: "hidden" }}>
      {/* Browser chrome — always stable, never animated */}
      <div style={{ height: 22, background: "#101828", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", padding: "0 10px", gap: 5, flexShrink: 0, position: "relative", zIndex: 20 }}>
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.65)" }} />
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(254,188,46,0.65)" }} />
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(40,200,64,0.65)" }} />
        <div style={{ marginLeft: 8, flex: 1, maxWidth: 190, height: 11, borderRadius: 11, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", paddingLeft: 7 }}>
          <span style={{ fontSize: 6, color: "rgba(255,255,255,0.22)", fontFamily: "monospace" }}>
            {phase === "editor" ? "code — Hero.tsx — CleanWeb" : "cleanweb.agency"}
          </span>
        </div>
      </div>

      {/* Phase content area — fixed position, never affects layout */}
      <div style={{ position: "absolute", top: 22, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
        <AnimatePresence mode="sync">
          {phase === "dark" && <ScreenPhaseDark />}
          {phase === "editor" && <ScreenPhaseEditor />}
          {phase === "building" && <ScreenPhaseBuilding />}
          {phase === "website" && <ScreenPhaseWebsite />}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── MacBook 3D frame ───────────────────────────────────── */
function MacBook3D({ phase }: { phase: ScreenPhase }) {
  const glowIntensity = { dark: 0, editor: 0.055, building: 0.09, website: 0.13 }[phase];

  return (
    <div className="relative w-full" style={{ maxWidth: 840 }}>
      {/* Ambient glow — grows with screen brightness */}
      <motion.div
        animate={{ opacity: glowIntensity }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        style={{ position: "absolute", top: "-32%", left: "-22%", right: "-22%", bottom: "-32%", background: "radial-gradient(ellipse 58% 52% at 50% 48%, rgba(37,99,235,1) 0%, transparent 100%)", pointerEvents: "none", zIndex: 0 }}
      />

      {/* 3D perspective container */}
      <div style={{ perspective: "1400px", perspectiveOrigin: "50% 12%", position: "relative", zIndex: 1 }}>
        <div style={{ transformStyle: "preserve-3d", transform: "rotateX(3deg)", position: "relative" }}>

          {/* ── LID (opens once on load) ── */}
          <motion.div
            style={{ transformOrigin: "50% 100%", position: "relative", transformStyle: "preserve-3d" }}
            initial={{ rotateX: -75 }}
            animate={{ rotateX: -8 }}
            transition={{ duration: 2.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Lid body — space gray metal */}
            <div style={{
              position: "relative",
              background: "linear-gradient(175deg, #3e3e42 0%, #2e2e31 30%, #242426 65%, #1c1c1e 100%)",
              borderRadius: "14px 14px 3px 3px",
              padding: "13px 13px 0",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.09), inset 0 1px 0 rgba(255,255,255,0.11), 0 -2px 6px rgba(0,0,0,0.5)",
            }}>
              {/* Top chamfer */}
              <div style={{ position: "absolute", top: 0, left: "8%", right: "8%", height: 1, background: "rgba(255,255,255,0.18)", borderRadius: "0 0 4px 4px" }} />
              {/* Camera */}
              <div style={{ position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)", width: 5, height: 5, borderRadius: "50%", background: "#1a1a1c", border: "1px solid rgba(255,255,255,0.07)" }} />

              {/* Screen bezel */}
              <div style={{ background: "#111116", borderRadius: "7px 7px 2px 2px", padding: "2px 2px 0", overflow: "hidden" }}>
                <div style={{ overflow: "hidden", borderRadius: "5px 5px 0 0", aspectRatio: "16/10", position: "relative" }}>
                  <MacScreen phase={phase} />
                  {/* Screen surface reflection */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(130deg, rgba(255,255,255,0.022) 0%, transparent 50%)", pointerEvents: "none", zIndex: 30 }} />
                </div>
              </div>

              {/* Screen glow on lid frame */}
              <motion.div
                animate={{ opacity: glowIntensity * 7 }}
                transition={{ duration: 2.0 }}
                style={{ position: "absolute", inset: 0, borderRadius: "14px 14px 0 0", background: "radial-gradient(ellipse 80% 40% at 50% 5%, rgba(37,99,235,0.18) 0%, transparent 60%)", pointerEvents: "none" }}
              />
              {/* Apple logo backlight */}
              <motion.div
                animate={{ opacity: glowIntensity * 3.5 }}
                transition={{ duration: 2 }}
                style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -55%)", width: 30, height: 30, background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)", pointerEvents: "none" }}
              />
            </div>
          </motion.div>

          {/* ── HINGE ── */}
          <div style={{ height: 4, background: "linear-gradient(90deg, #181818, #484850, #181818)", flexShrink: 0 }} />

          {/* ── BASE ── */}
          <div style={{
            position: "relative",
            background: "linear-gradient(180deg, #2e2e31 0%, #222224 55%, #1c1c1e 100%)",
            height: 34,
            borderRadius: "0 0 11px 11px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}>
            {/* Keyboard hint rows */}
            <div style={{ position: "absolute", top: 5, left: 24, right: 24, display: "flex", flexDirection: "column", gap: 2, opacity: 0.6 }}>
              {[14, 14, 12].map((cols, row) => (
                <div key={row} style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: cols }).map((_, i) => (
                    <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.05)" }} />
                  ))}
                </div>
              ))}
            </div>
            {/* Trackpad */}
            <div style={{ position: "absolute", bottom: 3, left: "50%", transform: "translateX(-50%)", width: 110, height: 9, borderRadius: 5, background: "#262628", border: "1px solid rgba(255,255,255,0.05)" }} />
          </div>
        </div>
      </div>

      {/* Ground shadow */}
      <div style={{ position: "absolute", bottom: -28, left: "12%", right: "12%", height: 44, background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.72) 0%, transparent 70%)", filter: "blur(18px)", pointerEvents: "none", zIndex: 0 }} />
      {/* Ground light reflection */}
      <motion.div
        animate={{ opacity: glowIntensity * 0.85 }}
        transition={{ duration: 2 }}
        style={{ position: "absolute", bottom: -36, left: "20%", right: "20%", height: 30, background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.55) 0%, transparent 70%)", filter: "blur(12px)", pointerEvents: "none", zIndex: 0 }}
      />
    </div>
  );
}

/* ─── Hero section ───────────────────────────────────────── */
export function Hero() {
  const [phase, setPhase] = useState<ScreenPhase>("dark");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("editor"), 900);
    const t2 = setTimeout(() => setPhase("building"), 5400);
    const t3 = setTimeout(() => setPhase("website"), 9200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950 pt-20">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(9,18,40,0.95) 0%, #0B1220 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 120% 110% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
      </div>

      {/* ── Animated background code ── */}
      <BackgroundCode />

      {/* ── One-time scan line ── */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.28) 40%, rgba(255,255,255,0.09) 50%, rgba(37,99,235,0.28) 60%, transparent)", zIndex: 30 }}
        initial={{ top: "0%", opacity: 1 }}
        animate={{ top: "105%", opacity: 0.15 }}
        transition={{ duration: 2.2, delay: 0.1, ease: "linear" }}
      />

      {/* ── Top accent ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/25 to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8">

        {/* Label above MacBook */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-center"
        >
          <span style={{ fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: "0.22em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase" }}>
            {"< Premium Web Design Agency />"}
          </span>
        </motion.div>

        {/* MacBook */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <MacBook3D phase={phase} />
        </motion.div>

        {/* Scroll hint after website phase */}
        <AnimatePresence>
          {phase === "website" && (
            <motion.div
              key="scroll"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2.8, duration: 0.7 }}
              className="mt-8 flex flex-col items-center gap-1.5"
            >
              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Mehr entdecken</span>
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <ChevronDown size={14} className="text-white/20" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

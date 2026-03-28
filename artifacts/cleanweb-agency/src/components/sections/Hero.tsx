import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────── */
type ScreenPhase = "dark" | "editor" | "website";

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
  { text: "// converting visitors into loyal customers", x: "22%", dur: 29, delay: 13 },
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
      {[
        { text: "const trust = design()", top: "18%", left: "3%", opacity: 0.05 },
        { text: "return premium", top: "42%", left: "78%", opacity: 0.04 },
        { text: "<Website />", top: "65%", left: "12%", opacity: 0.045 },
        { text: "async build()", top: "80%", left: "62%", opacity: 0.04 },
        { text: "type Success", top: "30%", left: "85%", opacity: 0.038 },
      ].map((f, i) => (
        <div key={"s" + i} style={{ position: "absolute", top: f.top, left: f.left, fontFamily: "monospace", fontSize: 9, color: `rgba(37,99,235,${f.opacity})`, whiteSpace: "nowrap" }}>
          {f.text}
        </div>
      ))}
    </div>
  );
}

/* ─── Logo intro overlay ─────────────────────────────────── */
function LogoIntro({ shineActive }: { shineActive: boolean }) {
  return (
    <motion.div
      key="logo-intro"
      className="absolute inset-0 z-30 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 1.0, ease: "easeInOut" } }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo with shine container — overflow:hidden clips the sweep to logo bounds */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 4 }}>
        <img
          src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
          alt="CleanWeb Agency"
          style={{
            height: 86,
            width: "auto",
            display: "block",
            filter: "drop-shadow(0 0 28px rgba(37,99,235,0.22)) drop-shadow(0 4px 16px rgba(0,0,0,0.5))",
          }}
        />
        {/* Shine sweep — soft oval light blob, no hard edges, clipped to logo bounds */}
        <AnimatePresence>
          {shineActive && (
            <motion.div
              key="shine"
              style={{
                position: "absolute",
                top: "-55%",
                left: 0,
                width: "42%",
                height: "210%",
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.06) 58%, transparent 78%)",
                filter: "blur(7px)",
                pointerEvents: "none",
                mixBlendMode: "screen",
              }}
              initial={{ x: "-130%" }}
              animate={{ x: "330%" }}
              exit={{}}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Subtle brand moniker below */}
      <motion.span
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        style={{ fontFamily: "monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.28em", textTransform: "uppercase", marginTop: 16 }}
      >
        cleanweb.agency
      </motion.span>
    </motion.div>
  );
}

/* ─── Editor phase: 44 lines of code ─────────────────────── */
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
  { text: "        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}", color: "#a6accd", d: 1.18 },
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
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.7, ease: "easeIn" } }}
      transition={{ duration: 0.7 }}
    >
      <div style={{ height: 22, background: "#13131f", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", paddingLeft: 10, gap: 6, flexShrink: 0 }}>
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.28)" }}>Hero.tsx</span>
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.12)" }}>·</span>
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.18)" }}>CleanWeb Agency</span>
        <span style={{ marginLeft: "auto", marginRight: 8, fontSize: 7.5, color: "rgba(37,99,235,0.5)", fontFamily: "sans-serif" }}>TypeScript React</span>
      </div>
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
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
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          <div style={{ width: 26, background: "#181828", paddingTop: 6, paddingRight: 4, textAlign: "right", flexShrink: 0 }}>
            {EDITOR_LINES.map((_, i) => (
              <div key={i} style={{ fontSize: 7, lineHeight: "14.5px", color: "rgba(255,255,255,0.16)" }}>{i + 1}</div>
            ))}
          </div>
          <div style={{ flex: 1, paddingTop: 6, paddingLeft: 10, overflow: "hidden" }}>
            {EDITOR_LINES.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.18, delay: line.d }}
                style={{ fontSize: 7.5, lineHeight: "14.5px", color: line.color, whiteSpace: "nowrap" }}>
                {line.text || "\u00a0"}
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }} style={{ display: "flex", alignItems: "center", marginTop: 1 }}>
              <span style={{ fontSize: 7.5, color: "#82aaff", lineHeight: "14.5px" }}>{"  "}</span>
              <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                style={{ width: 1.5, height: 10, background: "#89b4fa", borderRadius: 1, marginLeft: 1 }} />
            </motion.div>
          </div>
        </div>
      </div>
      <div style={{ height: 14, background: "#2563eb", display: "flex", alignItems: "center", padding: "0 8px", gap: 12, flexShrink: 0 }}>
        <span style={{ fontSize: 6.5, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>main</span>
        <span style={{ fontSize: 6.5, color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif" }}>Hero.tsx — 44 lines · TypeScript</span>
      </div>
    </motion.div>
  );
}

/* ── Drag-and-drop element wrapper ────────────────────────── */
function DragIn({
  children,
  from,
  delay = 0,
}: {
  children: React.ReactNode;
  from: { x: number; y: number; rotate?: number };
  delay?: number;
}) {
  return (
    <motion.div
      style={{ position: "relative", display: "inline-block" }}
      initial={{ x: from.x, y: from.y, rotate: from.rotate ?? 0, opacity: 1 }}
      animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26, delay }}
    >
      {/* Selection outline — fully visible while dragging, fades on landing */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: delay + 0.55, duration: 0.35 }}
        style={{
          position: "absolute", inset: -4,
          border: "1.5px dashed rgba(37,99,235,0.7)",
          borderRadius: 5,
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
      {/* Corner grab handles on the outline */}
      {[{ top: -3, left: -3 }, { top: -3, right: -3 }, { bottom: -3, left: -3 }, { bottom: -3, right: -3 }].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: delay + 0.55, duration: 0.35 }}
          style={{ position: "absolute", width: 5, height: 5, background: "white", border: "1.5px solid #2563eb", borderRadius: 1, pointerEvents: "none", zIndex: 21, ...pos }}
        />
      ))}
      {children}
    </motion.div>
  );
}

/* ── Website phase: final hero with drag-drop animations ──── */
function ScreenPhaseWebsite() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      key="website"
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(140deg, #080e1c 0%, #0c1428 55%, #0f1e3d 100%)", transformOrigin: "center center" }}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.07) 1px, transparent 0)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Hero content — no nav/header inside the screen */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center", position: "relative", gap: 0 }}>

        {/* Code tag */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontFamily: "monospace", fontSize: 7.5, color: "rgba(37,99,235,0.5)", letterSpacing: "0.2em", marginBottom: 14 }}>
          {"<build trust. generate customers. />"}
        </motion.div>

        {/* Headline 1 — dragged in from upper-left, fires after scale-up is complete */}
        <div style={{ marginBottom: 4, textAlign: "center" }}>
          <DragIn from={{ x: -90, y: -42, rotate: -3 }} delay={1.45}>
            <div style={{ fontSize: 34, fontWeight: 800, color: "white", lineHeight: 1.08, fontFamily: "'Montserrat', sans-serif", whiteSpace: "nowrap" }}>
              Wir bauen keine Websites.
            </div>
          </DragIn>
        </div>

        {/* Headline 2 — dragged in from lower-right */}
        <div style={{ marginBottom: 16, textAlign: "center" }}>
          <DragIn from={{ x: 82, y: 36, rotate: 2.5 }} delay={1.9}>
            <div style={{ fontSize: 34, fontWeight: 800, color: "#2563eb", lineHeight: 1.08, fontFamily: "'Montserrat', sans-serif", whiteSpace: "nowrap" }}>
              Wir bauen Wettbewerbsvorteile.
            </div>
          </DragIn>
        </div>

        {/* Subtext — simple fade, appears while user watches the second headline settle */}
        <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1, duration: 0.6 }}
          style={{ fontSize: 9.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 295, marginBottom: 22, fontFamily: "sans-serif" }}>
          Strategisches Design. Schnelle Umsetzung. Messbare Ergebnisse — für Unternehmen, die keine Kompromisse machen.
        </motion.p>

        {/* Buttons — dropped from above, clearly visible while falling */}
        <DragIn from={{ x: 0, y: -72, rotate: 0 }} delay={2.45}>
          <div style={{ display: "flex", gap: 11, justifyContent: "center" }}>
            <button
              onClick={() => scrollTo("kontakt")}
              style={{ padding: "12px 24px", background: "#2563eb", color: "white", border: "none", borderRadius: 7, fontSize: 11.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "sans-serif", boxShadow: "0 4px 20px rgba(37,99,235,0.38)", transition: "transform 0.15s, box-shadow 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 26px rgba(37,99,235,0.52)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.38)"; }}
            >
              Kostenlose Beratung <ArrowRight size={11} />
            </button>
            <button
              onClick={() => scrollTo("pakete")}
              style={{ padding: "12px 24px", background: "rgba(255,255,255,0.07)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 7, fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "sans-serif", transition: "background 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
            >
              Pakete ansehen
            </button>
          </div>
        </DragIn>
      </div>

      {/* Stats footer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.7 }}
        style={{ display: "flex", justifyContent: "center", gap: 24, padding: "9px 0", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
        {[["50+", "Projekte"], ["3×", "mehr Anfragen"], ["100 %", "Zufriedenheit"]].map(([n, l]) => (
          <span key={l} style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", fontFamily: "sans-serif" }}>
            <span style={{ color: "rgba(255,255,255,0.58)", fontWeight: 700 }}>{n}</span> {l}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── Real MacBook photo with animated screen overlay ──────── */
function RealMacBook({ phase }: { phase: ScreenPhase }) {
  const glowIntensity = { dark: 0, editor: 0.06, website: 0.16 }[phase] ?? 0;
  return (
    <div className="relative w-full select-none" style={{ maxWidth: 820 }}>

      {/* Ambient glow behind the device — breathes with screen content */}
      <motion.div
        animate={{ opacity: glowIntensity }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "5%", left: "-8%", right: "-8%", bottom: "30%",
          background: "radial-gradient(ellipse 70% 65% at 50% 42%, rgba(37,99,235,0.85) 0%, transparent 100%)",
          filter: "blur(38px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Container — natural aspect ratio of the MacBook photo */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── Screen animation overlay — sits exactly over the MacBook display ── */}
        {/* 736×406 PNG: screen starts ~4% from top, 8% from sides, height ~68% of total */}
        <div style={{
          position: "absolute",
          top: "4%",
          left: "8%",
          width: "84%",
          height: "68%",
          overflow: "hidden",
          clipPath: "inset(0 round 4px)",
          borderRadius: "4px 4px 2px 2px",
          background: "#09101c",
          zIndex: 4,
        }}>
          {/* Subtle glare sheen on the glass */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 30, pointerEvents: "none",
            background: "linear-gradient(135deg, rgba(255,255,255,0.028) 0%, transparent 55%)",
          }} />
          <AnimatePresence mode="sync">
            {phase === "dark" && <ScreenPhaseDark />}
            {phase === "editor" && <ScreenPhaseEditor />}
            {phase === "website" && <ScreenPhaseWebsite />}
          </AnimatePresence>
        </div>

        {/* Real MacBook photo (background removed) */}
        <img
          src={`${import.meta.env.BASE_URL}macbook-real.png`}
          alt="MacBook Pro"
          draggable={false}
          style={{
            width: "100%",
            display: "block",
            position: "relative",
            zIndex: 3,
            filter: "drop-shadow(0 28px 55px rgba(0,0,0,0.72)) drop-shadow(0 6px 18px rgba(0,0,0,0.5))",
          }}
        />
      </div>

      {/* Floor shadow */}
      <div style={{
        position: "absolute", bottom: -20, left: "15%", right: "15%", height: 40,
        background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.65) 0%, transparent 70%)",
        filter: "blur(16px)", pointerEvents: "none", zIndex: 0,
      }} />
    </div>
  );
}

/* ─── Hero section ───────────────────────────────────────── */
export function Hero() {
  const [logoGone, setLogoGone] = useState(false);
  const [macEntered, setMacEntered] = useState(false);
  const [shineActive, setShineActive] = useState(false);
  const [phase, setPhase] = useState<ScreenPhase>("dark");

  useEffect(() => {
    // t=0:    logo appears
    // t=1.35: shine sweeps the logo
    // t=2.0:  MacBook enters (covers logo), logo fades out
    // t=2.6:  editor/coding phase starts (MacBook is opening its lid)
    // t=5.1:  website phase immediately after last code line — no pause
    const t0 = setTimeout(() => setShineActive(true), 1350);
    const t1 = setTimeout(() => { setLogoGone(true); setMacEntered(true); }, 2000);
    const t2 = setTimeout(() => setPhase("editor"), 2600);
    const t3 = setTimeout(() => setPhase("website"), 5100);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950 pt-20">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(9,18,40,0.95) 0%, #0B1220 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 120% 110% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
      </div>

      {/* ── Animated background code ── */}
      <BackgroundCode />

      {/* ── One-time scan line ── */}
      <motion.div className="absolute left-0 right-0 pointer-events-none"
        style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.28) 40%, rgba(255,255,255,0.09) 50%, rgba(37,99,235,0.28) 60%, transparent)", zIndex: 30 }}
        initial={{ top: "0%", opacity: 1 }} animate={{ top: "105%", opacity: 0.15 }}
        transition={{ duration: 2.2, delay: 0.1, ease: "linear" }} />

      {/* ── Top accent ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/25 to-transparent pointer-events-none" />

      {/* ── LOGO INTRO — absolute, centered, over everything ── */}
      <AnimatePresence>
        {!logoGone && <LogoIntro shineActive={shineActive} />}
      </AnimatePresence>

      {/* ── MacBook content — smooth cinematic fade-in after logo ── */}
      <motion.div
        className="relative z-40 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: macEntered ? 1 : 0, y: macEntered ? 0 : 22 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Label above MacBook */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: macEntered ? 1 : 0, y: macEntered ? 0 : -8 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mb-6 text-center"
        >
          <span style={{ fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: "0.22em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase" }}>
            {"< Premium Web Design Agency />"}
          </span>
        </motion.div>

        {/* Real MacBook photo with animated screen overlay */}
        <RealMacBook phase={phase} />

        {/* Scroll hint after website phase */}
        <AnimatePresence>
          {phase === "website" && (
            <motion.div key="scroll" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ delay: 2.8, duration: 0.7 }} className="mt-8 flex flex-col items-center gap-1.5">
              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Mehr entdecken</span>
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <ChevronDown size={14} className="text-white/20" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

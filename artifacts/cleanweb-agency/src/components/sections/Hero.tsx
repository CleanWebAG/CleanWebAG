import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── Screen phase type ──────────────────────────────────── */
type ScreenPhase = "dark" | "editor" | "building" | "website";

/* ─── Editor phase: simulated code being written ────────── */
const EDITOR_LINES = [
  { text: "import { motion } from 'framer-motion'", color: "#c792ea", d: 0.0 },
  { text: "import { Button } from '@/ui/button'", color: "#c792ea", d: 0.12 },
  { text: "", color: "transparent", d: 0.2 },
  { text: "export function Hero() {", color: "#82aaff", d: 0.28 },
  { text: "  return (", color: "#a6accd", d: 0.38 },
  { text: "    <section className=\"hero\">", color: "#f07178", d: 0.48 },
  { text: "      <h1>Wir bauen keine Websites.</h1>", color: "#c3e88d", d: 0.60 },
  { text: "      <h1 className=\"text-electric\">", color: "#c3e88d", d: 0.72 },
  { text: "        Wir bauen Wettbewerbsvorteile.", color: "#ffcb6b", d: 0.82 },
  { text: "      </h1>", color: "#c3e88d", d: 0.90 },
  { text: "      <Button>Kostenlose Beratung</Button>", color: "#f07178", d: 1.02 },
  { text: "      <Button variant=\"glass\">", color: "#f07178", d: 1.14 },
  { text: "        Pakete ansehen", color: "#a6accd", d: 1.22 },
  { text: "      </Button>", color: "#f07178", d: 1.30 },
  { text: "    </section>", color: "#f07178", d: 1.38 },
  { text: "  )", color: "#a6accd", d: 1.46 },
  { text: "}", color: "#82aaff", d: 1.54 },
];

const FILE_TREE = [
  { name: "src/", indent: 0, folder: true },
  { name: "components/", indent: 1, folder: true },
  { name: "Hero.tsx", indent: 2, folder: false, active: true },
  { name: "Navigation.tsx", indent: 2, folder: false },
  { name: "sections/", indent: 2, folder: true },
  { name: "index.css", indent: 1, folder: false },
  { name: "package.json", indent: 0, folder: false },
];

function ScreenPhaseDark() {
  return (
    <motion.div
      key="dark"
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#080e1a" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 2, height: 18, background: "rgba(37,99,235,0.45)", borderRadius: 1 }}
      />
    </motion.div>
  );
}

function ScreenPhaseEditor() {
  return (
    <motion.div
      key="editor"
      className="absolute inset-0"
      style={{ background: "#1e1e2e", fontFamily: "'Fira Code','JetBrains Mono',monospace", display: "flex" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* File tree sidebar */}
      <div style={{ width: "22%", background: "#181825", borderRight: "1px solid rgba(255,255,255,0.05)", paddingTop: 8, flexShrink: 0, overflow: "hidden" }}>
        <div style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", padding: "0 10px 6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Explorer</div>
        {FILE_TREE.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 3, padding: "2px 0 2px", paddingLeft: 8 + f.indent * 10, background: f.active ? "rgba(37,99,235,0.18)" : "transparent" }}>
            <span style={{ fontSize: 7, color: f.active ? "#89b4fa" : f.folder ? "#fab387" : "rgba(255,255,255,0.35)" }}>
              {f.folder ? "▸ " : "  "}{f.name}
            </span>
          </div>
        ))}
      </div>

      {/* Code area */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Line numbers */}
        <div style={{ width: 28, background: "#1a1a2c", paddingTop: 8, textAlign: "right", paddingRight: 4, flexShrink: 0 }}>
          {EDITOR_LINES.map((_, i) => (
            <div key={i} style={{ fontSize: 7.5, lineHeight: "16px", color: "rgba(255,255,255,0.18)" }}>{i + 1}</div>
          ))}
        </div>
        {/* Lines */}
        <div style={{ flex: 1, paddingTop: 8, paddingLeft: 10, overflow: "hidden" }}>
          {EDITOR_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: line.d }}
              style={{ fontSize: 7.5, lineHeight: "16px", color: line.color, whiteSpace: "nowrap", overflow: "hidden" }}
            >
              {line.text || "\u00a0"}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 14, background: "#2563eb", display: "flex", alignItems: "center", paddingLeft: 8, gap: 10 }}>
        <span style={{ fontSize: 7, color: "rgba(255,255,255,0.7)" }}>main</span>
        <span style={{ fontSize: 7, color: "rgba(255,255,255,0.5)" }}>Hero.tsx — CleanWeb Agency</span>
      </div>
    </motion.div>
  );
}

function ScreenPhaseBuilding() {
  const b = (delay: string): React.CSSProperties => ({
    animation: `macBuildIn 0.6s ease-out both`,
    animationDelay: delay,
  });
  return (
    <motion.div
      key="building"
      className="absolute inset-0"
      style={{ background: "#09101c" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Website nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 border-b border-white/5"
        style={{ ...b("0s"), height: 26, background: "rgba(8,15,27,0.98)" }}>
        <div style={{ width: 48, height: 7, borderRadius: 3, background: "rgba(255,255,255,0.55)" }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ width: 24, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.15)" }} />
          <div style={{ width: 24, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.15)" }} />
          <div style={{ width: 40, height: 13, borderRadius: 4, background: "#2563eb" }} />
        </div>
      </div>

      {/* Hero gradient background */}
      <div className="absolute" style={{ ...b("0.25s"), top: 26, left: 0, right: 0, bottom: 0, background: "linear-gradient(140deg, #080e1c 0%, #0d1530 60%, #0f1e3d 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.05) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
      </div>

      {/* Headline blocks appearing */}
      <div style={{ position: "absolute", top: "22%", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ ...b("0.55s"), height: 12, width: "60%", borderRadius: 4, background: "rgba(255,255,255,0.8)" }} />
        <div style={{ ...b("0.7s"), height: 12, width: "70%", borderRadius: 4, background: "rgba(37,99,235,0.75)" }} />
        <div style={{ ...b("0.9s"), height: 7, width: "45%", borderRadius: 3, background: "rgba(255,255,255,0.22)", marginTop: 4 }} />
        <div style={{ ...b("1.0s"), height: 7, width: "38%", borderRadius: 3, background: "rgba(255,255,255,0.15)" }} />
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <div style={{ ...b("1.2s"), width: 64, height: 20, borderRadius: 6, background: "#2563eb" }} />
          <div style={{ ...b("1.35s"), width: 56, height: 20, borderRadius: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }} />
        </div>
      </div>

      {/* Building cursor blink */}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: 3 }}
        style={{ position: "absolute", bottom: "20%", right: "20%", width: 1.5, height: 12, background: "rgba(37,99,235,0.6)", borderRadius: 1 }}
      />
    </motion.div>
  );
}

function ScreenPhaseWebsite() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      key="website"
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(140deg, #080e1c 0%, #0c1428 55%, #0f1e3d 100%)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)", backgroundSize: "22px 22px", pointerEvents: "none" }} />
      {/* Center glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Mini website nav */}
      <div style={{ height: 30, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", background: "rgba(8,14,24,0.92)", flexShrink: 0 }}>
        <img src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`} alt="CleanWeb" style={{ height: 14 }} />
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>Leistungen</span>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>Referenzen</span>
          <button onClick={() => scrollTo("kontakt")} style={{ padding: "3px 8px", background: "#2563eb", border: "none", borderRadius: 4, fontSize: 7.5, color: "white", cursor: "pointer", fontWeight: 600 }}>
            Beratung
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", textAlign: "center", position: "relative" }}>

        {/* Code tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontFamily: "monospace", fontSize: 8, color: "rgba(37,99,235,0.55)", letterSpacing: "0.2em", marginBottom: 12 }}
        >
          {"<build trust. generate customers. />"}
        </motion.div>

        {/* Headline line 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 21, fontWeight: 800, color: "white", lineHeight: 1.08, marginBottom: 4, fontFamily: "'Montserrat', sans-serif" }}
        >
          Wir bauen keine Websites.
        </motion.div>

        {/* Headline line 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 21, fontWeight: 800, color: "#2563eb", lineHeight: 1.08, marginBottom: 14, fontFamily: "'Montserrat', sans-serif" }}
        >
          Wir bauen Wettbewerbsvorteile.
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ fontSize: 9, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}
        >
          Strategisches Design. Schnelle Umsetzung. Messbare Ergebnisse — für Unternehmen, die keine Kompromisse machen.
        </motion.p>

        {/* Functional CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: 10, justifyContent: "center" }}
        >
          <button
            onClick={() => scrollTo("kontakt")}
            style={{
              padding: "9px 18px", background: "#2563eb", color: "white", border: "none",
              borderRadius: 6, fontSize: 10, fontWeight: 600, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 5,
              boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.35)"; }}
          >
            Kostenlose Beratung
            <ArrowRight size={10} />
          </button>
          <button
            onClick={() => scrollTo("pakete")}
            style={{
              padding: "9px 18px", background: "rgba(255,255,255,0.07)", color: "white",
              border: "1px solid rgba(255,255,255,0.18)", borderRadius: 6,
              fontSize: 10, fontWeight: 600, cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
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
        transition={{ delay: 1.7, duration: 0.6 }}
        style={{ display: "flex", justifyContent: "center", gap: 24, padding: "8px 0", borderTop: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}
      >
        {[["50+", "Projekte"], ["3×", "mehr Anfragen"], ["100 %", "Zufriedenheit"]].map(([n, l]) => (
          <span key={l} style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>
            <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 700 }}>{n}</span> {l}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── Mac screen: browser chrome + phase content ─────────── */
function MacScreen({ phase }: { phase: ScreenPhase }) {
  return (
    <div className="absolute inset-0" style={{ background: "#09101c", overflow: "hidden" }}>
      {/* Browser chrome */}
      <div style={{ height: 22, background: "#101828", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", padding: "0 10px", gap: 5, flexShrink: 0 }}>
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.6)" }} />
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(254,188,46,0.6)" }} />
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(40,200,64,0.6)" }} />
        <div style={{ marginLeft: 8, flex: 1, maxWidth: 180, height: 11, borderRadius: 11, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", paddingLeft: 7 }}>
          <span style={{ fontSize: 6, color: "rgba(255,255,255,0.22)", fontFamily: "monospace" }}>
            {phase === "editor" ? "code — Hero.tsx" : "cleanweb.agency"}
          </span>
        </div>
      </div>

      {/* Phase content */}
      <div style={{ position: "absolute", top: 22, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
        <AnimatePresence mode="wait">
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
  const glowIntensity = { dark: 0, editor: 0.055, building: 0.085, website: 0.13 }[phase];

  return (
    <div className="relative w-full" style={{ maxWidth: 840 }}>

      {/* Ambient glow behind MacBook — grows with screen brightness */}
      <motion.div
        animate={{ opacity: glowIntensity }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "-30%", left: "-20%", right: "-20%", bottom: "-30%",
          background: "radial-gradient(ellipse 60% 55% at 50% 48%, rgba(37,99,235,1) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3D perspective container */}
      <div style={{ perspective: "1400px", perspectiveOrigin: "50% 12%", position: "relative", zIndex: 1 }}>
        <div style={{ transformStyle: "preserve-3d", transform: "rotateX(3deg)", position: "relative" }}>

          {/* ── LID (opens on load) ── */}
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
              {/* Thin top chamfer highlight */}
              <div style={{ position: "absolute", top: 0, left: "8%", right: "8%", height: 1, background: "rgba(255,255,255,0.18)", borderRadius: "0 0 4px 4px" }} />

              {/* Camera notch */}
              <div style={{ position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)", width: 5, height: 5, borderRadius: "50%", background: "#1a1a1c", border: "1px solid rgba(255,255,255,0.07)" }} />

              {/* Screen bezel (inner black frame) */}
              <div style={{ background: "#111116", borderRadius: "7px 7px 2px 2px", padding: "2px 2px 0", overflow: "hidden" }}>
                {/* Screen viewport */}
                <div style={{ overflow: "hidden", borderRadius: "5px 5px 0 0", aspectRatio: "16/10", position: "relative" }}>
                  <MacScreen phase={phase} />
                  {/* Subtle screen reflection */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(130deg, rgba(255,255,255,0.025) 0%, transparent 50%)", pointerEvents: "none", zIndex: 10 }} />
                </div>
              </div>

              {/* Screen glow bleeding onto lid frame */}
              <motion.div
                animate={{ opacity: glowIntensity * 7 }}
                transition={{ duration: 1.8 }}
                style={{ position: "absolute", inset: 0, borderRadius: "14px 14px 0 0", background: "radial-gradient(ellipse 80% 40% at 50% 5%, rgba(37,99,235,0.18) 0%, transparent 60%)", pointerEvents: "none" }}
              />

              {/* Apple logo area (subtle backlit glow) */}
              <motion.div
                animate={{ opacity: glowIntensity * 4 }}
                transition={{ duration: 2 }}
                style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -55%)", width: 28, height: 28, background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)", pointerEvents: "none" }}
              />
            </div>
          </motion.div>

          {/* ── HINGE ── */}
          <div style={{ height: 4, background: "linear-gradient(90deg, #181818, #484850, #181818)", flexShrink: 0 }} />

          {/* ── BASE / KEYBOARD ── */}
          <div style={{
            position: "relative",
            background: "linear-gradient(180deg, #2e2e31 0%, #222224 55%, #1c1c1e 100%)",
            height: 34,
            borderRadius: "0 0 11px 11px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}>
            {/* Subtle keyboard rows */}
            <div style={{ position: "absolute", top: 5, left: 24, right: 24, display: "flex", flexDirection: "column", gap: 2, opacity: 0.65 }}>
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
      <div style={{
        position: "absolute",
        bottom: -28, left: "12%", right: "12%", height: 44,
        background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.7) 0%, transparent 70%)",
        filter: "blur(18px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Ground light reflection (screen light on desk) */}
      <motion.div
        animate={{ opacity: glowIntensity * 0.9 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          bottom: -36, left: "20%", right: "20%", height: 30,
          background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.5) 0%, transparent 70%)",
          filter: "blur(12px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}

/* ─── Hero section ───────────────────────────────────────── */
export function Hero() {
  const [phase, setPhase] = useState<ScreenPhase>("dark");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("editor"), 1000);
    const t2 = setTimeout(() => setPhase("building"), 4200);
    const t3 = setTimeout(() => setPhase("website"), 7800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950 pt-20">

      {/* ── Deep background gradient ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(9,18,40,0.95) 0%, #0B1220 100%)" }} />
        {/* Ambient edge vignette */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 120% 110% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
        {/* Very subtle dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)",
          backgroundSize: "42px 42px",
          WebkitMaskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 0%, transparent 80%)",
          maskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 0%, transparent 80%)",
        }} />
      </div>

      {/* ── One-time entry scan line ── */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none z-30"
        style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.3) 40%, rgba(255,255,255,0.1) 50%, rgba(37,99,235,0.3) 60%, transparent)" }}
        initial={{ top: "0%", opacity: 1 }}
        animate={{ top: "105%", opacity: 0.2 }}
        transition={{ duration: 2.0, delay: 0.1, ease: "linear" }}
      />

      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/25 to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10">

        {/* Subtle label above MacBook */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-center"
        >
          <span style={{ fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: "0.22em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>
            {"< Premium Web Design Agency />"}
          </span>
        </motion.div>

        {/* MacBook */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <MacBook3D phase={phase} />
        </motion.div>

        {/* Scroll hint (appears after website phase) */}
        <AnimatePresence>
          {phase === "website" && (
            <motion.div
              key="scroll"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="mt-8 flex flex-col items-center gap-1.5"
            >
              <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Mehr entdecken</span>
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

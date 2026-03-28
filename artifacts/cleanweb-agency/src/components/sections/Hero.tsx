import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Typewriter code tag ──────────────────────────────── */
const CODE_PHRASE = "<build trust. generate customers. />";
const CHAR_DELAY = 58;

function TypewriterCode({ onDone }: { onDone: () => void }) {
  const [typed, setTyped] = useState(0);
  const done = typed >= CODE_PHRASE.length;
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const calledDone = useRef(false);

  useEffect(() => {
    if (done) {
      if (!calledDone.current) { calledDone.current = true; onDoneRef.current(); }
      return;
    }
    const t = setTimeout(() => setTyped((n) => n + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [typed, done]);

  const text = CODE_PHRASE.slice(0, typed);
  const segments: { ch: string; accent: boolean }[] = [];
  for (const ch of text) {
    segments.push({ ch, accent: ["<", ">", "/", "."].includes(ch) });
  }

  return (
    <div className="font-mono text-[0.75rem] md:text-[0.82rem] tracking-[0.2em] text-white/28 h-5 flex items-center justify-center mb-8">
      {segments.map((seg, i) =>
        seg.accent ? (
          <span key={i} className="text-electric/50">{seg.ch}</span>
        ) : (
          <span key={i}>{seg.ch}</span>
        )
      )}
      {!done && (
        <span className="inline-block w-px h-[1em] bg-electric/45 ml-0.5 animate-pulse align-middle" />
      )}
    </div>
  );
}

/* ─── Animated website creation scene (inside MacBook) ─── */
function s(kf: string): React.CSSProperties {
  return { animation: `${kf} 14s ease-in-out infinite`, animationFillMode: "both" };
}

function AnimatedWebsiteScene() {
  return (
    <div className="absolute inset-0" style={{ background: "#080f1b", overflow: "hidden" }}>

      {/* Browser chrome */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 border-b border-white/8"
        style={{ height: 22, background: "#101828", flexShrink: 0 }}
      >
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.55)" }} />
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(254,188,46,0.55)" }} />
        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "rgba(40,200,64,0.55)" }} />
        <div style={{ marginLeft: 8, flex: 1, maxWidth: 150, height: 12, borderRadius: 12, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", paddingLeft: 8 }}>
          <span style={{ fontSize: 6, color: "rgba(255,255,255,0.22)", fontFamily: "monospace" }}>cleanweb.agency</span>
        </div>
      </div>

      {/* Content below chrome */}
      <div style={{ position: "absolute", top: 22, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>

        {/* Website nav */}
        <div
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 border-b border-white/5"
          style={{ ...s("macNav"), height: 28, background: "rgba(8,15,27,0.98)" }}
        >
          <div style={{ width: 52, height: 8, borderRadius: 3, background: "rgba(255,255,255,0.6)" }} />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 26, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.18)" }} />
            <div style={{ width: 26, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.18)" }} />
            <div style={{ width: 42, height: 14, borderRadius: 4, background: "#2563eb" }} />
          </div>
        </div>

        {/* Hero section background */}
        <div
          className="absolute"
          style={{
            ...s("macHeroBg"),
            top: 28, left: 0, right: 0, bottom: "30%",
            background: "linear-gradient(140deg, #080e1c 0%, #0d1530 60%, #0f1e3d 100%)",
          }}
        >
          {/* Subtle center glow */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at 30% 50%, rgba(37,99,235,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />

          {/* Left text content */}
          <div className="absolute" style={{ ...s("macHeadline"), top: "16%", left: "7%", right: "37%", opacity: 0 }}>
            <div style={{ width: 38, height: 4, borderRadius: 3, background: "rgba(37,99,235,0.6)", marginBottom: 8 }} />
            <div style={{ height: 9, borderRadius: 3, background: "rgba(255,255,255,0.82)", marginBottom: 5 }} />
            <div style={{ width: "80%", height: 9, borderRadius: 3, background: "rgba(255,255,255,0.65)", marginBottom: 10 }} />
            <div style={{ width: "62%", height: 6, borderRadius: 3, background: "rgba(255,255,255,0.22)", marginBottom: 4 }} />
            <div style={{ width: "48%", height: 6, borderRadius: 3, background: "rgba(255,255,255,0.14)" }} />
          </div>

          {/* CTA buttons */}
          <div className="absolute flex" style={{ ...s("macBtn"), bottom: "20%", left: "7%", gap: 8, opacity: 0 }}>
            <div style={{ width: 58, height: 18, borderRadius: 5, background: "#2563eb" }} />
            <div style={{ width: 50, height: 18, borderRadius: 5, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }} />
          </div>

          {/* Right image placeholder */}
          <div className="absolute" style={{ ...s("macHeadline"), top: "10%", right: "3%", width: "28%", bottom: "6%", borderRadius: 6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", opacity: 0 }} />

          {/* Dot grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)", backgroundSize: "22px 22px", opacity: 0.6, pointerEvents: "none" }} />
        </div>

        {/* Feature cards section — light */}
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{ ...s("macCards"), height: "30%", background: "#f8fafc", padding: "8px 10px 0" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ background: "white", borderRadius: 5, padding: "6px 7px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: "#dbeafe", marginBottom: 5 }} />
                <div style={{ height: 5, borderRadius: 3, background: "#e2e8f0", marginBottom: 3 }} />
                <div style={{ height: 5, width: "68%", borderRadius: 3, background: "#f1f5f9" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MacBook frame ────────────────────────────────────── */
function MacBook() {
  return (
    <motion.div
      className="relative mx-auto w-full"
      style={{ maxWidth: 620 }}
      initial={{ opacity: 0, y: 44, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.4, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── Screen lid ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #2e2e33 0%, #1d1d22 100%)",
          borderRadius: "14px 14px 2px 2px",
          padding: "12px 12px 0",
          boxShadow:
            "0 36px 88px rgba(0,0,0,0.88), 0 0 0 1px rgba(255,255,255,0.09), inset 0 1px 0 rgba(255,255,255,0.11)",
          position: "relative",
        }}
      >
        {/* Camera */}
        <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 5, height: 5, borderRadius: "50%", background: "#252529", border: "1px solid rgba(255,255,255,0.06)" }} />

        {/* Lid glow from screen */}
        <div style={{ position: "absolute", inset: 0, borderRadius: "14px 14px 0 0", background: "radial-gradient(ellipse at 50% 8%, rgba(37,99,235,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />

        {/* Screen viewport */}
        <div style={{ borderRadius: "6px 6px 0 0", overflow: "hidden", aspectRatio: "16/10", position: "relative" }}>
          <AnimatedWebsiteScene />

          {/* Subtle screen reflection */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 50%)", pointerEvents: "none", zIndex: 10 }} />
        </div>
      </div>

      {/* ── Hinge ── */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #18181c, #424248, #18181c)" }} />

      {/* ── Keyboard base ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #26262a 0%, #1c1c20 100%)",
          height: 24,
          borderRadius: "0 0 10px 10px",
          boxShadow: "0 12px 36px rgba(0,0,0,0.72), 0 0 0 1px rgba(255,255,255,0.04)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 100, height: 8, borderRadius: 4, background: "#2a2a2e", border: "1px solid rgba(255,255,255,0.05)" }} />
      </div>

      {/* ── Ground glow ── */}
      <div
        style={{
          position: "absolute",
          bottom: -30,
          left: "10%",
          right: "10%",
          height: 44,
          background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.13) 0%, transparent 70%)",
          filter: "blur(16px)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

/* ─── Hero section ─────────────────────────────────────── */
export function Hero() {
  const [headlineVisible, setHeadlineVisible] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-navy-950 pt-20">

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.08) 1px, transparent 0)",
          backgroundSize: "38px 38px",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 45%, black 15%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 45%, black 15%, transparent 100%)",
        }}
      />

      {/* ── Central depth glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 50% at 50% 38%, rgba(37,99,235,0.06) 0%, transparent 100%)" }}
      />

      {/* ── Ambient corner orbs ── */}
      <div className="absolute top-[-12%] left-[-6%] w-[500px] h-[500px] bg-electric/4 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-6%] right-[-4%] w-[380px] h-[380px] bg-[#1d4ed8]/4 blur-[90px] rounded-full pointer-events-none" />

      {/* ── Hero background image ── */}
      <div className="absolute inset-0">
        <img src={`${import.meta.env.BASE_URL}images/hero-bg.png`} alt="" aria-hidden className="w-full h-full object-cover opacity-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/85 to-navy-950" />
      </div>

      {/* ── Cinematic entry scan line (fires once) ── */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none z-30"
        style={{ height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.35) 40%, rgba(255,255,255,0.12) 50%, rgba(37,99,235,0.35) 60%, transparent 100%)" }}
        initial={{ top: "0%", opacity: 1 }}
        animate={{ top: "105%", opacity: 0.3 }}
        transition={{ duration: 1.8, delay: 0.1, ease: "linear" }}
      />

      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/28 to-transparent z-10" />

      {/* ── Content — two-column split ── */}
      <div className="relative z-10 w-full flex items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12">

          {/* ── Left: Text ── */}
          <div className="flex flex-col items-start">
            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TypewriterCode onDone={() => setHeadlineVisible(true)} />
            </motion.div>

            {/* Headline */}
            <AnimatePresence>
              {headlineVisible && (
                <motion.h1
                  key="hl"
                  className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.06] mb-5"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Wir bauen keine Websites.
                  <br />
                  <span className="text-electric">Wir bauen Wettbewerbsvorteile.</span>
                </motion.h1>
              )}
            </AnimatePresence>

            {/* Sub-content */}
            <AnimatePresence>
              {headlineVisible && (
                <motion.div
                  key="sub"
                  className="w-full"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-base md:text-lg text-white/44 mb-8 leading-relaxed max-w-md">
                    Strategisches Design. Schnelle Umsetzung. Messbare Ergebnisse — für Unternehmen, die keine Kompromisse machen.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto group"
                      onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Kostenlose Beratung
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="glass"
                      className="w-full sm:w-auto"
                      onClick={() => document.getElementById("pakete")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Pakete ansehen
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/28 font-medium border-t border-white/8 pt-6">
                    <span><span className="text-white/55 font-semibold">50+</span> Projekte</span>
                    <span>Ø <span className="text-white/55 font-semibold">3×</span> mehr Anfragen</span>
                    <span><span className="text-white/55 font-semibold">100 %</span> Zufriedenheit</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right: MacBook ── */}
          <div className="flex justify-center lg:justify-end">
            <MacBook />
          </div>

        </div>
      </div>
    </section>
  );
}

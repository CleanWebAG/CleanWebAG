import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CODE_PHRASE = "<build trust. generate customers. />";
const CHAR_DELAY = 36; // ms per character
const TOTAL_DURATION = CODE_PHRASE.length * CHAR_DELAY; // ~1 300 ms

function TypewriterCode({ onDone }: { onDone: () => void }) {
  const [typed, setTyped] = useState(0);
  const done = typed >= CODE_PHRASE.length;

  useEffect(() => {
    if (done) {
      onDone();
      return;
    }
    const t = setTimeout(() => setTyped((n) => n + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [typed, done, onDone]);

  // Split into colored / regular segments
  const text = CODE_PHRASE.slice(0, typed);
  const segments: { ch: string; accent: boolean }[] = [];
  for (const ch of text) {
    segments.push({ ch, accent: ["<", ">", "/", "."].includes(ch) });
  }

  return (
    <div className="font-mono text-sm md:text-[0.95rem] tracking-widest text-white/35 mb-10 h-5 flex items-center justify-center gap-0">
      {segments.map((seg, i) =>
        seg.accent ? (
          <span key={i} className="text-electric/65">
            {seg.ch}
          </span>
        ) : (
          <span key={i}>{seg.ch}</span>
        )
      )}
      {/* Blinking cursor */}
      {!done && (
        <span className="inline-block w-0.5 h-[1.1em] bg-electric/60 ml-px animate-pulse align-middle" />
      )}
    </div>
  );
}

export function Hero() {
  const [headlineVisible, setHeadlineVisible] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-950">

      {/* Subtle dot-grid background — masked to fade at edges */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.09) 1px, transparent 0)",
          backgroundSize: "38px 38px",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Central radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 42%, rgba(37,99,235,0.07) 0%, transparent 100%)",
        }}
      />

      {/* Static depth orbs */}
      <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] bg-electric/5 blur-[90px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#1d4ed8]/5 blur-[90px] rounded-full pointer-events-none z-0" />

      {/* Background hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/80 to-navy-950" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/35 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        {/* Logo — brand centerpiece */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative inline-block">
            {/* Glow halo */}
            <div className="absolute inset-0 blur-[28px] bg-electric/18 rounded-full scale-125 pointer-events-none" />
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
                alt="CleanWeb Agency"
                className="relative w-auto max-h-[76px] md:max-h-[90px] z-10"
                style={{ filter: "drop-shadow(0 4px 22px rgba(37,99,235,0.32))" }}
              />
              {/* One-time light shimmer */}
              <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none rounded-sm">
                <motion.div
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  animate={{ x: "380%" }}
                  transition={{ duration: 1.0, delay: 0.9, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Typewriter code tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <TypewriterCode onDone={() => setHeadlineVisible(true)} />
        </motion.div>

        {/* Main headline — appears after typewriter finishes */}
        <AnimatePresence>
          {headlineVisible && (
            <motion.div
              key="headline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-[5.25rem] font-extrabold text-white tracking-tight mb-6 text-balance mx-auto max-w-5xl leading-[1.05]">
                Wir bauen keine Websites.
                <br />
                <span className="text-electric">Wir bauen Wettbewerbsvorteile.</span>
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtitle + CTA — appear shortly after headline */}
        <AnimatePresence>
          {headlineVisible && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="mt-4 text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
                Strategisches Design. Schnelle Umsetzung. Messbare Ergebnisse — für Unternehmen, die keine Kompromisse machen.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group"
                  onClick={() =>
                    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="glass"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    document.getElementById("referenzen")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Projekte ansehen
                </Button>
              </div>

              <div className="border-t border-white/8 pt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-white/35 font-medium">
                <span><span className="text-white/65 font-semibold">50+</span> Projekte</span>
                <span className="hidden sm:inline text-white/12">·</span>
                <span>Ø <span className="text-white/65 font-semibold">3×</span> mehr Anfragen</span>
                <span className="hidden sm:inline text-white/12">·</span>
                <span><span className="text-white/65 font-semibold">100 %</span> Zufriedenheit</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

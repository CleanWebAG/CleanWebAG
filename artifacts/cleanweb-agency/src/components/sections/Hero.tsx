import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CODE_PHRASE = "<build trust. generate customers. />";
const CHAR_DELAY = 58; // ms per character — slower = more premium

function TypewriterCode({ onDone }: { onDone: () => void }) {
  const [typed, setTyped] = useState(0);
  const done = typed >= CODE_PHRASE.length;

  useEffect(() => {
    if (done) { onDone(); return; }
    const t = setTimeout(() => setTyped((n) => n + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [typed, done, onDone]);

  const text = CODE_PHRASE.slice(0, typed);
  const segments: { ch: string; accent: boolean }[] = [];
  for (const ch of text) {
    segments.push({ ch, accent: ["<", ">", "/", "."].includes(ch) });
  }

  return (
    <div className="font-mono text-[0.8rem] md:text-[0.9rem] tracking-[0.18em] text-white/30 mb-10 h-5 flex items-center justify-center">
      {segments.map((seg, i) =>
        seg.accent ? (
          <span key={i} className="text-electric/55">{seg.ch}</span>
        ) : (
          <span key={i}>{seg.ch}</span>
        )
      )}
      {!done && (
        <span className="inline-block w-px h-[1.1em] bg-electric/50 ml-0.5 animate-pulse align-middle" />
      )}
    </div>
  );
}

/* ── Floating wireframe browser frame ── */
function WireframeFrame({
  style,
  variant = "browser",
}: {
  style: React.CSSProperties;
  variant?: "browser" | "code";
}) {
  if (variant === "code") {
    return (
      <div className="absolute pointer-events-none select-none" style={style}>
        <div className="border border-white/20 rounded-lg overflow-hidden">
          <div className="h-5 border-b border-white/15 flex items-center px-2 gap-1.5 bg-white/3">
            <span className="w-12 h-1.5 rounded-sm bg-electric/30" />
          </div>
          <div className="p-2.5 space-y-1.5 bg-white/2">
            <div className="h-1.5 bg-electric/18 rounded-sm w-3/4" />
            <div className="h-1.5 bg-white/10 rounded-sm w-1/2" />
            <div className="h-1.5 bg-white/10 rounded-sm w-4/5" />
            <div className="h-1.5 bg-electric/12 rounded-sm w-2/5" />
            <div className="h-1.5 bg-white/8 rounded-sm w-3/5" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute pointer-events-none select-none" style={style}>
      <div className="border border-white/20 rounded-lg overflow-hidden">
        <div className="h-6 border-b border-white/15 flex items-center px-2 gap-1 bg-white/3">
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="ml-2 flex-1 h-2 rounded-sm bg-white/12" />
        </div>
        <div className="p-3 space-y-2 bg-white/2">
          <div className="h-7 bg-electric/8 rounded-sm" />
          <div className="h-1.5 bg-white/10 rounded-sm w-3/4" />
          <div className="h-1.5 bg-white/8 rounded-sm w-1/2" />
          <div className="mt-2 grid grid-cols-3 gap-1">
            <div className="h-7 bg-white/6 rounded-sm" />
            <div className="h-7 bg-white/6 rounded-sm" />
            <div className="h-7 bg-white/6 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [headlineVisible, setHeadlineVisible] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-950">

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.08) 1px, transparent 0)",
          backgroundSize: "38px 38px",
          WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* ── Central radial depth glow ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(37,99,235,0.065) 0%, transparent 100%)" }}
      />

      {/* ── Static depth orbs ── */}
      <div className="absolute top-[-10%] left-[-8%] w-[560px] h-[560px] bg-electric/4 blur-[110px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-8%] right-[-6%] w-[420px] h-[420px] bg-[#1d4ed8]/4 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* ── Hero background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/82 to-navy-950" />
      </div>

      {/* ── Floating wireframe frames (background ambiance) ── */}
      <WireframeFrame
        variant="browser"
        style={{
          top: "14%",
          left: "2%",
          width: 240,
          opacity: 0.048,
          animation: "bgFloat1 13s ease-in-out infinite",
        }}
      />
      <WireframeFrame
        variant="browser"
        style={{
          top: "22%",
          right: "2%",
          width: 200,
          opacity: 0.038,
          animation: "bgFloat2 15s ease-in-out infinite",
          animationDelay: "-5s",
        }}
      />
      <WireframeFrame
        variant="code"
        style={{
          bottom: "22%",
          left: "5%",
          width: 172,
          opacity: 0.032,
          animation: "bgFloat3 18s ease-in-out infinite",
          animationDelay: "-9s",
        }}
      />
      <WireframeFrame
        variant="code"
        style={{
          bottom: "18%",
          right: "4%",
          width: 150,
          opacity: 0.028,
          animation: "bgFloat1 20s ease-in-out infinite",
          animationDelay: "-12s",
        }}
      />

      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        {/* ── Logo — brand centerpiece, enlarged ── */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative inline-flex items-center justify-center">
            {/* Outermost soft aura — large, very transparent */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-80px",
                background: "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 68%)",
                borderRadius: "50%",
              }}
            />
            {/* Inner warm glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-32px",
                background: "radial-gradient(ellipse at center, rgba(37,99,235,0.13) 0%, transparent 62%)",
                borderRadius: "50%",
              }}
            />
            {/* Bottom rim highlight */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-12px",
                background: "radial-gradient(ellipse 80% 40% at 50% 110%, rgba(37,99,235,0.09) 0%, transparent 55%)",
                borderRadius: "50%",
              }}
            />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
                alt="CleanWeb Agency"
                className="relative w-auto max-h-[110px] md:max-h-[150px] lg:max-h-[180px] z-10"
                style={{ filter: "drop-shadow(0 6px 28px rgba(37,99,235,0.28)) drop-shadow(0 2px 8px rgba(37,99,235,0.15))" }}
              />

              {/* One-time shimmer sweep */}
              <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/14 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  animate={{ x: "380%" }}
                  transition={{ duration: 1.1, delay: 1.0, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Typewriter code tag ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <TypewriterCode onDone={() => setHeadlineVisible(true)} />
        </motion.div>

        {/* ── Main headline — appears after typewriter ── */}
        <AnimatePresence>
          {headlineVisible && (
            <motion.h1
              key="headline"
              className="text-5xl md:text-6xl lg:text-[5.25rem] font-extrabold text-white tracking-tight mb-6 text-balance mx-auto max-w-5xl leading-[1.05]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Wir bauen keine Websites.
              <br />
              <span className="text-electric">Wir bauen Wettbewerbsvorteile.</span>
            </motion.h1>
          )}
        </AnimatePresence>

        {/* ── Sub-content — appears after headline ── */}
        <AnimatePresence>
          {headlineVisible && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mt-4 text-lg md:text-xl text-white/48 max-w-xl mx-auto mb-12 leading-relaxed">
                Strategisches Design. Schnelle Umsetzung. Messbare Ergebnisse —
                für Unternehmen, die keine Kompromisse machen.
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
                    document.getElementById("pakete")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Pakete ansehen
                </Button>
              </div>

              <div className="border-t border-white/8 pt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-white/32 font-medium">
                <span><span className="text-white/62 font-semibold">50+</span> Projekte</span>
                <span className="hidden sm:inline text-white/12">·</span>
                <span>Ø <span className="text-white/62 font-semibold">3×</span> mehr Anfragen</span>
                <span className="hidden sm:inline text-white/12">·</span>
                <span><span className="text-white/62 font-semibold">100 %</span> Zufriedenheit</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

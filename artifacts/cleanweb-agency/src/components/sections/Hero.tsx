import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { openCalendly } from "@/lib/calendly";

function WebsiteUIBackground() {
  const reduceMotion = useReducedMotion();

  const cursorPath = {
    x: [220, 340, 340, 180, 180, 420, 420, 260, 260, 220],
    y: [120, 120, 200, 200, 310, 310, 160, 160, 260, 120],
  };

  const cursorDuration = reduceMotion ? 0 : 32;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <div style={{ position: "relative", width: 560, height: 380, opacity: 0.07 }}>
        <svg
          viewBox="0 0 560 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        >
          <rect x="0.5" y="0.5" width="559" height="379" rx="12" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

          <rect x="0" y="0" width="560" height="36" rx="12" fill="rgba(255,255,255,0.04)" />
          <line x1="0" y1="36" x2="560" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="22" cy="18" r="4.5" fill="rgba(255,100,100,0.4)" />
          <circle cx="38" cy="18" r="4.5" fill="rgba(255,200,50,0.4)" />
          <circle cx="54" cy="18" r="4.5" fill="rgba(80,200,80,0.4)" />
          <rect x="120" y="10" width="200" height="16" rx="8" fill="rgba(255,255,255,0.06)" />

          <rect x="30" y="52" width="40" height="8" rx="2" fill="rgba(255,255,255,0.15)" />
          <rect x="340" y="52" width="50" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="400" y="52" width="50" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="460" y="52" width="50" height="8" rx="2" fill="rgba(255,255,255,0.1)" />

          <rect x="30" y="85" width="260" height="14" rx="3" fill="rgba(255,255,255,0.12)" />
          <rect x="30" y="108" width="200" height="10" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="30" y="128" width="240" height="10" rx="2" fill="rgba(255,255,255,0.04)" />

          <rect x="30" y="160" width="100" height="32" rx="6" fill="rgba(37,99,235,0.25)" />
          <rect x="48" y="172" width="64" height="8" rx="2" fill="rgba(255,255,255,0.2)" />

          <rect x="30" y="220" width="155" height="120" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <rect x="42" y="234" width="80" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="42" y="250" width="130" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
          <rect x="42" y="262" width="110" height="6" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="42" y="280" width="60" height="6" rx="2" fill="rgba(37,99,235,0.2)" />

          <rect x="200" y="220" width="155" height="120" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <rect x="212" y="234" width="90" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="212" y="250" width="120" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
          <rect x="212" y="262" width="100" height="6" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="212" y="280" width="60" height="6" rx="2" fill="rgba(37,99,235,0.2)" />

          <rect x="370" y="220" width="155" height="120" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <rect x="382" y="234" width="70" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="382" y="250" width="125" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
          <rect x="382" y="262" width="105" height="6" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="382" y="280" width="60" height="6" rx="2" fill="rgba(37,99,235,0.2)" />
        </svg>

        {!reduceMotion && (
          <>
            <motion.div
              style={{
                position: "absolute",
                width: 155,
                height: 120,
                left: 30,
                top: 220,
                borderRadius: 8,
                background: "rgba(37,99,235,0.06)",
              }}
              animate={{ opacity: [0, 0, 0.8, 0.8, 0, 0, 0, 0, 0, 0] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              style={{
                position: "absolute",
                width: 100,
                height: 32,
                left: 30,
                top: 160,
                borderRadius: 6,
                background: "rgba(37,99,235,0.1)",
              }}
              animate={{ opacity: [0, 0, 0, 0, 0, 0.6, 0.6, 0, 0, 0] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              style={{
                position: "absolute",
                width: 155,
                height: 120,
                left: 370,
                top: 220,
                borderRadius: 8,
                background: "rgba(37,99,235,0.06)",
              }}
              animate={{ opacity: [0, 0, 0, 0, 0, 0, 0, 0.8, 0.8, 0] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}

        {!reduceMotion && (
          <motion.div
            style={{ position: "absolute", width: 0, height: 0 }}
            animate={cursorPath}
            transition={{
              duration: cursorDuration,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.12, 0.2, 0.3, 0.38, 0.5, 0.6, 0.7, 0.82, 1],
            }}
          >
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                d="M1 1L1 14.5L4.5 11L8.5 18L10.5 17L6.5 10L11.5 10L1 1Z"
                fill="rgba(255,255,255,0.7)"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="0.8"
              />
            </svg>
          </motion.div>
        )}

        {!reduceMotion && (
          <motion.div
            style={{
              position: "absolute",
              right: 10,
              top: 50,
              width: 3,
              height: 20,
              borderRadius: 2,
              background: "rgba(255,255,255,0.15)",
            }}
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
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

      <WebsiteUIBackground />

      {!reduceMotion && (
        <motion.div
          className="absolute left-0 right-0 top-0 pointer-events-none"
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.28) 40%, rgba(255,255,255,0.09) 50%, rgba(37,99,235,0.28) 60%, transparent)",
            zIndex: 30,
          }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: "105vh", opacity: 0.15 }}
          transition={{ duration: 2.2, delay: 0.1, ease: "linear" }}
        />
      )}

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
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1,
              background: "rgba(37,99,235,0.3)",
            }}
          />
          <span
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.04em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Vertrauen von Unternehmen aus ganz Deutschland
          </span>
          <div
            style={{
              width: 20,
              height: 1,
              background: "rgba(37,99,235,0.3)",
            }}
          />
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
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} style={{ color: "rgba(255,255,255,0.2)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

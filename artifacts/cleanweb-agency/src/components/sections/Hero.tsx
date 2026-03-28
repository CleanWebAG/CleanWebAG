import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-950">
      {/* Static depth orbs */}
      <div className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] bg-electric/6 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#1d4ed8]/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/75 to-navy-950" />
      </div>

      {/* Horizontal accent line at very top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        {/* Logo — brand centerpiece */}
        <FadeIn delay={0.05} direction="none">
          <div className="flex justify-center mb-12">
            <div className="relative inline-block">
              {/* Glow halo behind logo */}
              <div className="absolute inset-0 blur-[32px] bg-electric/20 rounded-full scale-110 pointer-events-none" />

              {/* Float + shimmer */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
                  alt="CleanWeb Agency"
                  className="relative w-auto max-h-[80px] md:max-h-[96px] z-10"
                  style={{ filter: "drop-shadow(0 4px 24px rgba(37,99,235,0.35))" }}
                />

                {/* One-time shimmer sweep */}
                <motion.div
                  className="absolute inset-0 z-20 overflow-hidden rounded-sm pointer-events-none"
                  aria-hidden="true"
                >
                  <motion.div
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={{ x: "350%" }}
                    transition={{ duration: 1.1, delay: 1.2, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.22}>
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-white tracking-tight mb-6 text-balance mx-auto max-w-5xl leading-[1.05]">
            Wir bauen keine Websites.
            <br />
            <span className="text-electric">Wir bauen Wettbewerbsvorteile.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.34}>
          <p className="mt-4 text-lg md:text-xl text-white/55 max-w-xl mx-auto mb-12 leading-relaxed">
            Strategisches Design. Schnelle Umsetzung. Messbare Ergebnisse — für Unternehmen, die keine Kompromisse machen.
          </p>
        </FadeIn>

        <FadeIn delay={0.44}>
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
        </FadeIn>

        {/* Subtle stats row */}
        <FadeIn delay={0.54} direction="up">
          <div className="border-t border-white/8 pt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-white/40 font-medium">
            <span><span className="text-white/70 font-semibold">50+</span> Projekte</span>
            <span className="hidden sm:inline text-white/15">·</span>
            <span>Ø <span className="text-white/70 font-semibold">3×</span> mehr Anfragen</span>
            <span className="hidden sm:inline text-white/15">·</span>
            <span><span className="text-white/70 font-semibold">100 %</span> Zufriedenheit</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

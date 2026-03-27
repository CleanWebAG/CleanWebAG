import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-950">
      {/* Static gradient orbs — no animation, GPU-safe */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-electric/8 blur-[80px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#1d4ed8]/6 blur-[80px] rounded-full pointer-events-none z-0" />

      {/* Background image & overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        {/* Logo — visual focal point, gentle float + subtle glow */}
        <FadeIn delay={0.05} direction="none">
          <div className="flex justify-center mb-10">
            <motion.img
              src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
              alt="CleanWeb Agency"
              className="w-auto max-h-[72px] md:max-h-[88px]"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                filter: "drop-shadow(0 0 22px rgba(37, 99, 235, 0.30))",
              }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 text-balance mx-auto max-w-4xl leading-[1.1]">
            Websites, die Vertrauen schaffen
            <br className="hidden md:block" />
            und{" "}
            <span className="text-electric">Kunden gewinnen.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.32}>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto mb-10 text-balance">
            Schnell umgesetzt, professionell gestaltet und voll und ganz auf
            Ergebnisse ausgelegt. Wir bauen deinen digitalen Erfolg.
          </p>
        </FadeIn>

        <FadeIn delay={0.42}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto group"
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kostenlose Beratung sichern
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("leistungen")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Unsere Leistungen
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.52} direction="up">
          <div className="border-t border-white/10 pt-8 mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/60 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-electric font-bold">50+</span> Projekte
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-2">
              Durchschnittlich{" "}
              <span className="text-electric font-bold">3x</span> mehr Anfragen
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-2">
              <span className="text-electric font-bold">100%</span>{" "}
              Kundenzufriedenheit
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

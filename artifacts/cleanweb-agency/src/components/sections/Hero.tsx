import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { motion, useScroll, useTransform, animate, useInView } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toString();
          }
        }
      });
      return controls.stop;
    }
  }, [inView, value]);

  return <span ref={ref}>0</span>;
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-950">
      {/* Animated gradient blobs */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-electric/8 blur-[100px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1d4ed8]/6 blur-[100px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1.1, 0.9, 1.1], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-cyan-500/4 blur-[100px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y }}
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract geometric background"
          className="w-full h-[130%] -top-[15%] relative object-cover opacity-40 origin-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-electric animate-pulse"></span>
            Premium Webdesign Agentur
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 text-balance mx-auto max-w-4xl leading-[1.1]">
            Moderne Websites, die dir wirklich <span className="text-electric">Kunden bringen.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto mb-10 text-balance">
            Schnell umgesetzt, professionell gestaltet und voll und ganz auf Ergebnisse ausgelegt. Wir bauen deinen digitalen Erfolg.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto group" onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
              Kostenlose Beratung sichern
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto" onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' })}>
              Unsere Leistungen
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <div className="border-t border-white/10 pt-8 mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/60 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-electric font-bold"><AnimatedNumber value={50} />+</span> Projekte
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-2">
              Durchschnittlich <span className="text-electric font-bold"><AnimatedNumber value={3} />x</span> mehr Anfragen
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-2">
              <span className="text-electric font-bold"><AnimatedNumber value={100} />%</span> Kundenzufriedenheit
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

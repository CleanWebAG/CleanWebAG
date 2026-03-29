import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { openCalendly } from "@/lib/calendly";

const trustBadges = [
  { icon: Clock, label: "Antwort in 24h", description: "Schnelle Reaktionszeit garantiert" },
  { icon: Sparkles, label: "50+ Projekte", description: "Erfolgreich umgesetzt" },
  { icon: Shield, label: "Keine versteckten Kosten", description: "Transparent & fair" },
];

const benefits = [
  "Maßgeschneidertes Design für deine Marke",
  "Performance-optimiert & SEO-ready",
  "Persönliche Betreuung von A bis Z",
  "Langfristiger Support nach Launch",
];

export function CtaSection() {
  return (
    <section id="kontakt" className="py-32 bg-navy-950 relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-light-bg" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-electric/10 blur-[100px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-electric/0 via-electric/30 to-electric/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric/60 mb-8 block">
              Jetzt starten
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white mb-8 leading-[1.04]">
              Bereit für eine Website,
              <br />
              <span className="text-electric">die liefert?</span>
            </h2>
            <p className="text-xl text-white/50 mb-14 max-w-2xl leading-relaxed">
              Kostenlose Erstberatung. Kein Druck. Kein Standardpitch — sondern ein ehrlicher Blick auf deine aktuelle Situation und dein Potenzial.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mb-10"
            >
              <Button
                size="lg"
                className="group text-lg px-14 py-6 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-shadow duration-300"
                onClick={() => openCalendly()}
              >
                Kostenlose Beratung sichern
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-sm text-white/25">
              Keine versteckten Kosten · Keine Verpflichtungen · Antwort innerhalb von 24 h
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                      <badge.icon className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{badge.label}</p>
                      <p className="text-white/40 text-xs">{badge.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 backdrop-blur-sm">
                <p className="text-white/60 font-semibold text-sm mb-4 uppercase tracking-wider">
                  Was du bekommst
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + 0.08 * index }}
                      className="flex items-center gap-3 text-white/70 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

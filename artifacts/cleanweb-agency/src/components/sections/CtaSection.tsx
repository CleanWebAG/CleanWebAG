import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";

export function CtaSection() {
  return (
    <section id="kontakt" className="py-32 bg-navy-950 relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-light-bg" />

      {/* Deep blue accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-electric/10 blur-[100px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4" />
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-electric/0 via-electric/30 to-electric/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
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

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="group text-base px-10"
                onClick={() => (window.location.href = "mailto:hello@cleanweb.agency")}
              >
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="glass"
                className="text-base px-10"
                onClick={() =>
                  document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Leistungen ansehen
              </Button>
            </div>

            <p className="text-sm text-white/25">
              Keine versteckten Kosten · Keine Verpflichtungen · Antwort innerhalb von 24 h
            </p>
          </FadeIn>
        </div>

        {/* Decorative large text */}
        <motion.div
          className="absolute right-0 bottom-8 text-[8rem] md:text-[12rem] font-extrabold text-white/[0.025] font-display select-none leading-none hidden lg:block"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          CW
        </motion.div>
      </div>
    </section>
  );
}

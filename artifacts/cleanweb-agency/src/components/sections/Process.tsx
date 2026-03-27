import { Search, PenTool, Rocket } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/section-divider";

export function Process() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-electric" />,
      title: "1. Analyse",
      desc: "Wir analysieren dein Unternehmen, deine Ziele und deine Zielgruppe im Detail.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-electric" />,
      title: "2. Umsetzung",
      desc: "Wir erstellen deine neue Website — schnell, extrem professionell und auf Konversionen ausgelegt.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-electric" />,
      title: "3. Wachstum",
      desc: "Deine neue Website arbeitet ab sofort für dich: 24/7, 365 Tage im Jahr zur Neukundengewinnung.",
    },
  ];

  return (
    <section id="prozess" className="py-24 bg-navy-950 relative">
      <SectionDivider position="top" fillColor="fill-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              So einfach funktioniert es
            </h2>
            <p className="text-lg text-white/60">
              Ein bewährter und transparenter Prozess für deinen digitalen Erfolg.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Animated connecting line — fires once on scroll-in */}
          <motion.div
            className="hidden md:block absolute top-10 left-[16.5%] w-[67%] h-0.5 bg-electric/40 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
          />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-navy-900 border border-white/10 shadow-lg flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed max-w-sm">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

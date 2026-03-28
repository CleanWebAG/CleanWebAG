import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/section-divider";

export function Process() {
  const steps = [
    {
      num: "I",
      title: "Analyse",
      desc: "Wir verstehen dein Unternehmen, deine Zielgruppe und deine Ziele im Detail — bevor wir auch nur einen Pixel setzen.",
    },
    {
      num: "II",
      title: "Umsetzung",
      desc: "Deine neue Website entsteht in 2–4 Wochen. Schnell, professionell, konsequent auf dich zugeschnitten.",
    },
    {
      num: "III",
      title: "Wachstum",
      desc: "Deine Website arbeitet 24/7 für dich — und gewinnt täglich neue Kunden, während du dich auf dein Business konzentrierst.",
    },
  ];

  return (
    <section id="prozess" className="py-32 bg-navy-950 relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-white" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="mb-24">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric/60 mb-4 block">
              Der Weg
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
              Einfach.
              <br />
              <span className="text-white/30">Schnell.</span>
              <br />
              <span className="text-electric">Ergebnisorientiert.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative">
          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-[2.5rem] left-[16%] w-[68%] h-px bg-gradient-to-r from-electric/30 via-electric/60 to-electric/30 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          />

          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative z-10">
                {/* Large Roman numeral */}
                <div className="text-[6rem] md:text-[8rem] font-extrabold text-white/8 font-display leading-none select-none mb-6 -ml-2">
                  {step.num}
                </div>
                {/* Electric dot */}
                <div className="w-3 h-3 rounded-full bg-electric mb-6 ring-4 ring-electric/20" />
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-[0.95rem]">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

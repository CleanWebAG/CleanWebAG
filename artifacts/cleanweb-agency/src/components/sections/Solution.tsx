import { MonitorPlay, Smartphone, TrendingUp, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/section-divider";

export function Solution() {
  const solutions = [
    {
      icon: <Zap className="h-7 w-7 text-electric" />,
      title: "Schnelle Umsetzung",
      desc: "Deine neue Website ist in wenigen Wochen live. Kein endloses Warten.",
    },
    {
      icon: <MonitorPlay className="h-7 w-7 text-electric" />,
      title: "Modernes Design",
      desc: "Hochwertige Optik, die sofort Vertrauen aufbaut und begeistert.",
    },
    {
      icon: <Smartphone className="h-7 w-7 text-electric" />,
      title: "Mobile-First",
      desc: "Perfekt auf jedem Gerät — egal ob Smartphone, Tablet oder Desktop.",
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-electric" />,
      title: "Fokus auf Kunden",
      desc: "Jedes Element ist darauf ausgelegt, Besucher in echte Kunden zu verwandeln.",
    },
  ];

  return (
    <section className="py-24 bg-navy-950 border-t border-white/5 relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-light-bg" />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 right-[15%] w-10 h-10 rounded-full border-2 border-electric/30"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 left-[5%] w-6 h-6 rounded-lg bg-cyan-500/20 rotate-45"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3], rotate: [45, 60, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Deine Lösung — komplett aus einer Hand
            </h2>
            <p className="text-lg text-white/60">
              Wir kümmern uns um alles, damit du dich auf dein Kerngeschäft konzentrieren kannst.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full group">
                <div className="w-12 h-12 rounded-lg bg-electric/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

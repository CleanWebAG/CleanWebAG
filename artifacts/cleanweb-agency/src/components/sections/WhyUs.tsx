import { FadeIn } from "@/components/ui/fade-in";

export function WhyUs() {
  const stats = [
    {
      number: "50+",
      label: "Projekte",
      desc: "Erfolgreich umgesetzt",
    },
    {
      number: "3×",
      label: "Mehr Anfragen",
      desc: "Im Schnitt nach Relaunch",
    },
    {
      number: "2–4",
      label: "Wochen",
      desc: "Bis zur Live-Website",
    },
    {
      number: "100%",
      label: "Zufriedenheit",
      desc: "Kundenstimmen",
    },
  ];

  return (
    <section className="relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric/60 mb-3 block">
                CleanWeb in Zahlen
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Ergebnisse, die
                <br />
                für sich sprechen.
              </h2>
            </div>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed md:text-right">
              Echte Zahlen. Echte Kunden.
              <br />
              Keine aufgeblasenen Versprechen.
            </p>
          </div>
        </FadeIn>

        {/* Stats grid with gap-px separator effect */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-navy-950 px-8 py-12 lg:py-16 flex flex-col items-start group hover:bg-navy-900/50 transition-colors duration-300">
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-electric mb-3 font-display tracking-tight leading-none group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.number}
                </div>
                <div className="text-base font-bold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-white/35">{stat.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

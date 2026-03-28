import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";

export function Problem() {
  const items = [
    {
      stat: "3 Sek.",
      title: "Erstes Urteil",
      desc: "So lange haben Besucher, um zu entscheiden, ob sie bleiben — oder deine Website sofort verlassen.",
    },
    {
      stat: "89 %",
      title: "Kehren nie zurück",
      desc: "Der Anteil an Besuchern, die nach einer schlechten Web-Erfahrung nicht mehr wiederkommen.",
    },
    {
      stat: "∞",
      title: "Deine Konkurrenz",
      desc: "Während du überlegst, haben Wettbewerber bereits eine Website, die rund um die Uhr für sie arbeitet.",
    },
  ];

  return (
    <section className="py-32 bg-light-bg relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky editorial header */}
          <FadeIn direction="right">
            <div className="lg:sticky lg:top-32">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric/70 mb-6 block">
                Die Realität
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-navy-950 leading-[1.08] text-balance mb-8">
                Deine Website arbeitet gerade — nur nicht für dich.
              </h2>
              <p className="text-navy-800/55 text-lg leading-relaxed max-w-sm">
                Schlechtes Design kostet nicht nur Ästhetik. Es kostet täglich echte Kunden und echten Umsatz.
              </p>
            </div>
          </FadeIn>

          {/* Right — editorial stat items */}
          <div className="space-y-16 lg:pt-2">
            {items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.12} direction="left">
                <div className="flex gap-8 items-start group">
                  <div className="text-4xl md:text-5xl font-extrabold text-electric/20 font-display w-24 flex-shrink-0 pt-1 group-hover:text-electric/40 transition-colors duration-500 leading-none">
                    {item.stat}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-950 mb-2">{item.title}</h3>
                    <p className="text-navy-900/55 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

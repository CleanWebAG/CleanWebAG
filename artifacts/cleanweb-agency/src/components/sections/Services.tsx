import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";

export function Services() {
  const services = [
    {
      num: "01",
      title: "Website Erstellung",
      desc: "Eine neue Website, die sofort Eindruck macht, Vertrauen aufbaut und messbare Ergebnisse liefert — von Null auf fertig.",
      tags: ["Design", "Entwicklung", "SEO", "Conversion"],
    },
    {
      num: "02",
      title: "Website Redesign",
      desc: "Deine bestehende Website bekommt ein konsequentes visuelles und technisches Upgrade auf aktuellen Premium-Standard.",
      tags: ["Modernisierung", "UX", "Performance", "Branding"],
    },
    {
      num: "03",
      title: "Conversion-Optimierung",
      desc: "Mehr Anfragen aus denselben Besuchern — durch strategisch durchdachte Elemente, die zum Handeln bewegen.",
      tags: ["A/B-Testing", "Analytics", "Strategie", "Formulare"],
    },
    {
      num: "04",
      title: "Wartung & Pflege",
      desc: "Deine Website bleibt sicher, schnell und aktuell — ganz ohne Aufwand deinerseits.",
      tags: ["Updates", "Security", "Monitoring", "Support"],
    },
  ];

  return (
    <section id="leistungen" className="py-32 bg-white relative">
      <SectionDivider position="top" fillColor="fill-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 pb-12 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric/60 mb-4 block">
                Was wir tun
              </span>
              <h2 className="text-5xl md:text-6xl font-extrabold text-navy-950 leading-[1.0]">
                Leistungen.
              </h2>
            </div>
            <p className="text-navy-800/50 max-w-xs text-base leading-relaxed md:text-right md:pb-1">
              Maßgeschneidert. Strategisch durchdacht. Auf dein Unternehmen zugeschnitten.
            </p>
          </div>
        </FadeIn>

        <div className="divide-y divide-slate-100">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="flex gap-6 md:gap-10 items-start py-10 md:py-12 group hover:bg-slate-50/70 -mx-4 md:-mx-8 px-4 md:px-8 rounded-2xl transition-colors duration-300 cursor-default">
                <div className="text-sm font-bold text-slate-300 w-8 flex-shrink-0 pt-2 font-display">
                  {service.num}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-navy-950 group-hover:text-electric transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="h-6 w-6 text-slate-200 group-hover:text-electric transition-all duration-300 flex-shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-navy-900/55 mb-6 max-w-2xl leading-relaxed text-[0.95rem]">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-slate-100 text-navy-900/50 group-hover:bg-electric/8 group-hover:text-electric transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

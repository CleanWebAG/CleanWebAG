import { CheckCircle2, Code2, RefreshCcw, LineChart, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function Services() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-electric" />,
      title: "Website Erstellung",
      desc: "Eine brandneue Website, die sofort Eindruck macht und messbare Ergebnisse liefert.",
      benefits: ["Professionelles Design", "SEO-optimiert", "Conversion-optimiert", "Mobilgeräte-freundlich"]
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-electric" />,
      title: "Website Redesign",
      desc: "Deine alte Website bekommt ein komplettes visuelles und technisches Upgrade.",
      benefits: ["Modernes Erscheinungsbild", "Verbesserte Nutzererfahrung", "Schnellere Ladezeiten", "Optimierte Struktur"]
    },
    {
      icon: <LineChart className="h-8 w-8 text-electric" />,
      title: "Conversion-Optimierung",
      desc: "Hole mehr messbare Anfragen und Verkäufe aus deinen bestehenden Besuchern heraus.",
      benefits: ["Klare Handlungsaufforderungen", "A/B-Testing", "Nutzungsanalyse", "Optimierte Formulare"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-electric" />,
      title: "Wartung & Updates",
      desc: "Lehn dich zurück: Wir sorgen dafür, dass deine Website immer aktuell und sicher bleibt.",
      benefits: ["Regelmäßige Updates", "Sicherheits-Monitoring", "Inhaltspflege", "Technischer Support"]
    }
  ];

  return (
    <section id="leistungen" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-navy-800/70 max-w-2xl">
              Maßgeschneiderte digitale Lösungen für Unternehmen, die wachsen wollen.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-electric/20 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors [&>svg]:transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-3">{service.title}</h3>
                <p className="text-navy-900/70 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center text-navy-900/80 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-electric mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

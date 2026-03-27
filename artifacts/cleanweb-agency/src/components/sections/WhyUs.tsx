import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";

export function WhyUs() {
  const features = [
    {
      num: "01",
      title: "Schnelle Umsetzung",
      desc: "Dein Projekt startet sofort. Wir hassen wochenlange Wartezeiten genauso wie du.",
    },
    {
      num: "02",
      title: "Klare Kommunikation",
      desc: "Du weißt immer genau, wo dein Projekt steht. Transparenz ohne böse Überraschungen.",
    },
    {
      num: "03",
      title: "Hochwertiges Design",
      desc: "Premium-Optik auf Apple-Niveau, die deinen Mitbewerbern visuell meilenweit voraus ist.",
    },
    {
      num: "04",
      title: "Fokus auf Ergebnisse",
      desc: "Wir denken nicht in reinen Pixeln — wir denken in zahlenden Kunden und echtem Umsatz.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <SectionDivider position="top" fillColor="fill-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-16 text-center">
            Warum CleanWeb Agency?
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="text-6xl font-extrabold text-slate-200 mb-6 font-display">
                  {feature.num}
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">{feature.title}</h3>
                <p className="text-navy-800/70 leading-relaxed">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

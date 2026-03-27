import { AlertCircle, Clock, XCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";

export function Problem() {
  const problems = [
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Veraltete Website",
      desc: "Deine Website sieht aus wie 2010? Besucher vertrauen dem Design nicht und verlassen sie sofort wieder.",
    },
    {
      icon: <XCircle className="h-8 w-8 text-destructive" />,
      title: "Kein professioneller Auftritt",
      desc: "Kunden zweifeln an deiner Seriosität, bevor sie dich überhaupt kontaktieren. Der erste Eindruck zählt.",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-destructive" />,
      title: "Die Konkurrenz schläft nicht",
      desc: "Während du wartest und überlegst, gewinnt die Konkurrenz mit modernem Auftritt deine potenziellen Kunden.",
    },
  ];

  return (
    <section className="py-24 bg-light-bg relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
              Erkennst du dich wieder?
            </h2>
            <p className="text-lg text-navy-800/70">
              Viele Unternehmen verlieren täglich bares Geld durch einen
              unzureichenden Webauftritt.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  {problem.title}
                </h3>
                <p className="text-navy-900/70 leading-relaxed">{problem.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

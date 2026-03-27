import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";

export function Portfolio() {
  const projects = [
    {
      title: "Kanzlei Müller & Partner",
      category: "Rechtsanwaltskanzlei",
      desc: "Seriöse Optik, die Mandanten überzeugt. 40% mehr Kontaktanfragen durch optimierte Wege.",
      image: "portfolio-1.png",
      color: "from-blue-900/80 to-navy-950",
    },
    {
      title: "Autohaus Schmidt",
      category: "Automobilhandel",
      desc: "Moderner Fahrzeugkatalog mit Lead-Generierung. 3x mehr Testfahrtenanfragen im ersten Monat.",
      image: "portfolio-2.png",
      color: "from-gray-900/80 to-navy-950",
    },
    {
      title: "Physiotherapie Hansen",
      category: "Gesundheit & Wellness",
      desc: "Warme, professionelle Website. Online-Terminbuchungen stiegen signifikant um 60%.",
      image: "portfolio-3.png",
      color: "from-emerald-900/80 to-navy-950",
    },
  ];

  return (
    <section id="referenzen" className="py-32 bg-navy-950 relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-light-bg" />

      {/* Reduced decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-electric/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ausgewählte Projekte
            </h2>
            <p className="text-xl text-white/60">
              Jedes Projekt ist einzigartig — und perfekt auf den Kunden und
              seine Zielgruppe zugeschnitten.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={0.1} direction={i % 2 === 0 ? "right" : "left"}>
              <div
                className={`flex flex-col gap-8 md:gap-16 items-center ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image side */}
                <div className="w-full md:w-3/5">
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-2xl border border-white/10 group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay z-10 opacity-50 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <img
                      src={`${import.meta.env.BASE_URL}images/${project.image}`}
                      alt={`${project.title} Website Preview`}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Text side */}
                <div className="w-full md:w-2/5 space-y-6">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-semibold tracking-wide uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

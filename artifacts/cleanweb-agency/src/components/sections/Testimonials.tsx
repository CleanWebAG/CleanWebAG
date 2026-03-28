import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";

export function Testimonials() {
  const reviews = [
    {
      text: "Die neue Website hat unser Geschäft komplett verändert. Die Anfragen haben sich im ersten Monat verdreifacht — ich hätte nicht gedacht, dass ein Relaunch so viel bewegt.",
      author: "Thomas M.",
      role: "Steuerberater",
      featured: true,
    },
    {
      text: "Professionell, extrem schnell und das Ergebnis übertrifft alle Erwartungen. Absolute Empfehlung.",
      author: "Sandra K.",
      role: "Inhaberin Online-Shop",
    },
    {
      text: "Endlich eine Website, auf die ich wirklich stolz bin. CleanWeb hat genau verstanden, was mein Unternehmen braucht.",
      author: "Michael R.",
      role: "Architekt",
    },
  ];

  const [featured, ...rest] = reviews;

  return (
    <section className="py-32 bg-light-bg relative overflow-hidden">
      <SectionDivider position="top" fillColor="fill-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric/60 mb-16 block">
            Was Kunden sagen
          </span>
        </FadeIn>

        {/* Featured large quote */}
        <FadeIn delay={0.1}>
          <blockquote className="mb-20">
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight text-balance max-w-5xl mb-10">
              „{featured.text}"
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-8 h-px bg-electric" />
              <span className="font-bold text-navy-950">{featured.author}</span>
              <span className="text-navy-900/40 text-sm">{featured.role}</span>
            </footer>
          </blockquote>
        </FadeIn>

        {/* Supporting quotes */}
        <div className="grid md:grid-cols-2 gap-px bg-slate-200/60 rounded-2xl overflow-hidden">
          {rest.map((review, i) => (
            <FadeIn key={i} delay={i * 0.12 + 0.2}>
              <div className="bg-white px-8 py-10 md:px-12 md:py-12">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-navy-900/70 text-lg leading-relaxed mb-8 italic">
                  „{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-px bg-electric" />
                  <span className="font-bold text-navy-950 text-sm">{review.author}</span>
                  <span className="text-navy-900/40 text-sm">{review.role}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

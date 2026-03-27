import { Star, Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "@/components/ui/section-divider";

export function Testimonials() {
  const reviews = [
    {
      text: "Die neue Website hat unser Geschäft komplett verändert. Die Anfragen haben sich im ersten Monat glatt verdreifacht!",
      author: "Thomas M.",
      role: "Steuerberater"
    },
    {
      text: "Professionell, extrem schnell und das Ergebnis übertrifft alle Erwartungen. Absolut empfehlenswerte Agentur.",
      author: "Sandra K.",
      role: "Inhaberin Online-Shop"
    },
    {
      text: "Endlich eine Website, auf die ich wirklich stolz bin. CleanWeb hat genau verstanden, was mein Unternehmen braucht.",
      author: "Michael R.",
      role: "Architekt"
    }
  ];

  return (
    <section className="py-24 bg-light-bg relative">
      <SectionDivider position="top" fillColor="fill-navy-950" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-lg text-navy-800/70">
              Vertraue den Erfahrungen von Unternehmen, die den Schritt bereits gegangen sind.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 rotate-180" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-navy-900/80 text-lg leading-relaxed mb-8 flex-grow italic">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-bold text-navy-950">{review.author}</p>
                  <p className="text-sm text-navy-900/60">{review.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

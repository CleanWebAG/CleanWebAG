import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-electric/20 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/30 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight text-balance">
            Dein Unternehmen verdient eine <span className="text-electric">moderne Website.</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 text-balance max-w-2xl mx-auto">
            Starte jetzt und gewinne mehr Kunden. Kostenlose Erstberatung — völlig unverbindlich und persönlich auf dich zugeschnitten.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-7" onClick={() => window.location.href='mailto:hello@cleanweb.agency'}>
              Jetzt starten
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto text-lg px-8 py-7" onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' })}>
              Mehr erfahren
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/40">Keine versteckten Kosten. Keine Verpflichtungen.</p>
        </FadeIn>
      </div>
    </section>
  );
}

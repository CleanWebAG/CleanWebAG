import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Problem } from "@/components/sections/Problem";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 selection:bg-electric selection:text-white">
      <Navigation />
      <Hero />
      <WhyUs />
      <Problem />
      <Portfolio />
      <Services />
      <Process />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}

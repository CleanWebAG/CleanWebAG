import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg selection:bg-electric selection:text-white">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}

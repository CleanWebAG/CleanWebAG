import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import { MultiStepForm } from "@/components/sections/MultiStepForm";
import { ShowcaseCards } from "@/components/sections/ShowcaseCards";
import { BookingCTA, BookingModal } from "@/components/sections/BookingModal";

export default function Anfrage() {
  const [, navigate] = useLocation();
  const [showcaseStep, setShowcaseStep] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <main className="min-h-screen bg-navy-950 selection:bg-electric selection:text-white">
      <Navigation />

      <div className="relative pt-28 pb-20 px-5 sm:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(37,99,235,0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm font-medium mb-8"
            style={{
              color: "rgba(255,255,255,0.45)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: "'Inter', sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            <ArrowLeft size={16} /> Zurück zur Startseite
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Projekt <span style={{ color: "#2563EB" }}>anfragen</span>
            </h1>
            <p
              className="text-sm sm:text-base"
              style={{
                color: "rgba(255,255,255,0.45)",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              In wenigen Schritten zu Ihrem individuellen Angebot.
              Unverbindlich und kostenlos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start"
          >
            <div
              className="lg:col-span-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "28px 24px",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(37,99,235,0.05)",
              }}
            >
              <MultiStepForm onStepChange={setShowcaseStep} />
            </div>

            <div className="hidden lg:block lg:col-span-2">
              <ShowcaseCards currentStep={showcaseStep} />
            </div>
          </motion.div>

          <div className="block lg:hidden mt-8">
            <ShowcaseCards currentStep={showcaseStep} />
          </div>
        </div>
      </div>

      <section className="relative px-5 sm:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <BookingCTA onOpenBooking={() => setShowBooking(true)} />
          </motion.div>
        </div>
      </section>

      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </main>
  );
}

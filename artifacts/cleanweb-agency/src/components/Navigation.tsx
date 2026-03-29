import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openCalendly } from "@/lib/calendly";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Leistungen", href: "#leistungen" },
    { name: "Prozess", href: "#prozess" },
  ];

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        paddingTop: scrolled ? 10 : 18,
        paddingBottom: scrolled ? 10 : 18,
        background: scrolled ? "rgba(9,15,28,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(28px) saturate(1.8)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.8)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(37,99,235,0.10), 0 8px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Top accent line always present */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.22) 40%, rgba(255,255,255,0.06) 50%, rgba(37,99,235,0.22) 60%, transparent)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 relative z-10 group" aria-label="CleanWeb Agency">
            <img
              src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
              alt="CleanWeb Agency"
              style={{
                height: scrolled ? 28 : 34,
                width: "auto",
                transition: "height 0.4s ease",
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center" style={{ gap: 36 }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="relative group"
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "rgba(255,255,255,0.52)",
                  textDecoration: "none",
                  transition: "color 0.25s",
                  paddingBottom: 2,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.92)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.52)"; }}
              >
                {link.name}
                {/* Hover underline */}
                <span style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  height: 1,
                  width: 0,
                  background: "rgba(37,99,235,0.65)",
                  borderRadius: 1,
                  transition: "width 0.25s ease",
                }}
                  className="group-hover:!w-full"
                />
              </a>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => openCalendly()}
              style={{
                padding: "9px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: 8,
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.025em",
                cursor: "pointer",
                boxShadow: "0 2px 14px rgba(37,99,235,0.30)",
                transition: "transform 0.15s, box-shadow 0.15s, background 0.15s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.45)";
                (e.currentTarget as HTMLElement).style.background = "#1d4ed8";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(37,99,235,0.30)";
                (e.currentTarget as HTMLElement).style.background = "#2563eb";
              }}
            >
              Kostenlose Beratung sichern
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2 transition-colors"
            style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 md:hidden flex flex-col justify-center items-center gap-10"
            style={{ background: "rgba(9,15,28,0.98)", backdropFilter: "blur(32px)" }}
          >
            {/* Top accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.3) 50%, transparent)" }} />

            {/* Close */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ position: "absolute", top: 18, right: 20, background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}
            >
              <X size={22} />
            </button>

            <img
              src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
              alt="CleanWeb Agency"
              style={{ height: 36, width: "auto", marginBottom: 8, opacity: 0.85 }}
            />

            <nav className="flex flex-col items-center" style={{ gap: 28 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => { setMobileMenuOpen(false); scrollTo(link.href); }}
                  style={{ fontSize: "1.5rem", fontWeight: 700, color: "rgba(255,255,255,0.75)", textDecoration: "none", fontFamily: "Montserrat, sans-serif" }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              onClick={() => {
                setMobileMenuOpen(false);
                openCalendly();
              }}
              style={{ padding: "14px 32px", background: "#2563eb", color: "white", border: "none", borderRadius: 10, fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}
            >
              Kostenlose Beratung sichern
            </motion.button>

            <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace" }}>
              cleanweb.agency
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

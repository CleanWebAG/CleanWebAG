import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Leistungen", href: "#leistungen" },
    { name: "Referenzen", href: "#referenzen" },
    { name: "Prozess", href: "#prozess" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-2.5" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo — shrinks subtly on scroll */}
          <a href="#" className="flex-shrink-0 relative z-10 group">
            <img
              src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
              alt="CleanWeb Agency"
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-7" : "h-9"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group py-1"
              >
                {link.name}
                {/* Sliding underline */}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-electric/70 transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}

            <Button
              variant={scrolled ? "primary" : "glass"}
              size="sm"
              className={`transition-all duration-500 ${
                scrolled ? "shadow-electric/20 shadow-md" : ""
              }`}
              onClick={() =>
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kostenlose Beratung
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 text-white/80 hover:text-white p-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy-950/97 backdrop-blur-2xl transition-all duration-400 ease-in-out md:hidden flex flex-col justify-center items-center gap-10 ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Top accent line inside mobile menu */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

        <img
          src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
          alt="CleanWeb Agency"
          className="h-10 w-auto mb-2 opacity-90"
        />

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-bold text-white/80 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Button
          variant="primary"
          size="lg"
          className="mt-2"
          onClick={() => {
            setMobileMenuOpen(false);
            document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Kostenlose Beratung
        </Button>

        <p className="text-xs text-white/20 tracking-widest uppercase font-mono">
          cleanweb.agency
        </p>
      </div>
    </header>
  );
}

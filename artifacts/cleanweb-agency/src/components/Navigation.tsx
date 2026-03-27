import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 relative z-10">
            <img
              src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
              alt="CleanWeb Agency"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant={scrolled ? "primary" : "glass"}
              size="sm"
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kostenlose Beratung
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-navy-950/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
          alt="CleanWeb Agency"
          className="h-10 w-auto mb-4"
        />
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-display font-semibold text-white"
          >
            {link.name}
          </a>
        ))}
        <Button
          variant="primary"
          size="lg"
          className="mt-4"
          onClick={() => {
            setMobileMenuOpen(false);
            document
              .getElementById("kontakt")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Kostenlose Beratung
        </Button>
      </div>
    </header>
  );
}

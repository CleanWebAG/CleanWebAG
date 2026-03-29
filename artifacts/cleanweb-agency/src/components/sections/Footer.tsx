import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={`${import.meta.env.BASE_URL}cleanweb-logo-final.png`}
              alt="CleanWeb Agency"
              className="h-8 w-auto mb-4 opacity-80"
            />
            <p className="text-white/50 text-sm">
              Modern Websites. More Customers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/60">
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              AGB
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-white/40 border-t border-white/10 pt-8">
          <p>
            &copy; {new Date().getFullYear()} CleanWeb Agency. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

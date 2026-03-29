import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-navy-950 selection:bg-electric selection:text-white">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Impressum
          </h1>

          <div className="space-y-10 text-white/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>CleanWeb Agency</p>
              <p>Einzelunternehmen</p>
              <p>Inhaber: Miguel de Carvalho</p>
              <p className="mt-2">An der Fest 10</p>
              <p>40882 Ratingen</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4901772047113"
                  className="text-electric hover:underline"
                >
                  01772047113
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@cleanwebag.de"
                  className="text-electric hover:underline"
                >
                  info@cleanwebag.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>Miguel de Carvalho</p>
              <p>An der Fest 10</p>
              <p>40882 Ratingen</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

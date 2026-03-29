import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
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
          <Link href="/" className="inline-flex items-center gap-2 text-electric hover:text-electric/80 transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white mb-12">
            Impressum
          </h1>

          <div className="space-y-10 text-white/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>CleanWeb Agency</p>
              <p>Einzelunternehmen</p>
              <p>Inhaber: Miguel de Carvalho</p>
              <p className="mt-2">An der Fest 10</p>
              <p>40882 Ratingen</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
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
              <h2 className="text-xl font-bold text-white mb-4">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>Miguel de Carvalho</p>
              <p>An der Fest 10</p>
              <p>40882 Ratingen</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric hover:text-electric/80 transition-colors break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-3">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß §7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-3">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-3">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link href="/" className="inline-flex items-center gap-2 text-electric hover:text-electric/80 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

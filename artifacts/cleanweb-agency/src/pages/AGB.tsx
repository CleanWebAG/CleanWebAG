import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function AGB() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-white/50 text-sm mb-12">
            CleanWeb Agency – Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>

          <div className="space-y-10 text-white/80 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§1 Geltungsbereich</h2>
              <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen CleanWeb Agency (nachfolgend „Auftragnehmer") und dem Auftraggeber (nachfolgend „Kunde") über die Erstellung von Websites und damit verbundene Dienstleistungen.
              </p>
              <p className="mt-3">
                (2) Die AGB gelten ausschließlich im Geschäftsverkehr mit Unternehmern im Sinne des §14 BGB (B2B). Verbraucher im Sinne des §13 BGB sind von diesen AGB nicht angesprochen.
              </p>
              <p className="mt-3">
                (3) Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nur dann Vertragsbestandteil, wenn der Auftragnehmer ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
              </p>
              <p className="mt-3">
                (4) Diese AGB gelten auch für alle zukünftigen Geschäftsbeziehungen zwischen den Parteien, auch wenn sie nicht nochmals ausdrücklich vereinbart werden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§2 Vertragsgegenstand und Leistungsumfang</h2>
              <p>
                (1) Der Auftragnehmer erbringt Dienstleistungen im Bereich Webdesign und Webentwicklung. Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung des Auftragnehmers.
              </p>
              <p className="mt-3">
                (2) Jedes Projekt wird individuell nach den Anforderungen des Kunden erstellt. Standardprodukte werden nicht angeboten.
              </p>
              <p className="mt-3">
                (3) Wartung, Pflege und Hosting der erstellten Website sind nicht Bestandteil dieser AGB und des Projektauftrags. Entsprechende Leistungen können separat vereinbart werden.
              </p>
              <p className="mt-3">
                (4) Der Auftragnehmer ist berechtigt, sich zur Erfüllung seiner Leistungspflichten qualifizierter Dritter (Subunternehmer) zu bedienen. Die Verantwortung gegenüber dem Kunden verbleibt beim Auftragnehmer.
              </p>
              <p className="mt-3">
                (5) Änderungen oder Erweiterungen des vereinbarten Leistungsumfangs (Change Requests) bedürfen einer gesonderten schriftlichen Vereinbarung und können zu einer Anpassung der Vergütung und des Zeitplans führen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§3 Mitwirkungspflichten des Kunden</h2>
              <p>
                (1) Der Kunde stellt dem Auftragnehmer alle für die Durchführung des Projekts erforderlichen Inhalte, Materialien und Informationen (Texte, Bilder, Logos, Zugangsdaten etc.) rechtzeitig und in geeigneter Form zur Verfügung.
              </p>
              <p className="mt-3">
                (2) Der Kunde benennt einen festen Ansprechpartner, der für den Auftragnehmer erreichbar ist und Entscheidungen im Rahmen des Projekts treffen kann.
              </p>
              <p className="mt-3">
                (3) Der Kunde stellt sicher, dass die von ihm bereitgestellten Inhalte frei von Rechten Dritter sind oder die erforderlichen Nutzungsrechte vorliegen. Der Kunde stellt den Auftragnehmer von Ansprüchen Dritter frei, die auf der Verletzung von Rechten durch vom Kunden bereitgestellte Inhalte beruhen.
              </p>
              <p className="mt-3">
                (4) Verzögerungen, die durch verspätete oder unvollständige Zulieferung des Kunden entstehen, gehen nicht zulasten des Auftragnehmers. Vereinbarte Termine verschieben sich entsprechend.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§4 Angebot und Vertragsschluss</h2>
              <p>
                (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern nicht ausdrücklich anders angegeben.
              </p>
              <p className="mt-3">
                (2) Der Vertrag kommt durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch die Aufnahme der Leistungserbringung zustande.
              </p>
              <p className="mt-3">
                (3) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§5 Vergütung und Zahlungsbedingungen</h2>
              <p>
                (1) Die Vergütung ergibt sich aus dem jeweiligen Angebot des Auftragnehmers. Alle Preise verstehen sich als Nettopreise zuzüglich der gesetzlichen Umsatzsteuer.
              </p>
              <p className="mt-3">
                (2) Die Vergütung wird als einmaliger Projektpreis vereinbart, sofern im Angebot nicht anders angegeben.
              </p>
              <p className="mt-3">
                (3) Sofern nicht anders vereinbart, wird die Vergütung wie folgt fällig:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-white/70">
                <li>50 % bei Auftragserteilung (Anzahlung)</li>
                <li>50 % nach Abnahme der fertiggestellten Website</li>
              </ul>
              <p className="mt-3">
                (4) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
              </p>
              <p className="mt-3">
                (5) Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem jeweiligen Basiszinssatz (§288 Abs. 2 BGB) zu verlangen. Die Geltendmachung eines weitergehenden Verzugsschadens bleibt vorbehalten.
              </p>
              <p className="mt-3">
                (6) Der Auftragnehmer ist bei Zahlungsverzug des Kunden berechtigt, die weitere Leistungserbringung bis zum vollständigen Zahlungsausgleich einzustellen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§6 Abnahme</h2>
              <p>
                (1) Nach Fertigstellung der Website stellt der Auftragnehmer dem Kunden das Ergebnis zur Prüfung und Abnahme bereit (z. B. über eine Staging-Umgebung oder einen Vorschau-Link).
              </p>
              <p className="mt-3">
                (2) Der Kunde ist verpflichtet, die Leistung innerhalb von 14 Kalendertagen nach Bereitstellung zu prüfen und etwaige Mängel schriftlich mitzuteilen. Erfolgt innerhalb dieser Frist keine Rückmeldung, gilt die Leistung als abgenommen.
              </p>
              <p className="mt-3">
                (3) Die Abnahme darf nicht wegen unwesentlicher Mängel verweigert werden. Unwesentliche Mängel werden im Rahmen der Nachbesserung behoben, ohne dass dies die Abnahme und die damit verbundene Fälligkeit der Schlusszahlung berührt.
              </p>
              <p className="mt-3">
                (4) Bei berechtigten Mängeln hat der Auftragnehmer das Recht zur Nachbesserung. Dem Auftragnehmer sind mindestens zwei Nachbesserungsversuche einzuräumen. Schlägt die Nachbesserung endgültig fehl, kann der Kunde die Vergütung angemessen mindern oder vom Vertrag zurücktreten.
              </p>
              <p className="mt-3">
                (5) Wünscht der Kunde nach erfolgter Abnahme Änderungen oder Erweiterungen, die über die Beseitigung von Mängeln hinausgehen, gelten diese als neuer Auftrag und werden gesondert vergütet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§7 Nutzungsrechte</h2>
              <p>
                (1) Der Auftragnehmer räumt dem Kunden mit vollständiger Bezahlung der vereinbarten Vergütung das einfache, zeitlich und räumlich unbeschränkte Nutzungsrecht an den im Rahmen des Auftrags erstellten Arbeitsergebnissen (Website, Designs, Code) ein, soweit im Angebot nichts anderes vereinbart ist.
              </p>
              <p className="mt-3">
                (2) Vor vollständiger Bezahlung verbleiben sämtliche Nutzungsrechte beim Auftragnehmer. Der Kunde darf die Arbeitsergebnisse bis dahin nicht nutzen, veröffentlichen oder Dritten zugänglich machen.
              </p>
              <p className="mt-3">
                (3) Die Einräumung ausschließlicher Nutzungsrechte bedarf einer gesonderten schriftlichen Vereinbarung und kann eine zusätzliche Vergütung begründen.
              </p>
              <p className="mt-3">
                (4) Der Auftragnehmer ist berechtigt, die erstellte Website als Referenz in seinem Portfolio, auf seiner eigenen Website und in sozialen Medien zu präsentieren, sofern der Kunde dem nicht ausdrücklich schriftlich widerspricht.
              </p>
              <p className="mt-3">
                (5) Soweit im Rahmen des Projekts Open-Source-Komponenten, Bibliotheken oder Lizenzen Dritter verwendet werden, gelten deren jeweilige Lizenzbedingungen. Der Auftragnehmer informiert den Kunden auf Anfrage über die eingesetzten Komponenten.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§8 Haftung</h2>
              <p>
                (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
              </p>
              <p className="mt-3">
                (2) Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p className="mt-3">
                (3) Die Haftung für leichte Fahrlässigkeit ist der Höhe nach auf die vereinbarte Netto-Vergütung des jeweiligen Projekts begrenzt.
              </p>
              <p className="mt-3">
                (4) Der Auftragnehmer haftet nicht für entgangenen Gewinn, mittelbare Schäden oder Folgeschäden, soweit diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.
              </p>
              <p className="mt-3">
                (5) Der Auftragnehmer haftet nicht für Schäden, die durch fehlende oder fehlerhafte Mitwirkung des Kunden (§3) entstehen.
              </p>
              <p className="mt-3">
                (6) Die Haftungsbeschränkungen gelten auch zugunsten der Mitarbeiter, Erfüllungsgehilfen und Subunternehmer des Auftragnehmers.
              </p>
              <p className="mt-3">
                (7) Schadensersatzansprüche des Kunden verjähren innerhalb von 12 Monaten nach Kenntnis des Schadens, spätestens jedoch 24 Monate nach Abnahme. Dies gilt nicht für Ansprüche aus §§ 1–2 dieses Paragraphen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§9 Gewährleistung</h2>
              <p>
                (1) Der Auftragnehmer gewährleistet, dass die erstellte Website zum Zeitpunkt der Abnahme den vertraglich vereinbarten Anforderungen entspricht.
              </p>
              <p className="mt-3">
                (2) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
              </p>
              <p className="mt-3">
                (3) Mängel, die auf nachträgliche Eingriffe des Kunden oder Dritter, auf fehlerhaften Betrieb, auf Änderungen der Systemumgebung oder auf höhere Gewalt zurückzuführen sind, sind von der Gewährleistung ausgeschlossen.
              </p>
              <p className="mt-3">
                (4) Der Kunde hat Mängel unverzüglich nach Entdeckung schriftlich und nachvollziehbar zu melden. Nicht rechtzeitig gemeldete Mängel gelten als genehmigt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§10 Kündigung und Rücktritt</h2>
              <p>
                (1) Der Kunde kann den Vertrag vor Fertigstellung jederzeit kündigen. In diesem Fall hat der Auftragnehmer Anspruch auf Vergütung der bis dahin erbrachten Leistungen sowie auf Ersatz der entstandenen Aufwendungen. Die Vergütung wird anteilig nach dem Projektfortschritt bemessen.
              </p>
              <p className="mt-3">
                (2) Der Auftragnehmer kann den Vertrag aus wichtigem Grund kündigen, insbesondere wenn:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-white/70">
                <li>der Kunde mit der Zahlung trotz Mahnung und Nachfrist länger als 30 Tage in Verzug ist,</li>
                <li>der Kunde seinen Mitwirkungspflichten trotz schriftlicher Aufforderung und Nachfrist nicht nachkommt,</li>
                <li>ein Insolvenzverfahren über das Vermögen des Kunden beantragt oder eröffnet wird.</li>
              </ul>
              <p className="mt-3">
                (3) Im Falle einer berechtigten außerordentlichen Kündigung durch den Auftragnehmer behält dieser den Anspruch auf die bis dahin erbrachten Leistungen und die vereinbarte Anzahlung.
              </p>
              <p className="mt-3">
                (4) Die Kündigung bedarf der Schriftform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§11 Vertraulichkeit</h2>
              <p>
                (1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen der jeweils anderen Partei streng vertraulich zu behandeln und nur für die Zwecke des jeweiligen Projekts zu verwenden.
              </p>
              <p className="mt-3">
                (2) Diese Verpflichtung gilt über die Beendigung des Vertragsverhältnisses hinaus fort und erlischt erst, wenn die betreffenden Informationen allgemein bekannt geworden sind, ohne dass eine Partei dies zu vertreten hat.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">§12 Schlussbestimmungen</h2>
              <p>
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
              </p>
              <p className="mt-3">
                (2) Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit Verträgen zwischen den Parteien ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers.
              </p>
              <p className="mt-3">
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder nach Vertragsschluss unwirksam oder undurchführbar werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame oder undurchführbare Bestimmung ist durch eine wirksame Regelung zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahekommt (salvatorische Klausel).
              </p>
              <p className="mt-3">
                (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Änderung dieses Schriftformerfordernisses.
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

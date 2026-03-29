import { Link } from "wouter";
import { Footer } from "@/components/sections/Footer";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-navy-950 selection:bg-electric selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center text-electric hover:text-electric/80 transition-colors mb-10 text-sm font-medium"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-white/80 leading-relaxed">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Verantwortlicher
            </h2>
            <p>
              Miguel de Carvalho
              <br />
              CleanWeb Agency
              <br />
              An der Fest 10
              <br />
              40882 Ratingen
              <br />
              Deutschland
            </p>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:info@cleanwebag.de"
                className="text-electric hover:text-electric/80 transition-colors"
              >
                info@cleanwebag.de
              </a>
            </p>
          </section>

          {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Datenschutz
            </h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-2">
              Die Nutzung unserer Website ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p className="mt-2">
              Wir weisen darauf hin, dass die Datenübertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
              durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
              Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
              der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
              Unternehmen seinen Sitz hat. Eine Liste der
              Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem
              Link entnommen werden:{" "}
              <a
                href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:text-electric/80 transition-colors break-all"
              >
                https://www.bfdi.bund.de
              </a>
              .
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Recht auf Datenübertragbarkeit
            </h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit unter der im Abschnitt „Verantwortlicher" angegebenen
              Adresse an uns wenden.
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit unter der im Abschnitt „Verantwortlicher" angegebenen
              Adresse an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
                geschah/geschieht, können Sie statt der Löschung die
                Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abwägung zwischen Ihren und unseren Interessen
                vorgenommen werden. Solange noch nicht feststeht, wessen
                Interessen überwiegen, haben Sie das Recht, die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
          </section>

          {/* 3. Datenerfassung auf dieser Website */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Server-Logfiles
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Logfiles, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
              hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die
              Server-Logfiles erfasst werden.
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Kontaktformular und E-Mail-Kontakt
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
              lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
              von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten
              erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung
              jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
              E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
            <p className="mt-2">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
              Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          {/* 4. Hosting */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Hosting
            </h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v.&nbsp;a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
              Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
              eine Website generiert werden, handeln.
            </p>
            <p className="mt-2">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
              gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs.
              1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-2">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
              zur Erfüllung seiner Leistungspflichten erforderlich ist und
              unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
          </section>

          {/* 5. Calendly */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Calendly (Terminbuchung)
            </h2>
            <p>
              Auf unserer Website bieten wir Ihnen die Möglichkeit, Termine über
              den Dienst „Calendly" zu buchen. Anbieter ist Calendly LLC, BB&T
              Tower, 271 17th St NW, Atlanta, GA 30363, USA.
            </p>
            <p className="mt-2">
              Wenn Sie einen Termin buchen, werden die von Ihnen eingegebenen
              Daten (z.&nbsp;B. Name, E-Mail-Adresse, Telefonnummer) an
              Calendly übermittelt und dort gespeichert. Die Datenverarbeitung
              erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen (Art. 6
              Abs. 1 lit. b DSGVO).
            </p>
            <p className="mt-2">
              Bitte beachten Sie, dass Calendly ein US-amerikanischer
              Dienstleister ist. Die Datenübertragung in die USA erfolgt auf
              Grundlage von Standardvertragsklauseln der EU-Kommission. Details
              finden Sie in der Datenschutzerklärung von Calendly:{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:text-electric/80 transition-colors"
              >
                https://calendly.com/privacy
              </a>
              .
            </p>
            <p className="mt-2">
              Die von Ihnen bei Calendly eingegebenen Daten verbleiben bei uns,
              bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          {/* 6. Google Analytics */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Google Analytics
            </h2>
            <p>
              Diese Website nutzt ggf. Funktionen des Webanalysedienstes Google
              Analytics. Anbieter ist die Google Ireland Limited („Google"),
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-2">
              Google Analytics verwendet sogenannte „Cookies". Das sind
              Textdateien, die auf Ihrem Computer gespeichert werden und die
              eine Analyse der Benutzung der Website durch Sie ermöglichen. Die
              durch den Cookie erzeugten Informationen über Ihre Benutzung
              dieser Website werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert.
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              IP-Anonymisierung
            </h3>
            <p>
              Wir haben auf dieser Website die Funktion IP-Anonymisierung
              aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von
              Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Opt-out
            </h3>
            <p>
              Sie können die Erfassung Ihrer Daten durch Google Analytics
              verhindern, indem Sie ein Browser-Add-on zur Deaktivierung von
              Google Analytics herunterladen und installieren:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:text-electric/80 transition-colors"
              >
                Browser-Add-on zur Deaktivierung von Google Analytics
              </a>
              .
            </p>

            <h3 className="text-lg font-medium text-white/90 mt-6 mb-2">
              Auftragsverarbeitung
            </h3>
            <p>
              Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
              abgeschlossen und setzen die strengen Vorgaben der deutschen
              Datenschutzbehörden bei der Nutzung von Google Analytics
              vollständig um.
            </p>
            <p className="mt-2">
              Die Nutzung von Google Analytics erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an der Analyse des Nutzerverhaltens, um sowohl sein
              Webangebot als auch seine Werbung zu optimieren. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.
              a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Cookies
            </h2>
            <p>
              Unsere Internetseiten verwenden teilweise sogenannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
              keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
              sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
              die Ihr Browser speichert.
            </p>
            <p className="mt-2">
              Die meisten der von uns verwendeten Cookies sind sogenannte
              „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch
              gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert
              bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
              Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="mt-2">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="mt-2">
              Cookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von
              Ihnen erwünschter Funktionen erforderlich sind, werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der
              Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
              von Cookies zur technisch fehlerfreien und optimierten
              Bereitstellung seiner Dienste. Soweit andere Cookies
              (z.&nbsp;B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert
              werden, werden diese in dieser Datenschutzerklärung gesondert
              behandelt.
            </p>
          </section>

          {/* 8. SSL/TLS-Verschlüsselung */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              8. SSL-/TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die
              Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
            <p className="mt-2">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
          </section>

          {/* 9. Änderungen */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              9. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen in der Datenschutzerklärung
              umzusetzen, z.&nbsp;B. bei der Einführung neuer Services. Für
              Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>

          <p className="text-white/50 text-sm pt-4 border-t border-white/10">
            Stand: März 2026
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default function AGBPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Allgemeine Geschäftsbedingungen
        </h1>
        
        <div className="text-gray-600 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">§ 1 Geltungsbereich</h2>
          <p className="text-base leading-relaxed">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der
            Linguasud Sprachschule GmbH (nachfolgend „Anbieter“ genannt) und dem Kunden
            (nachfolgend „Teilnehmer“ genannt). Abweichende Bedingungen des Teilnehmers werden
            nicht anerkannt, es sei denn, der Anbieter stimmt deren Geltung ausdrücklich zu.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 2 Vertragspartner</h2>
          <p className="text-base leading-relaxed">
            Vertragspartner ist die Linguasud Sprachschule GmbH, Musterstraße 123, 8000 Zürich,
            Schweiz. Der Teilnehmer ist die Person, die den Kurs bucht und die Teilnahmegebühren zahlt.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 3 Vertragsschluss</h2>
          <p className="text-base leading-relaxed">
            Die Buchung eines Kurses erfolgt schriftlich per E-Mail oder über das Online-Buchungsformular
            auf der Website. Mit der Bestätigung der Buchung durch den Anbieter kommt der Vertrag zustande.
            Der Anbieter behält sich vor, Buchungen ohne Angabe von Gründen abzulehnen.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 4 Teilnahmegebühren und Zahlungsbedingungen</h2>
          <p className="text-base leading-relaxed">
            Die Teilnahmegebühren sind in den Kursbeschreibungen auf der Website angegeben.
            Alle Preise verstehen sich in Schweizer Franken (CHF) und sind inklusive der gesetzlichen
            Mehrwertsteuer. Die Zahlung ist innerhalb von 14 Tagen nach Rechnungserhalt fällig,
            spätestens jedoch 7 Tage vor Kursbeginn. Bei verspäteter Zahlung ist der Anbieter berechtigt,
            den Teilnehmer von der Teilnahme auszuschließen.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 5 Stornierung und Rücktritt</h2>
          <p className="text-base leading-relaxed">
            <strong>Stornierung durch den Teilnehmer:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
            <li>Bis 14 Tage vor Kursbeginn: Kostenfrei</li>
            <li>7-13 Tage vor Kursbeginn: 50% der Kursgebühr</li>
            <li>Weniger als 7 Tage vor Kursbeginn: 100% der Kursgebühr</li>
          </ul>
          <p className="text-base leading-relaxed">
            Die Stornierung muss schriftlich per E-Mail erfolgen. Bei Krankheit oder anderen
            triftigen Gründen kann eine Gutschrift für einen späteren Kurs erwogen werden,
            sofern ein ärztliches Attest vorgelegt wird.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 6 Kursdurchführung</h2>
          <p className="text-base leading-relaxed">
            Der Anbieter verpflichtet sich, die Kurse sorgfältig und fachgerecht durchzuführen.
            Der Teilnehmer verpflichtet sich, aktiv am Unterricht teilzunehmen und die Hausaufgaben
            zu erledigen. Der Anbieter behält sich vor, Kurse bei unzureichender Teilnehmerzahl
            abzusagen oder zu verschieben. In diesem Fall erhalten die Teilnehmer bereits gezahlte
            Gebühren vollständig zurück.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 7 Haftung</h2>
          <p className="text-base leading-relaxed">
            Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit
            haftet der Anbieter nur bei Verletzung von wesentlichen Vertragspflichten.
            Die Haftung ist auf den typischerweise vorhersehbaren Schaden begrenzt.
            Für indirekte Schäden, entgangenen Gewinn oder Datenverlust wird keine Haftung übernommen.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 8 Datenschutz</h2>
          <p className="text-base leading-relaxed">
            Der Anbieter erhebt, verarbeitet und nutzt personenbezogene Daten gemäß der
            Datenschutzerklärung. Die Datenschutzerklärung ist auf der Website abrufbar.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 9 Urheberrecht</h2>
          <p className="text-base leading-relaxed">
            Alle vom Anbieter bereitgestellten Unterrichtsmaterialien unterliegen dem Urheberrecht.
            Eine Vervielfältigung, Verbreitung oder öffentliche Wiedergabe ohne ausdrückliche
            Zustimmung des Anbieters ist nicht gestattet.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">§ 10 Schlussbestimmungen</h2>
          <p className="text-base leading-relaxed">
            Es gilt schweizerisches Recht. Gerichtsstand ist Zürich. Sollten einzelne Bestimmungen
            dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam. Die Parteien verpflichten
            sich, die unwirksame Bestimmung durch eine wirksame zu ersetzen, die dem wirtschaftlichen
            Zweck der unwirksamen Bestimmung am nächsten kommt.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Stand: Januar 2024
          </p>
        </div>
      </div>
    </div>
  );
}
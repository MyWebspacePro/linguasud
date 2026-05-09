'use client';

import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-primary-600">Preise</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Transparente Preise für Ihren Erfolg
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Alle Preise verstehen sich in Schweizer Franken (CHF) pro Person und Kurs.
        </p>

        {/* Gruppenkurse Section */}
        <div className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Gruppenkurse</h2>
            <p className="text-gray-600 mt-2">
              Lernen Sie gemeinsam mit anderen in kleinen, interaktiven Gruppen.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kursart
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    60 Min.
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    75 Min.
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    90 Min.
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    120 Min.
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    2 TeilnehmerInnen
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 798.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 898.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 998.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 1,298.00
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    bis 3 TeilnehmerInnen                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 688.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 798.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 896.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 1,148.00
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    bis 4 TeilnehmerInnen
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 584.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 636.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 699.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 929.00
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    bis 6 TeilnehmerInnen
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 498.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 558.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 584.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    CHF 698.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Hinweis:</strong> Ab 10 gebuchten Lektionen gelten die Preise anteilmässig. 
              Kürzere Dauer: +30%. Preise pro Person.
            </p>
          </div>
        </div>

        {/* Einzelunterricht Section */}
        <div className="mt-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Einzelunterricht</h2>
            <p className="text-gray-600 mt-2">
              Maßgeschneiderter 1-zu-1 Unterricht für maximale Flexibilität.
            </p>
          </div>
          
          {/* Normaltarif */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Normaltarif</h3>
            <p className="text-sm text-gray-600 mb-4">
              (1) Der Normaltarif gilt für Kurse über Mittag oder am Abend, von Montag bis Donnerstag
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Buchung
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      45 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      60 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      75 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      90 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      120 Min.
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Bis 20 gebuchte Lektionen
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 88.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 104.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 125.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 139.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 179.00
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Ab 20 gebuchten Lektionen
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 85.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 99.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 119.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 136.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 175.00
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Ab 40 gebuchten Lektionen
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 79.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 94.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 115.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 129.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 169.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Niedertarif */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Niedertarif</h3>
            <p className="text-sm text-gray-600 mb-4">
              (2) Der Niedertarif ist gültig für Kurse am Vormittag, am Nachmittag, sowie Freitag und Samstag den ganzen Tag.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Buchung
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      45 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      60 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      75 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      90 Min.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      120 Min.
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Bis 20 gebuchte Lektionen
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 79.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 96.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 118.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 135.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 169.00
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Ab 20 gebuchten Lektionen
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 76.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 93.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 114.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 129.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 159.00
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Ab 40 gebuchten Lektionen
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 69.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 88.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 108.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 124.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                      CHF 154.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Studentenrabatt Section */}
        <div className="mt-16">
          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Studentenrabatt</h3>
            <p className="text-primary-700">
              Vollzeit-Studenten und Lehrlinge bis 25 Jahre erhalten 10% Rabatt auf alle Gruppenkurse (zusätzlich zum Mengenrabatt).
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/kurse"
            className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Kurse ansehen
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-4xl mt-24 sm:mt-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-8">Häufig gestellte Fragen zu den Preisen</h2>
          <dl className="space-y-8">
            {[
              {
                question: 'Gibt es Rabatte für Studenten oder Arbeitslose?',
                answer: 'Ja, gegen Vorlage eines gültigen Ausweises gewähren wir 10% Rabatt auf alle Gruppenkurse. Studenten und Lehrlinge bis 25 Jahre erhalten zusätzlich zum Mengenrabatt.',
              },
              {
                question: 'Sind die Lehrmaterialien im Preis inbegriffen?',
                answer: 'Bei den meisten Gruppenkursen sind die Basis-Lehrmaterialien im Preis enthalten. Bei speziellen Prüfungsvorbereitungskursen können zusätzliche Kosten für Prüfungsbücher anfallen.',
              },
              {
                question: 'Kann ich in Raten zahlen?',
                answer: 'Für Kurse, die länger als 3 Monate dauern, bieten wir eine Ratenzahlung in zwei oder drei Teilbeträgen an. Bitte kontaktieren Sie uns für Details.',
              },
              {
                question: 'Was passiert, wenn ich eine Lektion verpasse?',
                answer: 'Im Einzelunterricht können Sie Lektionen bis zu 24 Stunden vorher kostenlos verschieben. Bei Gruppenkursen ist eine Rückerstattung verpasster Lektionen leider nicht möglich, wir stellen Ihnen aber gerne das verpasste Material zur Verfügung.',
              },
            ].map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

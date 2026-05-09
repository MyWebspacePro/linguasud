import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Gruppenkurse',
    id: 'tier-group',
    href: '/kurse?format=group',
    priceMonthly: 'ab 498',
    description: 'Lernen Sie gemeinsam mit anderen in kleinen, interaktiven Gruppen.',
    features: [
      'Kleingruppe (4-6 Personen): ab CHF 498 (60 min)',
      'Max. 4 Personen (3-4): ab CHF 584 (60 min)',
      'Interaktiver Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    mostPopular: true,
  },
  {
    name: 'Einzelunterricht',
    id: 'tier-individual',
    href: '/kurse?format=individual',
    priceMonthly: 'ab 79.50',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter Unterricht für maximale Flexibilität und schnellen Fortschritt.',
    features: [
      'Normaltarif: ab CHF 88 (45 min)',
      'Niedertarif: ab CHF 79.50 (45 min)',
      'Flexible Terminwahl',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    mostPopular: false,
  },
  {
    name: 'Online-Kurse',
    id: 'tier-online',
    href: '/kurse?format=online',
    priceMonthly: 'ab 280',
    description: 'Lernen Sie bequem von zu Hause oder unterwegs mit unseren Online-Formaten.',
    features: [
      'Live-Unterricht via Zoom',
      'Digitale Lernplattform',
      'Aufzeichnungen verfügbar',
      'Ortsunabhängig',
      'Interaktive Tools',
    ],
    mostPopular: false,
  },
];

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
          Wählen Sie das Format, das am besten zu Ihrem Lernstil und Ihrem Zeitplan passt. Alle Preise verstehen sich in Schweizer Franken (CHF).
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 xl:p-10 ${
                tier.mostPopular
                  ? 'bg-gray-900 ring-gray-900'
                  : 'ring-gray-200'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={`text-lg font-semibold leading-8 ${
                    tier.mostPopular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-400">
                    Am beliebtesten
                  </p>
                ) : null}
              </div>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.mostPopular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  CHF {tier.priceMonthly}
                </span>
                <span
                  className={`text-sm font-semibold leading-6 ${
                    tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tier.priceUnit || '/ Kurs'}
                </span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? 'bg-primary-500 text-white shadow-sm hover:bg-primary-400 focus-visible:outline-primary-500'
                    : 'text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300'
                }`}
              >
                Kurse ansehen
              </Link>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 xl:mt-10 ${
                  tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircle2
                      className={`h-6 w-5 flex-none ${
                        tier.mostPopular ? 'text-white' : 'text-primary-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Preise Details Section */}
        <div className="mx-auto max-w-4xl mt-24 sm:mt-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-8">Preisübersicht</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gruppenkurse Details */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Gruppenkurse - Preise pro Person</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Kleingruppe (4-6 Personen):</span>
                  <span>CHF 498-698</span>
                </div>
                <div className="flex justify-between">
                  <span>Max. 4 Personen (3-4):</span>
                  <span>CHF 584-929</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  * Preise variieren je nach Lektionsdauer (60-120 min)
                </div>
              </div>
            </div>
            
            {/* Einzelunterricht Details */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Einzelunterricht - Preise pro Lektion</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Normaltarif (45 min):</span>
                  <span>CHF 88</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedertarif (45 min):</span>
                  <span>CHF 79.50</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  * Preise variieren je nach Lektionsdauer (45-120 min)
                </div>
              </div>
            </div>
          </div>
          
          {/* Studentenrabatt */}
          <div className="mt-8 bg-primary-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Studentenrabatt</h3>
            <p className="text-primary-700">
              Vollzeit-Studenten und Lehrlinge bis 25 Jahre erhalten 10% Rabatt auf alle Gruppenkurse (zusätzlich zum Mengenrabatt).
            </p>
          </div>
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

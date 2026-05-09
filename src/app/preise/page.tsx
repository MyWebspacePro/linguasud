'use client';

import { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface PriceOffer {
  id: string;
  name: string;
  category: 'gruppenkurse' | 'einzelunterricht';
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  duration: string;
  popular?: boolean;
}

const priceOffers: PriceOffer[] = [
  // Gruppenkurse - Kleingruppe (4-6 Personen)
  {
    id: 'gruppen-kleingruppe-60',
    name: 'Kleingruppe (4-6 Personen) - 60 Min.',
    category: 'gruppenkurse',
    price: '498',
    priceUnit: '/ Kurs',
    description: 'Intensiver Gruppenunterricht in kleiner Gruppe für optimalen Lernerfolg.',
    features: [
      '4-6 Teilnehmer',
      '60 Minuten pro Lektion',
      'Interaktiver Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '60 min',
    popular: true,
  },
  {
    id: 'gruppen-kleingruppe-75',
    name: 'Kleingruppe (4-6 Personen) - 75 Min.',
    category: 'gruppenkurse',
    price: '558',
    priceUnit: '/ Kurs',
    description: 'Intensiver Gruppenunterricht in kleiner Gruppe für optimalen Lernerfolg.',
    features: [
      '4-6 Teilnehmer',
      '75 Minuten pro Lektion',
      'Interaktiver Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '75 min',
  },
  {
    id: 'gruppen-kleingruppe-90',
    name: 'Kleingruppe (4-6 Personen) - 90 Min.',
    category: 'gruppenkurse',
    price: '584',
    priceUnit: '/ Kurs',
    description: 'Intensiver Gruppenunterricht in kleiner Gruppe für optimalen Lernerfolg.',
    features: [
      '4-6 Teilnehmer',
      '90 Minuten pro Lektion',
      'Interaktiver Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '90 min',
  },
  {
    id: 'gruppen-kleingruppe-120',
    name: 'Kleingruppe (4-6 Personen) - 120 Min.',
    category: 'gruppenkurse',
    price: '698',
    priceUnit: '/ Kurs',
    description: 'Intensiver Gruppenunterricht in kleiner Gruppe für optimalen Lernerfolg.',
    features: [
      '4-6 Teilnehmer',
      '120 Minuten pro Lektion',
      'Interaktiver Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '120 min',
  },
  // Gruppenkurse - Max. 4 Personen (3-4)
  {
    id: 'gruppen-max4-60',
    name: 'Max. 4 Personen (3-4) - 60 Min.',
    category: 'gruppenkurse',
    price: '584',
    priceUnit: '/ Kurs',
    description: 'Sehr kleine Gruppe für intensiven, persönlichen Unterricht.',
    features: [
      '3-4 Teilnehmer',
      '60 Minuten pro Lektion',
      'Sehr persönlicher Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '60 min',
  },
  {
    id: 'gruppen-max4-75',
    name: 'Max. 4 Personen (3-4) - 75 Min.',
    category: 'gruppenkurse',
    price: '636',
    priceUnit: '/ Kurs',
    description: 'Sehr kleine Gruppe für intensiven, persönlichen Unterricht.',
    features: [
      '3-4 Teilnehmer',
      '75 Minuten pro Lektion',
      'Sehr persönlicher Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '75 min',
  },
  {
    id: 'gruppen-max4-90',
    name: 'Max. 4 Personen (3-4) - 90 Min.',
    category: 'gruppenkurse',
    price: '699',
    priceUnit: '/ Kurs',
    description: 'Sehr kleine Gruppe für intensiven, persönlichen Unterricht.',
    features: [
      '3-4 Teilnehmer',
      '90 Minuten pro Lektion',
      'Sehr persönlicher Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '90 min',
  },
  {
    id: 'gruppen-max4-120',
    name: 'Max. 4 Personen (3-4) - 120 Min.',
    category: 'gruppenkurse',
    price: '929',
    priceUnit: '/ Kurs',
    description: 'Sehr kleine Gruppe für intensiven, persönlichen Unterricht.',
    features: [
      '3-4 Teilnehmer',
      '120 Minuten pro Lektion',
      'Sehr persönlicher Unterricht',
      'Inklusive Lehrmaterial',
      'Zertifikat nach Abschluss',
    ],
    duration: '120 min',
  },
  // Einzelunterricht - Normaltarif
  {
    id: 'einzel-normal-45',
    name: 'Einzelunterricht Normaltarif - 45 Min.',
    category: 'einzelunterricht',
    price: '88',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht für maximale Flexibilität.',
    features: [
      '1-zu-1 Betreuung',
      '45 Minuten pro Lektion',
      'Flexible Terminwahl',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '45 min',
  },
  {
    id: 'einzel-normal-60',
    name: 'Einzelunterricht Normaltarif - 60 Min.',
    category: 'einzelunterricht',
    price: '104',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht für maximale Flexibilität.',
    features: [
      '1-zu-1 Betreuung',
      '60 Minuten pro Lektion',
      'Flexible Terminwahl',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '60 min',
    popular: true,
  },
  {
    id: 'einzel-normal-75',
    name: 'Einzelunterricht Normaltarif - 75 Min.',
    category: 'einzelunterricht',
    price: '125',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht für maximale Flexibilität.',
    features: [
      '1-zu-1 Betreuung',
      '75 Minuten pro Lektion',
      'Flexible Terminwahl',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '75 min',
  },
  {
    id: 'einzel-normal-90',
    name: 'Einzelunterricht Normaltarif - 90 Min.',
    category: 'einzelunterricht',
    price: '139',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht für maximale Flexibilität.',
    features: [
      '1-zu-1 Betreuung',
      '90 Minuten pro Lektion',
      'Flexible Terminwahl',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '90 min',
  },
  {
    id: 'einzel-normal-120',
    name: 'Einzelunterricht Normaltarif - 120 Min.',
    category: 'einzelunterricht',
    price: '179',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht für maximale Flexibilität.',
    features: [
      '1-zu-1 Betreuung',
      '120 Minuten pro Lektion',
      'Flexible Terminwahl',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '120 min',
  },
  // Einzelunterricht - Niedertarif
  {
    id: 'einzel-nieder-45',
    name: 'Einzelunterricht Niedertarif - 45 Min.',
    category: 'einzelunterricht',
    price: '79.50',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht zu günstigeren Zeiten.',
    features: [
      '1-zu-1 Betreuung',
      '45 Minuten pro Lektion',
      'Günstigere Zeiten (Vormittag/Nachmittag/Freitag/Samstag)',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '45 min',
  },
  {
    id: 'einzel-nieder-60',
    name: 'Einzelunterricht Niedertarif - 60 Min.',
    category: 'einzelunterricht',
    price: '96',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht zu günstigeren Zeiten.',
    features: [
      '1-zu-1 Betreuung',
      '60 Minuten pro Lektion',
      'Günstigere Zeiten (Vormittag/Nachmittag/Freitag/Samstag)',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '60 min',
  },
  {
    id: 'einzel-nieder-75',
    name: 'Einzelunterricht Niedertarif - 75 Min.',
    category: 'einzelunterricht',
    price: '118',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht zu günstigeren Zeiten.',
    features: [
      '1-zu-1 Betreuung',
      '75 Minuten pro Lektion',
      'Günstigere Zeiten (Vormittag/Nachmittag/Freitag/Samstag)',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '75 min',
  },
  {
    id: 'einzel-nieder-90',
    name: 'Einzelunterricht Niedertarif - 90 Min.',
    category: 'einzelunterricht',
    price: '135',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht zu günstigeren Zeiten.',
    features: [
      '1-zu-1 Betreuung',
      '90 Minuten pro Lektion',
      'Günstigere Zeiten (Vormittag/Nachmittag/Freitag/Samstag)',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '90 min',
  },
  {
    id: 'einzel-nieder-120',
    name: 'Einzelunterricht Niedertarif - 120 Min.',
    category: 'einzelunterricht',
    price: '169',
    priceUnit: '/ Lektion',
    description: 'Maßgeschneiderter 1-zu-1 Unterricht zu günstigeren Zeiten.',
    features: [
      '1-zu-1 Betreuung',
      '120 Minuten pro Lektion',
      'Günstigere Zeiten (Vormittag/Nachmittag/Freitag/Samstag)',
      'Individuelle Lerninhalte',
      'Kostenlose Probestunde',
    ],
    duration: '120 min',
  },
];

export default function PricingPage() {
  const [sortBy, setSortBy] = useState('price-asc');
  const [filterCategory, setFilterCategory] = useState('all');

  const sortedAndFilteredOffers = [...priceOffers]
    .filter(offer => filterCategory === 'all' || offer.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-desc':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'duration-asc':
          return parseInt(a.duration) - parseInt(b.duration);
        case 'duration-desc':
          return parseInt(b.duration) - parseInt(a.duration);
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

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

        {/* Filter and Sort Controls */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">
              Kategorie:
            </label>
            <select
              id="category-filter"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            >
              <option value="all">Alle Angebote</option>
              <option value="gruppenkurse">Gruppenkurse</option>
              <option value="einzelunterricht">Einzelunterricht</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4">
            <label htmlFor="sort-by" className="text-sm font-medium text-gray-700">
              Sortieren nach:
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            >
              <option value="price-asc">Preis aufsteigend</option>
              <option value="price-desc">Preis absteigend</option>
              <option value="duration-asc">Dauer aufsteigend</option>
              <option value="duration-desc">Dauer absteigend</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
            </select>
          </div>
        </div>

        {/* Price Offers Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedAndFilteredOffers.map((offer) => (
            <div
              key={offer.id}
              className={`rounded-3xl p-6 ring-1 ${
                offer.popular
                  ? 'bg-gray-900 ring-gray-900'
                  : 'bg-white ring-gray-200'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4 mb-4">
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    offer.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {offer.name}
                </h3>
                {offer.popular && (
                  <p className="rounded-full bg-primary-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-400">
                    Beliebt
                  </p>
                )}
              </div>
              
              <p
                className={`text-sm leading-6 mb-4 ${
                  offer.popular ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {offer.description}
              </p>
              
              <p className="flex items-baseline gap-x-1 mb-4">
                <span
                  className={`text-3xl font-bold tracking-tight ${
                    offer.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  CHF {offer.price}
                </span>
                <span
                  className={`text-sm font-semibold leading-6 ${
                    offer.popular ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {offer.priceUnit}
                </span>
              </p>
              
              <ul
                role="list"
                className={`space-y-2 text-sm leading-6 ${
                  offer.popular ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex gap-x-2">
                    <CheckCircle2
                      className={`h-4 w-4 flex-none ${
                        offer.popular ? 'text-white' : 'text-primary-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/kurse?format=${offer.category === 'gruppenkurse' ? 'group' : 'individual'}`}
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  offer.popular
                    ? 'bg-primary-500 text-white shadow-sm hover:bg-primary-400 focus-visible:outline-primary-500'
                    : 'text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300'
                }`}
              >
                Kurse ansehen
              </Link>
            </div>
          ))}
        </div>

        {/* Student Discount Info */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="bg-primary-50 rounded-lg p-6">
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

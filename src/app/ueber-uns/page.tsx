import Image from 'next/image';
import Link from 'next/link';
import { Heart, Lightbulb, Target, Users } from 'lucide-react';
import { team } from '@/data/team';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000"
            alt="Linguasud Sprachschule"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Über Linguasud
            </h1>
            <p className="text-lg leading-8 text-gray-300">
              Seit über 10 Jahren verbinden wir Menschen durch Sprache. Erfahren Sie mehr über unsere Geschichte, unsere Werte und das Team hinter Linguasud.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Unsere Philosophie</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sprache ist mehr als nur Worte
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Wir glauben daran, dass das Erlernen einer neuen Sprache der Schlüssel zu neuen Kulturen, Freundschaften und beruflichen Möglichkeiten ist. Unser Ziel ist es, diesen Prozess so lebendig und effektiv wie möglich zu gestalten.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Leidenschaft',
                  description: 'Wir lieben Sprachen und geben diese Begeisterung in jedem Kurs an unsere Schüler weiter.',
                  icon: Heart,
                },
                {
                  name: 'Innovation',
                  description: 'Wir nutzen moderne Lehrmethoden und passen uns kontinuierlich den Bedürfnissen unserer Schüler an.',
                  icon: Lightbulb,
                },
                {
                  name: 'Gemeinschaft',
                  description: 'Lernen in kleinen Gruppen schafft eine vertrauensvolle Atmosphäre und fördert den Austausch.',
                  icon: Users,
                },
              ].map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Preview */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unser Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lernen Sie unsere qualifizierten und motivierten Lehrkräfte kennen. Sie alle sind Muttersprachler und Experten auf ihrem Gebiet.
            </p>
          </div>
          
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.slice(0, 3).map((person) => (
              <li key={person.id}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.image}
                  alt={person.name}
                  width={400}
                  height={300}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-primary-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600 line-clamp-3">{person.bio}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-16 flex justify-center">
            <Link
              href="/ueber-uns/team"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Das gesamte Team ansehen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

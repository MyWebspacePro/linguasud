import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Clock, Calendar, Users, Target, ArrowLeft } from 'lucide-react';
import { courses } from '@/data/courses';

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <Link href="/kurse" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 mb-8">
            <ArrowLeft className="h-4 w-4" /> Zurück zur Übersicht
          </Link>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30">
                {course.level === 'all' ? 'Alle Niveaus' : `Niveau ${course.level}`}
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
                {course.format === 'group' ? 'Gruppenkurs' : course.format === 'online' ? 'Online-Kurs' : 'Einzelunterricht'}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              {course.title}
            </h1>
            <p className="text-lg leading-8 text-gray-300">
              {course.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Über diesen Kurs</h2>
              <div className="prose prose-lg text-gray-600">
                <p>{course.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Das erwartet Sie</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zielgruppe</h2>
              <div className="flex items-start gap-4 bg-primary-50 p-6 rounded-2xl">
                <Target className="h-8 w-8 text-primary-600 flex-shrink-0" />
                <p className="text-gray-700">{course.targetAudience}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kursdetails</h3>
              
              <dl className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <dt className="font-semibold text-gray-900">Dauer & Zeiten</dt>
                    <dd className="text-gray-600 mt-1">{course.duration}<br/>{course.schedule}</dd>
                  </div>
                </div>
                
                {course.startDates && (
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-gray-400 flex-shrink-0" />
                    <div>
                      <dt className="font-semibold text-gray-900">Nächste Starttermine</dt>
                      <dd className="text-gray-600 mt-1">
                        <ul className="list-disc pl-4 space-y-1">
                          {course.startDates.map((date, index) => (
                            <li key={index}>{new Date(date).toLocaleDateString('de-CH', { day: '2-digit', month: 'long', year: 'numeric' })}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </div>
                )}

                {course.maxParticipants && (
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-gray-400 flex-shrink-0" />
                    <div>
                      <dt className="font-semibold text-gray-900">Gruppengröße</dt>
                      <dd className="text-gray-600 mt-1">Max. {course.maxParticipants} Personen</dd>
                    </div>
                  </div>
                )}
              </dl>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">CHF {course.price}</span>
                  <span className="text-sm font-semibold text-gray-600">
                    {course.priceUnit === 'total' ? 'gesamt' : course.priceUnit === 'per_month' ? '/ Monat' : '/ Lektion'}
                  </span>
                </div>
              </div>

              <Link
                href={`/kontakt?kurs=${course.slug}`}
                className="block w-full rounded-md bg-primary-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                Jetzt anmelden
              </Link>
              <p className="text-xs text-center text-gray-500 mt-4">
                Unverbindliche Anfrage. Wir melden uns bei Ihnen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

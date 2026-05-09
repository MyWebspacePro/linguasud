import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock, Users, Calendar, MapPin } from 'lucide-react';
import { courses } from '@/data/courses';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: PageProps) {
  const course = courses.find((c) => c.slug === params.slug);

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
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <Link
              href="/kurse"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zur Kursübersicht
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              {course.title}
            </h1>
            <p className="text-lg leading-8 text-gray-300">
              {course.description}
            </p>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Course Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="h-6 w-6 mx-auto text-primary-600 mb-2" />
                <p className="text-sm text-gray-500">Dauer</p>
                <p className="font-semibold text-gray-900">{course.duration}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Users className="h-6 w-6 mx-auto text-primary-600 mb-2" />
                <p className="text-sm text-gray-500">Max. Teilnehmer</p>
                <p className="font-semibold text-gray-900">
                  {course.maxParticipants || 'Individuell'}
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Calendar className="h-6 w-6 mx-auto text-primary-600 mb-2" />
                <p className="text-sm text-gray-500">Zeitplan</p>
                <p className="font-semibold text-gray-900">{course.schedule}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <MapPin className="h-6 w-6 mx-auto text-primary-600 mb-2" />
                <p className="text-sm text-gray-500">Format</p>
                <p className="font-semibold text-gray-900 capitalize">{course.format}</p>
              </div>
            </div>

            {/* Course Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kursinhalte</h2>
              <ul className="space-y-3">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Zielgruppe</h2>
              <p className="text-gray-700">{course.targetAudience}</p>
            </div>

            {/* Start Dates */}
            {course.startDates && course.startDates.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nächste Kursstart-Termine</h2>
                <div className="flex flex-wrap gap-3">
                  {course.startDates.map((date, index) => {
                    const formattedDate = new Date(date).toLocaleDateString('de-CH', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    });
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium"
                      >
                        {formattedDate}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kursinformationen</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sprache:</span>
                  <span className="font-medium capitalize">{course.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Niveau:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium capitalize">{course.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dauer:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                  <span className="text-gray-600">CHF</span>
                  {course.priceUnit === 'total' && (
                    <span className="text-sm text-gray-500">pro Kurs</span>
                  )}
                  {course.priceUnit === 'per_lesson' && (
                    <span className="text-sm text-gray-500">pro Lektion</span>
                  )}
                  {course.priceUnit === 'per_month' && (
                    <span className="text-sm text-gray-500">pro Monat</span>
                  )}
                </div>
              </div>

              <Link
                href="/kontakt"
                className="block w-full rounded-md bg-primary-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                Jetzt anmelden
              </Link>

              <p className="mt-4 text-center text-sm text-gray-500">
                Oder rufen Sie uns an: +41 44 123 45 67
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all courses
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

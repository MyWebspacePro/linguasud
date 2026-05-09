'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe2, Users, UserCheck, BookOpen, Award, Building2, Mail, Phone } from 'lucide-react';
import { courses } from '@/data/courses';
import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import { ConsultationPopup } from '@/components/ui/ConsultationPopup';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, 'Vorname muss mindestens 2 Zeichen lang sein'),
  lastName: z.string().min(2, 'Nachname muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  language: z.string().min(1, 'Bitte wählen Sie eine Sprache'),
  level: z.string().min(1, 'Bitte wählen Sie ein Niveau'),
  lessonType: z.string().min(1, 'Bitte wählen Sie eine Unterrichtsform'),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const popularCourses = courses.filter(course => course.isPopular).slice(0, 3);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns bald bei Ihnen.');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
            alt="Studenten lernen zusammen"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Sprachen lernen, <br />
              <span className="text-primary-400">Welt entdecken.</span>
            </motion.h1>
            <motion.p
              className="text-lg leading-8 text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Linguasud ist Ihre Sprachschule für lebendiges Lernen. Mit muttersprachlichen Lehrkräften, kleinen Gruppen und modernen Methoden bringen wir Sie schnell an Ihr Ziel.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/kurse"
                className="rounded-md bg-primary-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors flex items-center justify-center gap-2"
              >
                Kurse entdecken <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="rounded-md bg-white/10 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-white/20 backdrop-blur-sm transition-colors"
              >
                Kostenlose Beratung
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Warum Linguasud?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Wir bieten mehr als nur Vokabeln und Grammatik. Bei uns tauchen Sie in die Sprache und Kultur ein.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Muttersprachler',
                description: 'Lernen Sie von qualifizierten Lehrkräften, die die Sprache leben.',
                icon: Users,
              },
              {
                title: 'Kleine Gruppen',
                description: 'Maximal 8-10 Teilnehmer für intensives und persönliches Lernen.',
                icon: Users,
              },
              {
                title: 'Praxisnah',
                description: 'Fokus auf Kommunikation und reale Alltagssituationen.',
                icon: BookOpen,
              },
              {
                title: 'Zertifiziert',
                description: 'Gezielte Vorbereitung auf anerkannte Sprachzertifikate.',
                icon: Award,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beliebte Kurse</h2>
              <p className="mt-4 text-lg text-gray-600">
                Starten Sie jetzt mit unseren gefragtesten Sprachkursen.
              </p>
            </div>
            <Link href="/kurse" className="hidden sm:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
              Alle Kurse ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                    {course.level}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{course.shortDescription}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-primary-600" />
                      {course.format === 'group' ? 'Gruppenkurs' : course.format === 'online' ? 'Online-Kurs' : 'Einzelunterricht'}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-primary-600" />
                      {course.duration}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="text-lg font-bold text-gray-900">
                      CHF {course.price}
                      <span className="text-sm font-normal text-gray-500">
                        {course.priceUnit === 'total' ? ' gesamt' : course.priceUnit === 'per_month' ? '/Monat' : '/Lektion'}
                      </span>
                    </div>
                    <Link
                      href={`/kurse/${course.slug}`}
                      className="text-primary-600 font-semibold hover:text-primary-700"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/kurse"
              className="block w-full rounded-md bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Alle Kurse ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Das sagen unsere Schüler</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Erfolgsgeschichten von Menschen, die mit uns eine neue Sprache gelernt haben.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || ''}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">&#34;{testimonial.quote}&#34;</p>
                <div className="mt-4 text-sm font-medium text-primary-600">
                  Kurs: {testimonial.course}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Kontaktieren Sie uns für eine kostenlose Einstufung und Beratung. Wir finden den perfekten Kurs für Sie.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/kurse" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors">
                Kurse durchstöbern <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontaktieren Sie uns</h2>
              <p className="text-lg text-gray-600 mb-8">
                Haben Sie Fragen zu unseren Kursen oder möchten Sie eine kostenlose Einstufung und Beratung vereinbaren? Wir sind gerne für Sie da und finden gemeinsam den perfekten Kurs für Ihre Bedürfnisse. Unser Team steht Ihnen jederzeit zur Verfügung. Sie erreichen uns telefonisch, per E-Mail oder über das Kontaktformular rechts.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8" id="kontakt-formular">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kostenlose Beratung anfordern</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      placeholder="Max"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      placeholder="Mustermann"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      placeholder="max.mustermann@email.ch"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      placeholder="+41 44 123 45 67"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                      Gewünschte Sprache *
                    </label>
                    <select
                      id="language"
                      {...register('language')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="deutsch">Deutsch</option>
                      <option value="englisch">Englisch</option>
                      <option value="franzoesisch">Französisch</option>
                      <option value="italienisch">Italienisch</option>
                      <option value="spanisch">Spanisch</option>
                    </select>
                    {errors.language && (
                      <p className="mt-1 text-sm text-red-600">{errors.language.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                      Niveau (Selbsteinschätzung) *
                    </label>
                    <select
                      id="level"
                      {...register('level')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="a1">A1 - Anfänger</option>
                      <option value="a2">A2 - Grundkenntnisse</option>
                      <option value="b1">B1 - Mittelstufe</option>
                      <option value="b2">B2 - Oberstufe</option>
                      <option value="c1">C1 - Fortgeschritten</option>
                    </select>
                    {errors.level && (
                      <p className="mt-1 text-sm text-red-600">{errors.level.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="lessonType" className="block text-sm font-medium text-gray-700">
                    Gewünschte Unterrichtsform *
                  </label>
                  <select
                    id="lessonType"
                    {...register('lessonType')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="gruppenunterricht">Gruppenunterricht</option>
                    <option value="minigruppe">Minigruppe (3-5 Personen)</option>
                    <option value="2er">2er-Gruppe</option>
                    <option value="einzel">Einzelunterricht</option>
                  </select>
                  {errors.lessonType && (
                    <p className="mt-1 text-sm text-red-600">{errors.lessonType.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setShowComments(!showComments)}
                    className="text-sm text-primary-600 hover:text-primary-500 flex items-center gap-1"
                  >
                    {showComments ? 'Bemerkungen ausblenden' : 'Bemerkungen hinzufügen'}
                    <svg className={`w-4 h-4 transition-transform ${showComments ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showComments && (
                    <div className="mt-2">
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                        Bemerkungen
                      </label>
                      <textarea
                        id="comments"
                        rows={3}
                        {...register('comments')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        placeholder="Weitere Informationen zu Ihren Anforderungen..."
                      />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Beratung anfordern'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Popup */}
      <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Building2, Mail, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, 'Vorname muss mindestens 2 Zeichen lang sein'),
  lastName: z.string().min(2, 'Nachname muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  courseInterest: z.string().optional(),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kontaktieren Sie uns</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Haben Sie Fragen zu unseren Kursen oder möchten Sie eine kostenlose Einstufung vereinbaren? Wir sind gerne für Sie da.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Adresse</span>
                  <Building2 className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  Musterstraße 123
                  <br />
                  8000 Zürich, Schweiz
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefon</span>
                  <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+41441234567">
                    +41 44 123 45 67
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">E-Mail</span>
                  <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:info@linguasud.ch">
                    info@linguasud.ch
                  </a>
                </dd>
              </div>
            </dl>
            
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Öffnungszeiten Sekretariat</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between"><span>Montag - Freitag:</span> <span>08:30 - 18:00 Uhr</span></li>
                <li className="flex justify-between"><span>Samstag:</span> <span>09:00 - 13:00 Uhr</span></li>
                <li className="flex justify-between"><span>Sonntag:</span> <span>Geschlossen</span></li>
              </ul>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Vorname
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nachname
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  E-Mail
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                  Telefonnummer <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="courseInterest" className="block text-sm font-semibold leading-6 text-gray-900">
                  Interesse an Kurs <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="mt-2.5">
                  <select
                    id="courseInterest"
                    {...register('courseInterest')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="german">Deutsch</option>
                    <option value="french">Französisch</option>
                    <option value="english">Englisch</option>
                    <option value="italian">Italienisch</option>
                    <option value="spanish">Spanisch</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nachricht
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </div>
            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md text-sm">
                Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

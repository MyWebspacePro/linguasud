'use client';

import { useState } from 'react';
import { X, Building2, Mail, Phone } from 'lucide-react';
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

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Kostenlose Beratung</h2>
            <p className="mt-2 text-gray-600">
              Füllen Sie das Formular aus und wir melden uns bei Ihnen.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <dl className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-gray-400" />
                <span>Musterstraße 123, 8000 Zürich</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+41441234567" className="hover:text-gray-900">
                  +41 44 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:info@linguasud.ch" className="hover:text-gray-900">
                  info@linguasud.ch
                </a>
              </div>
            </dl>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div>
                <label htmlFor="popup-firstName" className="block text-sm font-medium text-gray-700">
                  Vorname
                </label>
                <input
                  type="text"
                  id="popup-firstName"
                  {...register('firstName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>}
              </div>
              <div>
                <label htmlFor="popup-lastName" className="block text-sm font-medium text-gray-700">
                  Nachname
                </label>
                <input
                  type="text"
                  id="popup-lastName"
                  {...register('lastName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="popup-email"
                  {...register('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700">
                  Telefonnummer <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="popup-phone"
                  {...register('phone')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="popup-courseInterest" className="block text-sm font-medium text-gray-700">
                  Interesse an Kurs <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <select
                  id="popup-courseInterest"
                  {...register('courseInterest')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="german">Deutsch</option>
                  <option value="french">Französisch</option>
                  <option value="english">Englisch</option>
                  <option value="italian">Italienisch</option>
                  <option value="spanish">Spanisch</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700">
                  Nachricht
                </label>
                <textarea
                  id="popup-message"
                  rows={3}
                  {...register('message')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>
            </div>
            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
                Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

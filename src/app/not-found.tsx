'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-6 text-lg leading-7 text-gray-600">
          Entschuldigung, die von Ihnen gesuchte Seite konnte nicht gefunden werden. 
          Möglicherweise wurde sie verschoben, gelöscht oder existiert nicht.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors flex items-center gap-2"
          >
            <Home className="h-5 w-5" />
            Zurück zur Startseite
          </Link>
          <button
            onClick={() => window.history.back()}
            className="text-base font-semibold text-gray-900 hover:text-primary-600 flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Zurück zur vorherigen Seite
          </button>
        </div>
      </div>
    </div>
  );
}
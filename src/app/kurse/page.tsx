'use client';

import { useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Search, X, ChevronDown } from 'lucide-react';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Filter courses directly based on the current state
  const filteredCourses = courses.filter(course => {
    const matchesSearch = searchQuery === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLanguage = selectedLanguage === 'all' || course.language === selectedLanguage;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesLanguage && matchesLevel;
  });

  const handleReset = () => {
    setSearchQuery('');
    setSelectedLanguage('all');
    setSelectedLevel('all');
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Die Suche wird bereits durch onChange ausgelöst, Enter dient nur zur Bestätigung
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere Sprachkurse</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Finden Sie den perfekten Kurs für Ihr Sprachniveau und Ihre Ziele.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 bg-gray-50 p-6 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Field */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Kurse suchen... (Enter drücken)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="block w-full rounded-md border-0 py-3 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Language Filter */}
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm appearance-none bg-white cursor-pointer"
              >
                <option value="all">Alle Sprachen</option>
                <option value="german">Deutsch</option>
                <option value="french">Französisch</option>
                <option value="english">Englisch</option>
                <option value="italian">Italienisch</option>
                <option value="spanish">Spanisch</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            
            {/* Level Filter */}
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm appearance-none bg-white cursor-pointer"
              >
                <option value="all">Alle Niveaus</option>
                <option value="A1">A1 (Anfänger)</option>
                <option value="A2">A2 (Grundlagen)</option>
                <option value="B1">B1 (Mittelstufe)</option>
                <option value="B2">B2 (Gute Mittelstufe)</option>
                <option value="C1">C1 (Fortgeschritten)</option>
                <option value="C2">C2 (Exzellent)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          {/* Results Count and Reset */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {filteredCourses.length} Kurs{filteredCourses.length !== 1 ? 'e' : ''} gefunden
            </p>
            <button
              onClick={handleReset}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
              type="button"
            >
              <X className="h-4 w-4" />
              Filter zurücksetzen
            </button>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                    {course.level === 'all' ? 'Alle Niveaus' : course.level}
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
                      className="rounded-md bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-100 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900">Keine Kurse gefunden</h3>
            <p className="mt-2 text-gray-600">Bitte passen Sie Ihre Suchkriterien an.</p>
            <button
              onClick={handleReset}
              className="mt-4 text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1 mx-auto"
              type="button"
            >
              <X className="h-4 w-4" />
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

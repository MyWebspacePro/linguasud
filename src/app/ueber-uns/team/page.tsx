import Image from 'next/image';
import { team } from '@/data/team';
import { Mail, GraduationCap, Languages } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unser Team</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lernen Sie unsere qualifizierten und motivierten Lehrkräfte kennen. Sie alle sind Muttersprachler und Experten auf ihrem Gebiet.
          </p>
        </div>
        
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.id} className="bg-gray-50 rounded-3xl p-8 flex flex-col">
              <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm font-semibold leading-6 text-primary-600 mb-4">{person.role}</p>
              <p className="text-base leading-7 text-gray-600 mb-6 flex-grow">{person.bio}</p>
              
              <div className="space-y-4 mt-auto pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <Languages className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900">Sprachen</span>
                    <span className="block text-sm text-gray-600">{person.languages.join(', ')}</span>
                  </div>
                </div>
                
                {person.qualifications && (
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-gray-900">Qualifikationen</span>
                      <span className="block text-sm text-gray-600">{person.qualifications.join(', ')}</span>
                    </div>
                  </div>
                )}
                
                {person.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${person.email}`} className="text-sm text-primary-600 hover:text-primary-500">
                      {person.email}
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { team } from '@/data/team';

export default function TeamPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unser Team</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Lernen Sie unsere qualifizierten und motivierten Lehrkräfte kennen. 
            Sie alle sind Muttersprachler und Experten auf ihrem Gebiet.
          </p>
        </div>

        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.id} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/2]">
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                  src={person.image}
                  alt={person.name}
                  width={400}
                  height={300}
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-primary-600">{person.role}</p>
              
              {/* Languages */}
              <div className="mt-3 flex flex-wrap gap-2">
                {person.languages.map((language, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {language}
                  </span>
                ))}
              </div>

              {/* Qualifications */}
              {person.qualifications && person.qualifications.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Qualifikationen:</p>
                  <ul className="space-y-1">
                    {person.qualifications.map((qualification, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        • {qualification}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bio */}
              <p className="mt-4 text-sm text-gray-600 line-clamp-3">{person.bio}</p>

              {/* Email */}
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
                >
                  {person.email}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

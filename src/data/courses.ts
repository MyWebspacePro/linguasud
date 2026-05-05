import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'intensivkurs-deutsch-b2',
    title: 'Intensivkurs Deutsch B2',
    description: 'Dieser Intensivkurs bereitet Sie optimal auf die B2-Prüfung vor. In kleinen Gruppen trainieren wir alle Fertigkeiten: Lesen, Hören, Schreiben und Sprechen. Besonderer Fokus liegt auf der mündlichen Kommunikation und dem Verfassen von Texten für den Berufsalltag.',
    shortDescription: 'Kompakte Vorbereitung auf das B2-Zertifikat in kleinen Gruppen.',
    language: 'german',
    level: 'B2',
    format: 'group',
    duration: '8 Wochen',
    schedule: 'Mo-Fr, 09:00 - 12:15 Uhr',
    price: 850,
    priceUnit: 'total',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    features: [
      'Kleine Gruppen (max. 8 Personen)',
      'Muttersprachliche Lehrkräfte',
      'Inklusive Lehrmaterial',
      'Prüfungssimulation'
    ],
    targetAudience: 'Erwachsene, die für Beruf oder Studium ein B2-Zertifikat benötigen.',
    maxParticipants: 8,
    startDates: ['2024-06-01', '2024-08-01', '2024-10-01'],
    isPopular: true
  },
  {
    id: '2',
    slug: 'franzoesisch-konversation-c1',
    title: 'Französisch Konversation C1',
    description: 'Perfektionieren Sie Ihr Französisch in unserem Konversationskurs auf C1-Niveau. Wir diskutieren aktuelle Themen aus Politik, Kultur und Gesellschaft. Erweitern Sie Ihren Wortschatz und lernen Sie, sich fließend und nuanciert auszudrücken.',
    shortDescription: 'Fließend Französisch sprechen: Diskussionen auf hohem Niveau.',
    language: 'french',
    level: 'C1',
    format: 'group',
    duration: '12 Wochen',
    schedule: 'Di & Do, 18:30 - 20:00 Uhr',
    price: 420,
    priceUnit: 'total',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    features: [
      'Fokus auf freies Sprechen',
      'Aktuelle Themen',
      'Individuelles Feedback',
      'Kulturelle Einblicke'
    ],
    targetAudience: 'Fortgeschrittene, die ihre mündliche Ausdrucksweise verbessern möchten.',
    maxParticipants: 6,
    startDates: ['2024-06-15', '2024-09-15']
  },
  {
    id: '3',
    slug: 'business-english-online',
    title: 'Business English Online',
    description: 'Verbessern Sie Ihr Geschäftsenglisch flexibel von zu Hause aus. Dieser Kurs deckt wichtige Themen wie Meetings, Präsentationen, Verhandlungen und E-Mail-Korrespondenz ab. Praxisnahe Übungen bereiten Sie auf den internationalen Berufsalltag vor.',
    shortDescription: 'Flexibles Online-Training für den internationalen Berufsalltag.',
    language: 'english',
    level: 'B1',
    format: 'online',
    duration: '10 Wochen',
    schedule: 'Flexibel (1 Live-Session pro Woche)',
    price: 350,
    priceUnit: 'total',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    features: [
      'Flexible Zeiteinteilung',
      'Interaktive Lernplattform',
      'Wöchentliche Live-Sessions',
      'Fokus auf Business-Vokabular'
    ],
    targetAudience: 'Berufstätige, die ihr Englisch für den Job verbessern möchten.',
    isPopular: true
  },
  {
    id: '4',
    slug: 'italienisch-fuer-anfaenger',
    title: 'Italienisch für Anfänger (A1)',
    description: 'Tauchen Sie ein in die italienische Sprache und Kultur! In diesem Kurs lernen Sie die Grundlagen für Alltagssituationen: sich vorstellen, einkaufen, im Restaurant bestellen und nach dem Weg fragen. Der perfekte Start für Ihren nächsten Italien-Urlaub.',
    shortDescription: 'Der perfekte Einstieg in die italienische Sprache und Kultur.',
    language: 'italian',
    level: 'A1',
    format: 'group',
    duration: '10 Wochen',
    schedule: 'Mi, 18:00 - 20:30 Uhr',
    price: 380,
    priceUnit: 'total',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    features: [
      'Spielerischer Einstieg',
      'Praxisnahe Dialoge',
      'Kulturelle Tipps',
      'Entspannte Lernatmosphäre'
    ],
    targetAudience: 'Anfänger ohne Vorkenntnisse, die Italienisch lernen möchten.',
    maxParticipants: 10,
    startDates: ['2024-07-01', '2024-10-01']
  },
  {
    id: '5',
    slug: 'spanisch-einzelunterricht',
    title: 'Spanisch Einzelunterricht',
    description: 'Maßgeschneiderter Spanischunterricht, der sich ganz nach Ihren Bedürfnissen und Ihrem Tempo richtet. Egal ob Sie sich auf eine Reise vorbereiten, Spanisch für den Beruf brauchen oder einfach aus Interesse lernen – wir passen die Inhalte individuell an.',
    shortDescription: 'Individuelles Training für maximale Fortschritte.',
    language: 'spanish',
    level: 'all',
    format: 'individual',
    duration: 'Flexibel',
    schedule: 'Nach Vereinbarung',
    price: 85,
    priceUnit: 'per_lesson',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=800',
    features: [
      '100% individuelle Betreuung',
      'Flexible Terminvereinbarung',
      'Maßgeschneiderte Inhalte',
      'Schneller Lernfortschritt'
    ],
    targetAudience: 'Personen, die ein individuelles und flexibles Lernformat bevorzugen.'
  }
];

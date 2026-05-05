import { TeamMember } from '@/types';

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Elena Rossi',
    role: 'Schulleitung & Dozentin Italienisch',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Elena hat Linguasud vor 10 Jahren gegründet. Sie stammt aus Mailand und hat in Rom Sprachwissenschaften studiert. Ihre Leidenschaft ist es, die italienische Kultur durch die Sprache lebendig werden zu lassen.',
    languages: ['Italienisch (Muttersprache)', 'Deutsch', 'Englisch'],
    qualifications: ['M.A. Sprachwissenschaften', 'CELI Prüferin'],
    email: 'elena.rossi@linguasud.ch'
  },
  {
    id: '2',
    name: 'Marc Dubois',
    role: 'Dozent Französisch',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    bio: 'Marc kommt aus Lyon und unterrichtet seit 5 Jahren bei uns. Er ist spezialisiert auf Konversationskurse und Business-Französisch. Sein Unterricht ist bekannt für die entspannte und humorvolle Atmosphäre.',
    languages: ['Französisch (Muttersprache)', 'Deutsch', 'Spanisch'],
    qualifications: ['DALF C2', 'Zertifikat Erwachsenenbildung']
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Dozentin Englisch',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    bio: 'Sarah ist in London aufgewachsen und bringt echtes britisches Flair in ihre Kurse. Sie hat langjährige Erfahrung im Unterrichten von Business English und bereitet Schüler gezielt auf Cambridge-Zertifikate vor.',
    languages: ['Englisch (Muttersprache)', 'Deutsch'],
    qualifications: ['CELTA', 'B.A. English Literature']
  },
  {
    id: '4',
    name: 'Thomas Weber',
    role: 'Dozent Deutsch',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    bio: 'Thomas ist unser Experte für Deutsch als Fremdsprache. Er hat in Berlin und Zürich studiert und hilft unseren Schülern, sich schnell in der deutschsprachigen Umgebung zurechtzufinden und Prüfungen erfolgreich zu meistern.',
    languages: ['Deutsch (Muttersprache)', 'Englisch', 'Französisch'],
    qualifications: ['M.A. DaF/DaZ', 'Goethe-Zertifikat Prüfer']
  },
  {
    id: '5',
    name: 'Maria Garcia',
    role: 'Dozentin Spanisch',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=800',
    bio: 'Maria stammt aus Madrid und liebt es, ihre Begeisterung für die spanische Sprache und Kultur zu teilen. Ihre Kurse sind interaktiv und kommunikativ, mit einem starken Fokus auf die praktische Anwendung im Alltag.',
    languages: ['Spanisch (Muttersprache)', 'Deutsch', 'Englisch'],
    qualifications: ['DELE Prüferin', 'B.A. Pädagogik']
  }
];

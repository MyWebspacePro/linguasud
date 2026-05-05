export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  language: 'german' | 'french' | 'italian' | 'english' | 'spanish';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'all';
  format: 'group' | 'individual' | 'online' | 'hybrid';
  duration: string;
  schedule: string;
  price: number;
  priceUnit: 'per_lesson' | 'per_month' | 'total';
  image: string;
  features: string[];
  targetAudience: string;
  maxParticipants?: number;
  startDates?: string[];
  isPopular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  languages: string[];
  qualifications?: string[];
  email?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  image?: string;
  quote: string;
  course?: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  tags: string[];
  category: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  fullDetails: string[];
  icon: string; // Name of Lucide icon
  slug: string;
}

export interface Founder {
  name: string;
  role: string;
  oab: string;
  bio: string;
  specialties: string[];
  image: string; // SVG or unsplash reference
}

export interface Branch {
  name: string;
  leaders: string[];
  description: string;
  address: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company?: string;
  feedback: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Empresarial' | 'Trabalhista' | 'Previdenciário' | 'Família' | 'Consumidor' | 'Criminal' | 'Geral';
  date: string;
  readTime: string;
  image: string;
  author: string;
}

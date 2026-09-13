export interface BusinessInfo {
  name: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  address: string;
  rating: number;
  reviewCount: number;
  hours: string;
  website: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  source: string;
}

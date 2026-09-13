import { BusinessInfo, Feature, ProcessStep, Review, Service } from './types';

export const businessInfo: BusinessInfo = {
  name: "The Luxe Crown Hair Studio",
  phone: "099633 90405",
  whatsapp: "+91 99633 90405",
  whatsappNumber: "919963390405",
  address: "Plot No. 13A, Lane Number 1, NCL Enclave South, Caton Township, Kompally, Hyderabad, Secunderabad, Telangana 500067",
  rating: 4.8,
  reviewCount: 408,
  hours: "Open until 7:00 PM",
  website: "theluxecrownhairstudio.com"
};

export const defaultWhatsAppMessage = "Hi The Luxe Crown Hair Studio, I would like to know more about your hair replacement services and book a consultation.";

export const whyChooseUsFeatures: Feature[] = [
  {
    id: "personalized",
    title: "Personalized Approach",
    description: "Your hair solution should complement your appearance, preferences and lifestyle."
  },
  {
    id: "natural",
    title: "Natural-Looking Results",
    description: "Focus on creating a refined and natural-looking appearance."
  },
  {
    id: "private",
    title: "Private Experience",
    description: "Create an environment where clients can comfortably discuss their hair concerns and preferences."
  },
  {
    id: "premium",
    title: "Premium Attention",
    description: "Every consultation and service should feel thoughtful and personalized."
  }
];

export const solutions: Service[] = [
  {
    id: "replacement",
    title: "Hair Replacement",
    description: "Personalized hair replacement solutions designed to create a natural-looking appearance.",
    image: "/src/assets/images/regenerated_image_1789296572546.jpg"
  },
  {
    id: "transformation",
    title: "Hair Transformation",
    description: "Explore different styles, looks and solutions tailored to your desired appearance.",
    image: "/src/assets/images/regenerated_image_1789296571629.jpg"
  },
  {
    id: "consultation",
    title: "Personalized Consultation",
    description: "Discuss your preferences, concerns and desired outcome privately with the studio team.",
    image: "/src/assets/images/regenerated_image_1789296570558.jpg"
  },
  {
    id: "styling",
    title: "Styling & Maintenance",
    description: "Professional guidance to help you maintain your chosen hair solution and look.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000"
  }
];

export const experienceSteps: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Consultation",
    description: "Discuss your preferences, concerns and desired look."
  },
  {
    id: "step-2",
    number: "02",
    title: "Personalization",
    description: "Explore a solution that suits your appearance and lifestyle."
  },
  {
    id: "step-3",
    number: "03",
    title: "Transformation",
    description: "Experience your selected hair solution with professional attention to detail."
  },
  {
    id: "step-4",
    number: "04",
    title: "Ongoing Care",
    description: "Receive guidance on maintaining your look and hair solution."
  }
];

// Placeholders for real reviews
export const reviews: Review[] = [
  {
    id: "review-1",
    rating: 5,
    text: "Real customer review will be displayed here.",
    author: "Google Review",
    source: "Google"
  },
  {
    id: "review-2",
    rating: 5,
    text: "Real customer review will be displayed here.",
    author: "Google Review",
    source: "Google"
  },
  {
    id: "review-3",
    rating: 5,
    text: "Real customer review will be displayed here.",
    author: "Google Review",
    source: "Google"
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1600948836101-f9ff09c1f076?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1200",
];

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { Button } from './ui/Button';

import galleryImg1 from '@/assets/images/regenerated_image_1790324200284.jpg';
import galleryImg2 from '@/assets/images/regenerated_image_1790324216259.jpg';
import galleryImg3 from '@/assets/images/regenerated_image_1790324228889.jpg';
import galleryImg4 from '@/assets/images/regenerated_image_1790324232949.jpg';
import galleryImg5 from '@/assets/images/regenerated_image_1790324238872.jpg';
import galleryImg6 from '@/assets/images/regenerated_image_1790324244911.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'spa-wash',
    title: 'Deep Nourishing Hair Spa & Wash',
    category: 'Hair Spa',
    tag: 'Scalp & Hair Therapy',
    description: 'Relaxing luxury hair wash and therapeutic scalp conditioning in our private basin suites.',
    image: galleryImg1
  },
  {
    id: 'makeup-suite',
    title: 'Celebrity Makeup & Vanity Suite',
    category: 'Beauty & Glow',
    tag: 'Hollywood Mirror Studio',
    description: 'Bespoke beauty styling and refined makeup artistry under studio-grade ambient vanity lighting.',
    image: galleryImg2
  },
  {
    id: 'styling-mist',
    title: 'Precision Styling & Setting Mist',
    category: 'Hair Styling',
    tag: 'Artisan Finishing',
    description: 'Custom blowouts, textured wave sculpting, and long-lasting luminous hair protection.',
    image: galleryImg3
  },
  {
    id: 'consultation-plan',
    title: 'Private Transformation Consultation',
    category: 'Consultation',
    tag: '1-on-1 Personalized Plan',
    description: 'In-depth hair density evaluation and bespoke aesthetic roadmaps with senior specialists.',
    image: galleryImg4
  },
  {
    id: 'team-care',
    title: 'Master Styling Collaboration',
    category: 'Transformation',
    tag: 'Bespoke Hair Craft',
    description: 'Experienced master stylists ensuring every cut, patch, and system blends seamlessly.',
    image: galleryImg5
  },
  {
    id: 'color-swatch',
    title: 'Custom Color & Strand Matching',
    category: 'Color & Texture',
    tag: 'Natural Tonal Matching',
    description: 'Expert shade matching and texture selection using comprehensive salon sample swatch books.',
    image: galleryImg6
  }
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-12 md:py-16 bg-brand-ivory border-t border-brand-charcoal/5 overflow-hidden">
      <motion.div 
        className="w-full px-3 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="h-[1px] w-5 bg-brand-gold"></div>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-charcoal/60 flex items-center gap-1.5">
                <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                Studio Gallery
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">
              Craftsmanship & Luxury In Every Detail.
            </h2>
            <p className="font-serif italic text-sm md:text-base text-brand-charcoal/70 font-light">
              Explore our private suites, hair restoration procedures, luxury wash therapies, and styling sessions.
            </p>
          </div>
          <div>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="hidden md:inline-flex">
              Book Your Transformation
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative bg-white border border-brand-charcoal/10 overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-brand-charcoal/5 relative rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay hover action */}
                <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-brand-black/70 backdrop-blur-md border border-brand-gold/40 flex items-center justify-center text-brand-gold transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4.5 h-4.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Action Button */}
        <div className="mt-8 text-center md:hidden">
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="w-full">
            Book Your Transformation
          </Button>
        </div>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && galleryItems[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="relative max-w-4xl w-full bg-brand-charcoal border border-brand-gold/30 rounded-sm overflow-hidden text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Modal Image */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-black flex items-center justify-center">
                  <img
                    src={galleryItems[selectedImageIndex].image}
                    alt={galleryItems[selectedImageIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {galleryItems.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-brand-gold transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-brand-gold transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold">
                        {galleryItems[selectedImageIndex].category}
                      </span>
                      <span className="text-white/30">&bull;</span>
                      <span className="font-sans text-[10px] tracking-wider uppercase text-white/60">
                        {galleryItems[selectedImageIndex].tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-snug">
                      {galleryItems[selectedImageIndex].title}
                    </h3>

                    <p className="font-serif italic text-white/70 text-sm md:text-base leading-relaxed mb-6 font-light">
                      {galleryItems[selectedImageIndex].description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <Button
                      href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(`Hi The Luxe Crown, I saw the "${galleryItems[selectedImageIndex].title}" in your gallery and would like to book a consultation for this service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={MessageCircle}
                      className="w-full uppercase text-xs tracking-widest py-3.5"
                    >
                      Enquire About This Look
                    </Button>
                    <p className="text-[11px] text-center text-white/50">
                      Private consultations handled with complete discretion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

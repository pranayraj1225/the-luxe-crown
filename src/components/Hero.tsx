import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/image.png" 
          alt="Premium hair studio environment"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-30 w-full px-4 md:px-8 lg:px-12 pt-12 md:pt-24 pb-24">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/90 drop-shadow-sm">
              Luxury Hair Solutions &bull; Kompally
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] mb-8 text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
            Rediscover the confidence <br className="hidden md:block"/>
            <span className="text-white/90 italic">that comes with great hair.</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-lg md:text-xl text-white/90 mb-12 max-w-xl font-light leading-relaxed drop-shadow-sm">
            Personalized hair replacement solutions designed around your look, lifestyle and confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={ArrowRight}
            >
              Book a Private Consultation
            </Button>
            <Button 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={MessageCircle}
              iconPosition="left"
              className="!border-white/50 !text-white hover:!bg-white hover:!text-brand-charcoal"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-16 flex items-center gap-4">
            <div className="flex gap-1 drop-shadow-sm">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-sans text-sm text-white/90 drop-shadow-sm">
              <strong className="text-white font-semibold">{businessInfo.rating}</strong> • {businessInfo.reviewCount} Google Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

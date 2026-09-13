import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { ArrowRight, Crown } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'motion/react';

export function Hero() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium hair salon interior"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="relative z-30 w-full px-4 md:px-8 lg:px-12 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Logo Treatment */}
          <Crown className="w-12 h-12 md:w-16 md:h-16 text-brand-gold mb-6 opacity-90" strokeWidth={1.5} />
          <div className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-brand-gold mb-8">
            The Luxe Crown
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] mb-6 text-white tracking-tight">
            CROWN YOUR STYLE.
          </h1>
          
          {/* Subheading */}
          <h2 className="font-serif italic text-xl md:text-3xl text-brand-gold/90 mb-8 font-light">
            Premium Hair &bull; Beauty &bull; Grooming
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-sm md:text-base text-white/70 mb-12 max-w-2xl font-light leading-relaxed tracking-wide">
            Experience exceptional hair artistry, refined grooming, and an atmosphere designed for those who expect more.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Button 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 uppercase tracking-widest text-xs"
            >
              Book an Appointment
            </Button>
            <Button 
              href="#solutions"
              variant="outline"
              icon={ArrowRight}
              className="px-10 py-4 uppercase tracking-widest text-xs !border-white/30 !text-white hover:!bg-white hover:!text-brand-charcoal"
            >
              Discover Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

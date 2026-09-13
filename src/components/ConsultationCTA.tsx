import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

export function ConsultationCTA() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section className="py-24 md:py-32 bg-white border-y border-brand-charcoal/5 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-[1.1]">
          Not sure which solution is right for you?
        </h2>
        <p className="font-sans text-lg md:text-xl text-brand-charcoal/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Start with a private consultation. Tell us what you're looking for, and our team can help you explore the available options.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={ArrowRight}
            className="w-full sm:w-auto"
          >
            Book a Consultation
          </Button>
          <Button 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={MessageCircle}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}

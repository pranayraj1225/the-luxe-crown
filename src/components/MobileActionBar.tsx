import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { MessageCircle, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;
  const telUrl = `tel:${businessInfo.phone.replace(/\s/g, '')}`;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-charcoal/10 lg:hidden transition-transform duration-500 pb-safe ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex h-16">
        <a 
          href={telUrl}
          className="flex-1 flex items-center justify-center gap-2 border-r border-brand-charcoal/10 text-brand-charcoal hover:text-brand-gold transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="font-sans text-xs uppercase tracking-widest font-semibold">Call</span>
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 bg-brand-charcoal text-brand-ivory hover:bg-[#EAEADA] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="font-sans text-xs uppercase tracking-widest font-bold">Consultation</span>
        </a>
      </div>
    </div>
  );
}

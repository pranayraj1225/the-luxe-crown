import { businessInfo } from '@/data';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full border-b border-brand-charcoal/10 bg-brand-ivory transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center text-brand-gold">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="font-sans text-sm tracking-wide text-brand-charcoal/80">
              <strong className="text-brand-charcoal font-medium">{businessInfo.rating} Google Rating</strong>
            </span>
          </div>
          
          <div className="hidden md:block w-[1px] h-4 bg-brand-charcoal/20"></div>

          <div className="flex items-center gap-3">
            <span className="font-sans text-sm tracking-wide text-brand-charcoal/80">
              <strong className="text-brand-charcoal font-medium">{businessInfo.reviewCount}</strong> Reviews
            </span>
          </div>

          <div className="hidden md:block w-[1px] h-4 bg-brand-charcoal/20"></div>

          <div className="flex items-center gap-3">
            <span className="font-sans text-sm tracking-[0.1em] uppercase text-brand-charcoal/90">
              Hair Replacement Specialists
            </span>
          </div>

          <div className="hidden md:block w-[1px] h-4 bg-brand-charcoal/20"></div>

          <div className="flex items-center gap-3">
            <span className="font-sans text-sm tracking-[0.1em] uppercase text-brand-charcoal/90">
              Private Consultation
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

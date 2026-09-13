import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { Button } from './ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <footer className="bg-brand-ivory border-t border-brand-charcoal/10 pt-20 pb-12">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2 flex flex-col">
            <a href="#" className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-brand-charcoal leading-none mb-2 block">
              The Luxe Crown
            </a>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold mb-8 block">
              Hair Studio
            </span>
            <p className="font-sans text-brand-charcoal/60 font-light max-w-sm mb-8">
              A premium destination for personalized hair replacement and transformation solutions.
            </p>
            <div>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
                Book a Consultation
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal mb-6">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm font-light">
              <li><a href="#" className="text-brand-charcoal/60 hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-brand-charcoal/60 hover:text-brand-gold transition-colors">About</a></li>
              <li><a href="#solutions" className="text-brand-charcoal/60 hover:text-brand-gold transition-colors">Solutions</a></li>
              <li><a href="#experience" className="text-brand-charcoal/60 hover:text-brand-gold transition-colors">Experience</a></li>
              <li><a href="#gallery" className="text-brand-charcoal/60 hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-brand-charcoal/60 hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal mb-6">Contact</h4>
            <ul className="space-y-4 font-sans text-sm font-light text-brand-charcoal/60">
              <li>{businessInfo.phone}</li>
              <li>{businessInfo.address.split(',').slice(0, 2).join(',')}</li>
              <li>{businessInfo.website}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-brand-charcoal/40">
          <p>&copy; {currentYear} {businessInfo.name}. All rights reserved.</p>
          <p>Designed for premium hair transformations.</p>
        </div>

      </div>
    </footer>
  );
}

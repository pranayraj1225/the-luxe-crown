import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { Menu, X, Crown, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#solutions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-black/95 backdrop-blur-md py-3 lg:py-4' 
            : 'bg-transparent py-4.5 sm:py-5 lg:py-0'
        }`}
      >
        <div className="w-full px-5 sm:px-6 md:px-8 lg:px-[40px] lg:pt-[20px] lg:pb-4 flex items-center justify-between">
          {/* Logo: Left 40px, Top 20px on desktop */}
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[26px] lg:h-[26px] text-brand-gold shrink-0 drop-shadow-sm" strokeWidth={1.5} />
            <div className="flex flex-col">
              <a href="#" className="font-serif text-base sm:text-lg lg:text-[24px] tracking-wide uppercase leading-none text-white drop-shadow-sm font-medium">
                The Luxe Crown
              </a>
              <span className="font-sans text-[7.5px] sm:text-[8px] lg:text-[8.5px] tracking-[2px] uppercase text-brand-gold/80 mt-1 drop-shadow-sm">
                Hair Studio
              </span>
            </div>
          </div>

          {/* Desktop Nav & CTA: 10px font, ~28px gap, CTA 151x32px at right 40px, top 23px */}
          <div className="hidden lg:flex items-center gap-[28px]">
            <nav>
              <ul className="flex items-center gap-[28px]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className={`font-sans text-[10px] uppercase tracking-[0.15em] transition-colors duration-200 font-medium ${
                        isScrolled ? 'text-white/80 hover:text-brand-gold' : 'text-white/90 hover:text-brand-gold drop-shadow-sm'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[151px] h-[32px] flex items-center justify-center bg-brand-black/80 hover:bg-brand-gold hover:text-brand-black border border-brand-gold/60 text-white font-sans text-[9.5px] font-semibold tracking-wider uppercase transition-all duration-300 rounded-[2px] shadow-sm"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Right Action Area: Consultation Button + Gold Hamburger */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 border border-brand-gold/90 rounded-xl bg-brand-black/40 backdrop-blur-xs text-brand-gold hover:bg-brand-gold/10 transition-colors shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <div className="flex flex-col text-left leading-[1.05]">
                <span className="text-[7.5px] sm:text-[8px] tracking-wider uppercase font-semibold text-brand-gold">BOOK A</span>
                <span className="text-[7.5px] sm:text-[8px] tracking-wider uppercase font-semibold text-brand-gold">CONSULTATION</span>
              </div>
            </a>

            <button 
              className="p-1.5 flex items-center justify-center text-brand-gold cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-gold" />
              ) : (
                <div className="w-6 h-3.5 flex flex-col justify-between">
                  <span className="w-full h-[2px] bg-brand-gold rounded-full"></span>
                  <span className="w-full h-[2px] bg-brand-gold rounded-full"></span>
                  <span className="w-full h-[2px] bg-brand-gold rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 pt-20 pb-12">
          <ul className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-serif text-3xl text-white hover:text-brand-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

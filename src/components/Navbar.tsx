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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-black/95 backdrop-blur-md py-3.5 lg:py-4' 
            : 'bg-transparent py-4.5 sm:py-5 lg:py-6'
        }`}
      >
        <div className="w-full px-5 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Crown className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-gold shrink-0 drop-shadow-sm" strokeWidth={1.5} />
            <div className="flex flex-col">
              <a href="#" className="font-serif text-base sm:text-lg lg:text-3xl tracking-wide uppercase leading-tight text-white drop-shadow-sm font-medium">
                The Luxe Crown
              </a>
              <span className="font-sans text-[7px] sm:text-[8px] lg:text-[0.65rem] tracking-[0.25em] lg:tracking-[0.3em] uppercase text-brand-gold drop-shadow-sm">
                Hair Studio
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`font-sans text-xs uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-white/80 hover:text-brand-gold' : 'text-white/90 hover:text-white drop-shadow-sm'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="sm">
              Book a Consultation
            </Button>
          </nav>

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

import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { Menu, X, Crown } from 'lucide-react';
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
        <div className="w-full px-5 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 z-10">
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

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 z-10">
            <ul className="flex items-center gap-7 xl:gap-9">
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
          </nav>

          {/* Desktop Right CTA Button - Visible only after scrolling */}
          <div className={`hidden lg:flex items-center z-10 transition-all duration-500 ${
            isScrolled 
              ? 'opacity-100 pointer-events-auto translate-y-0' 
              : 'opacity-0 pointer-events-none -translate-y-2'
          }`}>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="sm">
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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

import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { Menu, X } from 'lucide-react';
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
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-ivory/90 backdrop-blur-md py-4 border-b border-brand-charcoal/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <a href="#" className={`font-serif text-2xl md:text-3xl tracking-wide uppercase leading-none transition-colors duration-500 ${isScrolled ? 'text-brand-charcoal' : 'text-white drop-shadow-sm'}`}>
              The Luxe Crown
            </a>
            <span className={`font-sans text-[0.65rem] tracking-[0.3em] uppercase mt-1 transition-colors duration-500 ${isScrolled ? 'text-brand-gold' : 'text-brand-gold drop-shadow-sm'}`}>
              Hair Studio
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`font-sans text-xs uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-brand-charcoal/80 hover:text-brand-gold' : 'text-white/90 hover:text-white drop-shadow-sm'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className={`w-[1px] h-4 ml-2 mr-2 transition-colors duration-500 ${isScrolled ? 'bg-brand-charcoal/20' : 'bg-white/30'}`}></div>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="sm">
              Book a Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 transition-colors duration-500 ${isScrolled ? 'text-brand-charcoal' : 'text-white drop-shadow-sm'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-ivory z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 pt-20 pb-12">
          <ul className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-serif text-3xl text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
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

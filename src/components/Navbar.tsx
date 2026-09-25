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
            ? 'bg-brand-black/95 backdrop-blur-md py-3 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-8 md:px-[40px] md:pt-[20px] md:pb-[10px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Crown className={`w-[26px] h-[26px] transition-colors duration-500 ${isScrolled ? 'text-brand-gold' : 'text-brand-gold drop-shadow-sm'}`} strokeWidth={1.5} />
            <div className="flex flex-col">
              <a href="#" className="font-serif text-xl sm:text-2xl md:text-[24px] tracking-wide uppercase leading-none text-white drop-shadow-sm">
                The Luxe Crown
              </a>
              <span className="font-sans text-[0.65rem] md:text-[8.5px] tracking-[2px] uppercase mt-1 text-brand-gold drop-shadow-sm">
                Hair Studio
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[28px]">
            <ul className="flex items-center gap-[28px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-sans text-[10px] uppercase tracking-wider text-white/90 hover:text-white transition-colors duration-300 drop-shadow-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[151px] h-[32px] text-[10px] font-sans tracking-wider uppercase font-semibold text-white bg-transparent border border-white/80 hover:bg-white hover:text-black transition-all flex items-center justify-center shrink-0"
            >
              Book a Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 transition-colors duration-500 text-white drop-shadow-sm"
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

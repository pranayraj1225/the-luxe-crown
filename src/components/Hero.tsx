import { Crown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full min-h-[580px] md:h-[600px] flex flex-col justify-start md:block overflow-hidden bg-brand-charcoal">
      {/* Background Image: Mobile (uploaded portrait) & Desktop (salon background with model on right) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img 
          src="/Gemini_Generated_Image_fryuelfryuelfryu.png" 
          alt="The Luxe Crown Hair Model"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/image.png';
          }}
          className="w-full h-full object-cover object-top md:hidden"
        />
        {/* Desktop Background: 100% width x 600px height with model face/hair on the right */}
        <img 
          src="/143.png" 
          alt="The Luxe Crown Hair Studio"
          className="hidden md:block w-full h-full object-cover object-right"
        />
      </div>

      {/* Hero Content Container: Left 65px, Top 110px, Width 620px, text-align: center */}
      <div className="relative z-30 w-full px-4 pt-24 pb-12 md:p-0 md:absolute md:top-[110px] md:left-[65px] md:w-[620px] flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="flex flex-col items-center text-center w-full"
        >
          {/* Crown icon: 48px × 48px */}
          <Crown className="w-9 h-9 sm:w-11 sm:h-11 md:w-[48px] md:h-[48px] text-brand-gold mb-2.5 md:mb-[14px] mx-auto drop-shadow-sm" strokeWidth={1.3} />
          
          {/* "The Luxe Crown": 11px font, 4px letter spacing, gold */}
          <div className="font-sans text-[10px] md:text-[11px] tracking-[3px] md:tracking-[4px] uppercase text-brand-gold font-medium mb-3 md:mb-[16px] text-center w-full drop-shadow-sm">
            The Luxe Crown
          </div>

          {/* "CROWN YOUR STYLE.": 64px font, two lines, line-height 0.95, letter-spacing -1.5px, max-width ~500px */}
          <h1 className="font-serif font-normal text-[36px] sm:text-[46px] md:text-[64px] leading-[1.02] md:leading-[0.95] tracking-[-0.8px] md:tracking-[-1.5px] text-white max-w-[500px] mx-auto text-center drop-shadow-md">
            <span className="block whitespace-nowrap">CROWN YOUR</span>
            <span className="block text-center">STYLE.</span>
          </h1>

          {/* "Premium Hair • Beauty • Grooming": 20px, italic serif, gold, margin-top ~27px */}
          <h2 className="font-serif italic text-sm sm:text-base md:text-[20px] text-brand-gold/90 font-light mt-3 md:mt-[27px] text-center w-full drop-shadow-sm">
            Premium Hair &bull; Beauty &bull; Grooming
          </h2>

          {/* Description: 13px, line-height 1.55, width ~390px, margin-top ~29px */}
          <p className="font-sans text-[11px] sm:text-xs md:text-[13px] text-white/80 font-light leading-[1.55] max-w-[320px] sm:max-w-[360px] md:max-w-[390px] mx-auto mt-3 md:mt-[29px] text-center drop-shadow-sm">
            Experience exceptional hair artistry, refined grooming, and an atmosphere designed for those who expect more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

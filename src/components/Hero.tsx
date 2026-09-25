import { Crown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-0 md:h-[600px] w-full flex flex-col justify-start md:block overflow-hidden">
      {/* Background Image: Mobile (portrait) & Desktop (wide with woman on the right) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile Background */}
        <img 
          src="/Gemini_Generated_Image_fryuelfryuelfryu.png" 
          alt="The Luxe Crown Hair Model"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/image.png';
          }}
          className="w-full h-full object-cover object-top md:hidden"
        />
        {/* Desktop Background: 100% width x 600px height with model positioned on the right */}
        <img 
          src="/143.png" 
          alt="The Luxe Crown Hair Model"
          className="hidden md:block w-full h-full object-cover object-right"
        />
      </div>

      {/* Hero Content Container: 620px width, left 65px, top 110px on desktop */}
      <div className="relative z-30 w-full px-4 sm:px-8 pt-24 sm:pt-28 pb-12 flex flex-col justify-start items-center md:pt-0 md:pb-0 md:px-0 md:absolute md:left-[65px] md:top-[110px] md:w-[620px]">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="flex flex-col items-center text-center w-full max-w-sm sm:max-w-md md:max-w-none"
        >
          {/* Crown Icon: 48px x 48px */}
          <Crown className="w-8 h-8 sm:w-10 sm:h-10 md:w-[48px] md:h-[48px] text-brand-gold opacity-95 mx-auto drop-shadow-sm" strokeWidth={1.5} />
          
          {/* "The Luxe Crown": 11px font, 4px letter spacing, gold */}
          <div className="font-sans text-[10px] sm:text-xs md:text-[11px] tracking-[0.25em] md:tracking-[4px] uppercase text-brand-gold mt-2 md:mt-[14px] mb-2.5 md:mb-[16px] text-center w-full drop-shadow-sm font-medium">
            The Luxe Crown
          </div>

          {/* "CROWN YOUR STYLE.": 64px font, two lines, line-height 0.95, letter-spacing -1.5px, max width ~500px */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[64px] leading-[1.08] md:leading-[0.95] md:tracking-[-1.5px] text-white font-normal inline-block text-center drop-shadow-md md:max-w-[500px] mx-auto">
            <span className="block whitespace-nowrap">CROWN YOUR</span>
            <span className="block text-center">STYLE.</span>
          </h1>
          
          {/* "Premium Hair • Beauty • Grooming": 20px, italic serif, gold, margin-top ~27px */}
          <h2 className="font-serif italic text-xs sm:text-sm md:text-[20px] text-brand-gold/95 mt-2.5 md:mt-[27px] font-light text-center w-full drop-shadow-sm">
            Premium Hair &bull; Beauty &bull; Grooming
          </h2>

          {/* Description: 13px, line-height 1.55, width ~390px, margin-top ~29px */}
          <p className="font-sans text-[11px] sm:text-xs md:text-[13px] md:leading-[1.55] text-white/80 mt-3 md:mt-[29px] max-w-xs sm:max-w-md md:max-w-none md:w-[390px] font-light tracking-wide text-center mx-auto drop-shadow-sm">
            Experience exceptional hair artistry, refined grooming, and an atmosphere designed for those who expect more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

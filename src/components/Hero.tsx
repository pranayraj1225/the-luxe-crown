import { Crown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start md:justify-center overflow-hidden">
      {/* Background Image: Mobile (uploaded portrait) & Desktop (salon interior) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img 
          src="/Gemini_Generated_Image_fryuelfryuelfryu.png" 
          alt="The Luxe Crown Hair Model"
          onError={(e) => {
            // Fallback to /image.png if needed
            (e.currentTarget as HTMLImageElement).src = '/image.png';
          }}
          className="w-full h-full object-cover object-top md:hidden"
        />
        {/* Desktop Background */}
        <img 
          src="/143.png" 
          alt="Premium hair salon interior"
          className="hidden md:block w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="relative z-30 w-full px-4 sm:px-8 lg:pl-[7%] lg:pr-10 flex flex-col justify-start md:justify-center items-center lg:items-start pt-24 sm:pt-28 pb-12 md:py-16 md:my-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="flex flex-col items-center text-center w-full max-w-sm sm:max-w-md lg:max-w-[42%] xl:max-w-[38%]"
        >
          {/* Logo Treatment */}
          <Crown className="w-7 h-7 sm:w-8 sm:h-8 md:w-11 md:h-11 text-brand-gold mb-2 md:mb-4 opacity-95 mx-auto drop-shadow-sm" strokeWidth={1.5} />
          <div className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-brand-gold mb-2.5 md:mb-4 text-center w-full drop-shadow-sm font-medium">
            The Luxe Crown
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] md:leading-[1.1] mb-2.5 md:mb-4 text-white tracking-tight inline-block text-center drop-shadow-md">
            <span className="block whitespace-nowrap">CROWN YOUR</span>
            <span className="block text-center">STYLE.</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="font-serif italic text-xs sm:text-sm md:text-lg lg:text-xl text-brand-gold/95 mb-2.5 md:mb-4 font-light text-center w-full drop-shadow-sm">
            Premium Hair &bull; Beauty &bull; Grooming
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-[11px] sm:text-xs md:text-sm text-white/80 max-w-xs sm:max-w-md font-light leading-relaxed tracking-wide text-center mx-auto drop-shadow-sm">
            Experience exceptional hair artistry, refined grooming, and an atmosphere designed for those who expect more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

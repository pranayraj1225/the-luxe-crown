import { experienceSteps } from '@/data';
import { motion } from 'motion/react';

export function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20 bg-brand-ivory">
      <motion.div 
        className="w-full px-3 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-brand-gold"></div>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-charcoal/60">
              The Process
            </span>
            <div className="h-[1px] w-6 bg-brand-gold"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Your journey starts here.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[22px] left-[10%] right-[10%] h-[1px] bg-brand-charcoal/10 z-0"></div>

          {experienceSteps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-brand-black border border-white/10 flex items-center justify-center font-serif text-lg text-brand-gold mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                {step.number}
              </div>
              <h3 className="font-serif text-xl mb-2.5 text-brand-charcoal">
                {step.title}
              </h3>
              <p className="font-serif italic text-sm text-brand-charcoal/60 font-light leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

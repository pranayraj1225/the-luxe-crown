import { experienceSteps } from '@/data';
import { motion } from 'motion/react';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-brand-ivory">
      <motion.div 
        className="w-full px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-brand-gold"></div>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal/60">
              The Process
            </span>
            <div className="h-[1px] w-8 bg-brand-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium">Your journey starts here.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-brand-charcoal/10 z-0"></div>

          {experienceSteps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-ivory border border-brand-gold/30 flex items-center justify-center font-serif text-xl text-brand-gold mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-brand-charcoal">
                {step.title}
              </h3>
              <p className="font-serif italic text-brand-charcoal/60 font-light leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

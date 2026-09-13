import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-ivory overflow-hidden">
      <motion.div 
        className="w-full px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury hair studio environment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-brand-gold/30 z-0 hidden md:block"></div>
            <div className="absolute top-12 -right-12 w-full h-full border border-brand-charcoal/5 z-0 hidden lg:block"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal/60">
                The Luxe Crown Experience
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] font-medium">
              A more confident version of you starts with the right hair solution.
            </h2>
            
            <div className="space-y-6 text-brand-charcoal/70 font-serif italic text-lg font-light leading-relaxed mb-12">
              <p>
                The Luxe Crown Hair Studio in Kompally offers personalized hair solutions with a focus on creating a natural-looking, confidence-enhancing experience for every client.
              </p>
              <p>
                We believe that premium attention to detail, comfort, and privacy are essential to the transformation process. Every consultation is handled with the utmost discretion and care.
              </p>
            </div>

            <Button href="#solutions" variant="outline" icon={ArrowRight}>
              Discover The Studio
            </Button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import aboutImage from '@/assets/images/regenerated_image_1790325817252.jpg';

export function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-brand-ivory overflow-hidden">
      <motion.div 
        className="w-full px-3 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="aspect-[4/5] max-h-[460px] overflow-hidden rounded-sm relative z-10 mx-auto">
              <img 
                src={aboutImage} 
                alt="Luxury hair studio environment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-gold/30 z-0 hidden md:block"></div>
            <div className="absolute top-8 -right-8 w-full h-full border border-brand-charcoal/5 z-0 hidden lg:block"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] w-6 bg-brand-gold"></div>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-charcoal/60">
                The Luxe Crown Experience
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5 leading-[1.2] font-medium">
              A more confident version of you starts with the right hair solution.
            </h2>
            
            <div className="space-y-4 text-brand-charcoal/70 font-serif italic text-base leading-relaxed mb-8">
              <p>
                The Luxe Crown Hair Studio in Kompally offers personalized hair solutions with a focus on creating a natural-looking, confidence-enhancing experience for every client.
              </p>
              <p>
                We believe that premium attention to detail, comfort, and privacy are essential to the transformation process. Every consultation is handled with the utmost discretion and care.
              </p>
            </div>

            <Button href="#solutions" variant="outline" icon={ArrowRight} size="sm">
              Discover The Studio
            </Button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

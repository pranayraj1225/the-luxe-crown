import { businessInfo, defaultWhatsAppMessage, solutions } from '@/data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Solutions() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section id="solutions" className="py-24 md:py-32 bg-brand-ivory">
      <motion.div 
        className="w-full px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal/60">
                Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Hair solutions designed around you.</h2>
            <p className="font-serif italic text-lg text-brand-charcoal/70 font-light">
              Explore personalized options and speak with our team to find the approach that suits your needs.
            </p>
          </div>
          <div>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="hidden md:inline-flex">
              Discuss Your Hair Needs
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {solutions.map((service, index) => (
            <div key={service.id} className="group flex flex-col">
              {service.image && (
                <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-brand-charcoal/5 mb-8 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              )}
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold font-medium">0{index + 1}</span>
                  <div className="h-[1px] flex-grow bg-brand-charcoal/10 transition-colors duration-500 group-hover:bg-brand-gold/30"></div>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-brand-charcoal leading-snug">
                  {service.title}
                </h3>
                <p className="font-serif italic text-brand-charcoal/70 font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                   <a 
                     href={whatsappUrl} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="inline-flex items-center font-sans text-xs tracking-widest uppercase text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
                   >
                     Learn More
                     <ArrowRight className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full">
            Discuss Your Hair Needs
          </Button>
        </div>

      </motion.div>
    </section>
  );
}

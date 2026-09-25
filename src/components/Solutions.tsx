import { businessInfo, defaultWhatsAppMessage, solutions } from '@/data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Solutions() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section id="solutions" className="py-14 md:py-20 bg-brand-ivory">
      <motion.div 
        className="w-full px-3 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-brand-gold"></div>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-charcoal/60">
                Services
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3">Hair solutions designed around you.</h2>
            <p className="font-serif italic text-base text-brand-charcoal/70 font-light">
              Explore personalized options and speak with our team to find the approach that suits your needs.
            </p>
          </div>
          <div>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="hidden md:inline-flex">
              Discuss Your Hair Needs
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((service, index) => (
            <div key={service.id} className="group flex flex-col">
              {service.image && (
                <div className="w-full aspect-[16/10] md:aspect-[4/3] max-h-52 overflow-hidden rounded-sm bg-brand-charcoal/5 mb-4 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              )}
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold font-medium">0{index + 1}</span>
                  <div className="h-[1px] flex-grow bg-brand-charcoal/10 transition-colors duration-500 group-hover:bg-brand-gold/30"></div>
                </div>
                <h3 className="font-serif text-xl lg:text-2xl mb-2.5 text-brand-charcoal leading-snug">
                  {service.title}
                </h3>
                <p className="font-serif italic text-sm text-brand-charcoal/70 font-light leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                   <a 
                     href={whatsappUrl} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
                   >
                     Learn More
                     <ArrowRight className="w-3 h-3 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="w-full">
            Discuss Your Hair Needs
          </Button>
        </div>

      </motion.div>
    </section>
  );
}

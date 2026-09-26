import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { Button } from './ui/Button';
import { motion } from 'motion/react';

export function Contact() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;
  const telUrl = `tel:${businessInfo.phone.replace(/\s/g, '')}`;

  return (
    <section id="contact" className="py-14 md:py-20 bg-brand-ivory border-t border-brand-charcoal/5 scroll-mt-20 relative">
      <div id="booking" className="absolute -top-20" />
      <motion.div 
        className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 leading-[1.2]">
              Let's talk about your next look.
            </h2>
            <p className="font-sans text-sm md:text-base text-brand-charcoal/70 font-light mb-8 max-w-md">
              Whether you have questions about our services or want to schedule a private consultation, we are here to help.
            </p>
            
            <div className="space-y-6 font-sans">
              <div>
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-brand-charcoal/50 mb-1">WhatsApp</h4>
                <a href={whatsappUrl} className="text-lg md:text-xl text-brand-charcoal hover:text-brand-gold transition-colors block">
                  {businessInfo.whatsapp}
                </a>
              </div>
              
              <div>
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-brand-charcoal/50 mb-1">Phone</h4>
                <a href={telUrl} className="text-lg md:text-xl text-brand-charcoal hover:text-brand-gold transition-colors block">
                  {businessInfo.phone}
                </a>
              </div>
              
              <div>
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-brand-charcoal/50 mb-1">Location</h4>
                <a 
                  href={businessInfo.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg text-brand-charcoal hover:text-brand-gold transition-colors block font-light"
                >
                  Nagole, Hyderabad
                </a>
                <p className="text-xs text-brand-charcoal/60 mt-0.5">{businessInfo.hours}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 border border-brand-charcoal/5 shadow-sm">
            <h3 className="font-serif text-2xl mb-5">Request Consultation</h3>
            
            <form className="space-y-4 font-sans" onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappUrl, '_blank');
            }}>
              <div>
                <label htmlFor="name" className="block text-[11px] tracking-widest uppercase text-brand-charcoal/60 mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-brand-ivory border-b border-brand-charcoal/20 px-3.5 py-2 text-sm text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[11px] tracking-widest uppercase text-brand-charcoal/60 mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-brand-ivory border-b border-brand-charcoal/20 px-3.5 py-2 text-sm text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[11px] tracking-widest uppercase text-brand-charcoal/60 mb-1.5">What are you looking for?</label>
                <select 
                  id="service" 
                  className="w-full bg-brand-ivory border-b border-brand-charcoal/20 px-3.5 py-2 text-sm text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors rounded-none appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="replacement">Hair replacement</option>
                  <option value="transformation">Hair transformation</option>
                  <option value="styling">Styling</option>
                  <option value="general">General enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-2">
                <Button type="submit" size="sm" className="w-full">
                  Request via WhatsApp
                </Button>
                <p className="text-center text-[11px] text-brand-charcoal/40 mt-3">
                  This form will connect you to our WhatsApp with your details.
                </p>
              </div>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

import { businessInfo, defaultWhatsAppMessage } from '@/data';
import { Button } from './ui/Button';
import { motion } from 'motion/react';

export function Contact() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;
  const telUrl = `tel:${businessInfo.phone.replace(/\s/g, '')}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-ivory border-t border-brand-charcoal/5">
      <motion.div 
        className="w-full px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-[1.1]">
              Let's talk about your next look.
            </h2>
            <p className="font-sans text-lg text-brand-charcoal/70 font-light mb-12 max-w-md">
              Whether you have questions about our services or want to schedule a private consultation, we are here to help.
            </p>
            
            <div className="space-y-8 font-sans">
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-brand-charcoal/50 mb-2">WhatsApp</h4>
                <a href={whatsappUrl} className="text-xl md:text-2xl text-brand-charcoal hover:text-brand-gold transition-colors block">
                  {businessInfo.whatsapp}
                </a>
              </div>
              
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-brand-charcoal/50 mb-2">Phone</h4>
                <a href={telUrl} className="text-xl md:text-2xl text-brand-charcoal hover:text-brand-gold transition-colors block">
                  {businessInfo.phone}
                </a>
              </div>
              
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-brand-charcoal/50 mb-2">Location</h4>
                <p className="text-xl text-brand-charcoal font-light">Kompally, Hyderabad</p>
                <p className="text-sm text-brand-charcoal/60 mt-1">{businessInfo.hours}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 border border-brand-charcoal/5">
            <h3 className="font-serif text-3xl mb-8">Request Consultation</h3>
            
            <form className="space-y-6 font-sans" onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappUrl, '_blank');
            }}>
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-brand-charcoal/60 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-brand-ivory border-b border-brand-charcoal/20 px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-brand-charcoal/60 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-brand-ivory border-b border-brand-charcoal/20 px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs tracking-widest uppercase text-brand-charcoal/60 mb-2">What are you looking for?</label>
                <select 
                  id="service" 
                  className="w-full bg-brand-ivory border-b border-brand-charcoal/20 px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors rounded-none appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="replacement">Hair replacement</option>
                  <option value="transformation">Hair transformation</option>
                  <option value="styling">Styling</option>
                  <option value="general">General enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">
                  Request via WhatsApp
                </Button>
                <p className="text-center text-xs text-brand-charcoal/40 mt-4">
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

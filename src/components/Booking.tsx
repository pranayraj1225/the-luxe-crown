import { useState } from 'react';
import { motion } from 'motion/react';
import { businessInfo } from '@/data';
import { Button } from './ui/Button';

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Replacement',
    date: '',
    time: 'Morning',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi The Luxe Crown Hair Studio,\n\nI would like to request an appointment:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Preferred Date:* ${formData.date}\n*Preferred Time:* ${formData.time}\n\nPlease let me know if this works.`;
    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <motion.div 
        className="w-full px-4 md:px-8 lg:px-12 max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold">
                Reservations
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Request an <br/>
              <span className="italic font-light text-brand-gold/90">Appointment.</span>
            </h2>
            
            <p className="font-sans text-white/70 leading-relaxed font-light mb-10 max-w-md">
              Fill out the form with your preferred details, and our team will get in touch directly via WhatsApp to confirm your booking and ensure a personalized experience.
            </p>
          </div>

          <div className="bg-brand-black p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
             
             <form onSubmit={handleSubmit} className="flex flex-col gap-8">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-2">
                   <label htmlFor="name" className="font-sans text-[10px] tracking-widest uppercase text-white/50">Full Name</label>
                   <input 
                     type="text" 
                     id="name"
                     name="name"
                     required
                     value={formData.name}
                     onChange={handleChange}
                     className="bg-transparent border-b border-white/20 py-2 text-white font-serif text-lg focus:outline-none focus:border-brand-gold transition-colors duration-300"
                     placeholder="Your name"
                   />
                 </div>
                 
                 <div className="flex flex-col gap-2">
                   <label htmlFor="phone" className="font-sans text-[10px] tracking-widest uppercase text-white/50">Phone Number</label>
                   <input 
                     type="tel" 
                     id="phone"
                     name="phone"
                     required
                     value={formData.phone}
                     onChange={handleChange}
                     className="bg-transparent border-b border-white/20 py-2 text-white font-serif text-lg focus:outline-none focus:border-brand-gold transition-colors duration-300"
                     placeholder="Your number"
                   />
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                 <label htmlFor="service" className="font-sans text-[10px] tracking-widest uppercase text-white/50">Service of Interest</label>
                 <select 
                   id="service"
                   name="service"
                   required
                   value={formData.service}
                   onChange={handleChange}
                   className="bg-brand-black border-b border-white/20 py-2 text-white font-serif text-lg focus:outline-none focus:border-brand-gold transition-colors duration-300 appearance-none rounded-none cursor-pointer"
                 >
                   <option value="Hair Replacement">Hair Replacement</option>
                   <option value="Hair Transformation">Hair Transformation</option>
                   <option value="Consultation">Personalized Consultation</option>
                   <option value="Styling & Maintenance">Styling & Maintenance</option>
                 </select>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-2">
                   <label htmlFor="date" className="font-sans text-[10px] tracking-widest uppercase text-white/50">Preferred Date</label>
                   <input 
                     type="date" 
                     id="date"
                     name="date"
                     required
                     value={formData.date}
                     onChange={handleChange}
                     className="bg-transparent border-b border-white/20 py-2 text-white/80 font-serif text-lg focus:outline-none focus:border-brand-gold transition-colors duration-300 uppercase [color-scheme:dark]"
                   />
                 </div>

                 <div className="flex flex-col gap-2">
                   <label htmlFor="time" className="font-sans text-[10px] tracking-widest uppercase text-white/50">Preferred Time</label>
                   <select 
                     id="time"
                     name="time"
                     required
                     value={formData.time}
                     onChange={handleChange}
                     className="bg-brand-black border-b border-white/20 py-2 text-white font-serif text-lg focus:outline-none focus:border-brand-gold transition-colors duration-300 appearance-none rounded-none cursor-pointer"
                   >
                     <option value="Morning">Morning</option>
                     <option value="Afternoon">Afternoon</option>
                     <option value="Evening">Evening</option>
                   </select>
                 </div>
               </div>

               <div className="mt-4">
                 <Button type="submit" className="w-full justify-center">
                   Request Booking via WhatsApp
                 </Button>
               </div>
               
             </form>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}

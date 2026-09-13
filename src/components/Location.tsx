import { businessInfo } from '@/data';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Location() {
  // Simple map search query URL for the exact address
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`;

  return (
    <section className="py-24 bg-brand-ivory">
      <motion.div 
        className="w-full px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal/60">
                Location
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium mb-8">Visit The Luxe Crown</h2>
            
            <div className="space-y-6 font-sans text-brand-charcoal/80 font-light mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                <p className="leading-relaxed max-w-sm">
                  {businessInfo.address}
                </p>
              </div>
              
              <div className="pl-10">
                <p className="mb-2">Phone: <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="text-brand-charcoal hover:text-brand-gold transition-colors">{businessInfo.phone}</a></p>
                <p>Hours: {businessInfo.hours}</p>
              </div>
            </div>
            
            <Button 
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Get Directions
            </Button>
          </div>

          <div className="aspect-square md:aspect-[4/3] bg-white border border-brand-charcoal/10 p-2 relative">
             <iframe 
                title="Google Maps Location"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${encodeURIComponent(businessInfo.address)}`} 
                className="w-full h-full grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

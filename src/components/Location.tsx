import { businessInfo } from '@/data';
import { ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Location() {
  const mapUrl = businessInfo.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const embedUrl = apiKey 
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(businessInfo.address)}`
    : `https://maps.google.com/maps?q=17.3773892,78.5594036+(The+Luxe+Crown+Hair+Studio+%E2%80%93+Nagole)&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

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
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <MapPin className="w-6 h-6 text-brand-black fill-brand-black shrink-0 mt-1 group-hover:text-brand-gold group-hover:fill-brand-gold transition-colors" />
                <div>
                  <p className="leading-relaxed max-w-sm group-hover:text-brand-gold transition-colors">
                    {businessInfo.address}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-brand-gold/90 font-medium tracking-wide mt-1">
                    View on Google Maps <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
              
              <div className="pl-10">
                <p className="mb-2">Phone: <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="text-brand-charcoal hover:text-brand-gold transition-colors">{businessInfo.phone}</a></p>
                <p>Hours: {businessInfo.hours}</p>
              </div>
            </div>
            
            <Button 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={ExternalLink}
            >
              Get Directions
            </Button>
          </div>

          <div className="aspect-square md:aspect-[4/3] bg-white border border-brand-charcoal/10 relative rounded-lg overflow-hidden group shadow-md">
            <iframe 
              title="The Luxe Crown Hair Studio – Nagole Google Maps Location"
              src={embedUrl} 
              className="w-full h-full border-0 transition-all duration-300"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Direct Link Bottom Badge */}
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-brand-charcoal text-white text-xs px-3.5 py-2 rounded shadow-lg flex items-center gap-2 hover:bg-brand-black hover:text-brand-gold transition-all duration-300 pointer-events-auto"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

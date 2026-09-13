import { galleryImages } from '@/data';

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-ivory">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Inside The Luxe Crown</h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-8"></div>
          <ul className="flex flex-wrap justify-center gap-6 font-sans text-xs tracking-widest uppercase text-brand-charcoal/60">
            <li>Studio</li>
            <li>&bull;</li>
            <li>Hair</li>
            <li>&bull;</li>
            <li>Transformations</li>
            <li>&bull;</li>
            <li>Styling</li>
          </ul>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer">
              <div className="absolute inset-0 bg-brand-ivory/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={src} 
                alt={`Luxe Crown Studio Image ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

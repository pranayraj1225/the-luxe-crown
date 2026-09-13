export function TransformationGallery() {
  return (
    <section className="py-24 bg-white border-y border-brand-charcoal/5">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">See the difference confidence can make.</h2>
          <p className="font-sans text-lg text-brand-charcoal/60 font-light max-w-2xl mx-auto">
            Real transformations from our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Placeholder 1 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/3] bg-brand-ivory border border-brand-charcoal/10 mb-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              <div className="text-center z-10 p-6">
                <span className="block font-sans text-xs tracking-widest uppercase text-brand-charcoal/40 mb-2">Before & After</span>
                <p className="font-serif text-xl text-brand-charcoal/60">Transformation images will be displayed here.</p>
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal/50">Before</span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold">After</span>
            </div>
          </div>

          {/* Placeholder 2 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/3] bg-brand-ivory border border-brand-charcoal/10 mb-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              <div className="text-center z-10 p-6">
                <span className="block font-sans text-xs tracking-widest uppercase text-brand-charcoal/40 mb-2">Before & After</span>
                <p className="font-serif text-xl text-brand-charcoal/60">Transformation images will be displayed here.</p>
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal/50">Before</span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold">After</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

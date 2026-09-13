import { whyChooseUsFeatures } from '@/data';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-y border-brand-charcoal/5">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Why choose The Luxe Crown?</h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {whyChooseUsFeatures.map((feature, index) => (
            <div key={feature.id} className="group flex flex-col relative">
              <div className="font-serif text-5xl text-brand-charcoal/10 mb-6 font-light transition-colors duration-300 group-hover:text-brand-gold/30">
                0{index + 1}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-brand-charcoal">
                {feature.title}
              </h3>
              <p className="font-serif italic text-brand-charcoal/60 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

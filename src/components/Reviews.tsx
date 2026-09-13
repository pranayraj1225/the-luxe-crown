import { businessInfo, reviews } from '@/data';
import { Star } from 'lucide-react';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-white border-y border-brand-charcoal/5">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-medium mb-8">Trusted by hundreds of clients.</h2>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <div className="font-serif text-4xl text-brand-charcoal">{businessInfo.rating} / 5</div>
            <div className="font-sans text-sm tracking-widest uppercase text-brand-charcoal/60">
              {businessInfo.reviewCount} Google Reviews
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-brand-ivory border border-brand-charcoal/5 p-8 md:p-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="font-sans text-lg text-brand-charcoal/80 font-light leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
              </div>
              <div>
                <div className="h-[1px] w-full bg-brand-charcoal/10 mb-4"></div>
                <p className="font-sans text-sm font-semibold text-brand-charcoal">{review.author}</p>
                <p className="font-sans text-xs text-brand-charcoal/50 uppercase tracking-widest mt-1">{review.source}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

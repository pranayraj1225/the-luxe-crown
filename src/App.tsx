import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { Location } from '@/components/Location';
import { MobileActionBar } from '@/components/MobileActionBar';
import { Navbar } from '@/components/Navbar';
import { Solutions } from '@/components/Solutions';
import { TrustBar } from '@/components/TrustBar';

export default function App() {
  return (
    <div className="bg-brand-ivory min-h-screen text-brand-charcoal font-sans selection:bg-brand-gold selection:text-brand-ivory">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Solutions />
        <Gallery />
        <Experience />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

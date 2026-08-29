import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Services />
      <Fleet />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
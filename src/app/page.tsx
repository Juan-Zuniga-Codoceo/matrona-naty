import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Pricing from '@/components/sections/pricing';
import Schedule from '@/components/sections/schedule';
import Contact from '@/components/sections/contact';
import Navbar from '@/components/layout/navbar';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Schedule />
      <Contact />
    </main>
  );
}
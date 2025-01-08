import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Pricing from '@/components/sections/pricing';

import Contact from '@/components/sections/contact';
import Navbar from '@/components/layout/navbar';
import TestimonialsSection from '@/components/sections/testimonials';
import Download from '@/components/sections/DownloadableResources';
import Footer from '@/components/layout/footer'
import Universities from '@/components/sections/universities';
import ScrollButton from '@/components/layout/scrollButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero /> 
      <About />
      <Universities /> 
      <Pricing /> 
      <TestimonialsSection /> 
      <Download /> 
     
      <Contact />
      <Footer />
      <ScrollButton />
    </main>
  );
 }
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Pricing from '@/components/sections/pricing';
import Schedule from '@/components/sections/schedule';
import Contact from '@/components/sections/contact';
import Navbar from '@/components/layout/navbar';
import TestimonialsSection from '@/components/sections/testimonials';
import Download from '@/components/sections/DownloadableResources';
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <TestimonialsSection />
      <Schedule />
      <Download />
      <Contact />
      <Footer />
    </main>
  );
}
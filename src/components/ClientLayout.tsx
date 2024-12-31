// src/components/ClientLayout.tsx
'use client';

import React from 'react';
import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Pricing from '@/components/sections/pricing';
import TestimonialsSection from '@/components/sections/testimonials';
import Schedule from '@/components/sections/schedule';
import Download from '@/components/sections/DownloadableResources';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

const ClientLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <TestimonialsSection />
      <Schedule />
      <Download />
      <Contact />
      <Footer />
    </>
  );
};

export default ClientLayout;
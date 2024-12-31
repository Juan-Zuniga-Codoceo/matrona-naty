'use client';

import React from 'react';
import Image from 'next/image';
import FloatingSocialButtons from './FloatingSocialButtons';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative h-[calc(100vh-80px)] w-full bg-pink-50">
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Cuidado Maternal{' '}
            <span className="text-[#E84E89]">Especializado</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-3">
            Brindando atención personalizada y apoyo durante todas las etapas
            de tu maternidad.
          </p>

          <p className="text-base text-gray-600 mb-6">
            Experta en control prenatal, lactancia y prevención de cáncer de mama.
          </p>

          <button
            className="bg-[#E84E89] hover:bg-[#D63F75] text-white px-6 py-3 rounded-full 
                     transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => scrollToSection('#schedule')}
          >
            Agenda tu consulta
          </button>
        </div>
      </div>

      <FloatingSocialButtons />

      <button
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-white rounded-full p-2 shadow-lg"
        onClick={() => scrollToSection('#about')}
      >
        <svg
          className="w-6 h-6 text-[#E84E89]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </section>
  );
};

export default Hero;
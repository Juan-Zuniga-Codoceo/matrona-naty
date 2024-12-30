"use client"

import React from 'react';
import Image from 'next/image';
import FloatingSocialButtons from './FloatingSocialButtons';

const heroImage = '/images/hero.jpg'; // Asegúrate de que esta imagen exista en tu carpeta public/images

export default function Hero() {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#schedule');
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
    <section id="hero" className="relative h-[80vh] w-full bg-pink-50">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={heroImage}
            alt="Maternidad ilustración"
            fill
            priority
            sizes="100vw"
            quality={90}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/90 to-pink-50/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6 tracking-tight">
            Cuidado Maternal{' '}
            <span className="text-[#E84E89]">Especializado</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-3 md:mb-4 leading-relaxed">
            Brindando atención personalizada y apoyo durante todas las etapas 
            de tu maternidad.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Experta en control prenatal, lactancia y prevención de cáncer de mama.
          </p>
          <button 
            className="bg-[#E84E89] hover:bg-[#D63F75] text-white font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base md:text-lg"
            onClick={handleButtonClick}
          >
            Agenda tu consulta
          </button>
        </div>
      </div>

      {/* Floating Social Buttons */}
      <FloatingSocialButtons />

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => {
          const aboutSection = document.querySelector('#about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <svg 
          className="w-6 h-6 text-[#E84E89]"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.jpg"
          alt="Maternidad ilustración"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/95 to-pink-50/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 tracking-tight">
            Cuidado Maternal{' '}
            <span className="text-[#E84E89]">Especializado</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
            Brindando atención personalizada y apoyo durante todas las etapas 
            de tu maternidad.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Experta en control prenatal, lactancia y prevención de cáncer de mama.
          </p>
          <button 
            className="bg-[#E84E89] hover:bg-[#D63F75] text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Agenda tu consulta
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
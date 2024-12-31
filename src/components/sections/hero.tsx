'use client';

import React from 'react';
import Image from 'next/image';
import { FileText, Calendar } from 'lucide-react';
import FloatingSocialButtons from './FloatingSocialButtons';

const Hero = () => {
 const scrollToSection = (sectionId: string) => {
   document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
 };

 return (
   <section id="hero" className="relative h-screen min-h-[calc(100vh-80px)] bg-pink-50 overflow-hidden">
     {/* Background Image with Overlay */}
     <div className="absolute inset-0 w-full h-full">
       <Image
         src="/images/hero.jpg"
         alt="Maternidad ilustración"
         fill
         priority
         sizes="100vw"
         className="object-cover"
       />
       <div className="absolute inset-0 bg-gradient-to-r from-pink-50/95 to-pink-50/90" />
     </div>

     {/* Content */}
     <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
       <div className="max-w-2xl py-12">
         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
           Cuidado De La Mujer{' '}
           <span className="text-[#E84E89]">Especializado</span>
         </h1>

         <p className="text-xl text-gray-700 mb-4 leading-relaxed">
           Brindando atención personalizada y apoyo durante todas las etapas 
           de tu maternidad.
         </p>

         <p className="text-lg text-gray-600 mb-8">
           Experta en control prenatal, lactancia y prevención de cáncer de mama.
         </p>

         <div className="flex flex-col sm:flex-row gap-4">
           <button 
             onClick={() => scrollToSection('#schedule')}
             className="bg-[#E84E89] text-white px-8 py-4 rounded-full 
                      transition-all duration-300 shadow-lg hover:shadow-xl 
                      transform hover:-translate-y-0.5 hover:bg-[#D63F75]
                      flex items-center justify-center gap-2 text-lg font-medium"
           >
             <Calendar className="w-5 h-5" />
             Agenda tu consulta
           </button>

           <button 
             onClick={() => scrollToSection('#resources')}
             className="bg-white text-[#E84E89] px-8 py-4 rounded-full
                      transition-all duration-300 shadow-lg hover:shadow-xl
                      transform hover:-translate-y-0.5 hover:bg-pink-50
                      flex items-center justify-center gap-2 text-lg font-medium
                      border-2 border-[#E84E89]"
           >
             <FileText className="w-5 h-5" />
             Guías gratuitas
           </button>
         </div>
       </div>
     </div>

     <FloatingSocialButtons />

     {/* Scroll Indicator */}
     <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
       <button 
         onClick={() => scrollToSection('#about')}
         className="animate-bounce p-2 bg-white rounded-full shadow-lg
                  hover:shadow-xl transition-all duration-300"
       >
         <svg className="w-6 h-6 text-[#E84E89]" fill="none" strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
           <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
         </svg>
       </button>
     </div>
   </section>
 );
};

export default Hero;
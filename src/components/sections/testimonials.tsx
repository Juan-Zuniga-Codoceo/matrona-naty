'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, Award, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { testimonials, serviceIcons, type ServiceType } from '@/data/testimonials';

const AnimatedStat = ({ end, suffix, title, icon: Icon }: {
  end: number;
  suffix: string;
  title: string;
  icon: React.ElementType;
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md">
      <Icon className="w-8 h-8 text-[#E84E89] mb-2" />
      <div className="text-2xl font-bold text-gray-800">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{title}</div>
    </div>
  );
};

const StatsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
    <AnimatedStat
      end={500}
      suffix="+"
      title="Pacientes Atendidas"
      icon={Users}
    />
    <AnimatedStat
      end={10}
      suffix="+"
      title="Años de Experiencia"
      icon={Award}
    />
    <AnimatedStat
      end={24}
      suffix="/7"
      title="Atención Disponible"
      icon={Calendar}
    />
  </div>
);

const WavePattern = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-1">
    <svg className="relative w-full" style={{ height: '50px' }} preserveAspectRatio="none" viewBox="0 0 1200 120">
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className="fill-white"
      />
    </svg>
  </div>
);


export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceType | 'all'>('all');
  const [autoplay, setAutoplay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const filteredTestimonials = selectedService === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service === selectedService);

  useEffect(() => {
    // Simular carga de contenido
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === filteredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn(
          'w-4 h-4 sm:w-5 sm:h-5',
          index < rating ? 'fill-[#E84E89] text-[#E84E89]' : 'text-gray-300'
        )}
      />
    ));
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12" />
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-200 rounded-2xl h-64" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-20 pb-32">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-pink-50 to-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4">
          Mis <span className="text-[#E84E89]">Pacientes</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conoce las experiencias de quienes han confiado en mi servicio
        </p>

        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedService('all')}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105',
              selectedService === 'all'
                ? 'bg-[#E84E89] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-pink-50 hover:shadow-md'
            )}
          >
            Todos los Servicios
          </button>
          {Object.keys(serviceIcons).map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service as ServiceType)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105',
                selectedService === service
                  ? 'bg-[#E84E89] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:shadow-md'
              )}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredTestimonials.map((testimonial, idx) => {
                const IconComponent = serviceIcons[testimonial.service];
                return (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                      {/* Decorative background */}
                      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
                        <div className="absolute w-full h-full bg-pink-100 rounded-full opacity-20" />
                      </div>

                      <div className="flex items-start gap-6 relative">
                        {/* Avatar/Icon Section */}
                        <div className="hidden sm:flex flex-col items-center gap-4">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-pink-50">
                            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                              <span className="text-2xl font-semibold text-[#E84E89]">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                            <IconComponent />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-[#E84E89] font-medium">
                                {testimonial.service}
                              </p>
                            </div>
                            <div className="flex">{renderStars(testimonial.rating)}</div>
                          </div>
                          
                          <blockquote className="text-gray-700 italic mb-4 relative">
                            <span className="absolute -left-2 -top-2 text-4xl text-pink-200">"</span>
                            <p className="pl-4">{testimonial.comment}</p>
                            <span className="absolute -right-2 bottom-0 text-4xl text-pink-200">"</span>
                          </blockquote>
                          
                          <div className="flex justify-between items-center text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
                            <span>{testimonial.location}</span>
                            <span>{new Date(testimonial.date).toLocaleDateString('es-CL')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E84E89] transition-all duration-300 hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E84E89] transition-all duration-300 hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(idx);
                }}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  currentIndex === idx
                    ? 'bg-[#E84E89] w-4'
                    : 'bg-pink-200 hover:bg-pink-300'
                )}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button
            className="bg-[#E84E89] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '#contacto'}
          >
            Agenda tu Consulta Ahora
          </button>
        </div>
      </div>

      {/* Wave Pattern Divider */}
      <WavePattern />
    </section>
  );
}
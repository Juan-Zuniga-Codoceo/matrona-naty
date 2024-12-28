'use client';

import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface PriceItem {
  name: string;
  price: string;
  calendlyUrl: string;
  description?: string;
}

interface CategoryItem {
  title: string;
  icon: React.ReactNode;
  services: PriceItem[];
}

export default function Pricing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories: CategoryItem[] = [
    {
      title: "Consulta General",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E84E89" strokeWidth="2">
          <path d="M22 12h-6l-2 3h-4l-2-3H2"/>
          <path d="M5 5v14M19 5v14"/>
        </svg>
      ),
      services: [
        { 
          name: "Consulta Matrona Remota", 
          price: "10.000",
          calendlyUrl: "https://calendly.com/matrona-naty/consulta-general"
        },
        { 
          name: "Consulta Matrona Presencial", 
          price: "15.000",
          calendlyUrl: "https://calendly.com/matrona-naty/consulta-general"
        }
      ]
    },
    {
      title: "Planificación Familiar",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E84E89" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      services: [
        { 
          name: "Asesoría planificación familiar y/o uso de método anticonceptivo",
          price: "25.000",
          calendlyUrl: "https://calendly.com/matrona-naty/planificacion-familiar"
        }
      ]
    },
    {
      title: "Atención Ginecológica",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E84E89" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v7h6V5a3 3 0 0 0-3-3z"/>
          <path d="M15 22H9"/>
          <path d="M15 12v4"/>
          <path d="M9 12v4"/>
          <path d="M12 22v-6"/>
        </svg>
      ),
      services: [
        { 
          name: "Atención Ginecológica", 
          price: "20.000",
          calendlyUrl: "https://calendly.com/matrona-naty/atencion-ginecologica"
        },
        { 
          name: "Extracción DIU", 
          price: "20.000",
          calendlyUrl: "https://calendly.com/matrona-naty/atencion-ginecologica"
        },
        { 
          name: "Toma de PAP, panel VPH, ITS", 
          price: "30.000",
          calendlyUrl: "https://calendly.com/matrona-naty/atencion-ginecologica"
        }
      ]
    },
    {
      title: "Atención Obstétrica",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E84E89" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/>
        </svg>
      ),
      services: [
        { 
          name: "Control Obstétrico", 
          price: "25.000",
          calendlyUrl: "https://calendly.com/matrona-naty/atencion-obstetrica"
        }
      ]
    },
    {
      title: "Atención Postparto",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E84E89" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      services: [
        { 
          name: "Control Binomio", 
          price: "35.000",
          calendlyUrl: "https://calendly.com/matrona-naty/atencion-postparto"
        },
        { 
          name: "Asesoría Lactancia Materna", 
          price: "25.000",
          calendlyUrl: "https://calendly.com/matrona-naty/atencion-postparto"
        }
      ]
    }
  ];

  return (
    <section id="precios" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nuestros <span className="text-[#E84E89]">Precios</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Conoce nuestros servicios y sus valores. Agenda tu hora de manera fácil y rápida.
        </p>

        <div className="flex justify-center flex-wrap gap-12 mb-16">
          {categories.map((category, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button className="group flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-pink-50 transition-all duration-300">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center max-w-[120px]">
                    {category.title}
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#E84E89] mb-6">
                    {category.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="p-4 border border-pink-100 rounded-lg hover:border-pink-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {service.name}
                        </h4>
                        <span className="text-xl font-bold text-[#E84E89]">
                          ${service.price}
                        </span>
                      </div>
                      {service.description && (
                        <p className="text-sm text-gray-600 mb-3">
                          {service.description}
                        </p>
                      )}
                      {mounted && (
                        <PopupButton
                          url={service.calendlyUrl}
                          rootElement={document.body}
                          text="Agendar Hora"
                          className="mt-3 w-full bg-[#E84E89] text-white py-2 px-4 rounded-lg hover:bg-[#D63F75] transition-colors"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            * Los precios pueden variar según requerimientos específicos. 
            Consulta por convenios y descuentos disponibles.
          </p>
        </div>
      </div>
    </section>
  );
}
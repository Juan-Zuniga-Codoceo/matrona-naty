'use client';

import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import { Calendar, Clock, Info, User, Heart, Activity, Baby, Stethoscope } from 'lucide-react';
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
  icon: React.ReactElement;
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
      icon: <User className="w-8 h-8 text-[#E84E89]" />,
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
      icon: <Heart className="w-8 h-8 text-[#E84E89]" />,
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
      icon: <Stethoscope className="w-8 h-8 text-[#E84E89]" />,
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
      icon: <Baby className="w-8 h-8 text-[#E84E89]" />,
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
      icon: <Heart className="w-8 h-8 text-[#E84E89]" />,
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
    <section id="pricing" className="py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white">
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `url('/pattern.svg')`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Mis <span className="text-[#E84E89]">Servicios</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Conoce mis servicios y sus valores. Agenda tu hora de manera fácil y rápida.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {categories.map((category, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button className="group flex flex-col items-center w-full">
                  <div className="relative w-24 h-24 mb-4">
                    {/* Círculo de fondo con animación */}
                    <div className="absolute inset-0 rounded-full bg-white shadow-md transition-all duration-300 group-hover:scale-110" />
                    {/* Círculo decorativo */}
                    <div className="absolute inset-2 rounded-full bg-pink-50 transition-all duration-300 group-hover:bg-pink-100" />
                    {/* Icono */}
                    <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center transition-colors group-hover:text-[#E84E89]">
                    {category.title}
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#E84E89] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                      {category.icon}
                    </div>
                    {category.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="group relative p-6 bg-white rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-200"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#E84E89] transition-colors">
                            {service.name}
                          </h4>
                          {service.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {service.description}
                            </p>
                          )}
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span>60 min</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>Agenda Online</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-[#E84E89]">
                            ${service.price}
                          </span>
                          <span className="block text-sm text-gray-500">CLP</span>
                        </div>
                      </div>
                      {mounted && (
                        <PopupButton
                          url={service.calendlyUrl}
                          rootElement={document.body}
                          text="Agendar Hora"
                          className="mt-4 w-full bg-[#E84E89] text-white py-3 px-4 rounded-lg hover:bg-[#D63F75] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="relative bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
          <div className="absolute -top-3 left-6 px-4 py-1 bg-pink-50 rounded-full">
            <Info className="w-4 h-4 text-[#E84E89]" />
          </div>
          <p className="text-gray-600 text-center">
            * Los precios pueden variar según requerimientos específicos. 
            Consulta por convenios y descuentos disponibles.
          </p>
        </div>
      </div>
    </section>
  );
}
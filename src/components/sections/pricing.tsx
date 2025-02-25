'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Info, User, Heart, Activity, Baby, Stethoscope, MessageCircle } from 'lucide-react';
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

  const handleWhatsAppClick = (serviceName: string) => {
    const message = `Hola! Me interesa el servicio de ${serviceName}. ¿Podrías darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "56993314396"; // Reemplazar con el número real
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const categories: CategoryItem[] = [
    {
      title: "Atención Mamaria",
      icon: <Activity className="w-8 h-8 text-[#E84E89]" />,
      services: [
        { 
          name: "Evaluación mamaria", 
          price: "20.000",
          description: "Examen completo de mamas y orientación en prevención"
        }
      ]
    },
    {
      title: "Consulta General",
      icon: <User className="w-8 h-8 text-[#E84E89]" />,
      services: [
        { 
          name: "Consulta Matrona Remota", 
          price: "10.000",
        },
        { 
          name: "Consulta Matrona Presencial", 
          price: "15.000",
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
        },
        { 
          name: "Extracción DIU", 
          price: "20.000",
        },
        { 
          name: "Toma de PAP, panel VPH, ITS", 
          price: "30.000",
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
        },
        { 
          name: "Asesoría Lactancia Materna", 
          price: "25.000",
        }
      ]
    }
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Mis <span className="text-[#E84E89]">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-[#E84E89] mx-auto mb-4"/>
          <p className="text-lg text-gray-600">
            Conoce mis servicios y sus valores. Contáctame para agendar tu hora.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((category, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button className="group flex flex-col items-center w-full">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full bg-white shadow-md transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute inset-2 rounded-full bg-pink-50 transition-all duration-300 group-hover:bg-pink-100" />
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
                              <MessageCircle className="w-4 h-4" />
                              <span>Chat Directo</span>
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
                      <button
                        onClick={() => handleWhatsAppClick(service.name)}
                        className="mt-4 w-full bg-[#E84E89] text-white py-3 px-4 rounded-lg hover:bg-[#D63F75] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Consultar ahora
                      </button>
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
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  services: ServiceItem[];
}

export default function Services() {
  const services: ServiceCategory[] = [
    {
      title: "Consulta General",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E84E89" strokeWidth="2">
          <path d="M22 12h-6l-2 3h-4l-2-3H2"/>
          <path d="M5 5v14M19 5v14"/>
        </svg>
      ),
      services: [
        { name: "Consulta Matrona Remota", price: "10.000" },
        { name: "Consulta Matrona Presencial", price: "15.000" }
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
          price: "25.000" 
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
        { name: "Atención Ginecológica", price: "20.000" },
        { name: "Extracción DIU", price: "20.000" },
        { name: "Toma de PAP, panel VPH, ITS", price: "30.000" }
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
        { name: "Control Obstétrico", price: "25.000" }
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
        { name: "Control Binomio", price: "35.000" },
        { name: "Asesoría Lactancia Materna", price: "25.000" }
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Mis <span className="text-[#E84E89]">Servicios</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Ofrecemos una amplia gama de servicios especializados para el cuidado integral
          de la salud de la mujer.
        </p>

        <div className="flex justify-center flex-wrap gap-12 mb-16">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button className="group flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-pink-50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center max-w-[120px]">
                    {service.title}
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#E84E89] mb-6">
                    {service.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="p-4 border border-pink-100 rounded-lg hover:border-pink-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h4>
                        <span className="text-xl font-bold text-[#E84E89]">
                          ${item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-3">
                          {item.description}
                        </p>
                      )}
                      <button className="mt-3 w-full bg-[#E84E89] text-white py-2 px-4 rounded-lg hover:bg-[#D63F75] transition-colors">
                        Agendar Hora
                      </button>
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
          <button className="mt-4 bg-[#E84E89] text-white px-8 py-3 rounded-lg hover:bg-[#D63F75] transition-colors shadow hover:shadow-lg">
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
}
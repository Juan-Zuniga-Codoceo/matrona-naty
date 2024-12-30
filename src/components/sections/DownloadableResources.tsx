'use client';

import React from 'react';
import { FileText, Download, Baby, Heart, Apple, Activity } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Guía de Preparación para el Embarazo",
    description: "Todo lo que necesitas saber para prepararte física y emocionalmente para tu embarazo.",
    icon: Baby,
    downloadUrl: "/guias/preparacion-embarazo.pdf",
    color: "pink",
  },
  {
    id: 2,
    title: "Manual de Lactancia Materna",
    description: "Consejos prácticos y técnicas efectivas para una lactancia exitosa.",
    icon: Heart,
    downloadUrl: "/guias/lactancia-materna.pdf",
    color: "purple",
  },
  {
    id: 3,
    title: "Guía de Cuidados Postparto",
    description: "Recuperación física y emocional después del parto.",
    icon: Heart,
    downloadUrl: "/guias/cuidados-postparto.pdf",
    color: "blue",
  },
  {
    id: 4,
    title: "Nutrición Durante el Embarazo",
    description: "Alimentación saludable y consejos nutricionales para embarazadas.",
    icon: Apple,
    downloadUrl: "/guias/nutricion-embarazo.pdf",
    color: "green",
  },
  {
    id: 5,
    title: "Ejercicios Prenatales Seguros",
    description: "Rutinas de ejercicios adaptados para cada trimestre.",
    icon: Activity,
    downloadUrl: "/guias/ejercicios-prenatales.pdf",
    color: "orange",
  },
];

export default function DownloadableResources() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-white to-pink-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `url('/pattern.svg#heart-pattern')`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Recursos <span className="text-[#E84E89]">Gratuitos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descarga nuestras guías gratuitas con información valiosa para cada etapa de tu maternidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-[#E84E89]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {resource.description}
                </p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-[#E84E89] font-medium hover:bg-[#E84E89] hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Descargar PDF
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Necesitas más información personalizada?
          </p>
          <button
            onClick={() => window.location.href = '#contacto'}
            className="bg-[#E84E89] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Agenda una Consulta
          </button>
        </div>
      </div>
    </section>
  );
}
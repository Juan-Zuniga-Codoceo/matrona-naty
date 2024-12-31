'use client';

import React from 'react';
import { FileText, Download, Baby, Heart, Apple, Activity, BookOpen } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Guía de ejercicios de Kegel",
    description: "Ejercicios esenciales para fortalecer el suelo pélvico durante y después del embarazo.",
    icon: Activity,
    downloadUrl: "/descargas/Guía de ejercicios de kegel.pdf",
    color: "green"
  },
  {
    id: 2,
    title: "Guía lactancia materna",
    description: "Consejos y técnicas para una lactancia exitosa y placentera.",
    icon: Heart,
    downloadUrl: "/descargas/Guía lactancia materna.pdf",
    color: "pink"
  },
  {
    id: 3,
    title: "Guía de nutrición en el embarazo",
    description: "Alimentación saludable y balanceada durante la gestación.",
    icon: Apple,
    downloadUrl: "/descargas/Guía de nutrición en el embarazo.pdf",
    color: "orange"
  },
  {
    id: 4,
    title: "Guía preparación para el parto",
    description: "Todo lo que necesitas saber para prepararte para el gran día.",
    icon: Baby,
    downloadUrl: "/descargas/Guía de preparación para el parto.pdf",
    color: "blue"
  },
  {
    id: 5,
    title: "Guía de cuidados post parto",
    description: "Recuperación y cuidados esenciales después del parto.",
    icon: Heart,
    downloadUrl: "/descargas/Guía de cuidados post parto.pdf",
    color: "purple"
  },
  {
    id: 6,
    title: "Curiosidades sobre el embarazo",
    description: "Información interesante y datos curiosos sobre la gestación.",
    icon: BookOpen,
    downloadUrl: "/descargas/Curiosidades sobre el embarazo.pdf",
    color: "teal"
  },
  {
    id: 7,
    title: "Guía sobre métodos anticonceptivos",
    description: "Información completa sobre métodos de planificación familiar.",
    icon: BookOpen,
    downloadUrl: "/descargas/Guía sobre métodos anticonceptivos.pdf",
    color: "indigo"
  }
];

export default function DownloadableResources() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-pink-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c-8.284 0-15-6.716-15-15V0h30v15c0 8.284-6.716 15-15 15zm0 0c8.284 0 15 6.716 15 15v15H15V45c0-8.284 6.716-15 15-15z' fill='%23E84E89' fill-opacity='0.4'/%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Recursos <span className="text-[#E84E89]">Gratuitos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descarga nuestras guías gratuitas con información valiosa para cada etapa de tu maternidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 
                       hover:shadow-xl hover:-translate-y-1 border border-pink-100"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center mb-6">
                  <resource.icon className="w-7 h-7 text-[#E84E89]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[60px]">
                  {resource.description}
                </p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-pink-50 text-[#E84E89] 
                           font-medium hover:bg-[#E84E89] hover:text-white transition-colors duration-300"
                  download
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Descargar PDF
                  <Download className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas información más personalizada?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-[#E84E89] text-white rounded-full 
                     font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 
                     hover:-translate-y-0.5 hover:bg-[#D63F75]"
          >
            Agenda una Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { FileText, Download, Baby, Heart, Apple, Activity, BookOpen, Stethoscope } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Guía de ejercicios de Kegel",
    description: "Ejercicios esenciales para fortalecer el suelo pélvico durante y después del embarazo.",
    icon: Activity,
    downloadUrl: "/descargas/Guía de ejercicios de kegel.pdf",
  },
  {
    id: 2,
    title: "Guía lactancia materna",
    description: "Consejos y técnicas para una lactancia exitosa y placentera.",
    icon: Heart,
    downloadUrl: "/descargas/Guía lactancia materna.pdf",
  },
  {
    id: 3,
    title: "Guía de nutrición en el embarazo",
    description: "Alimentación saludable y balanceada durante la gestación.",
    icon: Apple,
    downloadUrl: "/descargas/Guía de nutrición en el embarazo.pdf",
  },
  {
    id: 4,
    title: "Guía preparación para el parto",
    description: "Todo lo que necesitas saber para prepararte para el gran día.",
    icon: Baby,
    downloadUrl: "/descargas/Guía de preparación para el parto.pdf",
  },
  {
    id: 5,
    title: "Guía de cuidados post parto",
    description: "Recuperación y cuidados esenciales después del parto.",
    icon: Heart,
    downloadUrl: "/descargas/Guía de cuidados post parto.pdf",
  },
  {
    id: 6,
    title: "Curiosidades sobre el embarazo",
    description: "Información interesante y datos curiosos sobre la gestación.",
    icon: BookOpen,
    downloadUrl: "/descargas/Curiosidades sobre el embarazo.pdf",
  },
  {
    id: 7,
    title: "Guía sobre métodos anticonceptivos",
    description: "Información completa sobre métodos de planificación familiar.",
    icon: BookOpen,
    downloadUrl: "/descargas/Guía sobre métodos anticonceptivos.pdf",
  },
  {
    id: 8,
    title: "Guía de Patología Cervical",
    description: "Información detallada sobre patologías cervicales, diagnóstico y tratamiento.",
    icon: Stethoscope,
    downloadUrl: "/descargas/PATOLOGIA CERVICAL_20250105_210828_0000.pdf",
  },
  {
    id: 9,
    title: "Guía de Patología Mamaria",
    description: "Información completa sobre patologías mamarias, prevención y cuidados.",
    icon: Stethoscope,
    downloadUrl: "/descargas/patologia mamaria_20250105_210905_0000.pdf",
  }
];

export default function DownloadableResources() {
  return (
    <section id="resources"  className="py-24 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Recursos <span className="text-[#E84E89]">Gratuitos</span>
          </h2>
          <div className="w-20 h-1 bg-[#E84E89] mx-auto mb-12" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descarga nuestras guías gratuitas con información valiosa para cada etapa de tu maternidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 
                       hover:shadow-xl hover:-translate-y-1 border border-pink-100/50"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                             flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-7 h-7 text-[#E84E89]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-[#E84E89] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[60px]">
                  {resource.description}
                </p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center px-6 py-3 rounded-full 
                           bg-gradient-to-r from-pink-50 to-white
                           text-[#E84E89] font-medium 
                           hover:bg-gradient-to-r hover:from-[#E84E89] hover:to-[#D63F75]
                           hover:text-white
                           transition-all duration-300 
                           border border-pink-200
                           group-hover:border-[#E84E89]"
                  download
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Descargar PDF
                  <Download className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
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
            href="#contact"
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
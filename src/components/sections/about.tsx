'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  const values = [
    {
      title: "Empatía y respeto",
      description: "Creo un ambiente cómodo y seguro, escuchando con atención y sin juicios tus preocupaciones"
    },
    {
      title: "Experiencia comprobada",
      description: "Formación sólida y experiencia en explicar diagnósticos y tratamientos de forma clara"
    },
    {
      title: "Comunicación abierta",
      description: "Fomento una relación basada en la confianza, respondiendo todas tus dudas sin prisas"
    },
    {
      title: "Enfoque personalizado",
      description: "Atención adaptada a tus necesidades y circunstancias personales específicas"
    },
    {
      title: "Respeto a tu autonomía",
      description: "Valoro y respeto tus decisiones informadas, haciéndote partícipe activa de tu cuidado"
    }
  ];

  return (
    <section id="about" className="relative py-24"> 
     <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white" />
     <div className="container max-w-6xl mx-auto px-4 relative">
       <div className="text-center mb-16">
         <h2 className="text-4xl font-bold mb-4">
           Sobre <span className="text-[#E84E89]">Matrona Naty</span>
         </h2>
         <div className="w-20 h-1 bg-[#E84E89] mx-auto mb-4"/>
       </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-pink-100 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-pink-200 rounded-3xl -rotate-3"></div>
              <div className="relative">
                <Image
                  src="/images/about.jpg"
                  alt="Foto de la Matrona Natalia Aravena"
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-xl relative z-10 object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Soy una matrona especializada en el cuidado integral de la salud de la mujer, 
                con experiencia en atención prenatal, ginecología y prevención 
                del cáncer de mama.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi rol como Coordinadora de la Unidad GES y encargada de patología mamaria 
                me ha permitido desarrollar un enfoque integral en la atención, siempre centrado 
                en el bienestar de mis pacientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 border-pink-100 
                           bg-gradient-to-br from-white to-pink-50 transform hover:-translate-y-1
                           rounded-xl overflow-hidden"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#E84E89] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button 
                  className="w-full md:w-auto bg-[#E84E89] hover:bg-[#D63F75] text-white px-8 py-4 rounded-full 
                           transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                           font-medium text-lg flex items-center justify-center gap-2"
                >
                  Conoce más sobre mi experiencia
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto p-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-[#E84E89] mb-6">Trayectoria Profesional</DialogTitle>
                </DialogHeader>
                <div className="space-y-8">
                  <div className="bg-pink-50/50 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-[#E84E89] mb-3">Matrona Coordinadora Unidad GES</h4>
                    <p className="text-gray-700 font-medium mb-3">Hospital Biprovincial Quillota Petorca • 2016 - Actualidad</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Encargada de unidad de patología mamaria</li>
                      <li>Gestión y coordinación de diagnósticos y tratamientos</li>
                      <li>Liderazgo en equipo de atención secundaria</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50/30 to-white p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-[#E84E89] mb-3">Formación Académica</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Obstetricia y Puericultura - Universidad de Valparaíso</li>
                      <li>Diplomado en Gestión de Centros de Salud - IPLACEX</li>
                      <li>Diplomado en Políticas Públicas y Regulación en Salud - UDD</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50/50 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-[#E84E89] mb-3">Especialización</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Experta en control prenatal y lactancia</li>
                      <li>Especialista en prevención de cáncer de mama</li>
                      <li>Atención ginecológica integral</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50/30 to-white p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-[#E84E89] mb-3">Capacitación Continua</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Simposio Internacional de Cáncer de Mama (XI y XII edición)</li>
                      <li>Curso de Rehabilitación Oncológica</li>
                      <li>Parto Humanizado - Universidad de Valparaíso</li>
                      <li>Salud Sexual y Reproductiva en Adolescentes</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const values = [
    {
      title: "Experiencia",
      description: "Amplia experiencia en cuidado maternal y prevención"
    },
    {
      title: "Compromiso",
      description: "Atención personalizada y seguimiento continuo"
    },
    {
      title: "Actualización",
      description: "Constante formación en avances médicos"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/about.png"
                alt="Matrona con bebé ilustración"
                fill
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Sobre <span className="text-[#E84E89]">Matrona Naty</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Soy una profesional especializada en el cuidado integral de la 
                salud de la mujer, con énfasis en atención prenatal, lactancia 
                y prevención del cáncer de mama.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi enfoque se centra en brindar una atención humanizada, 
                respetando la diversidad y autonomía de cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-pink-100">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-[#E84E89] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <button className="mt-8 bg-[#E84E89] hover:bg-[#D63F75] text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5">
              Conoce más sobre mi trabajo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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

  const experience = [
    {
      period: "2020 - Presente",
      title: "Matrona Especialista en Cáncer de Mama",
      place: "Centro de Salud de la Mujer",
      description: "Atención integral y prevención del cáncer de mama"
    },
    {
      period: "2018 - 2020",
      title: "Especialista en Lactancia",
      place: "Hospital Materno Infantil",
      description: "Asesoría y apoyo en lactancia materna"
    },
    {
      period: "2016 - 2018",
      title: "Matrona General",
      place: "Clínica Materno Fetal",
      description: "Atención prenatal y seguimiento del embarazo"
    }
  ];

  const education = [
    {
      year: "2021",
      title: "Especialización en Prevención de Cáncer de Mama",
      institution: "Instituto Oncológico Nacional"
    },
    {
      year: "2019",
      title: "Certificación Internacional en Lactancia Materna",
      institution: "IBCLC"
    },
    {
      year: "2016",
      title: "Licenciatura en Obstetricia y Puericultura",
      institution: "Universidad de Chile"
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
                className="rounded-2xl shadow-lg object-contain"
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
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50"
                >
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

            <Dialog>
              <DialogTrigger asChild>
                <button className="mt-8 bg-[#E84E89] hover:bg-[#D63F75] text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5">
                  Conoce más sobre mi trabajo
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-gradient-to-br from-white to-pink-50">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#E84E89] mb-6">
                    Experiencia y Formación
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-8">
                  {/* Experiencia */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Experiencia Profesional
                    </h3>
                    <div className="space-y-4">
                      {experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-pink-200 pl-4 hover:border-[#E84E89] transition-colors">
                          <p className="text-sm text-[#E84E89]">{exp.period}</p>
                          <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                          <p className="text-sm text-gray-600">{exp.place}</p>
                          <p className="text-sm text-gray-500">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Educación */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Formación Académica
                    </h3>
                    <div className="space-y-4">
                      {education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-pink-200 pl-4 hover:border-[#E84E89] transition-colors">
                          <p className="text-sm text-[#E84E89]">{edu.year}</p>
                          <h4 className="font-semibold text-gray-800">{edu.title}</h4>
                          <p className="text-sm text-gray-600">{edu.institution}</p>
                        </div>
                      ))}
                    </div>
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
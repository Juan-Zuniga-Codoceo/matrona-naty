"use client";

import React from "react";
import Image from "next/image";

const Universities = () => {
  const universities = [
    {
      name: "Universidad de Valparaíso",
      logo: "/images/Logos/uv.png",
      alt: "Logo Universidad de Valparaíso",
    },
    {
      name: "Universidad de los Andes",
      logo: "/images/Logos/uandes.png",
      alt: "Logo Universidad de los andes",
    },

    {
      name: "Universidad del Desarrollo",
      logo: "/images/Logos/udd.png",
      alt: "Logo Universidad del Desarrollo",
    },
    {
      name: "Instituto profesional Iplacex",
      logo: "/images/Logos/iplacex.png",
      alt: "Logo Iplacex",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Formación <span className="text-[#E84E89]">Académica</span>
        </h2>
        <div className="w-20 h-1 bg-[#E84E89] mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative w-40 h-28">
                <Image
                  src={uni.logo}
                  alt={uni.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                {uni.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;

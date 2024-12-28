'use client';

import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';

export default function Schedule() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="agenda" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Agenda tu <span className="text-[#E84E89]">Hora</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Selecciona el tipo de atención y el horario que mejor te acomode
          </p>
        </div>

        {mounted && (
          <div className="bg-white rounded-lg shadow-md">
            <InlineWidget 
              url="https://calendly.com/matrona-naty" 
              styles={{ 
                height: '600px',
                margin: '0 auto'
              }}
            />
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Recibirás un correo de confirmación con los detalles de tu cita
          </p>
        </div>
      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Contáctame
          </h2>
          <div className="w-20 h-1 bg-[#E84E89] mx-auto mb-12" />
          <p className="text-lg text-gray-600">
            Estoy aquí para resolver todas tus dudas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Columna izquierda con tarjetas de contacto */}
          <div className="space-y-6">
            {/* Tarjeta de WhatsApp */}
            <a 
              href="https://wa.me/56993314396"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all flex items-center gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                            flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-[#E84E89]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E84E89] mb-1">WhatsApp</h3>
                <p className="text-gray-600">+569 9331 4396</p>
              </div>
            </a>

            {/* Tarjeta de Teléfono */}
            <a 
              href="tel:+56993314396"
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all flex items-center gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                            flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#E84E89]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E84E89] mb-1">Teléfono</h3>
                <p className="text-gray-600">+569 9331 4396</p>
              </div>
            </a>

            {/* Tarjeta de Email */}
            <a 
              href="mailto:contacto@matronanaty.cl"
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all flex items-center gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                            flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-[#E84E89]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E84E89] mb-1">Email</h3>
                <p className="text-gray-600">contacto@matronanaty.cl</p>
              </div>
            </a>

            {/* Tarjeta de Horario */}
            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                              flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#E84E89]" />
                </div>
                <h3 className="text-xl font-semibold text-[#E84E89]">Horario de Atención</h3>
              </div>
              <div className="space-y-2 pl-[88px]">
                <p className="text-gray-600">Lunes a Viernes: 9:00 - 13:00 / 14:00 - 20:00</p>
                <p className="text-gray-600">Sábado: 9:00 - 14:00</p>
                <p className="text-gray-500">Domingo: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Columna derecha con mapa y ubicación */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="h-[400px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.4238683724164!2d-71.63368792426837!3d-33.04214197545927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e6c2a8d3f8f9%3A0x8e5fde76df091d27!2sCondell%201190%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1ses!2s!4v1706847055657!5m2!1ses!2s"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Tarjeta con detalles de ubicación */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-[#E84E89]" />
                <h3 className="text-xl font-semibold text-[#E84E89]">Ubicación</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Condell 1190, piso 12, Oficina 125</p>
                <p>Valparaíso</p>
                <p className="text-sm mt-4">
                  <strong>Referencias:</strong>
                </p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Centro Ecogim</li>
                  <li>Frente a plaza Aníbal Pinto</li>
                  <li>Entrada al lado de la óptica Bulling</li>
                  <li>Usar el 2do ascensor (del fondo)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [isSending, setIsSending] = useState<boolean>(false);
  const whatsappNumber = '+56993314396';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const mensaje = `*Nuevo mensaje de contacto*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Mensaje:* ${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
    setIsSending(false);
  };

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
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-[#E84E89] mb-8">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <a 
                  href="https://maps.google.com/?q=Condell 1190, Valparaíso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:text-[#E84E89] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                                flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#E84E89]" />
                  </div>
                  <span className="text-lg">Condell 1190, Valparaíso</span>
                </a>

                <a 
                  href="tel:+56912345678"
                  className="flex items-center gap-4 group hover:text-[#E84E89] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                                flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[#E84E89]" />
                  </div>
                  <span className="text-lg">+569 9331 4396</span>
                </a>

                <a 
                  href="mailto:contacto@matronanaty.cl"
                  className="flex items-center gap-4 group hover:text-[#E84E89] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                                flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[#E84E89]" />
                  </div>
                  <span className="text-lg">contacto@matronanaty.cl</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 
                              flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#E84E89]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#E84E89]">
                  Horario de Atención
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">Lunes a Viernes</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">Sábado</span>
                  <span>9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center text-lg text-gray-500">
                  <span className="font-medium">Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 
                           focus:ring-2 focus:ring-[#E84E89] focus:border-transparent 
                           transition-all text-lg"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 
                           focus:ring-2 focus:ring-[#E84E89] focus:border-transparent 
                           transition-all text-lg"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 
                           focus:ring-2 focus:ring-[#E84E89] focus:border-transparent 
                           transition-all text-lg"
                  placeholder="+569 XXXX XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 
                           focus:ring-2 focus:ring-[#E84E89] focus:border-transparent 
                           transition-all resize-none text-lg"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#E84E89] text-white py-4 px-8 rounded-full 
                         hover:bg-[#D63F75] hover:shadow-lg transform hover:-translate-y-0.5 
                         transition-all duration-300 text-lg font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {isSending ? 'Enviando...' : 'Enviar por WhatsApp'}
              </button>

              <p className="text-sm text-center text-gray-500">
                * Campos obligatorios
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-50 border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">© {currentYear} Matrona Naty.</span>
            <span className="text-gray-600">Todos los derechos reservados.</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600">Desarrollado con ♥ por</span>
            <a 
              href="https://synapsedev.cl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pink-500 hover:text-pink-600 font-medium ml-2 transition-colors duration-300"
            >
              SynapseDev
            </a>
          </div>
        </div>

        {/* Additional footer content section */}
        <div className="mt-6 pt-6 border-t border-pink-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-pink-500 mb-3">Horario de Atención</h4>
              <p className="text-gray-600">Lunes a Viernes: Por Confirmar</p>
              <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-pink-500 mb-3">Contacto</h4>
              <p className="text-gray-600">📞 +56 9 93314396</p>
              <p className="text-gray-600">📧 contacto@matronanaty.cl</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-pink-500 mb-3">Ubicación</h4>
              <p className="text-gray-600">Condell 1190, Valparaíso</p>
              <p className="text-gray-600">Región Valparaíso, Chile</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
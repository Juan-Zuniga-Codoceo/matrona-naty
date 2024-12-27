import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-16 h-16 relative">
            <Image
              src="/images/logo.png"
              alt="Matrona Naty Logo"
              fill
              className="rounded-full object-contain"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-matrona-purple-DEFAULT">
            <Link href="#inicio" className="hover:text-matrona-purple-light transition-colors">
              Inicio
            </Link>
            <Link href="#sobre-mi" className="hover:text-matrona-purple-light transition-colors">
              Sobre Mí
            </Link>
            <Link href="#servicios" className="hover:text-matrona-purple-light transition-colors">
              Servicios
            </Link>
            <Link href="#contacto" className="hover:text-matrona-purple-light transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-matrona-purple-DEFAULT">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
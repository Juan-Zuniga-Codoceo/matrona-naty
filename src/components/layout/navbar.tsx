"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative">
            <a
              href="#hero"
              className="block relative"
              onClick={(e) => navigateToSection(e, '#hero')}
            >
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo.png"
                  alt="Matrona Naty Logo"
                  width={64}
                  height={64}
                  className="rounded-full object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '#hero', label: 'Inicio' },
              { href: '#about', label: 'Sobre Mí' },
              { href: '#services', label: 'Servicios' },
              { href: '#contact', label: 'Contacto' }
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => navigateToSection(e, href)}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 relative group py-2"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}

            <button
              onClick={(e) => navigateToSection(e as any, '#schedule')}
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Agenda tu consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 mt-3">
            <div className="flex flex-col space-y-4">
              {[
                { href: '#hero', label: 'Inicio' },
                { href: '#about', label: 'Sobre Mí' },
                { href: '#services', label: 'Servicios' },
                { href: '#contact', label: 'Contacto' }
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => navigateToSection(e, href)}
                  className="text-gray-700 hover:text-pink-500 transition-colors duration-300 px-2"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={(e) => navigateToSection(e as any, '#schedule')}
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 text-center shadow-md"
              >
                Agenda tu consulta
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
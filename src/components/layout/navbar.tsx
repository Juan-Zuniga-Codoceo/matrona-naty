"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            className="relative"
            onClick={(e) => handleLinkClick(e, '#hero')}
          >
            <div className="w-16 h-16 relative transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Matrona Naty Logo"
                fill
                sizes="(max-width: 768px) 64px, 64px"
                className="rounded-full object-contain"
                priority
              />
            </div>
          </a>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 text-gray-700">
            {[
              { href: '#hero', label: 'Inicio' },
              { href: '#about', label: 'Sobre Mí' },
              { href: '#pricing', label: 'Servicios' },
              { href: '#contact', label: 'Contacto' }
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative py-2 group transition-colors duration-300"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#schedule"
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => handleLinkClick(e, '#schedule')}
            >
              Agenda tu consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
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
                d={isMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-3 border-t border-gray-200 mt-3`}
        >
          <div className="flex flex-col space-y-4">
            {[
              { href: '#hero', label: 'Inicio' },
              { href: '#about', label: 'Sobre Mí' },
              { href: '#pricing', label: 'Servicios' },
              { href: '#contact', label: 'Contacto' }
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 px-2 py-1"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            ))}
            <a
              href="#schedule"
              className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 text-center shadow-md"
              onClick={(e) => handleLinkClick(e, '#schedule')}
            >
              Agenda tu consulta
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
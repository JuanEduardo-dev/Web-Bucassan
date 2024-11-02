'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? 'h-16 bg-white/95 backdrop-blur-sm shadow-lg' : 'h-24 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
        {/* Logo */}
        <div className={`transition-all duration-300 ${isScrolled ? 'w-32' : 'w-48'}`}>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={isScrolled ? 128 : 192}
              height={isScrolled ? 40 : 60}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Enlaces de Navegación */}
        <div className={`flex items-center space-x-8 font-medium ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link href="/" className="inline-block hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link href="/contacto" className="inline-block hover:text-blue-600 transition-colors">
            Contacto
          </Link>
          <Link href="/staff-medico" className="inline-block hover:text-blue-600 transition-colors">
            Staff Médico
          </Link>
        </div>
        
        {/* Redes Sociales */}
        <div className={`flex items-center font-medium ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:text-blue-600 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
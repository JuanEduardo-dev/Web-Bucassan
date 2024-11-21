'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  
  const scrolledRoutes = ['/sede', '/servicios', '/contacto'];
  const isScrolledRoute = scrolledRoutes.includes(pathname);
  const [isScrolled, setIsScrolled] = useState(isScrolledRoute);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Manejo del scroll
  useEffect(() => {
    if (isScrolledRoute) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolledRoute]);

  // Control del scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/sede', label: 'Sede' },
    { href: '/servicios', label: 'Servicios' }
  ];

  // Componentes reutilizables
  const Logo = () => (
    <div className={`transition-all duration-100 
      ${isScrolled ? 'w-32' : 'w-48'} md:${isScrolled ? 'w-32' : 'w-48'} w-24`}>
      <Link href="/">
        <Image
          src={isScrolled ? '/images/logo-scroll.png' : '/images/logo.png'}
          alt="Logo"
          width={isScrolled ? 128 : 180}
          height={isScrolled ? 40 : 60}
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );

  const MenuButton = () => (
    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="lg:hidden z-50"
      aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
    >
      {isMenuOpen ? (
        <X className="text-pallette-10" size={24} />
      ) : (
        <Menu className={`${isScrolled ? 'text-pallette-10' : 'text-white'}`} size={24} />
      )}
    </button>
  );

  const NavLinks = ({ mobile = false }) => (
    <>
      {navLinks.map((link) => (
        <Link 
          key={link.href}
          href={link.href}
          onClick={mobile ? () => setIsMenuOpen(false) : undefined}
          className={mobile ? 
            `text-xl font-medium text-pallette-10 relative
            ${pathname === link.href ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pallette-10' : ''}`
            :
            `relative group transition-colors duration-200 
            ${isScrolled ? 'text-pallette-10' : 'text-white'}`
          }
        >
          {link.label}
          {!mobile && (
            <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-200 ease-out 
              ${pathname === link.href ? 'w-full' : 'w-0'}
              group-hover:w-full
            `}></span>
          )}
        </Link>
      ))}
    </>
  );

  const ContactButton = ({ mobile = false }) => (
    <Link 
      href="/contacto"
      onClick={mobile ? () => setIsMenuOpen(false) : undefined}
      className={mobile ? "w-full px-8" : "group transition-colors duration-200 text-white"}
    >
      <button className={`flex items-center gap-4 bg-pallette-10 text-white rounded-full px-4 transition-colors duration-200 hover:bg-pallette-10-contrast
        ${mobile ? 'w-full h-12 justify-center' : 'h-10'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path>
        </svg>
        <span>Contáctenos</span>
      </button>
    </Link>
  );

  const SocialIcons = ({ mobile = false }) => {
    const socialLinks = [
      {
        href: "https://www.facebook.com/Buccasan.pe",
        hoverClass: "hover:bg-purple-900",
        icon: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
      },
      {
        href: "https://www.instagram.com/buccasan.pe/",
        hoverClass: "hover:bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500",
        icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
      },
      {
        href: "https://www.tiktok.com/@buccasandental",
        hoverClass: "hover:bg-black",
        icon: "M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
      }
    ];

    return (
      <div className={`flex gap-6 ${mobile ? 'pt-8' : 'font-medium'}`}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 
              ${social.hoverClass} hover:text-white
              ${mobile ? 'text-white bg-pallette-10' : 
                isScrolled ? 'text-white bg-pallette-10' : 'text-pallette-10 bg-pallette-60'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
              <path fill="currentColor" d={social.icon} />
            </svg>
          </a>
        ))}
      </div>
    );
  };

  const MobileMenu = () => (
    <div 
      className={`
        fixed inset-0 bg-pallette-60 transition-transform duration-300 ease-in-out transform 
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:hidden flex flex-col items-center justify-center
        space-y-8 pt-20 z-40
      `}
    >
      <NavLinks mobile />
      <ContactButton mobile />
      <SocialIcons mobile />
    </div>
  );

  return (
    <nav 
      style={{
        WebkitBackdropFilter: isScrolled ? 'saturate(180%) blur(5px)' : 'none',
        backdropFilter: isScrolled ? 'none' : 'none',
        boxShadow: isScrolled ? 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)' : 'none',
      }}
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-100 z-50 
        ${isScrolled ? 'h-16 bg-pallette-60' : 'h-20 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Logo />
        <MenuButton />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12 font-regular">
          <NavLinks />
          <ContactButton />
        </div>
        
        {/* Desktop Social Icons */}
        <div className="hidden lg:flex">
          <SocialIcons />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
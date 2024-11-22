'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter(); // Añadir esta línea cerca de los otros hooks

  const scrolledRoutes = ['/nosotros', '/sede', '/servicios', '/contacto'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolledRoute = scrolledRoutes.includes(pathname); // Verdadero si pathname está en las rutas definidas
  const [isScrolled, setIsScrolled] = useState(false); // Verdadero si el usuario ha scrolleado
  const [isFixed, setIsFixed] = useState(false); // Verdadero si el scroll es mayor a 50px
  const [isNavigating, setIsNavigating] = useState(false);

  // Añadir este useEffect para detectar cambios de ruta
  useEffect(() => {
    setIsNavigating(false);
    setIsMenuOpen(false);
  }, [pathname]);

  // Manejo del scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Actualiza isScrolled según el scroll
      setIsFixed(window.scrollY > 96); // Establece isFixed si el scroll es mayor a 50px
    };
  
    handleScroll(); // Comprueba el estado inicial del scroll
    window.addEventListener('scroll', handleScroll); // Escucha el evento de scroll
  
    return () => window.removeEventListener('scroll', handleScroll); // Limpia el listener al desmontar
  }, []);
  
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
    <div className={`transition-all duration-100 md:${isScrolled ? 'w-32' : 'w-48'} w-48`}>
      <Link href="/">
        <Image
          src={isScrolled || isScrolledRoute ? '/images/logo-scroll.png' : '/images/logo.png'}
          alt="Logo"
          width={isScrolled || isScrolledRoute ? '128' : '180'}
          height={isScrolled || isScrolledRoute ? '40' : '60'}
          className="object-contain"
          priority
          style={{ width: 'auto', height: 'auto' }}
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
        <Menu className={`${isScrolled || isScrolledRoute ? 'text-pallette-10' : 'text-white'}`} size={24} />
      )}
    </button>
  );

  const NavLinks = ({ mobile = false }) => (
    <>
      {navLinks.map((link) => (
        <Link 
          key={link.href}
          href={link.href}
          onClick={(e) => {
            if (mobile) {
              e.preventDefault();
              setIsNavigating(true);
              router.push(link.href);
            }
          }}
          className={mobile ? 
            `text-xl font-medium text-pallette-10 relative
            ${pathname === link.href ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pallette-10' : ''}`
            :
            `relative group transition-colors duration-200 
            ${isScrolled || isScrolledRoute ? 'text-pallette-10' : 'text-white'}`
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
      onClick={(e) => {
        if (mobile) {
          e.preventDefault();
          setIsNavigating(true);
          router.push('/contacto');
        }
      }}
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
                isScrolled || isScrolledRoute ? 'text-white bg-pallette-10' : 'text-pallette-10 bg-pallette-60'
              }`
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
        ${isMenuOpen && !isNavigating ? 'translate-x-0' : 'translate-x-full'}
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
      className={`${isFixed || !isScrolledRoute ? 'fixed' : 'absolute'} top-0 left-0 right-0 w-full z-50  flex-col
        ${
          isScrolled 
            ? 'h-16 bg-pallette-60' 
            : isScrolledRoute 
            ? 'h-24 bg-pallette-60' 
            : 'h-20 bg-transparent'
        }`}
    >
      <div  className={`max-w-7xl mx-auto m-1 justify-end items-center px-4 text-pallette-10
        ${isFixed || !isScrolledRoute ? 'hidden' : 'flex'}`
      }>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></path></svg>
        
        <p>Av. Los Laureles 328</p>

        <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
          
        <p>+51 974 980 380</p>

      </div>
      <hr className={`${isFixed || !isScrolledRoute ? 'hidden' : 'flex'}`}/>

      <div
        className={`
        ${isFixed || !isScrolledRoute ? 'h-full' : 'h-16'}
        `}
        style={{
          WebkitBackdropFilter: isScrolled || isScrolledRoute ? 'saturate(180%) blur(5px)' : 'none',
          backdropFilter: isScrolled || isScrolledRoute ? 'none' : 'none',
          boxShadow: isScrolled || isScrolledRoute ? 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div 
          className={`max-w-7xl mx-auto px-4 flex items-center justify-between h-full
          `}>
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
      </div>
    </nav>
  );
};

export default Navbar;
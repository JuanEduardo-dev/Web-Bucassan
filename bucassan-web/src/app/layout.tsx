'use client';

import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';
import { GoogleAnalytics } from '@next/third-parties/google'

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ButtonWhatsapp } from '@/components/layout/ButtonWhatsapp';
import { LandbotComponent } from '@/components/layout/LandbotComponent';
import "./globals.css";
import "./fonts.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    clarity.init('p2rj0iq37x');
  }, []);

  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="XLPWUF9_PDhbgtFfYvjX0zv36TtDiV55x-vCy8oJuq4" />
        <title>Bucassan | Clínica Odontológica</title>
        <meta name="description" content="Recupera la confianza en tu sonrisa. En Buccasan brindamos un servicio de alta calidad con profesionales de amplia experiencia para que obtengas la sonrisa que siempre soñaste. Nuestros tratamientos de diseño de sonrisa pueden incluir: Carillas dentales, Blanqueamiento dental, Ortodoncia y mucho más. Reserva tu cita aquí +51 974 980 380. Nos encontramos en Jr. Los Laureles # 328 Paucarbambilla - Amarilis. Detrás de una linda sonrisa, hay una boca sana." />
        <meta name="keywords" content="carillas dentales, blanqueamiento dental, ortodoncia, clínica dental, Buccasan, sonrisa perfecta, salud bucal, cita dental, profesionales dentales, tratamientos dentales" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
          <LandbotComponent />
          <ButtonWhatsapp />
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-DM303B31B1" />
      </body>
    </html>
  );
}

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
        <title>Bucassan | Clínica Odontológica</title>
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

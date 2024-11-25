import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ButtonWhatsapp } from '@/components/layout/ButtonWhatsapp';
import { LandbotComponent } from '@/components/layout/LandbotComponent';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ClarityInitializer } from '@/components/layout/utils/ClarityInitializer';

import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Bucassan | Clínica Odontológica',
  description: 'Recupera la confianza en tu sonrisa. En Buccasan brindamos un servicio de alta calidad con profesionales de amplia experiencia para que obtengas la sonrisa que siempre soñaste. Nuestros tratamientos de diseño de sonrisa pueden incluir: Carillas dentales, Blanqueamiento dental, Ortodoncia y mucho más. Reserva tu cita aquí +51 974 980 380. Nos encontramos en Jr. Los Laureles # 328 Paucarbambilla - Amarilis. Detrás de una linda sonrisa, hay una boca sana.',
  keywords: 'carillas dentales, blanqueamiento dental, ortodoncia, clínica dental, Buccasan, sonrisa perfecta, salud bucal, cita dental, profesionales dentales, tratamientos dentales',
  verification: {
    google: 'XLPWUF9_PDhbgtFfYvjX0zv36TtDiV55x-vCy8oJuq4',
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://bucassan.onrender.com'),
  openGraph: {
    type: 'website',
    title: 'Bucassan | Clínica Odontológica',
    description: 'Recupera la confianza en tu sonrisa. En Buccasan brindamos un servicio de alta calidad con profesionales de amplia experiencia.',
    url: 'https://bucassan.onrender.com',
    siteName: 'Bucassan',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <ClarityInitializer />
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
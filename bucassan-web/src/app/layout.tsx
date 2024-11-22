import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ButtonWhatsapp } from '@/components/layout/ButtonWhatsapp';
import { LandbotComponent } from '@/components/layout/LandbotComponent';
import { ClarityIntegration } from '@/components/layout/ClarityIntegration';
import "./globals.css";
import "./fonts.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>Bucassan | Clínica Odontológica</title>
        <ClarityIntegration />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
          <LandbotComponent />
          <ButtonWhatsapp />
        </main>
        <Footer />
      </body>
    </html>
  );
}
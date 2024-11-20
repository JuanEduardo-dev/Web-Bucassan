import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ButtonWhatsapp } from '@/components/layout/ButtonWhatsapp';
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
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
          <ButtonWhatsapp />
        </main>
        <Footer />
      </body>
    </html>
  );
}
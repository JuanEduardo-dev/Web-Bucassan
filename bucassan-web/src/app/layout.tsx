import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
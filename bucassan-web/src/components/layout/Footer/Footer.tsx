import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-pallette-30 bg-gradient-to-b from-black/5 to-black/5 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Teléfono: +51 974 980 380</li>
              <li>Email: buccasanclinica@gmail.com</li>
              <li>Dirección: Av. Los Laureles 328</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-pallette-10 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-pallette-10 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/staff-medico" className="hover:text-pallette-10 transition-colors">
                  Staff Médico
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pallette-10 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pallette-10 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pallette-10 transition-colors">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white text-center">
          <p>&copy; {new Date().getFullYear()} Bucassan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
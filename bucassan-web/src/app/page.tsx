import Image from 'next/image';
import { CardHero } from '@/components/ui/Inicio/CardHero';

export default function Home() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative h-[calc(100vh-250px)] md:h-[calc(100vh-150px)]">
      {/* Background */}
      <div className="absolute h-full w-full z-[-2] bg-pallette-30/90">
        <div className="w-full h-full flex justify-center items-center xl:block p-8">
          <Image 
            className="relative object-contain xl:left-48 h-full z-[-1] block animate-float"
            src="/images/hero-move.png"
            alt=""
            width={556}
            height={712}
          />
        </div>
        <Image
          className="absolute object-contain bottom-0 right-0 h-full z-[-1] hidden xl:block"
          src="/images/right-hero.png"
          alt=""
          width={853}
          height={953}
        />
        <div className="z-[-2] absolute top-0 h-full w-full bg-gradient-to-b from-black/20 to-black/0"></div>
      </div>

      <div className="h-full w-full">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center space-y-6 text-white">
          <h1 className="text-pallette-60 text-4xl md:text-4xl font-bold w-fit max-w-screen-sm leading-tight [text-shadow:_2px_2px_0_rgb(7_89_139)]">
            Detrás de una linda sonrisa, hay una boca sana
          </h1>
          <h2 className="max-w-screen-sm text-lg md:text-xl font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            En Buccasan brindamos un servicio de alta calidad con profesionales de amplia experiencia para que obtengas la sonrisa que siempre soñaste.
          </h2>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=51974980380&text=Hola%20Bucassan!%20Vengo%20del%20sitio%20web%20y%20deseo%20reservar%20mi%20cita."
            className="flex w-fit items-center gap-4 bg-pallette-10 rounded-full px-6 py-3 text-white hover:bg-pallette-10-contrast transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              ></path>
            </svg>
            <span className="font-medium text-lg">Reserva Tu Cita</span>
          </a>
        </div>
      </div>
    </section>
    <section className="h-[calc(250px)] max-w-7xl mx-auto">
      <CardHero
        contents={[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 256">
                <path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"></path>
              </svg>
            ),
            iconBackgroundColor: "bg-pallette-10",
            backgroundColor: "bg-pallette-10-contrast",
            textItems: [
              { label: "Teléfono", content: "+51 974 980 380" },
              { label: "Correo", content: "buccasanclinica@gmail.com" }
            ]
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8l4 4m9-4c0 7.18-5.82 13-13 13S3 23.18 3 16S8.82 3 16 3s13 5.82 13 13"></path>
              </svg>
            ),
            iconBackgroundColor: "bg-pallette-10",
            backgroundColor: "bg-pallette-10-contrast",
            textItems: [
              { label: "Dirección", content: "Av. Los Laureles 328, Paucarbambilla, Huánuco" },
              { label: "Horario", content: "Lun-Sab: 8am - 8pm" }
            ]
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 16 16">
                <path fill="currentColor" d="m14.914 4l-9.47 9.47L1.09 8.393L2.608 7.09l2.948 3.44L13.5 2.585z"></path>
              </svg>
            ),
            iconBackgroundColor: "bg-pallette-10",
            backgroundColor: "bg-pallette-10-contrast",
            textItems: [
              { label: "Métodos de pago", content: "Aceptamos pagos en efectivo, transferencias y tarjetas de débito o crédito" }
            ],
            paymentIcons: [
              {
                svg: (
                  <Image
                    className=""
                    src="/icons/yape.svg"
                    alt='Yape'
                    width={32}
                    height={32}
                  />
                ),
                alt: "Yape"
              },
              {
                svg: (
                  <Image
                    className=""
                    src="/icons/plin.png"
                    alt='Plin'
                    width={32}
                    height={32}
                  />
                ),
                alt: "Plin"
              },
              {
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
                    <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z" />
                    <path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z" />
                    <path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z" />
                  </svg>
                ),
                alt: "Visa"
              },
              {
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
                    <path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z" />
                    <path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z" />
                    <path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z" />
                  </svg>
                ),
                alt: "Mastercard"
              }
            ]
          }
        ]}
      />
    </section>
    </>
  );
}
import Image from 'next/image';

export default function Sede() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-36 mt-16">
        {/* Background */}
        <div className="absolute h-full w-full z-[-2] bg-gradient-to-r from-pallette-30/90 via-pallette-30/60 to-transparent">
          <Image
            className="absolute object-cover top-0 right-0 h-full z-[-1] bg-cover"
            src="/images/sede-top.png"
            alt=""
            style={{
              maskImage: 'linear-gradient(to right, transparent 1%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 10%, black 100%)'
            }}
          />
        </div>
        <div className="h-full w-full bg-black bg-opacity-10">
          {/* Contenido */}
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-3xl font-bold w-fit max-w-screen-sm">
              Ubicanos en Huánuco
            </h1>
            <p>Amarilis, Av. Los laureles 328</p>
          </div>
        </div>
      </section>
      
      {/* Sede Section */}
      <section className='max-w-7xl mx-auto py-2 px-2'>
      <div className="relative w-full p-2 space-y-2">
        <div className="relative w-auto overflow-hidden shadow-xl bg-gray-100">
          <video 
            className="w-auto h-[360px] object-contain" // Tamaño específico: 640x360
            autoPlay 
            loop
            playsInline
            controls
          >
            <source src="/videos/ruta.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>


        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1731816540891!6m8!1m7!1sLl50qDVhnbbcvlPbJPi0KA!2m2!1d-9.939883282202144!2d-76.24682301093155!3f146.95901!4f0!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.2410984628048!2d-76.24682301093155!3d-9.939883282202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e813d38951%3A0x9908a3397a140d05!2sAv.%20Los%20Laureles%20338%2C%20Amarilis%2010003!5e0!3m2!1ses-419!2spe!4v1731816562762!5m2!1ses-419!2spe"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
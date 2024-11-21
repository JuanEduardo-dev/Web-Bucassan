import Image from 'next/image';

export default function Servicios() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-36 mt-16">
        {/* Background */}
        <div className="absolute h-full w-full z-[-2] bg-gradient-to-r from-pallette-10/90 via-pallette-10/60 to-transparent">
          <Image
            className="absolute object-cover top-0 right-0 h-full z-[-1] bg-cover"
            src="/images/sede-top.png"
            alt=""
            style={{
              maskImage: 'linear-gradient(to right, transparent 1%, black 50%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 10%, black 50%, black 100%)'
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
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </section>
    </>
  );
}
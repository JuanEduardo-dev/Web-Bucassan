
import Image from 'next/image';

const InfoResults = () => {
  return (
    <>
    {/* Header Section */}
    <div className="max-w-7xl mx-auto mb-8 text-left reveal fade-left">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pallette-10">
        Historias creadas por personas como tú
      </h2>
      <p className="text-sm md:text-base text-gray-600">
        En Buccasan, logramos un caso de éxito con la colocación de carillas de resina en una paciente. 
        A través de un enfoque integral y multidisciplinario, evaluamos tanto los factores clínicos 
        como los funcionales, considerando sus hábitos, antecedentes y necesidades particulares.
      </p>
    </div>

    {/* Gallery Section */}
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center gap-4">
        {/* Left Image - Hidden on mobile */}
        <div className="hidden md:block w-1/3 aspect-[3/4] reveal fade-left">
          <Image
            className="w-full object-cover rounded-lg"
            src="/images/resultado-left.jpg"
            alt=""
            style={{
              width: 'auto', height: '100%',
            }}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        {/* Center Video */}
        <div className="w-full md:w-1/3 aspect-[3/4]">
          <div className="reveal fade-up relative w-full pt-[160%] md:pt-[150%]">
            <iframe
              className="absolute top-1 left-0 w-full h-full rounded-lg"
              src="https://youtube.com/embed/z3LG9o43lI4?si=-gfDO3vrwJ9cXFVB"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Image - Hidden on mobile */}
        <div className="hidden md:block w-1/3 aspect-[3/4] reveal fade-right">
          <Image
            className="w-full object-cover rounded-lg"
            src="/images/resultado-right.jpg"
            alt=""
            style={{
              width: 'auto', height: '100%',
            }}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default InfoResults;
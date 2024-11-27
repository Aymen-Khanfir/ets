import HeroImage from '@/assets/images/hero_image.png';

export default function Hero() {
  return (
    <section
      id='accueil'
      className='relative h-[100dvh] w-full overflow-hidden'
    >
      {/* Background Image */}
      <img
        src={HeroImage}
        alt='Industrial workspace'
        className='object-cover'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-white/80 m-6'>
        <div className='container mx-auto h-full flex flex-col items-center justify-center text-center px-4'>
          {/* Company Name */}
          <h1 className='text-[#081394] font-bold text-5xl md:text-6xl mb-6'>
            ETS LOUATI
            <br />
            COLLAGE
          </h1>

          {/* Tagline */}
          <p className='text-xl md:text-2xl text-gray-800 max-w-3xl'>
            Votre partenaire idéal pour des solutions de contre-collage sur
            mesure !
          </p>
        </div>
      </div>
    </section>
  );
}

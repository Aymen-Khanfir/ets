import AboutImage from '@/assets/images/about_image.png';

import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section className='bg-[#081394] py-20' id='about'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          {/* Text Content */}
          <div className='space-y-6'>
            <h2 className='text-white text-4xl md:text-5xl font-bold'>
              Votre partenaire idéal pour des solutions de contre-collage sur
              mesure !
            </h2>
            <p className='text-white text-lg md:text-xl leading-relaxed'>
              ETS Louati Collage, avec plus de 30 ans d&apos;expérience dans
              l&apos;industrie textile, est spécialisé dans le contrecollage de
              textiles et divers matériaux. Nous garantissons des résultats de
              haute qualité et durables.
            </p>
            <Button className='bg-white text-[#081394] hover:bg-gray-100'>
              Contactez-nous
            </Button>
          </div>

          {/* Image */}
          <div className='relative'>
            <div className='relative aspect-square max-w-md mx-auto'>
              <div className='absolute inset-0 bg-white transform rotate-45 -z-10'></div>
              <img
                src={AboutImage}
                alt='Professional in work uniform'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

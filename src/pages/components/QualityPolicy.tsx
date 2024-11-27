import Quality1 from '@/assets/images/quality1.png';
import Quality2 from '@/assets/images/quality2.png';

export default function QualityPolicy() {
  return (
    <section className='py-20' id='quality'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16 space-y-4'>
          <h3 className='text-gray-600 text-lg'>DÉCOUVRIR</h3>
          <h2 className='text-[#081394] text-3xl md:text-4xl font-bold'>
            NOTRE POLITIQUE DE QUALITÉ
          </h2>
        </div>

        {/* Description */}
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <p className='text-gray-800 text-lg leading-relaxed'>
            Chez ETS Louati Collage, nous mettons un point d&apos;honneur à
            offrir un travail de qualité supérieure. Grâce à des matériaux de
            premier choix et des techniques de collage avancées, nous
            garantissons des produits durables et parfaitement finis, répondant
            aux plus hauts standards pour satisfaire nos clients.
          </p>
        </div>

        {/* Service Cards */}
        <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {/* Applications Card */}
          <div className='relative aspect-[4/3] rounded-lg overflow-hidden'>
            <img
              src={Quality1}
              alt='Applications diverses dans le domaine du collage'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#081394]/90 to-transparent flex flex-col justify-end p-6'>
              <h3 className='text-white text-sm mb-2'>
                Mode, Mobilier, Automobile, et Plus Encore!
              </h3>
              <p className='text-white text-2xl font-bold'>
                APPLICATIONS
                <br />
                POLYVALENTES
              </p>
            </div>
          </div>

          {/* Quality Card */}
          <div className='relative aspect-[4/3] rounded-lg overflow-hidden'>
            <img
              src={Quality2}
              alt='Processus de collage de qualité'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#081394]/90 to-transparent flex flex-col justify-end p-6'>
              <div className='absolute top-6 right-6'>
                <div className='bg-yellow-400 rounded-full p-2'>
                  <span className='text-xs font-bold text-[#081394]'>100%</span>
                  <span className='block text-[0.6rem] text-[#081394]'>
                    QUALITÉ
                  </span>
                </div>
              </div>
              <h3 className='text-white text-2xl font-bold'>
                COLLAGE DE
                <br />
                QUALITÉ
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

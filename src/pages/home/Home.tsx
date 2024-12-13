import MainLayout from '@/components/layouts/main-layout.tsx';
import BlurFade from '@/components/ui/blur-fade.tsx';

import About from '@/pages/home/sections/About.tsx';
import Contact from '@/pages/home/sections/Contact.tsx';
import Hero from '@/pages/home/sections/Hero.tsx';
import QualityPolicy from '@/pages/home/sections/QualityPolicy.tsx';
import Sectors from '@/pages/home/sections/Sectors.tsx';

function Home() {
  return (
    <MainLayout>
      <BlurFade delay={0.2} inView>
        <Hero />
      </BlurFade>
      <Sectors />
      <About />
      <QualityPolicy />
      <Contact />
    </MainLayout>
  );
}

export default Home;

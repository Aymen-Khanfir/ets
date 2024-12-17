import MainLayout from '@/components/layouts/main-layout.tsx';
import Sectors from '@/components/shared/sectors.tsx';
import BlurFade from '@/components/ui/blur-fade.tsx';

import About from '@/pages/home/sections/about.tsx';
import Contact from '@/pages/home/sections/contact.tsx';
import Hero from '@/pages/home/sections/hero.tsx';
import QualityPolicy from '@/pages/home/sections/quality-policy.tsx';

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

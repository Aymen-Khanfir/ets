import MainLayout from '@/components/layouts/main-layout.tsx';
import BlurFade from '@/components/ui/blur-fade.tsx';

import About from '@/pages/home/components/About.tsx';
import Contact from '@/pages/home/components/Contact.tsx';
import Hero from '@/pages/home/components/Hero.tsx';
import QualityPolicy from '@/pages/home/components/QualityPolicy.tsx';
import { Sectors2 } from '@/pages/home/components/Sectors.tsx';

function Home() {
  return (
    <MainLayout>
      <BlurFade delay={0.2} inView>
        <Hero />
      </BlurFade>
      <Sectors2 />
      <About />
      <QualityPolicy />
      <Contact />
    </MainLayout>
  );
}

export default Home;

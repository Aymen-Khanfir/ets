import About from '@/pages/components/About.tsx';
import Contact from '@/pages/components/Contact.tsx';
import Hero from '@/pages/components/Hero.tsx';
import QualityPolicy from '@/pages/components/QualityPolicy.tsx';
import { Sectors2 } from '@/pages/components/Sectors.tsx';

import MainLayout from '@/components/layouts/main-layout.tsx';

function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Sectors2 />
        <About />
        <QualityPolicy />
        <Contact />
      </MainLayout>
    </>
  );
}

export default Home;

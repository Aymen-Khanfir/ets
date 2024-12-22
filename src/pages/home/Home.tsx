import HeroImage from '@/assets/images/hero_image.png';

import About from '@/pages/home/components/about.tsx';
import Contact from '@/pages/home/components/contact.tsx';
import QualityPolicy from '@/pages/home/components/quality-policy.tsx';

import Layout from '@/components/layouts/Layout.tsx';
import Hero from '@/components/shared/hero.tsx';
import SectorsCarousel from '@/components/shared/sectors-carousel.tsx';
import BlurFade from '@/components/ui/blur-fade.tsx';

function Home() {
  return (
    <Layout>
      <BlurFade delay={0.2} inView>
        <Hero imageSource={HeroImage} />
      </BlurFade>
      <SectorsCarousel />
      <About />
      <QualityPolicy />
      <Contact />
    </Layout>
  );
}

export default Home;

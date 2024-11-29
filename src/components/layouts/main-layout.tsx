import React from 'react';

import Footer from '@/components/Footer.tsx';
import Navbar from '@/components/Navbar.tsx';

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <div className='mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Main;

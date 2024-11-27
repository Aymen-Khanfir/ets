import React from 'react';

import Footer from '@/components/Footer.tsx';
import Navbar from '@/components/Navbar.tsx';

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Main;

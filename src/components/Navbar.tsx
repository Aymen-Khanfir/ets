import { Link } from '@tanstack/react-router';

import logo from '@/assets/images/logo.png';

import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <header className='w-full border-b'>
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center'>
            <img src={logo} alt={'logo'} />
          </Link>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              hash='accueil'
              className='text-gray-700 hover:text-[#14137D] transition-colors'
            >
              Accueil
            </Link>
            <Link
              hash='sectors'
              className='text-gray-700 hover:text-[#14137D] transition-colors'
            >
              Secteurs
            </Link>
            <Link
              hash='about'
              className='text-gray-700 hover:text-[#14137D] transition-colors'
            >
              About
            </Link>
            <Link
              hash='quality'
              className='text-gray-700 hover:text-[#14137D] transition-colors'
            >
              Qualité
            </Link>
          </div>

          {/* Contact Button */}
          {/* todo: change the button background */}

          <Button className='bg-[#081394] hover:bg-[#0f0f60] text-white'>
            <Link hash={'contact'}>Contactez-nous</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

'use client'

import { useEffect, useState } from 'react';
import Link from './Link';
import { HiOutlineEnvelope } from 'react-icons/hi2';

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full py-5 ${scroll > 0 ? 'bg-white shadow-md' : ''}`}>
      <div className='flex justify-between items-center container mx-auto'>
        <div className='flex items-center space-x-3'>
          <HiOutlineEnvelope className='text-dark_primary' />
          <p className='text-sm text-dark_primary'>
            m4teusleonardo@gmail.com
          </p>
        </div>
        <div>
          <div className="flex space-x-6 text-[#F7F7F7]">
            <Link>
              Sobre
            </Link>
            <Link>
              Experiência
            </Link>
            <Link>
              Portfólio
            </Link>
            <Link>
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
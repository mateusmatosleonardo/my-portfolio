import Header from '@/components/Header'
import Image from 'next/image'
import Me from '@/assets/eu.png'
import { HiOutlineArrowDownOnSquare } from 'react-icons/hi2';
import { About } from '../components/About';
import { Experience } from '../components/Experience';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <div className="container mx-auto h-screen">
        <div className='flex flex-col justify-center items-center h-full'>
          <div className='flex flex-col items-center space-y-4 my-40'>
            <div className='flex flex-col items-center space-y-2'>
              <Image
                src={Me}
                width={100}
                height={100}
                alt="photo"
                quality={100}
                className='rounded-full'
              />
              <p className='text-[0.955rem] text-dark_primary'>
                Oi, eu sou o Mateus.
              </p>
            </div>
            <div className='w-full max-w-[480px]'>
              <h2 className='text-3xl text-center text-dark_primary mb-4'>
                Desenvolvedor de Software
              </h2>
              <p className='text-[0.955rem] text-[#5F5F5F] text-center'>
                A chave de tudo é inovação! Deve-se desenvolver ideias revolucionárias que redefinam o sistema. ✨
              </p>
            </div>
            <div className='flex items-center gap-x-4 pt-4'>
              <div className='bg-dark_primary rounded-full' role='button'>
                <p className='text-[0.955rem] font-light text-white py-3 px-4'>
                  Contate-me
                </p>
              </div>
              <div className='flex items-center gap-x-2 py-3 px-4' role='button'>
                <p className='text-[0.955rem] text-dark_primary'>
                  Baixar CV
                </p>
                <HiOutlineArrowDownOnSquare className='text-dark_primary' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />

      <Experience />
    </div >
  );
}

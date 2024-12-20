import { HiDevicePhoneMobile, HiMiniComputerDesktop, HiOutlineCircleStack } from "react-icons/hi2";

export function About() {
  return (
    <div className="container mx-auto">
      <p className='text-[0.955rem] text-dark_primary text-center mb-8'>
        Sobre
      </p>

      <div className='w-full max-w-[1024px] mx-auto flex flex-col sm:flex-row gap-x-6 lg:gap-x-0 px-2 sm:px-0'>
        <div className='flex flex-col space-y-6'>
          <div className='flex items-center space-x-4'>
            <div className='p-3 rounded-full bg-dark_primary'>
              <HiMiniComputerDesktop className='text-white' />
            </div>
            <div>
              <p className='text-[0.955rem] text-dark_primary'>
                Desenvolvimento Front-End
              </p>
              <p className='text-[0.855rem] text-[#5F5F5F]'>
                Desenvolvimento de interfaces intuitivas e funcionais.
              </p>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='p-3 rounded-full bg-dark_primary'>
              <HiDevicePhoneMobile className='text-white' />
            </div>
            <div>
              <p className='text-[0.955rem] text-dark_primary'>
                Desenvolvimento Mobile
              </p>
              <p className='text-[0.855rem] text-[#5F5F5F]'>
                Criação de aplicativos móveis de alto desempenho.
              </p>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='p-3 rounded-full bg-dark_primary'>
              <HiOutlineCircleStack className='text-white' />
            </div>
            <div>
              <p className='text-[0.955rem] text-dark_primary'>
                Desenvolvimento Back-End
              </p>
              <p className='text-[0.855rem] text-[#5F5F5F]'>
                Implementação de sistemas escaláveis e eficientes.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-6 sm:mt-0'>
          <div className='w-full'>
            <h2 className='text-3xl text-dark_primary text-center'>
              Meu serviço
            </h2>
            <div className='w-full max-w-[680px] mx-auto'>
              <p className='text-[0.955rem] text-[#5F5F5F] tracking-tight mt-6'>
                Sou desenvolvedor full stack com mais de 5 anos de experiência, especializado em criar soluções front-end e mobile modernas e funcionais. Tenho sólida experiência em desenvolvimento back-end e estou sempre expandindo meus conhecimentos como estudante de Ciência da Computação, unindo tecnologia e inovação para entregar resultados excepcionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
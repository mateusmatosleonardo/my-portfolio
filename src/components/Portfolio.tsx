import Image from "next/image";
import BaratoIcon from '@/assets/barato-icon.jpg';
import SpottIcon from '@/assets/spott-icon.png';
import ArquibaIcon from '@/assets/arquiba-icon.png';
import { PiGooglePlayLogo } from "react-icons/pi";

export function Portfolio() {
  return (
    <div className="container mx-auto mt-48 pb-12">
      <p className='text-[0.955rem] text-dark_primary text-center mb-8'>
        Portfólio
      </p>

      <div className='w-full max-w-[1024px] mx-auto flex flex-col sm:flex-row px-2 sm:px-0'>
        <div className="w-full flex items-center gap-x-5">
          <div className="flex flex-col w-[280px]">
            <div className="flex justify-center items-center w-[280px] h-[160px] rounded-md bg-[#8700a5]">
              <Image
                src={BaratoIcon}
                width={80}
                height={80}
                alt="photo"
                quality={100}
              />
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <PiGooglePlayLogo className="text-dark_primary" size={20} />
              <p className="text-dark_primary text-[0.955rem]">
                Barato: Ofertas com cashback
              </p>
            </div>
            <span className="text-[#5F5F5F] text-[0.855rem] text-center mt-2">
              100 mil+ downloads (4,6)  <span className="text-[0.955rem]">★</span>
            </span>
          </div>

          <div className="flex flex-col w-[280px]">
            <div className="flex justify-center items-center w-[280px] h-[160px] rounded-md bg-[#3885C6]">
              <Image
                src={ArquibaIcon}
                width={80}
                height={80}
                alt="photo"
                quality={100}
              />
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <PiGooglePlayLogo className="text-dark_primary" size={20} />
              <p className="text-dark_primary text-[0.955rem]">
                Arquiba
              </p>
            </div>
            <span className="text-[#5F5F5F] text-[0.855rem] text-center mt-2">
              10 mil+ downloads (4,3) <span className="text-[0.955rem]">★</span>
            </span>
          </div>

          <div className="flex flex-col w-[280px]">
            <div className="flex justify-center items-center w-[280px] h-[160px] rounded-md bg-[#1c4b98]">
              <Image
                src={SpottIcon}
                width={80}
                height={80}
                alt="photo"
                quality={100}
              />
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <PiGooglePlayLogo className="text-dark_primary" size={20} />
              <p className="text-dark_primary text-[0.955rem]">
                Spott - Recarregue seu veículo
              </p>
            </div>
            <span className="text-[#5F5F5F] text-[0.855rem] text-center mt-2">
              500+ downloads (3,5) <span className="text-[0.955rem]">★</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export function Experience() {
  return (
    <div className="container mx-auto mt-48">
      <p className='text-[0.955rem] text-dark_primary text-center mb-8'>
        Experiência
      </p>

      <div className='w-full max-w-[1024px] mx-auto flex flex-col sm:flex-row gap-x-6 lg:gap-x-0 px-2 sm:px-0'>
        <div className="w-full flex">
          <div className="flex flex-col gap-y-[72px] w-[50%]">
            <div>
              <p className="text-[0.955rem] text-dark_primary">
                Barato Coletivo (Remoto)
              </p>
              <p className="text-[0.855rem] text-[#5F5F5F]">
                1 ano e 6 meses (2023-2024)
              </p>
            </div>
            <div>
              <p className="text-[0.955rem] text-dark_primary">
                C3C Software (Remoto)
              </p>
              <p className="text-[0.855rem] text-[#5F5F5F]">
                1 ano (2022-2023)
              </p>
            </div>
            <div>
              <p className="text-[0.955rem] text-dark_primary">
                Grupo Arkos (Remoto)
              </p>
              <p className="text-[0.855rem] text-[#5F5F5F]">
                9 meses (2021-2022)
              </p>
            </div>
            <div>
              <p className="text-[0.955rem] text-dark_primary">
                Freelancer
              </p>
              <p className="text-[0.855rem] text-[#5F5F5F]">
                2 anos (2019-2021)
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-5 h-5 rounded-full bg-[#E7E7E7]">
                  <div className="w-2 h-2 bg-dark_primary rounded-full" />
                </div>
                <div className="w-[1px] h-24 bg-dark_primary" />
                <div className="flex justify-center items-center w-5 h-5 rounded-full bg-[#E7E7E7]">
                  <div className="w-2 h-2 bg-dark_primary rounded-full" />
                </div>
                <div className="w-[1px] h-24 bg-dark_primary" />
                <div className="flex justify-center items-center w-5 h-5 rounded-full bg-[#E7E7E7]">
                  <div className="w-2 h-2 bg-dark_primary rounded-full" />
                </div>
                <div className="w-[1px] h-24 bg-dark_primary" />
                <div className="flex justify-center items-center w-5 h-5 rounded-full bg-[#E7E7E7]">
                  <div className="w-2 h-2 bg-dark_primary rounded-full" />
                </div>
              </div>
              {/* description*/}
              <div className="flex flex-col gap-y-[72px] ml-4">
                <div>
                  <p className="text-[0.955rem] text-dark_primary">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-[0.855rem] text-[#5F5F5F]">
                    Atuando com desenvolvimento de sites, apps e micro sistemas.
                  </p>
                </div>
                <div>
                  <p className="text-[0.955rem] text-dark_primary">
                    Desenvolvedor Mobile
                  </p>
                  <p className="text-[0.855rem] text-[#5F5F5F]">
                    Atuando com desenvolvimento de apps.
                  </p>
                </div>
                <div>
                  <p className="text-[0.955rem] text-dark_primary">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-[0.855rem] text-[#5F5F5F]">
                    Atuando com desenvolvimento de web sites, SPA's e apps.
                  </p>
                </div>
                <div>
                  <p className="text-[0.955rem] text-dark_primary">
                    Desenvolvedor Front-end
                  </p>
                  <p className="text-[0.855rem] text-[#5F5F5F]">
                    Atuando em pequenos projetos e projetos open-source.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
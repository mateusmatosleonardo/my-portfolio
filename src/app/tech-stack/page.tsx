import TechItem from "@/components/tech-item";
import { stack } from "../../lib/stack";

export default function TechStackPage() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col h-full mx-auto max-w-xl">
        <div className="flex flex-col space-y-4 my-32 text-base text-[0.88rem] text-white">
          <h2 className="text-[1.8rem] font-semibold">Tech Stack</h2>
          <span className="text-default-gray text-[0.96rem]">
            Algumas ferramentas, tecnologias e produtos que uso todos os dias.
          </span>

          <div className="pt-6">
            <h2 className="text-[1.8rem] font-semibold text-white">Front-end</h2>
            <div className="flex flex-col mt-6 gap-4">
              {stack.frontend.map((item, index) => (
                <TechItem {...item} key={index} />
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-[1.8rem] font-semibold text-white">Back-end</h2>
            <div className="flex flex-col mt-6 gap-4">
              {stack.backend.map((item, index) => (
                <TechItem {...item} key={index} />
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-[1.8rem] font-semibold text-white">
              Linguagens de Programação
            </h2>
            <div className="flex flex-col mt-6 gap-4">
              {stack.languages.map((item, index) => (
                <TechItem {...item} key={index} />
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-[1.8rem] font-semibold text-white">Infraestrutura</h2>
            <div className="flex flex-col mt-6 gap-4">
              {stack.infrastructure.map((item, index) => (
                <TechItem {...item} key={index} />
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-[1.8rem] font-semibold text-white">
              Versionamento de Código
            </h2>
            <div className="flex flex-col mt-6 gap-4">
              {stack.codeVersioning.map((item, index) => (
                <TechItem {...item} key={index} />
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-[1.8rem] font-semibold text-white">Ferramentas</h2>
            <div className="flex flex-col mt-6 gap-4">
              {stack.tools.map((item, index) => (
                <TechItem {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

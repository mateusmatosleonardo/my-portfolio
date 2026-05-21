"use client";

import { useState } from "react";
import { MdCalendarToday, MdExpandMore, MdExpandLess } from "react-icons/md";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  projects: {
    title: string;
    description: string;
  }[];
  technologies: string[];
}

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Barato Coletivo",
      role: "Front-end Developer | React | React Native",
      period: "Abr 2023 - Set 2024",
      projects: [
        {
          title: "◦ Aplicativo de ofertas do Barato Coletivo:",
          description: `
          O aplicativo do Barato Coletivo não contava com um sistema de carrinho, exigindo que os usuários comprassem produtos individualmente, o que comprometia a experiência e limitava o volume de compras por sessão. Fui responsável por desenvolver a funcionalidade de carrinho e o novo fluxo de checkout, permitindo a compra de múltiplos produtos de forma fluida. A mudança otimizou a jornada de compra, eliminou atritos no processo e permitiu ao usuário comprar mais em menos etapas, favorecendo compras de maior volume e com maior chance de conclusão. Utilizei React Native e TypeScript na construção da solução, e Zustand para o gerenciamento eficiente de estados.
          `,
        },
        {
          title: "◦ Sistema Gerenciador de Parceiros e Relatórios Financeiros:",
          description: `
          Os analistas financeiros enfrentavam dificuldades para gerenciar parceiros e gerar relatórios de forma eficiente, o que impactava a organização dos dados e a tomada de decisões. Para resolver isso, desenvolvi uma dashboard com funcionalidades de cadastro, edição, exclusão e visualização de parceiros, além da geração e exportação de relatórios financeiros filtrados por período e data de pagamento.
          A solução otimizou o acesso às informações, agilizou processos internos e aumentou a eficiência no gerenciamento financeiro de parceiros da empresa. O sistema foi desenvolvido com React, Next.js, TypeScprit, Tailwind CSS e Axios para requisições HTTP.
          `,
        },
        {
          title: "◦ Sistema de Avaliação de Ofertas:",
          description: `
          Desenvolvi um sistema de avaliação que permite aos usuários enviar reações e comentários sobre as ofertas, promovendo maior engajamento e gerando feedback direto para a melhoria contínua dos produtos e da experiência do cliente. A solução foi construída com React e Vite, resultando em um sistema leve, rápido e eficiente, com poucas dependências e excelente desempenho em produção.
          `,
        },
      ],

      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
      ],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="flex flex-col h-full mx-auto max-w-xl">
          <div className="flex flex-col space-y-6 my-32 text-[0.96rem] text-white">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">
                Experiência Profissional
              </h1>
              <p className="text-[#a1a1a1]">
                Minha jornada profissional ao longo dos anos.
              </p>
            </div>

            <div className="h-4" />

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[#1A1A1A] rounded-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full text-left p-4 hover:bg-[#222222] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{exp.role}</h3>
                        </div>
                        <p className="text-[#a1a1a1] text-[0.88rem]">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-[#a1a1a1] text-[0.82rem]">
                          <MdCalendarToday
                            className="flex-shrink-0"
                            size={14}
                          />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {expandedId === exp.id ? (
                          <MdExpandLess className="text-[#a1a1a1]" size={24} />
                        ) : (
                          <MdExpandMore className="text-[#a1a1a1]" size={24} />
                        )}
                      </div>
                    </div>
                  </button>

                  {expandedId === exp.id && (
                    <div className="px-4 pb-4 space-y-4 animate-[animeFlash_0.3s_ease-in-out_1]">
                      <div className="h-px bg-[#2A2A2A]" />

                      {exp.projects.map((item, index) => (
                        <div key={index}>
                          <h3 className="font-medium">{item.title}</h3>

                          <p className="text-[#a1a1a1] text-[0.88rem] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}

                      {/* <div>
                        <h4 className="text-[0.88rem] font-medium mb-2">
                          Principais Responsabilidades:
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-[#a1a1a1] text-[0.82rem] leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0"
                            >
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div> */}

                      <div>
                        <h4 className="font-medium mb-2">Tecnologias:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-[#2A2A2A] text-[#a1a1a1] text-[0.78rem] rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-4" />

            <div className="bg-[#1A1A1A] rounded-md p-4 space-y-2">
              <p className="text-[0.88rem]">
                💡 <span className="font-medium">Dica:</span> Clique em cada
                experiência para ver mais detalhes!
              </p>
              <p className="text-[#a1a1a1] text-[0.82rem]">
                Cada projeto foi uma oportunidade de aprender algo novo e
                crescer como profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import GIF from "@/assets/gif-hero.gif";
import { MdContentCopy } from "react-icons/md";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const email = "m4teusleonardo@gmail.com";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("erro ao copiar o e-mail:", error);
    }
  }

  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="flex flex-col h-full mx-auto max-w-xl">
          <div className="flex flex-col space-y-4 my-32 text-[0.96rem] text-white">
            <span>Olá! Eu sou Mateus Leonardo.</span>

            <span>
              Sou Desenvolvedor de Software Full Stack com mais de 4 anos de experiência e
              estou no penúltimo semestre da minha graduação em Ciência da Computação.
            </span>

            <span>
              Ao longo da minha jornada, me envolvi em vários projetos legais, sempre
              focando em criar soluções rápidas, seguras e fáceis de usar. Gosto de pensar
              em como aquilo vai ser útil de verdade pra quem estiver usando, se vai
              facilitar alguma tarefa, resolver um problema ou simplesmente tornar a
              experiência mais agradável.
            </span>

            <span>
              Acredito que inovação não é só criar algo do zero, mas também melhorar o que
              já existe com criatividade, propósito e um olhar atento para os detalhes.
            </span>

            <div className="h-2" />

            <div>
              <Image src={GIF} className="w-full" alt="profile-image" quality={100} />
            </div>

            <div className="h-2" />

            <span>
              Quando não estou programando, gosto de assistir animes, ler livros, jogar
              com amigos e explorar coisas novas que me interessam, desde tecnologia até
              curiosidades aleatórias.
            </span>

            <span>Quer bater um papo?</span>

            <div>
              <p className="text-[#a1a1a1] text-[0.82rem] font-medium">
                Me mande um e-mail para:
              </p>

              <div className="flex items-center justify-between w-full py-1.5 mt-0.5 rounded-md bg-[#1A1A1A]">
                <span className="text-[#a1a1a1] text-[0.82rem] font-medium ml-3">
                  m4teusleonardo@gmail.com
                </span>
                <button className="px-1 py-1 mr-1" onClick={handleCopy}>
                  <MdContentCopy className="text-white" />
                </button>
              </div>
              {copied && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-[#1A1A1A] text-white text-sm font-medium rounded-md shadow-lg animate-[animeFlash_0.6s_ease-in-out_1]">
                  🔥 Copiado! Isso é o começo de uma grande jornada!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

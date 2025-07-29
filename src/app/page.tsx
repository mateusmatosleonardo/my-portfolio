"use client";

import { useState } from "react";
import Image from "next/image";
import GIF from "@/assets/gif.gif";
import { MdContentCopy } from "react-icons/md";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const email = "m4teusleonardo@gmail.com";

  const messages = [
    "Você está no caminho certo, jovem dev. Continue treinando suas habilidades de TypeScript e DOM no templo sagrado de React.",
    "Não tema os bugs. Eles são apenas sombras que revelam a luz do conhecimento.",
    "A jornada de mil commits começa com um `npm start`.",
    "Todo mestre já foi um júnior sem Stack Overflow.",
    "Refatore como quem esculpe uma espada lendária.",
    "Se sua aplicação quebrou... é porque ela ainda não despertou seu verdadeiro potencial.",
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("erro ao copiar o e-mail:", error);
    }
  }

  function handleClick() {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 6000);
  }

  return (
    <div className="w-full bg-black/95">
      {/* <Header /> */}
      <div className="mx-auto">
        <div className="flex flex-col h-full mx-auto max-w-xl">
          <div className="flex flex-col space-y-4 my-32 text-base text-[0.895rem] text-white">
            <span>Olá! Eu sou Mateus Leonardo.</span>

            <span>
              Sou Desenvolvedor de Software Full Stack com mais de 4 anos de experiência e
              estou no penúltimo semestre da minha graduação em Ciência da Computação.
            </span>

            <span>
              Ao longo da minha jornada, me envolvi em vários projetos legais, sempre
              focando em criar soluções performáticas, fáceis de usar e bem otimizadas.
            </span>

            <div className="h-2" />

            <div>
              <Image src={GIF} className="w-full" alt="profile-image" quality={100} />
            </div>

            <div className="h-2" />

            <span>
              Quando não estou programando, gosto de assistir animes, ler mangás, jogar
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

      {/* <div className="mt-6 flex flex-col items-center">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 transition-all rounded-full shadow-lg active:scale-95"
        >
          <GiScrollUnfurled />
          Receber mensagem do Sensei
        </button>

        <AnimatePresence>
        {showMessage && (
          <div
            // initial={{ opacity: 0, scale: 0.9, y: 10 }}
            // animate={{ opacity: 1, scale: 1, y: 0 }}
            // exit={{ opacity: 0, scale: 0.9, y: 10 }}
            // transition={{ duration: 0.4 }}
            className="mt-4 px-5 py-3 max-w-md text-center text-sm bg-[#1f1f1f] text-green-400 border border-green-700 rounded-lg shadow-md"
          >
            {message}
          </div>
        )}
        </AnimatePresence>
      </div> */}
    </div>
  );
}

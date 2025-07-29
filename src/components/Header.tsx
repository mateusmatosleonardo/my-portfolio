"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Me from "@/assets/eu.png";

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full py-3.5 z-10 ${scroll > 0 ? "bg-black/90 shadow-md" : ""}`}
    >
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center space-x-3">
          <Image
            src={Me}
            width={40}
            height={40}
            alt="profile-image"
            quality={100}
            className="rounded-full"
          />
          <p className="font-medium text-white">Mateus Leonardo</p>
        </div>
        <div>
          <button className="text-sm font-medium px-4 py-2.5 rounded-3xl bg-[#222121] text-white">
            Entre em contato
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Me from "@/assets/eu.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { navItems } from "@/lib/nav-items";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full py-3.5 z-50 ${
          scroll > 0 || menuOpen ? "bg-black/90 shadow-md" : ""
        }`}
      >
        <div className="flex justify-between items-center container mx-auto px-4">
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/mateusmatosleonardo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="p-2 rounded-full hover:bg-dark-gray text-default-gray hover:text-white transition-all duration-200"
                  role="button"
                >
                  <FaGithub className="text-xl " />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mateusmatosleonardo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="p-2 rounded-full hover:bg-dark-gray text-default-gray hover:text-white transition-all duration-200"
                  role="button"
                >
                  <FaLinkedin className="text-xl" />
                </div>
              </a>
            </div>
            <button className="hidden sm:block text-sm font-medium px-4 py-2.5 rounded-3xl bg-[#222121] text-white">
              Entre em contato
            </button>
            <button
              type="button"
              className="lg:hidden p-2 rounded-full text-white hover:bg-[#262626] transition-all duration-200"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="relative flex flex-col items-center justify-center h-full gap-2 px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="w-full max-w-xs px-4 py-3 rounded-md text-lg text-center hover:bg-[#262626] text-[#e5e5e5] duration-200 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

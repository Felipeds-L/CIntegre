"use client";

import { useState } from "react";
import Image from "next/image";
import cintegreFooter from "../../public/CIntegreFooter.svg";
import prefeituraFooter from "../../public/prefeituraLogo.svg";
import Link from "next/link";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Footer desktop */}
      <footer className="hidden sm:flex flex-col bg-[#0F57BF] py-8 px-14">
        <div className="flex justify-between w-full pb-6">
          <div className="flex gap-6 items-center">
            <Image
              src={cintegreFooter}
              alt="CIntegre Logo"
              height={143}
              width={178}
            />
            <Image
              src={prefeituraFooter}
              alt="Prefeitura Logo"
              height={120}
              width={117}
            />
          </div>

          <div className="flex gap-20 text-white">
            <div>
              <h4 className="font-bold text-lg mb-2">Links Rápidos</h4>
              <nav className="flex flex-col gap-1">
                <Link href="/">Início</Link>
                <Link href="/activities">Ações Disponíveis</Link>
                <Link href="/about-us">Sobre nós</Link>
                <Link href="/faq">FAQ</Link>
              </nav>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Legal</h4>
              <nav className="flex flex-col gap-1">
                <Link href="/">Política de Cookies</Link>
                <Link href="/">Termos e Condições</Link>
                <Link href="/">Política de Privacidade</Link>
              </nav>
            </div>
          </div>
        </div>

        <p className="text-black text-center mt-4">
          © 2025 Cintegre+. Todos os direitos reservados.
        </p>
      </footer>

      {/* Botão para abrir menu mobile */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden fixed bottom-4 right-4 bg-[#0F57BF] text-white px-5 py-3 rounded-full shadow-lg z-50"
        aria-label="Abrir menu do footer"
      >
        Menu
      </button>

      {/* Overlay do menu mobile */}
      {open && (
        <div className="sm:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="bg-[#0F57BF] rounded-t-3xl p-6 max-h-[80vh] overflow-auto">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl mb-4 font-bold"
              aria-label="Fechar menu do footer"
            >
              Fechar ✕
            </button>

            <div className="flex gap-6 items-center mb-6">
              <Image
                src={cintegreFooter}
                alt="CIntegre Logo"
                height={80}
                width={100}
              />
              <Image
                src={prefeituraFooter}
                alt="Prefeitura Logo"
                height={70}
                width={70}
              />
            </div>

            <div className="flex flex-col gap-6 text-white">
              <div>
                <h4 className="font-bold text-lg mb-2">Links Rápidos</h4>
                <nav className="flex flex-col gap-1">
                  <Link href="/">Início</Link>
                  <Link href="/activities">Ações Disponíveis</Link>
                  <Link href="/about-us">Sobre nós</Link>
                  <Link href="/faq">FAQ</Link>
                </nav>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Legal</h4>
                <nav className="flex flex-col gap-1">
                  <Link href="/">Política de Cookies</Link>
                  <Link href="/">Termos e Condições</Link>
                  <Link href="/">Política de Privacidade</Link>
                </nav>
              </div>
            </div>

            <p className="text-white text-center mt-8">
              © 2025 Cintegre+. Todos os direitos reservados.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

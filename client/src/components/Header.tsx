'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones de menu

import cintegreHeader from "../../public/CIntegreHeader.svg";

const loggedIn = true;
const ongLogged = false;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-5 bg-white border-b border-[#ddd]">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src={cintegreHeader}
            alt="Logo CIntegre"
            width={226}
            height={48}
            className="h-auto w-auto max-w-[180px] sm:max-w-[226px]"
          />
        </Link>

        {/* Botão Hamburguer no canto direito */}
        <button
          className="block sm:hidden absolute right-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menu Desktop */}
        {loggedIn && (
          <nav className="hidden sm:flex gap-8 items-center text-[#0A3A80] font-medium text-lg">
            <Link href="/activities">Pedidos Disponíveis</Link>
            <Link href="/my-activities">Meus Pedidos</Link>
            <Link href="/ranking">Ranking</Link>

            <div className="flex gap-4 items-center">
              <Link href="/profile">
                {ongLogged ? "Nome da ONG" : "Nome da Escola"}
              </Link>
              <Link href="/profile">
                <Image
                  className="border border-[#0A3A80] rounded-full w-[50px] h-[50px]"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=60&w=50&auto=format&fit=crop"
                  alt="Profile picture"
                  height={50}
                  width={50}
                />
              </Link>
              {!ongLogged && <p>1000 Pontos</p>}
            </div>
          </nav>
        )}
      </div>

      {/* Menu Mobile (dropdown) */}
      {menuOpen && loggedIn && (
        <div className="sm:hidden px-4 py-4 bg-white shadow-md text-[#0A3A80] flex flex-col gap-4 text-lg">
          <Link href="/activities" onClick={() => setMenuOpen(false)}>Pedidos Disponíveis</Link>
          <Link href="/my-activities" onClick={() => setMenuOpen(false)}>Meus Pedidos</Link>
          <Link href="/ranking" onClick={() => setMenuOpen(false)}>Ranking</Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>
            {ongLogged ? "Nome da ONG" : "Nome da Escola"}
          </Link>
          <div className="flex gap-3 items-center">
            <Image
              className="border border-[#0A3A80] rounded-full w-[40px] h-[40px]"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=60&w=50&auto=format&fit=crop"
              alt="Profile picture"
              height={40}
              width={40}
            />
            {!ongLogged && <p>1000 Pontos</p>}
          </div>
        </div>
      )}
    </header>
  );
}

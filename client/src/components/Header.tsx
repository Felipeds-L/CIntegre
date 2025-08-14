"use client";
import Image from "next/image";
import Link from "next/link";
import cintegreHeader from "../../public/CIntegreHeader.svg";
import { useUser } from "@/context/userContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className="py-5 bg-white border-b border-[#ddd]">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link href={user ? "/home" : "/"}>
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
        {user && (
          <>
            <nav className="hidden sm:flex gap-8 items-center text-[#0A3A80] font-medium text-lg">
              <Link href="/activities">Pedidos Disponíveis</Link>
              <Link href="/ranking">Ranking</Link>
            </nav>

            <div className="hidden sm:flex gap-4 items-center font-medium text-lg text-[#0A3A80]">
              {user.ong ? (
                <Link href="/profile">{user.ong.name}</Link>
              ) : (
                <Link href="/profile">
                  {user.school?.name} | {user.school?.score} pontos
                </Link>
              )}
            </div>
          </>
        )}
      </div>

      {/* Menu Mobile (dropdown) */}
      {menuOpen && user && (
        <div className="sm:hidden px-4 py-4 bg-white shadow-md text-[#0A3A80] flex flex-col gap-4 text-lg">
          <Link href="/activities" onClick={() => setMenuOpen(false)}>
            Pedidos Disponíveis
          </Link>
          <Link href="/ranking" onClick={() => setMenuOpen(false)}>
            Ranking
          </Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>
            {user.ong ? user.ong.name : user.school?.name}
          </Link>
          <div className="flex gap-3 items-center">
            {!user.ong && <p>{user.school?.score} pontos</p>}
          </div>
        </div>
      )}
    </header>
  );
}

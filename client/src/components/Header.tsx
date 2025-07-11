import Image from "next/image";
import Link from "next/link";
import cintegreHeader from "../../public/CIntegreHeader.svg";
import profile from "../../public/miku.jpg";

const loggedIn = true;
const ongLogged = false;

export default function Header() {
  return (
    <header className="py-[1.25rem] bg-white border-b border-[#ddd]">
      <div className="container items-center flex flex-wrap justify-between text-xl font-medium text-[#0A3A80]">
        <Link href="/">
          <Image
            src={cintegreHeader}
            alt="Logo CIntegre"
            width={226}
            height={48}
          />
        </Link>

        {loggedIn ? (
          <>
            <nav className="flex gap-[1.875rem] items-center">
              <Link href="/activities">Pedidos Disponíveis</Link>
              <Link href="/my-activities">Meus Pedidos</Link>
              <Link href="/ranking">Ranking</Link>
            </nav>

            <div className="flex gap-[1rem] items-center">
              {ongLogged ? (
                <Link href="/profile">Nome da ONG</Link>
              ) : (
                <Link href="/profile">Nome da Escola</Link>
              )}
              <Link href="/profile">
                <Image
                  className="border border-[#0A3A80] rounded-[9999px] w-[50px] h-[50px]"
                  src={profile}
                  alt="Profile picture"
                  height={50}
                  width={50}
                />
              </Link>
              {ongLogged ? <></> : <p>1000 Pontos</p>}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}

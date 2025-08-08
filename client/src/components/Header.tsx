import Image from "next/image";
import Link from "next/link";
import cintegreHeader from "../../public/CIntegreHeader.svg";
import getAuthUser from "@/actions/getAuthUser";

const loggedIn = true;
const ongLogged = false;

export default async function Header() {
  const { data: user } = await getAuthUser();

  return (
    <header className="py-[1.25rem] bg-white border-b border-[#ddd]">
      <div className="container items-center flex flex-wrap justify-between text-xl font-medium text-[#0A3A80]">
        <Link href={user ? "/home" : "/"}>
          <Image
            src={cintegreHeader}
            alt="Logo CIntegre"
            width={226}
            height={48}
          />
        </Link>

        {user ? (
          <>
            <nav className="flex gap-[1.875rem] items-center">
              <Link href="/activities">Todas as Atividades</Link>
              <Link href="/ranking">Ranking</Link>
            </nav>

            <div className="flex gap-[1rem] items-center">
              {user.school ? (
                <Link href="/profile">
                  {user.school.name} | {user.school.score} Pontos
                </Link>
              ) : (
                <Link href="/profile">{user.ong?.name}</Link>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}

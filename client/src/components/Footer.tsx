import Image from "next/image";
import cintegreFooter from "../../public/CIntegreFooter.svg";
import prefeituraFooter from "../../public/prefeituraLogo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#0F57BF] h-[13.75rem] items-center pl-[1.875rem] pr-[6.5rem] ">
      <div className="flex justify-between w-full pt-[2.5rem]">
        <div className="flex gap-[1.625rem] items-center">
          <Image
            src={cintegreFooter}
            alt="CIntegre Logo"
            height={143}
            width={178}
          />

          <Image
            src={prefeituraFooter}
            alt="CIntegre Logo"
            height={120}
            width={117}
          />
        </div>

        <div className="flex gap-[3.75rem] text-[#fff]">
          <div>
            <h4 className="font-bold text-[1.25rem]">Links Rápidos</h4>
            <nav className="flex flex-col gap-[0.3rem]">
              <Link href="/">Início</Link>
              <Link href="/activities">Ações Disponíveis</Link>
              <Link href="/about-us">Sobre nós</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-[1.25rem]">Legal</h4>
            <nav className="flex flex-col gap-[0.3rem]">
              <Link href="/">Política de Cookies</Link>
              <Link href="/">Termos e Condições</Link>
              <Link href="/">Política de Privacidade</Link>
            </nav>
          </div>
        </div>
      </div>

      <p className="text-[#000]">
        © 2025 Cintegre+. Todos os direitos reservados.
      </p>
    </footer>
  );
}

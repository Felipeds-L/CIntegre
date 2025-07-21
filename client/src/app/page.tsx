import ActivityCard from "@/components/general/ActivityCard";
import { CarouselCard } from "@/components/general/CarouselCard";
import RankingSmall from "@/components/general/RankingSmall";
import Image from "next/image";
import Link from "next/link";

const mockedData = {
  id: 1,
  title: "Escalada no Monte Fuji",
  ngoName: "ONG Aventura Solidária",
  date: "01/01/2001",
  description:
    "Participe de uma emocionante escalada no Monte Fuji, para arrecadar fundos para projetos de conservação ambiental.",
  tags: ["aventura", "natureza", "conservacao"],
  imageUrl:
    "https://images.unsplash.com/photo-1736108870630-db883da3cdf2?q=80&w=230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
};

const mockedData2 = {
  id: 2,
  title: "Corrida Amazônica de cria msm",
  ngoName: "ONG Verde Vida",
  date: "02/02/2002",
  description:
    "Junte-se a nós em uma corrida emocioante para arrecadar fundos para a preservação da Floresta Amazônica.",
  tags: ["aventura", "natureza", "conservacao"],
  imageUrl:
    "https://images.unsplash.com/photo-1736108870630-db883da3cdf2?q=80&w=230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
};

const lotsOfCards = [
  <ActivityCard key={mockedData.id} apiData={mockedData} />,
  <ActivityCard key={mockedData2.id} apiData={mockedData2} />,
  <ActivityCard key={mockedData2.id + 1} apiData={mockedData2} />,
  <ActivityCard key={mockedData2.id + 2} apiData={mockedData2} />,
  <ActivityCard key={mockedData2.id + 4} apiData={mockedData2} />,
  <ActivityCard key={mockedData2.id + 222} apiData={mockedData2} />,
];

const placement = [
  { position: "1", school: "Escola A", points: "100", activities: "5" },
  { position: "2", school: "Escola B", points: "90", activities: "4" },
  { position: "3", school: "Escola C", points: "80", activities: "3" },
  { position: "4", school: "Escola D", points: "70", activities: "2" },
  { position: "5", school: "Escola E", points: "60", activities: "1" },
];

export default function HomePage() {
  return (
    <section>
      {/* Hero Section */}
      <section className="bg-white pb-8">
        <div className="container flex flex-wrap items-center justify-between">
          <div>
            <h1 className="font-semibold text-7xl max-w-[600px]">
              Juntos, construindo pontes entre educação e solidariedade
            </h1>
            <p className="font-semibold text-[#1b1f26c2] max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              metus et risus efficitur fermentum sed eget sem.
            </p>

            <div className="flex gap-5 mt-5">
              <Link
                className="bg-[#0F57BF] px-6 py-2.5 rounded-sm text-white"
                href={"/login"}
              >
                Sou ONG
              </Link>
              <Link
                className="bg-[#0F57BF] px-6 py-2.5 rounded-sm text-white"
                href={"/login"}
              >
                Sou Escola
              </Link>
            </div>
          </div>

          <Image
            src={"/CIntegreHero.svg"}
            height={532}
            width={543}
            alt="CIntegre Logo"
          />
        </div>
      </section>

      {/* Ranking Section */}
      <section className="bg-[#F4F4F5] py-8">
        <div className="container flex flex-col items-center gap-5">
          <h2 className="font-medium text-5xl text-center">
            Escolas Mais Contribuintes
          </h2>

          <RankingSmall placement={placement} />

          <Link
            href={"/ranking"}
            className="bg-[#0F57BF] rounded-sm text-white px-6 py-2.5 w-sm text-center"
          >
            Ver Ranking Completo
          </Link>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-white py-8">
        <div className="container flex flex-col items-center gap-5">
          <h2 className="font-medium text-5xl text-center">
            Atividades Recentes das ONGs
          </h2>

          <CarouselCard cards={lotsOfCards} />

          <Link
            href={"/activities"}
            className="bg-[#0F57BF] rounded-sm text-white px-6 py-2.5 w-sm text-center"
          >
            Ver todas as atividades
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#F4F4F5] pt-8 pb-16">
        <div className="container flex flex-col items-center gap-5">
          <h2 className="font-medium text-5xl text-center">
            Por quê você deveria ajudar?
          </h2>

          <ul className="flex flex-wrap items-center justify-center gap-10">
            <li className="max-w-[380px] flex flex-col gap-2.5">
              <h4 className="font-medium text-3xl text-center">
                Fortaleça o Propósito da Sua Escola
              </h4>
              <p className="text-justify font-normal text-[#1b1f26c2]">
                Mostre o compromisso da sua instituição com a comunidade e o
                impacto social, atraindo mais famílias e parceiros.
              </p>
            </li>

            <li className="max-w-[380px] flex flex-col gap-2.5">
              <h4 className="font-medium text-3xl text-center">
                Desenvolva Cidadãos Engajados
              </h4>
              <p className="text-justify font-normal text-[#1b1f26c2]">
                Oportunidades de voluntariado transformam a vida dos seus
                alunos, desenvolvendo empatia, liderança, responsabilidade
                social e novas habilidades.
              </p>
            </li>

            <li className="max-w-[380px] flex flex-col gap-[2.875rem]">
              <h4 className="font-medium text-3xl text-center">
                Transforme Realidades
              </h4>
              <p className="text-justify font-normal text-[#1b1f26c2]">
                Permita que seus alunos contribuam diretamente para causas
                importantes, gerando um impacto real e positivo na vida de
                pessoas e no meio ambiente.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

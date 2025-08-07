'use client';
import ActivityCard from "@/components/general/ActivityCard";
import { CarouselCard } from "@/components/general/CarouselCard";
import RankingSmall from "@/components/general/RankingSmall";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import getActivities, { Activity } from '@/actions/getActivities';
import PhraseCarousel from "@/components/phraseCarousel/phraseCarousel";
import SetLoading from "@/components/setLoading/setLoading";

const placement = [
  { position: "1", school: "Escola A", points: "100", activities: "5" },
  { position: "2", school: "Escola B", points: "90", activities: "4" },
  { position: "3", school: "Escola C", points: "80", activities: "3" },
  { position: "4", school: "Escola D", points: "70", activities: "2" },
  { position: "5", school: "Escola E", points: "60", activities: "1" },
];

export default function HomePage() {
  const [activities, setActivities] = useState<Activity[] | null>([]);
  
  useEffect(() => {
    const fetchActivities = async () => {
      const response = await getActivities();
      setActivities(response.data);
    }
    fetchActivities();
  }, []);

  return (
    <section>
      <SetLoading />
      <section className="bg-white pb-8">
        <div className="container flex flex-col-reverse items-center justify-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h1 className="font-semibold text-7xl max-w-[600px]">
              Juntos, construindo pontes entre educação e solidariedade
            </h1>
            <PhraseCarousel />

            <div className="flex justify-center gap-5 mt-5 sm:justify-start">
              <Link
                className="bg-[#0F57BF] px-6 py-2.5 rounded-sm text-white"
                href={"/login?type=ong"}
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
            height={400}
            width={400}
            alt="CIntegre Logo"
          />
        </div>
      </section>

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

      <section className="bg-white py-8">
        <div className="container flex flex-col items-center gap-5">
          <h2 className="font-medium text-5xl text-center">
            Atividades Recentes das ONGs
          </h2>

          <CarouselCard cards={activities} />

          <Link
            href={"/activities"}
            className="bg-[#0F57BF] rounded-sm text-white px-6 py-2.5 w-sm text-center"
          >
            Ver todas as atividades
          </Link>
        </div>
      </section>

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
"use client";
import React, { useState } from "react";
import LargeInput from "@/components/input/LargeInput";
import SetLoading from "@/components/setLoading/setLoading";
import { useEffect } from "react";
import getSchools, { School } from "@/actions/getSchools";

function PodiumCard({
  rank,
  score,
  name,
}: {
  rank: number;
  name: string;
  score: number;
}) {
  const rankStyles = {
    1: { height: "h-80", order: "order-2 md:order-2" },
    2: { height: "h-72", order: "order-1 md:order-1" },
    3: { height: "h-64", order: "order-3 md:order-3" },
  };

  const styles = rankStyles[rank as keyof typeof rankStyles];

  return (
    <div
      className={`bg-blue-600 text-white rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 text-center transform hover:scale-105 transition-transform duration-300 ${styles.height} ${styles.order}`}
    >
      <div className="mb-2 font-bold text-2xl w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
        {rank}
      </div>
      <p className="text-4xl font-bold">{name}</p>
      <p className="text-4xl font-bold">{score}</p>
      <p className="font-semibold">PONTOS</p>
    </div>
  );
}

export default function RankingPage() {
  useEffect(() => {
    const fetchSchools = async () => {
      const response = await getSchools();
      setSchools(response.data);
    };
    fetchSchools();
  }, []);

  const [schools, setSchools] = useState<School[] | null>([]);

  const [searchTerm, setSearchTerm] = useState("");

  
  const sortedRanking = schools?.map(function (a: School, index: number) {
    return {
      ...a,
      rank: index + 1,
    } as School;
  });
  const topThreeSorted = sortedRanking?.slice(0, 3);

  const podiumData = [];
  const rankOne = topThreeSorted?.find(function (s) {
    return s.rank === 1;
  });
  const rankTwo = topThreeSorted?.find(function (s) {
    return s.rank === 2;
  });
  const rankThree = topThreeSorted?.find(function (s) {
    return s.rank === 3;
  });

  const restOfRanking = sortedRanking?.slice(3).filter(function (school) {
    return school.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (rankTwo) podiumData.push(rankTwo);
  if (rankOne) podiumData.push(rankOne);
  if (rankThree) podiumData.push(rankThree);

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
      <SetLoading />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Top 3 */}
          <div className="flex flex-col md:flex-row justify-center items-end gap-4">
            {podiumData.map(function (school) {
              return <PodiumCard key={school.rank} {...school} />;
            })}
          </div>

          {/* Restante */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[600px] flex flex-col ">
            <LargeInput
              label="Buscar no Ranking"
              value={searchTerm}
              onChange={function (e) {
                setSearchTerm(e.target.value);
              }}
              placeholder="Digite o nome da escola..."
            />
            {/* Cabeçalho*/}
            <div className="grid grid-cols-[60px_1fr_100px] gap-10 p-3 border-b mt-4 text-sm font-bold mb-1">
              <div>RANK</div>
              <div>ESCOLA</div>
              <div className="text-right">PONTOS</div>
            </div>

            <div className="overflow-y-scroll flex-grow">
              {restOfRanking &&
                restOfRanking.length > 0 &&
                restOfRanking?.map(function (school) {
                  return (
                    <div
                      key={school.rank}
                      className="grid grid-cols-[60px_1fr_100px] gap-10 p-3 border-b hover:bg-gray-50 items-center"
                    >
                      <div className="font-semibold">
                        {String(school.rank).padStart(2, "0")}
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{school.name}</span>
                      </div>
                      <div className="text-right font-bold text-blue-600">
                        {school.score}
                      </div>
                    </div>
                  );
                })}
              {restOfRanking && restOfRanking.length === 0 && (
                <div className="text-center p-10 mb-1">
                  <p>Nenhuma escola encontrada.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

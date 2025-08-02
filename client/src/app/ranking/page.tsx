"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import LargeInput from '@/components/input/LargeInput';

interface SchoolRanking {
    rank: number;
    name: string;
    points: number;
    avatarUrl: string;
  }

//exemplo
const rankingData: SchoolRanking[] = [
    { rank: 1, name: 'Escola A', points: 1000, avatarUrl: '/avatar-placeholder.png' },
    { rank: 2, name: 'Escola B', points: 800, avatarUrl: '/avatar-placeholder.png' },
    { rank: 3, name: 'Escola C', points: 600, avatarUrl: '/avatar-placeholder.png' },
    { rank: 4, name: 'Escola D', points: 400, avatarUrl: '/avatar-placeholder.png' },
    { rank: 5, name: 'Escola E', points: 300, avatarUrl: '/avatar-placeholder.png' },
    { rank: 6, name: 'Escola F', points: 250, avatarUrl: '/avatar-placeholder.png' },
    { rank: 7, name: 'Escola G', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 8, name: 'Escola H', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 9, name: 'Escola I', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 10, name: 'Escola J', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 11, name: 'Escola K', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 12, name: 'Escola L', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 13, name: 'Escola M', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 14, name: 'Escola N', points: 150, avatarUrl: '/avatar-placeholder.png' },
    { rank: 15, name: 'Escola O', points: 150, avatarUrl: '/avatar-placeholder.png' },

];


function StatCard({ value, label, period, colorClass }: { value: number, label: string, period: string, colorClass: string }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">

        <div className={`w-3 h-3 rounded-full ${colorClass}`}></div>
        
        <div>
            <span className="text-3xl font-bold">{value}</span>
            <span className="ml-1 font-semibold text-gray-700">{label}</span>
            <p className="text-sm text-gray-500">{period}</p>
        </div>
        </div>
    );
}


function PodiumCard({ rank, name, points, avatarUrl }: { rank: number, name: string, points: number, avatarUrl: string }) {
    const rankStyles = {
      1: { height: 'h-80', order: 'order-2 md:order-2' },
      2: { height: 'h-72', order: 'order-1 md:order-1' },
      3: { height: 'h-64', order: 'order-3 md:order-3' },
    };
  
    const styles = rankStyles[rank as keyof typeof rankStyles];
  
    return (
      <div className={`bg-blue-600 text-white rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 text-center transform hover:scale-105 transition-transform duration-300 ${styles.height} ${styles.order}`}>
        
        <div className="mb-2 font-bold text-2xl w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
          {rank}
        </div>
  
        <div className="relative w-24 h-24 mb-4">
          <Image src={avatarUrl} alt={""} fill className="rounded-full object-cover border-4 border-white" />
        </div>
  
        <p className="text-4xl font-bold">{points}</p>
        <p className="font-semibold">PONTOS</p>
      </div>
    );
  }

export default function RankingPage() {

    const [searchTerm, setSearchTerm] = useState('');

    const sortedRanking = [...rankingData].sort(function(a, b) {
        return a.rank - b.rank;
    });
  

    const topThreeSorted = sortedRanking.slice(0, 3);

    const podiumData = [];
    const rankOne = topThreeSorted.find(function(s) {
        return s.rank === 1;
    });
    const rankTwo = topThreeSorted.find(function(s) {
        return s.rank === 2;
    });
    const rankThree = topThreeSorted.find(function(s) {
        return s.rank === 3;
     });
  
    const restOfRanking = sortedRanking
        .slice(3)
        .filter(function(school) {
            return school.name.toLowerCase().includes(searchTerm.toLowerCase());
     });


    if (rankTwo) podiumData.push(rankTwo);
    if (rankOne) podiumData.push(rankOne);
    if (rankThree) podiumData.push(rankThree);

    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <StatCard value={12} label="ONGs" period="Auxiliadas no dia" colorClass="bg-green-500" />
            <StatCard value={99} label="ONGs" period="Auxiliadas no mês" colorClass="bg-blue-500" />
            <StatCard value={123} label="ONGs" period="Auxiliadas no ano" colorClass="bg-black" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Top 3 */}
            <div className="flex flex-col md:flex-row justify-center items-end gap-4">
                {podiumData.map(function(school) {
                    return (
                        <PodiumCard key={school.rank} {...school} />
                    );
                })}
            </div>

            {/* Restante */}
            <div className="bg-white p-4 rounded-lg shadow-md h-[600px] overflow-y-auto ">
            <LargeInput
              label="Buscar no Ranking"
              value={searchTerm}
              onChange={function(e) { setSearchTerm(e.target.value); }}
              placeholder="Digite o nome da escola..."
            />
                <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                    <th className="p-2">RANK</th>
                    <th className="p-2">NOME</th>
                    <th className="p-2">PONTOS</th>
                    </tr>
                </thead>
                <tbody>
                    {restOfRanking.map(school => (
                    <tr key={school.rank} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-semibold">{String(school.rank).padStart(2, '0')}</td>
                        <td className="p-3 flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image src={school.avatarUrl} alt={""} fill className="rounded-full object-cover" />
                        </div>
                        <span>{school.name}</span>
                        </td>
                        <td className="p-3 font-bold text-blue-600">{school.points}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    );
    }
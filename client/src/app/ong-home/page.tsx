"use client";

import { useState } from "react";
import LargeButton from "@/components/buttons/LargeButton";
import ActivityCard from "@/components/general/ActivityCard";
import SetLoading from "@/components/setLoading/setLoading";

const sampleActions = [
  {
    id: 1,
    title: "Ação de Reflorestamento",
    ngoName: "ONG Verde",
    date: "10/07/2025",
    description:
      "Plantio de 1000 árvores na serra. Plantio de 1000 árvores na serra. Plantio de 1000 árvores na serra.",
    imageUrl:
      "https://images.unsplash.com/photo-1736108870630-db883da3cdf2?q=80&w=230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    tags: ["educacao"],
    status: "open",
  },
  {
    id: 2,
    title: "Campanha do Agasalho",
    ngoName: "ONG Aquece",
    date: "11/07/2025",
    description:
      "Arrecadação de roupas de frio. Arrecadação de roupas de frio. Arrecadação de roupas de frio. Arrecadação de roupas de frio.",
    imageUrl:
      "https://images.unsplash.com/photo-1736108870630-db883da3cdf2?q=80&w=230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    tags: ["social"],
    status: "open",
  },
  {
    id: 3,
    title: "Limpeza da Praia",
    ngoName: "ONG Mar Limpo",
    date: "01/06/2025",
    description:
      "Mutirão de limpeza na praia. Mutirão de limpeza na praia. Mutirão de limpeza na praia.",
    imageUrl:
      "https://images.unsplash.com/photo-1736108870630-db883da3cdf2?q=80&w=230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    tags: ["meio-ambiente"],
    status: "finished",
  },
  {
    id: 4,
    title: "Aula de Reforço",
    ngoName: "ONG Aprender",
    date: "15/05/2025",
    description:
      "Aulas para crianças carentes. Aulas para crianças carentes. Aulas para crianças carentes. Aulas para crianças carentes.",
    imageUrl:
      "https://images.unsplash.com/photo-1736108870630-db883da3cdf2?q=80&w=230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    tags: ["educacao"],
    status: "finished",
  },
];

export default function OngHomePage() {
  const ongName = "ONG dos Dias";
  const [activeTab, setActiveTab] = useState<"todos" | "finalizados">("todos");

  const filteredActions =
    activeTab === "todos"
      ? sampleActions
      : sampleActions.filter((action) => action.status === "finished");

  return (
    <>
    <SetLoading/>
      <section className="bg-gradient-to-r from-[#EBF3FF] to-[#85B6FF] px-8 py-12 text-black">
        <div className="container mx-auto flex justify-between items-end">
          <h1 className="text-7xl font-bold">
            <span className="block">Bem-Vinda,</span>
            <span className="block">{ongName}!</span>
          </h1>
          <LargeButton className="hover:bg-blue-800 rounded-sm text-lg">
            Criar uma nova ação
          </LargeButton>
        </div>
      </section>

      <div className="container mx-auto p-8">
        <div className="mb-4 mt-6 flex justify-center">
          <button
            onClick={() => setActiveTab("todos")}
            className={`text-xl font-bold pb-1 mr-4 border-b-2 ${
              activeTab === "todos"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 hover:text-blue-600 border-transparent"
            } transition-colors`}
          >
            Todos os Pedidos
          </button>
          <button
            onClick={() => setActiveTab("finalizados")}
            className={`text-xl font-bold pb-1 border-b-2 ${
              activeTab === "finalizados"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 hover:text-blue-600 border-transparent"
            } transition-colors`}
          >
            Pedidos Finalizados
          </button>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {filteredActions.map((action) => (
              <ActivityCard key={action.id} apiData={action} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

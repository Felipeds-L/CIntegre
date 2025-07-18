"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/button";
import ActionCard from "@/components/ong/actioncard";

const sampleActions = [
  { id: 1, title: "Ação de Reflorestamento", ongName: "ONG Verde", date: "10/07/2025", description: "Plantio de 1000 árvores na serra.", imageUrl: "/miku.jpg", tag: "educacao", status: "open" },
  { id: 2, title: "Campanha do Agasalho", ongName: "ONG Aquece", date: "11/07/2025", description: "Arrecadação de roupas de frio.", imageUrl: "/miku.jpg", tag: "social", status: "open" },
  { id: 3, title: "Limpeza da Praia", ongName: "ONG Mar Limpo", date: "01/06/2025", description: "Mutirão de limpeza na praia.", imageUrl: "/miku.jpg", tag: "meio-ambiente", status: "finished" },
  { id: 4, title: "Aula de Reforço", ongName: "ONG Aprender", date: "15/05/2025", description: "Aulas para crianças carentes.", imageUrl: "/miku.jpg", tag: "educacao", status: "finished" },
];


export default function OngHomePage() {
  const ongName = "Nome da ONG";
  const [activeTab, setActiveTab] = useState<"todos" | "finalizados">("todos");

  const filteredActions = activeTab === "todos"
    ? sampleActions
    : sampleActions.filter((action) => action.status === "finished");

  return (
    <>
      <section className="bg-gradient-to-r from-[#EBF3FF] to-[#85B6FF] px-8 py-12 text-black">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">
            <span className="block">Bem-Vinda,</span>
            <span className="block">{ongName}!</span>
          </h1>
          <Button className="bg-blue-700 text-white hover:bg-blue-800 rounded-sm">
            Criar uma nova ação
          </Button>
        </div>
      </section>

      {/* botões de filtro */}
      <div className="container mx-auto p-8">
        <div className="mb-6 mt-8">
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

        {/* animação dos cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {filteredActions.map((action) => (
                <ActionCard
                  key={action.id}
                  title={action.title}
                  ongName={action.ongName}
                  date={action.date}
                  description={action.description}
                  imageUrl={action.imageUrl}
                  tag={action.tag}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

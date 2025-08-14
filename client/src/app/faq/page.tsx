"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const faqData = [
  {
    indice: "Índice 1",
    tituloGeral: "Como faz para participar de uma atividade?",
    titulo1: "Passo 1",
    texto1:
      "O primeiro passo é se cadastrar como uma escola da Prefeitura e/ou realizar a autenticação pelo login.",
    titulo2: "Passo 2",
    texto2:
      "Logo após isso, a página inicial vai estar repleta de cases de atividades com descrições, tags e o status dela e basta você analisar e escolher a que deseja.",
    titulo3: "Passo 3",
    texto3:
      "Basta você clicar no botão que quer participar e em alguns instantes um email de confirmação chegará.",
  },
  {
    indice: "Índice 2",
    tituloGeral: "Como criar uma atividade?",
    titulo1: "Passo 1",
    texto1:
      "Primeiramente, é necessário que você esteja logado como uma ONG, e assim que você fizer isso vai aparecer a página inicial.",
    titulo2: "Passo 2",
    texto2:
      "Agora, você deverá clicar no botão 'Criar uma nova ação'no canto superior direito.",
    titulo3: "Passo 3",
    texto3:
      "Por fim, preencha os requisitos de acordo com a atividade que você pretende realizar e aperto no botão de criar e pronto. ",
  },
  {
    indice: "Índice 3",
    tituloGeral: "Como minha escola pode ganhar pontos?",
    titulo1: "Qual o intuito?",
    texto1:
      "Os pontos servem como uma competição saudável para que escolas sem comprometam em se voluntariar (com os seus alunos) com atividades de Ong's comunitárias.",
    titulo2: "Passo 1 ",
    texto2:
      "Como escola, cada atividade vale pontos pré-determinados em cada case pela Ong que a criou, então, basta analisar na descrição os seus pontos e escolher para participar da ação.",
    titulo3: "Passo 2 ",
    texto3:
      "Após a participação, cabe à Ong validar que realmente houve uma participação e automaticamente esses pontos vão entrar na conta da escola, aumentando a sua posição no ranking.",
  },
  {
    indice: "Índice 4",
    tituloGeral: "Como faço para saber mais sobre o objetivo dessa plataforma?",
    titulo1: "Passo 1",
    texto1:
      "No canto inferior da tela principal, existe um footer com um índice de links rápidos. ",
    titulo2: "Passo 2",
    texto2:
      "Clique no link 'Sobre nós'.",
    titulo3: "Passo 3",
    texto3:
      "Nessa tela existe tudo explicado sobre nossa missão e nossa história, boa leitura!",
  },
];

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-white border-white inline-flex flex-row md:flex-col flex-wrap md:h-fit items-center justify-start rounded-lg p-[3px] gap-1 overflow-x-auto md:overflow-visible",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "bg-white text-black data-[state=active]:bg-gray-100 data-[state=active]:text-blue-900",
        "data-[state=active]:shadow-sm border border-transparent rounded-md px-3 py-1 text-sm font-medium transition-colors w-[120px] md:w-[150px]",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

export default function Faq() {
  return (
    <div className="flex flex-col md:flex-row mt-10 md:mt-20 w-full gap-4 max-w-6xl px-4 md:px-0 mx-auto">
      <Tabs defaultValue="0" className="flex flex-col md:flex-row w-full gap-4">
        <TabsList className="md:border md:w-[160px]">
          {faqData.map((item, idx) => (
            <TabsTrigger
              className="text-md md:text-2xl font-bold text-black"
              key={idx}
              value={String(idx)}
            >
              {item.indice}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex flex-1 overflow-y-auto md:h-screen p-4 md:p-6 md:ml-8">
          {faqData.map((item, idx) => (
            <TabsContent key={idx} value={String(idx)}>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 ">
                  {item.tituloGeral}
                </h2>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-blue-900">
                    {item.titulo1}
                  </h3>
                  <p className="text-base md:text-xl font-semibold text-black">
                    {item.texto1}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-blue-900">
                    {item.titulo2}
                  </h3>
                  <p className="text-base md:text-xl font-semibold text-black">
                    {item.texto2}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-blue-900">
                    {item.titulo3}
                  </h3>
                  <p className="text-base md:text-xl font-semibold text-black">
                    {item.texto3}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
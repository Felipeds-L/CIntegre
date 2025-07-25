"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const faqData = [
  {
    indice: "Índice 1",
    tituloGeral: "Visão Geral 1",
    titulo1: "Lorem Ipsum",
    texto1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo2: "Lorem Ipsum",
    texto2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo3: "Lorem Ipsum",
    texto3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
  },
  {
    indice: "Índice 2",
    tituloGeral: "Visão Geral 2",
    titulo1: "Lorem Ipsum",
    texto1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo2: "Lorem Ipsum",
    texto2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo3: "Lorem Ipsum",
    texto3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
  },
  {
    indice: "Índice 3",
    tituloGeral: "Visão Geral 3",
    titulo1: "Lorem Ipsum",
    texto1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo2: "Lorem Ipsum ",
    texto2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo3: "Lorem Ipsum  ",
    texto3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
  },
  {
    indice: "Índice 4",
    tituloGeral: "Visão Geral 4",
    titulo1: "Lorem Ipsum",
    texto1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo2: "Lorem Ipsum",
    texto2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo3: "Lorem Ipsum",
    texto3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
  },
  {
    indice: "Índice 5",
    tituloGeral: "Visão Geral 5",
    titulo1: "Lorem Ipsum",
    texto1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo2: "Lorem Ipsum",
    texto2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo3: "Lorem Ipsum",
    texto3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
  },
  {
    indice: "Índice 6",
    tituloGeral: "Visão Geral 6",
    titulo1: "Lorem Ipsum",
    texto1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo2: "Lorem Ipsum",
    texto2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
    titulo3: "Lorem Ipsum",
    texto3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty. ",
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
        "bg-white border-white inline-flex flex-col h-fit w-48 items-center justify-start rounded-lg p-[3px] gap-1",
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
        "data-[state=active]:shadow-sm border border-transparent rounded-md px-3 py-1 text-sm font-medium transition-colors w-[150px]",
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
    <div className="flex flex-row mt-20 w-full gap-2 max-w-4xl mx-auto">
      <Tabs defaultValue="0" className="flex flex-row w-full">
        <TabsList className="border w-[160px] mt-4 ">
          {faqData.map((item, idx) => (
            <TabsTrigger
              className="text-2xl font-bold text-black"
              key={idx}
              value={String(idx)}
            >
              {item.indice}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex h-screen p-6 ml-8">
          {faqData.map((item, idx) => (
            <TabsContent key={idx} value={String(idx)}>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-blue-900 ">
                  {item.tituloGeral}
                </h2>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    {item.titulo1}
                  </h3>
                  <p className="text-xl font-semibold text-black">
                    {item.texto1}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    {item.titulo2}
                  </h3>
                  <p className="text-xl font-semibold text-black">
                    {item.texto2}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    {item.titulo3}
                  </h3>
                  <p className="text-xl font-semibold text-black">
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

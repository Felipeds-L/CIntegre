export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1>Main Page</h1>
    </main>
  );
}

//EXEMPLO DE FUNCIONAMENTO DA TAG
/*
"use client";
import React, { useState } from 'react';
import TagDisplay from '@/components/tags/TagDisplay';

export default function HomePage() {
  const [tags, setTags] = useState<string[]>([]); //retorna a varaivel de estado e a função para atualizar o estado, que é um array de strings vazio inicialmente
                                                  // valor inicial ([]) = lista vazia (tipo genérico string[])
  const handleAdicionarTagDeTeste = () => {
    const novaTag = `Tag de Teste ${tags.length}`; //texto da tag
    setTags([...tags, novaTag]); // Adiciona a nova tag à lista existente usando spread operator
  };

  //função para remover uma tag, passar para tagdisplay
  const handleRemoverTag = (indexParaRemover: number) => {
    setTags(tags.filter((tag, index) => index !== indexParaRemover));
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-xl mx-auto">
        <h1 className="">Teste Interativo de Tags</h1>

        <button
          onClick={handleAdicionarTagDeTeste}
          className="bg-blue-500"
        >
          Adicionar Tag de Teste
        </button>

        <div className="mt-4 border min-h-[50px]">
          <h2 className="">Tags Adicionadas:</h2>
          <TagDisplay
            tags={tags}
            onRemoveTag={handleRemoverTag}
          />
        </div>
      </div>
    </main>
  );
}
  */
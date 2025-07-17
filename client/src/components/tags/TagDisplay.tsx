import React, { useState } from 'react';
import Tag from './Tag';

interface TagDisplayProps {
  tags: string[]; // Lista que começa vazia, utilizar uma função handleadd na tela de criação do pedido.
  onRemoveTag: (index: number) => void;
}

export default function TagDisplay({ tags, onRemoveTag }: TagDisplayProps) {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <Tag
        key={index}
        label={tag}
        onRemove={() => onRemoveTag(index)}
      />
    ))}
  </div>
);
};
// O componente pode receber uma lista de tags e uma função para remover tags.

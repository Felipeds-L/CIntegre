import React, { useState } from 'react';
import Tag from './Tag';

interface TagDisplayProps {
  tags: string[]; // Lista que começa vazia, utilizar uma função handleadd na tela de criação do pedido.
  onRemoveTag: (index: number) => void;
}

const TagDisplay: React.FC<TagDisplayProps> = ({ tags, onRemoveTag }) => {
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
export default TagDisplay;
// O componente pode receber uma lista de tags e uma função para remover tags.

"use client";

import Image from "next/image";
import Button from "../ui/button";

type ActionCardProps = {
  title: string;
  ongName: string;
  date: string;
  description: string;
  imageUrl: string;
  tag: string;
};

export default function ActionCard({
  title,
  ongName,
  date,
  description,
  imageUrl,
  tag,
}: ActionCardProps) {
  const tagClasses = (() => {
    switch (tag) {
      case "educacao":
        return "bg-[#3388FF] text-white font-normal";
      case "social":
        return "bg-[#3388FF] text-white font-normal";
      case "meio-ambiente":
        return "bg-[#3388FF] text-white font-normal";
      default:
        return "bg-gray-200 text-gray-700 font-normal";
    }
  })();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl w-full flex h-48 gap-x-2 transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-48 aspect-square">
        <Image
          src={imageUrl}
          alt={`Imagem da ação ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-gray-800 leading-tight">
              {title}
            </h3>
            <span className="text-xs text-gray-500 flex-shrink-0 ml-3">
              {date}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">{ongName}</p>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
        <div className="flex justify-end items-center gap-3 mt-2">
          <span
            className={`${tagClasses} text-base px-4 py-0.5 rounded-full`}
          >
            #{tag}
          </span>
          <Button
            onClick={() => alert(`Apoiando: ${title}`)}
            className="bg-[#0F57BF] text-white hover:bg-[#0d4f9c] focus:ring-[#0F57BF] rounded-md"
          >
            Apoiar!
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import closeActivity from "@/actions/closeActivity";

type Props = {
  activity_id: string;
};

export default function DeleteButton({ activity_id }: Props) {
  const handleCloseClick = async () => {
    const result = await closeActivity(activity_id);
    if (result.ok) {
      alert("Atividade fechada com sucesso!");
      // Atualize a lista ou redirecione se necessário
    } else {
      alert(result.error || "Erro ao fechar atividade.");
    }
  };

  return (
    <button
      className="flex w-full rounded-[4px] justify-center items-center bg-red-600 gap-2.5 text-white px-6 py-3 hover:cursor-pointer"
      onClick={handleCloseClick}
    >
      <Image src={"/assets/delete.svg"} width={24} height={24} alt="" />
      <span>Fechar Atividade</span>
    </button>
  );
}

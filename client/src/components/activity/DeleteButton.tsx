"use client";

import Image from "next/image";
import closeActivity from "@/actions/closeActivity";
import { useRouter } from "next/navigation";

type Props = {
  activity_id: string;
  onClose: () => void;
};

export default function DeleteButton({ activity_id, onClose }: Props) {
  const router = useRouter();

  const handleCloseClick = async () => {
    const result = await closeActivity(activity_id);
    if (result.ok) {
      router.refresh();
      onClose?.();
    } else {
      alert(result.error || "Erro ao fechar atividade.");
    }
  };

  return (
    <button
      className="flex w-full rounded-[4px] justify-center items-center hover:bg-red-300 bg-gray-500 gap-2.5 text-black font-semibold px-6 py-3 hover:cursor-pointer"
      onClick={handleCloseClick}
    >
      <Image src={"/assets/delete.svg"} width={24} height={24} alt="" />
      <span>Fechar Atividade</span>
    </button>
  );
}

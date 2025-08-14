"use client";

import Image from "next/image";
import schoolActivityPost from "@/actions/schoolActivitiesPost";
import getActivity from "@/actions/getActivity";

type Props = {
  activity_id: string;
  school_id?: number;
};

export default function ParticipateButton({ activity_id, school_id }: Props) {
  const handleActivityClick = async () => {
    const activity = await getActivity(activity_id);
    if (!activity.data) {
      throw new Error("erro ao buscar atividade");
    }
    const status = activity.data.status;
    const pontuation = 0;

    if (!school_id) {
      alert("Usuário não está vinculado a uma escola.");
      return;
    }

    const result = await schoolActivityPost(
      school_id,
      activity_id,
      status,
      pontuation
    );

    if (result.ok) {
      alert("Participação registrada com sucesso!");
    } else {
      alert(result.error || "Erro ao registrar participação.");
    }
  };

  return (
    <button
      className="flex w-full rounded-[4px] justify-center items-center bg-[#0f57bf] gap-2.5 text-white px-6 py-3 hover:cursor-pointer"
      disabled={!school_id}
      style={{
        backgroundColor: school_id ? "#0f57bf" : "#333",
        opacity: school_id ? 1 : 0.5,
        cursor: school_id ? "pointer" : "not-allowed",
      }}
      onClick={handleActivityClick}
    >
      <Image src={"/assets/personButton.svg"} width={24} height={24} alt="" />
      <span>Participar da Atividade</span>
    </button>
  );
}

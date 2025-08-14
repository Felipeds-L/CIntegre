"use client";

import { useState } from "react";
import LargeButton from "@/components/buttons/LargeButton";
import ActivityCard from "@/components/general/ActivityCard";
import SetLoading from "@/components/setLoading/setLoading";
import Link from "next/link";
import { AuthUser } from "@/actions/getAuthUser";
import getActivities, { Activity } from "@/actions/getActivities";
import React from "react";

export default function OngHome({ authUser }: { authUser: AuthUser }) {
  const [activeTab, setActiveTab] = useState<"todos" | "finalizados">("todos");
  const [activities, setActivities] = useState<Activity[] | null>([]);

  React.useEffect(() => {
    const fetchActivities = async () => {
      const response = await getActivities();
      setActivities(response.data);
    };
    fetchActivities();
  }, []);

  if (!activities) return null;

  const ongActivities = activities.filter(
    (activity) => activity.ong.id === authUser.ong?.id
  );

  const filteredActivities =
    activeTab === "todos"
      ? ongActivities
      : ongActivities.filter((activity) => activity.status === "closed");

  if (!authUser.ong) return null;
  return (
    <>
      <SetLoading />
      <section className="bg-gradient-to-r from-[#EBF3FF] to-[#85B6FF] px-8 py-12 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <h1 className="text-center text-5xl font-bold sm:text-left sm:text-7xl">
            <span className="block">Bem-Vinda,</span>
            <span className="block">{authUser.ong.name}!</span>
          </h1>
          <Link
            href={"/home/create-activity"}
            className="w-full text-center rounded-md bg-[#0F57BF] py-1.5 px-4 text-lg text-white hover:bg-blue-700 cursor-pointer sm:w-auto sm:px-[6.25rem]"
          >
            Criar uma nova ação
          </Link>
        </div>
      </section>

      <div className="container mx-auto p-8">
        <div className="mb-4 mt-6 flex justify-center">
          <button
            onClick={() => setActiveTab("todos")}
            className={`text-xl font-bold pb-1 mr-4 border-b-2 ${
              activeTab === "todos"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 hover:text-blue-600 border-transparent"
            } transition-colors`}
          >
            Atividades
          </button>
          <button
            onClick={() => setActiveTab("finalizados")}
            className={`text-xl font-bold pb-1 border-b-2 ${
              activeTab === "finalizados"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 hover:text-blue-600 border-transparent"
            } transition-colors`}
          >
            Atividades Finalizadas
          </button>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {filteredActivities.map((activityFiltered) => (
              <ActivityCard
                key={activityFiltered.id}
                apiData={activityFiltered}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

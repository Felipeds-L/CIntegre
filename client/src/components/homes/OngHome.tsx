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

  const filteredActivities =
    activeTab === "todos"
      ? activities
      : activities.filter((activity) => activity.status === "closed");

  if (!authUser.ong) return null;
  return (
    <>
      <SetLoading />
      <section className="bg-gradient-to-r from-[#EBF3FF] to-[#85B6FF] px-8 py-12 text-black">
        <div className="container mx-auto flex justify-between items-end">
          <h1 className="text-7xl font-bold">
            <span className="block">Bem-Vinda,</span>
            <span className="block">{authUser.ong.name}!</span>
          </h1>
          <Link
            href={"/home/create-activity"}
            className="py-1.5 px-[6.25rem] text-white bg-[#0F57BF] rounded-md hover:bg-blue-700 cursor-pointer text-lg"
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
            Minhas Atividades
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

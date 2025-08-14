"use client";

import { AuthUser } from "@/actions/getAuthUser";
import ActivitySection from "@/components/activity/ActivitySection";
import Tag from "@/components/general/Tag";
import SetLoading from "@/components/setLoading/setLoading";
import Image from "next/image";
import { format } from "date-fns";
import ParticipateButton from "@/components/activity/ParticipateButton";
import DeleteButton from "@/components/activity/DeleteButton";
import { Activity } from "@/actions/getActivities";
import React from "react";
import getActivity from "@/actions/getActivity";
import getSchoolActivitiesBySchoolId from "@/actions/getSchoolActivity";

type ActivityProps = {
  id: string;
  user: AuthUser | null;
  initialActivity: Activity | null;
};

export default function ActivityComp({
  id,
  user,
  initialActivity,
}: ActivityProps) {
  if (!initialActivity) return null;

  const [activity, setActivity] = React.useState<Activity | null>(
    initialActivity
  );
  const [isParticipating, setIsParticipating] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkParticipation = async () => {
      if (!user?.school) return;

      const result = await getSchoolActivitiesBySchoolId(user.school.id);

      if (result.ok && result.data) {
        const participating = result.data.some(
          (schoolActivity) => schoolActivity.activity.id.toString() === id
        );
        setIsParticipating(participating);
      }
    };
    checkParticipation();
  }, [user?.school, id]);

  const refreshActivity = async () => {
    const { data } = await getActivity(id);
    if (data) {
      setActivity(data);
    }

    if (user?.school) {
      const result = await getSchoolActivitiesBySchoolId(user.school.id);
      if (result.ok && result.data) {
        const participating = result.data.some(
          (schoolActivity) => schoolActivity.activity.id.toString() === id
        );
        setIsParticipating(participating);
      }
    }
  };

  if (!activity) return null;

  const startDate = format(activity.start_date, "dd/MM/yyyy");
  const endDate = format(activity.end_date, "dd/MM/yyyy");

  const buttonLayouts = () => {
    if (user?.school) {
      if (isParticipating) {
        return (
          <div className="flex w-full rounded-[4px] justify-center items-center bg-green-600 gap-2.5 text-white px-6 py-3">
            <span>✓ Já Participando</span>
          </div>
        );
      }

      return (
        <ParticipateButton
          activity_id={id}
          school_id={user?.school?.id}
          onParticipate={refreshActivity}
        />
      );
    }

    if (
      user?.ong &&
      activity.ong.id === user.ong.id &&
      activity.status !== "closed"
    ) {
      return <DeleteButton activity_id={id} onClose={refreshActivity} />;
    }

    return null;
  };

  return (
    <section className="mb-16">
      <SetLoading />
      {/* Header Section */}
      <div className="flex relative h-80 mb-8">
        <Image
          className="w-full object-cover"
          src={activity.photos[0]}
          width={1440}
          height={330}
          alt="image"
        />

        <div className="absolute bottom-5 left-5 right-0 bg-[#333] w-max p-3 rounded-sm">
          <Tag>#{activity.area_expertise[0]}</Tag>
          <h1 className="text-4xl text-white font-extralight">
            {activity.title}
          </h1>
          <p className="text-gray-200 text-3xl">{activity.ong.name}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col gap-5">
          {/* Description Section */}
          <ActivitySection title="Descrição">
            <p className="text-gray-700">{activity.description}</p>
          </ActivitySection>

          {/* Tags Section */}
          <ActivitySection title="Tags">
            <ul className="flex flex-wrap gap-2.5">
              {activity.tags.map((tag, index) => (
                <Tag key={index}>#{tag}</Tag>
              ))}
            </ul>
          </ActivitySection>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {/* Activity Details Section */}
          <ActivitySection title="Detalhes da Atividade">
            <ul className="flex flex-col gap-4">
              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/calendar.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{`${startDate} - ${endDate}`}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/clock.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{activity.duration}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/mapPin.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{activity.address}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/people.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>Até {activity.volunteer_quantity} Voluntários</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/status.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span
                  style={{
                    color:
                      activity.status === "open" ||
                      activity.status === "in_progress"
                        ? "green"
                        : "red",
                  }}
                >
                  Status:{" "}
                  {activity.status === "open" ||
                  activity.status === "in_progress"
                    ? "Aberta"
                    : "Fechada"}
                </span>
              </li>
            </ul>
          </ActivitySection>

          {/* ONG About Section */}
          <ActivitySection title="Sobre a ONG">
            <div className="flex gap-4 items-center">
              <Image
                src={"/no.jpg"}
                width={48}
                height={48}
                alt="ONG Logo"
                className="rounded-full mb-2.5 w-[48px] h-[48px] object-cover border border-gray-300"
              />

              <p className="text-[1rem] font-bold">{activity.ong.name}</p>
            </div>

            <p className="text-gray-600 pb-2.5 border-b border-[#E4E4E7]">
              {activity.ong.description}
            </p>

            <ul className="flex flex-col gap-2 pt-2.5">
              <li>
                <span className="flex items-center gap-2.5">
                  <Image
                    src={"/assets/phone.svg"}
                    width={24}
                    height={24}
                    alt=""
                  />
                  {activity.ong.phone_number}
                </span>
              </li>
            </ul>
          </ActivitySection>

          {/* Buttons */}
          {buttonLayouts()}
        </div>
      </div>
    </section>
  );
}

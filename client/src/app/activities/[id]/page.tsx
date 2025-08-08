import getActivity from "@/actions/getActivity";
import getAuthUser from "@/actions/getAuthUser";
import ActivitySection from "@/components/activity/ActivitySection";
import Tag from "@/components/general/Tag";
import SetLoading from "@/components/setLoading/setLoading";
import Image from "next/image";
import { format } from "date-fns";

type ActivityIdParams = {
  params: {
    id: string;
  };
};

export default async function ActionPage({ params }: ActivityIdParams) {
  const { id } = await params;

  const { data: user } = await getAuthUser();

  const { data, error } = await getActivity(id);

  if (!data) return <div className="text-center mt-10">{error}</div>;

  const startDate = format(data.start_date, "dd/MM/yyyy");
  const endDate = format(data.end_date, "dd/MM/yyyy");

  return (
    <section className="mb-16">
      <SetLoading />
      {/* Header Section */}
      <div className="flex relative h-80 mb-8">
        <Image
          className="w-full object-cover"
          src={data.photos[0]}
          width={1440}
          height={330}
          alt="image"
        />

        <div className="absolute bottom-5 left-5 right-0">
          <Tag>#{data.area_expertise[0]}</Tag>
          <h1 className="text-4xl font-extralight">{data.title}</h1>
          <p className="text-gray-600 text-3xl">{data.ong.name}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col gap-5">
          {/* Description Section */}
          <ActivitySection title="Descrição">
            <p className="text-gray-700">{data.description}</p>
          </ActivitySection>

          {/* Schedule Section */}
          {/* <ActivitySection title="Cronograma da Atividade">
            <ul>
              {data.schedule.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex items-center gap-5"
                >
                  <strong>{item.time}</strong>
                  <p>{item.activity}</p>
                </li>
              ))}
            </ul>
          </ActivitySection> */}

          {/* Experiences and Skills Section */}
          {/* <ActivitySection title="Experiências e Habilidades">
            <ul className="flex flex-wrap gap-2">
              {data.area_expertise.map((item, index) => (
                <Tag key={index}>{item}</Tag>
              ))}
            </ul>
          </ActivitySection> */}

          {/* Tags Section */}
          <ActivitySection title="Tags">
            <ul className="flex flex-wrap gap-2.5">
              {data.tags.map((tag, index) => (
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
                <span>{data.duration}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/mapPin.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{data.address}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/people.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>Até {data.volunteer_quantity} Voluntários</span>
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

              <p className="text-[1rem] font-bold">{data.ong.name}</p>
            </div>

            <p className="text-gray-600 pb-2.5 border-b border-[#E4E4E7]">
              {data.ong.description}
            </p>

            <ul className="flex flex-col gap-2 pt-2.5">
              {/* <li>
                <span className=" flex items-center gap-2.5">
                  <Image
                    src={"/assets/globe.svg"}
                    width={24}
                    height={24}
                    alt=""
                  />
                  {data.ong.social_medias[0]}
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2.5">
                  <Image
                    src={"/assets/mail.svg"}
                    width={24}
                    height={24}
                    alt=""
                  />
                  {data.ong.social_medias[1]}
                </span>
              </li> */}
              <li>
                <span className="flex items-center gap-2.5">
                  <Image
                    src={"/assets/phone.svg"}
                    width={24}
                    height={24}
                    alt=""
                  />
                  {data.ong.phone_number}
                </span>
              </li>
            </ul>
          </ActivitySection>

          {/* Buttons */}

          <button
            className="flex w-full rounded-[4px] justify-center items-center bg-[#0f57bf] gap-2.5 text-white px-6 py-3 hover:cursor-pointer"
            disabled={!user?.school}
            style={{
              backgroundColor: user?.school ? "#0f57bf" : "#333",
              opacity: user?.school ? 1 : 0.5,
              cursor: user?.school ? "pointer" : "not-allowed",
            }}
          >
            <Image
              src={"/assets/personButton.svg"}
              width={24}
              height={24}
              alt=""
            />
            <span>Participar da Atividade</span>
          </button>

          {/* <button className="flex w-full rounded-[4px] justify-center items-center bg-transparent gap-2.5 text-blue-800 px-6 py-3 border-2 border-blue-800 hover:cursor-pointer">
            <Image src={"/assets/share.svg"} width={24} height={24} alt="" />
            <span>Compartilhar Atividade</span>
          </button> */}
        </div>
      </div>
    </section>
  );
}

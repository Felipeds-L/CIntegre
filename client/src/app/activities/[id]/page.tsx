import getActivity from "@/actions/getActivity";
import ActivitySection from "@/components/activity/ActivitySection";
import Tag from "@/components/general/Tag";
import Image from "next/image";

type ActivityIdParams = {
  params: {
    id: string;
  };
};

export default async function ActionPage({ params }: ActivityIdParams) {
  const { id } = await params;

  const { data, error } = await getActivity(id);

  if (!data) return <div className="text-center mt-10">{error}</div>;
  return (
    <section className="mb-16">
      {/* Header Section */}
      <div className="flex relative h-80 mb-8">
        <Image
          className="w-full object-cover"
          src={"/miku.jpg"}
          width={1440}
          height={330}
          alt="image"
        />

        <div className="absolute bottom-5 left-5 right-0">
          <Tag>{data.area_expertise[0]}</Tag>
          <h1 className="text-white text-4xl">{data.title}</h1>
          <p className="text-gray-300 text-3xl">{data.ong.name}</p>
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
          <ActivitySection title="Experiências e Habilidades">
            <ul className="flex flex-wrap gap-2">
              {data.area_expertise.map((item, index) => (
                <Tag key={index}>{item}</Tag>
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
                <span>{data.status}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/clock.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{data.category}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/mapPin.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{data.area_expertise}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/calendar.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>
                  {data.category}/{data.category} Voluntários
                </span>
              </li>
            </ul>
          </ActivitySection>

          {/* ONG About Section */}
          <ActivitySection title="Sobre a ONG">
            <div className="flex gap-4 items-center">
              <Image
                src={"/miku.jpg"}
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
              <li>
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
              </li>
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

          <button className="flex w-full rounded-[4px] justify-center items-center bg-[#0f57bf] gap-2.5 text-white px-6 py-3 hover:cursor-pointer">
            <Image
              src={"/assets/personButton.svg"}
              width={24}
              height={24}
              alt=""
            />
            <span>Participar da Atividade</span>
          </button>

          <button className="flex w-full rounded-[4px] justify-center items-center bg-transparent gap-2.5 text-blue-800 px-6 py-3 border-2 border-blue-800 hover:cursor-pointer">
            <Image src={"/assets/share.svg"} width={24} height={24} alt="" />
            <span>Compartilhar Atividade</span>
          </button>

          {/* Tags Section */}
          <ActivitySection title="Tags">
            <ul className="flex flex-wrap gap-2.5">
              {data.area_expertise.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </ul>
          </ActivitySection>
        </div>
      </div>
    </section>
  );
}

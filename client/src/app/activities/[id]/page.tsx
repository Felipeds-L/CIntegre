import ActivitySection from "@/components/activity/ActivitySection";
import Tag from "@/components/general/Tag";
import Image from "next/image";

const mockedData = {
  title: "Pedido Exemplo",
  date: "01/01/2001",
  timeSpan: "25:00 - 26:00",
  address: "Av. Bla bla bla, Recife, numero 1, bla bla bla",
  volunteers: 3,
  totalVolunteers: 25,
  photoUrl:
    "https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing. ",
  schedule: [
    { time: "25:00", activity: "Introdução e explicação da Atividade" },
    { time: "25:00", activity: "Introdução e explicação da Atividade" },
    { time: "25:00", activity: "Introdução e explicação da Atividade" },
    { time: "25:00", activity: "Introdução e explicação da Atividade" },
  ],
  experiences: ["#TrabalhoEmEquipe", "#Comunicação", "#Atividade Física"],
  tags: ["#educacao", "#educacao", "#educacao"],
  ngo: {
    name: "ONG de Exemplo",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=60&w=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dedicated to protecting marine ecosystems through community action and education.",
    email: "ongemail@gmail.com",
    site: "www.ongsite.com",
    phone: "(81) 91234-5678",
  },
};

export default function ActionPage() {
  return (
    <section className="mb-16">
      {/* Header Section */}
      <div className="flex relative h-80 mb-8">
        <Image
          className="w-full object-cover"
          src={mockedData.photoUrl}
          width={1440}
          height={330}
          alt="image"
        />

        <div className="absolute bottom-5 left-5 right-0">
          <Tag>{mockedData.tags[0]}</Tag>
          <h1 className="text-white text-4xl">{mockedData.title}</h1>
          <p className="text-gray-300 text-3xl">{mockedData.ngo.name}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col gap-5">
          {/* Description Section */}
          <ActivitySection title="Descrição">
            <p className="text-gray-700">{mockedData.description}</p>
          </ActivitySection>

          {/* Schedule Section */}
          <ActivitySection title="Cronograma da Atividade">
            <ul>
              {mockedData.schedule.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex items-center gap-5"
                >
                  <strong>{item.time}</strong>
                  <p>{item.activity}</p>
                </li>
              ))}
            </ul>
          </ActivitySection>

          {/* Experiences and Skills Section */}
          <ActivitySection title="Experiências e Habilidades">
            <ul className="flex flex-wrap gap-2">
              {mockedData.experiences.map((item, index) => (
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
                <span>{mockedData.date}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/clock.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{mockedData.timeSpan}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/mapPin.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>{mockedData.address}</span>
              </li>

              <li className="text-gray-600 flex items-center gap-2.5">
                <Image
                  src={"/assets/calendar.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span>
                  {mockedData.volunteers}/{mockedData.totalVolunteers}{" "}
                  Voluntários
                </span>
              </li>
            </ul>
          </ActivitySection>

          {/* ONG About Section */}
          <ActivitySection title="Sobre a ONG">
            <div className="flex gap-4 items-center">
              <Image
                src={mockedData.ngo.image}
                width={48}
                height={48}
                alt="ONG Logo"
                className="rounded-full mb-2.5 w-[48px] h-[48px] object-cover border border-gray-300"
              />

              <p className="text-[1rem] font-bold">{mockedData.ngo.name}</p>
            </div>

            <p className="text-gray-600 pb-2.5 border-b border-[#E4E4E7]">
              {mockedData.ngo.description}
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
                  {mockedData.ngo.site}
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
                  {mockedData.ngo.email}
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
                  {mockedData.ngo.phone}
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
              {mockedData.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </ul>
          </ActivitySection>
        </div>
      </div>
    </section>
  );
}

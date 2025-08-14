import SetLoading from "@/components/setLoading/setLoading";
import Image from "next/image";

const sectionsData = [
  {
    title: "Nossa Missão",
    text: "Construir uma plataforma que conecte escolas da Prefeitura que buscam proporcionar incentivos na formação e o desenvolvimento de seus estudantes (proporcionando experiências em múltiplas áreas) à Instituições Não-Governamentais (ONG's) que ajudam causas comunitárias e promovem o bem da cidadania.",
    imageUrl: "/cintegrelogoblue.svg",
    imageOnLeft: false,
  },
  {
    title: "Nossa História",
    text: "Nossa equipe nasceu na turma de Sistemas de Informação durante a cadeira de Desenvolvimento de Software lecionado por Kiev Gama, e após aprender diversos conceitos sobre como criar uma plataforma full-stack, decidimos usar essa 'arma' para o bem, pensando em como usar isso para a promoção do bem-estar social. A equipe consiste em: Eduarda Rodrigues, Isabelle Tenório, Lucas Torres, Matheus Henrique, Ágata Giovanna, Daniel Ramos e Felipe Leite.",
    imageUrl: "/cin.png",
    imageOnLeft: true,
  },
];

export default function AboutSection() {
  const renderedSections = sectionsData.map(function (section, index) {
    return (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center gap-12 ${
          section.imageOnLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-900 mb-1">
            {section.title}
          </h1>
          <p className="text-gray-600 leading-relaxed">{section.text}</p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-100 h-80 sm:w-96 sm:h-96">
            <div className="absolute inset-0 animate-morph"></div>

            <div className="relative w-full h-full bg-blue-100 overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-morph">
              <Image
                src={section.imageUrl}
                alt={section.title}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <SetLoading/>
      <div className="max-w-6xl mx-auto space-y-24">{renderedSections}</div>
    </section>
  );
}

import Image from "next/image";

const sectionsData = [
  {
    title: "Nossa Missão",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty.",
    imageUrl: "/miku.jpg",
    imageOnLeft: false,
  },
  {
    title: "Nossa História",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty.",
    imageUrl: "/miku.jpg",
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
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-blue-100 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-morph"></div>

            <div className="relative w-full h-full overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-morph">
              <Image
                src={section.imageUrl}
                alt={section.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">{renderedSections}</div>
    </section>
  );
}

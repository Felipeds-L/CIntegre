import Image from "next/image";
import Link from "next/link";

interface CardProps {
  apiData: {
    id: number;
    title: string;
    ngoName: string;
    date: string;
    description: string;
    tags: string[];
    imageUrl: string;
  };
}

export default function ActivityCard({ apiData }: CardProps) {
  return (
    <div className="hover:scale-102 transition-transform duration-300 gap-6 rounded-sm bg-white inline-flex pr-6 shadow-md max-w-xl">
      <Image
        src={apiData.imageUrl}
        width={230}
        height={220}
        alt=""
        className="h-full w-56 object-cover rounded-bl-sm rounded-tl-sm"
      />

      <div className="flex flex-col gap-6 pt-8 pb-6 h-full w-full">
        <div className="flex flex-col gap-3">
          <div className="flex align-top justify-between">
            <div className="flex flex-col">
              <h3 className="text-xl font-medium">{apiData.title}</h3>
              <span className="text-sm">{apiData.ngoName}</span>
            </div>

            <span>{apiData.date}</span>
          </div>

          <p className="text-sm">{apiData.description}</p>
        </div>

        <div className="flex items-end justify-between h-full">
          <span className="items-center gap-2.5 bg-[#4f97ff] text-white px-3 py-1 rounded-3xl text-sm">
            {apiData.tags[0]}
          </span>

          <Link
            href={`activities/${apiData.id}`}
            className="rounded-sm bg-[#0f57bf] text-white px-6 py-2"
          >
            Apoiar!
          </Link>
        </div>
      </div>
    </div>
  );
}

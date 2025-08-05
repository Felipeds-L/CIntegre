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
  if (!apiData) {
    return null;
  }

  return (
    <div className="w-full max-w-xl bg-white shadow-md rounded-sm flex flex-col sm:flex-row gap-4 p-4">
      <Image
        src={apiData.imageUrl}
        width={300}
        height={300}
        alt=""
        className="w-full sm:w-56 h-48 object-cover rounded-sm"
      />

      <div className="flex flex-col justify-between w-full gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start flex-wrap gap-1">
            <div className="flex flex-col">
              <h3 className="text-xl font-medium break-words line-clamp-2">
                {apiData.title}
              </h3>
              <span className="text-sm break-words">{apiData.ngoName}</span>
            </div>
            <span className="text-sm whitespace-nowrap">{apiData.date}</span>
          </div>

          <p className="text-sm break-words line-clamp-3">{apiData.description}</p>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="bg-[#4f97ff] text-white px-3 py-1 rounded-3xl text-sm">
            #{apiData.tags[0]}
          </span>

          <Link
            href={`activities/${apiData.id}`}
            className="rounded-sm bg-[#0f57bf] text-white px-6 py-2 text-sm"
          >
            Apoiar!
          </Link>
        </div>
      </div>
    </div>
  );
}
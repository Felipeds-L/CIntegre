import Image from 'next/image';
import Button from '../ui/button'; // importando o botão

// propriedades
type ActionCardProps = {
  title: string;
  ongName: string;
  date: string;
  description: string;
  imageUrl: string;
  tag: string;
};

export default function ActionCard({ title, ongName, date, description, imageUrl, tag }: ActionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm transform hover:scale-105 transition-transform duration-300">
      {/* Imagem do Card */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`Imagem da ação ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">{ongName}</p>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            #{tag}
          </span>
          <Button onClick={() => alert(`Apoiando: ${title}`)}>
            Apoiar!
          </Button>
        </div>
      </div>
    </div>
  );
}
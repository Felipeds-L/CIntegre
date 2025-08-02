import Link from 'next/link';
import { IconType } from 'react-icons';

// define as propriedades 
interface SettingsCardProps {
  href: string;         // link para onde o card vai levar
  text: string;         // texto que vai aparecer no card
  icon: IconType;       // componente do ícone 
}

const SettingsCard: React.FC<SettingsCardProps> = ({ href, text, icon: IconComponent }) => {
  return (
    <Link
      href={href}
      className="flex w-full items-center gap-4 rounded-lg border-l-4 border-blue-600 bg-white p-4 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
    >
      <IconComponent className="h-6 w-6 text-blue-600" />
      <span className="font-medium text-gray-800">{text}</span>
    </Link>
  );
};

export default SettingsCard;
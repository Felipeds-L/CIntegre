import Link from 'next/link';
import { IconType } from 'react-icons';

interface SettingsCardProps {
  href: string;
  text: string;
  icon: IconType;
}

const SettingsCard: React.FC<SettingsCardProps> = ({ href, text, icon: IconComponent }) => {
  return (
    <Link
      href={href}
      className="flex w-full items-center gap-5 rounded-lg border-l-4 border-blue-600 bg-white p-6 shadow-lg transition-all hover:bg-gray-50 hover:shadow-md"
    >
      <IconComponent className="h-8 w-8 text-blue-600" />
      <span className="text-lg font-medium text-gray-800">{text}</span>
    </Link>
  );
};

export default SettingsCard;
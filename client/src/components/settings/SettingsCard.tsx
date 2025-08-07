import Link from "next/link";
import { IconType } from "react-icons";

interface SettingsCardProps {
  text: string;
  icon: IconType;
  onClick?: () => void;
}

const SettingsCard: React.FC<SettingsCardProps> = ({
  onClick,
  text,
  icon: IconComponent,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-5 rounded-lg border-l-4 border-blue-600 bg-white p-6 shadow-lg transition-all hover:bg-gray-50 hover:shadow-md"
    >
      <IconComponent className="h-8 w-8 text-blue-600" />
      <span className="text-lg font-medium text-gray-800">{text}</span>
    </button>
  );
};

export default SettingsCard;

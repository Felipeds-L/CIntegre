interface ActivitySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ActivitySection({
  title,
  children,
}: ActivitySectionProps) {
  return (
    <div className="p-5 border rounded-[4px] border-[#E4E4E7]">
      <h1 className="text-2xl font-bold mb-2.5">{title}</h1>
      {children}
    </div>
  );
}

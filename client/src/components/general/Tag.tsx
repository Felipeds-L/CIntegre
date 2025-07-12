interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="items-center gap-2.5 bg-[#4f97ff] text-white px-3 py-1 rounded-3xl text-sm">
      {children}
    </span>
  );
}

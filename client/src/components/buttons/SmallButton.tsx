import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SmallButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SmallButton({
  children,
  className,
  ...props
}: SmallButtonProps) {
  const baseClasses =
    "px-3 py-1 p-2 text-white bg-[#0F57BF] rounded-sm hover:bg-blue-700 cursor-pointer";

  return (
    <button
      className={`${baseClasses} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

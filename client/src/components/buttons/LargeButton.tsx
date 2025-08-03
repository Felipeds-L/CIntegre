import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LargeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function LargeButton({
  children,
  className,
  ...props
}: LargeButtonProps) {
  const baseClasses =
    "py-1.5 px-[6.25rem] text-white bg-[#0F57BF] rounded-md hover:bg-blue-700 cursor-pointer";

  return (
    <button
      className={`${baseClasses} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

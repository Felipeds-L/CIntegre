import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LargeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function LargeButton({
  children,
  className,
  variant = "primary",
  ...props
}: LargeButtonProps) {
  const primaryClasses =
    "py-1.5 px-[6.25rem] text-white bg-[#0F57BF] rounded-md hover:bg-blue-700 cursor-pointer";
  const secondaryClasses =
    "py-1.5 px-[6.25rem] text-[#0F57BF] bg-[#DBDBDB] rounded-md hover:bg-gray-300 border-[#0F57BF] cursor-pointer";

  const variantClasses =
    variant === "secondary" ? secondaryClasses : primaryClasses;

  return (
    <button
      className={`${variantClasses} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

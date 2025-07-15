import React from 'react';

interface SmallButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SmallButton({ children, className, ...props }: SmallButtonProps ) {

    const baseClasses = "px-3 py-1 p-2 text-white bg-[#0F57BF] rounded-sm hover:bg-blue-700";

    return (
        <button
            className={`${baseClasses} ${className ? className : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

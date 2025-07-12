import React from 'react';

interface LargeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const LargeButton: React.FC<LargeButtonProps> = ({ children, className, ...props }) => {

    const baseClasses = "w-full p-2 text-white bg-[#0F57BF] rounded-md hover:bg-blue-700";

    return (
        <button
            className={`${baseClasses} ${className ? className : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default LargeButton;
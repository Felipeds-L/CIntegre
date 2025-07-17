import React from 'react';

interface LargeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
} // recebe as propriedades quando chamado

export default function LargeInput({ label, ...props }: LargeInputProps) {
    return (
        <div className="mb-4">
            <label className="block font-medium mb-1">{label}</label>
            <input
                {...props}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
    );
};


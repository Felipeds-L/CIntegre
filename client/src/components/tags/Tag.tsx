import React from 'react';

interface TagProps {
    label: string;
    onRemove: () => void; // Função quando clicar no X
}

export default function Tag({label, onRemove }: TagProps) {
    return(
        <div
            className="flex items-center justify-center bg-[#0F57BF] text-white text-sm font-normal px-2.5 py-0.5 rounded-full"
        >
        <span>
            {label}
        </span>

        <button
            className="ml-2 text-white hover:text-gray-200"
            onClick={onRemove}
            aria-label={`Remover tag ${label}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>
    );
};
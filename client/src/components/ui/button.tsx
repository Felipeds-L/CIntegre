"use client";

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        font-semibold py-2 px-6 rounded-lg
        transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}

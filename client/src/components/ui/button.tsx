import React from 'react';

// definindo os tipos de propriedade
type ButtonProps = {
  children: React.ReactNode; // o texto dentro do botão
  onClick?: () => void; // a função que vai ser chamada quando clicar
  className?: string; // classes para customização
};

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600      
        text-white       
        font-semibold    
        py-2 px-6        
        rounded-lg       
        hover:bg-blue-700  
        transition-colors  
        focus:outline-none 
        focus:ring-2       
        focus:ring-blue-500
        focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}
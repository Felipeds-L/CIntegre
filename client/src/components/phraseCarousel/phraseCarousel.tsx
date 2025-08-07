import React, { useState, useEffect } from 'react';

interface PhraseCarouselProps {
  phrases?: string[];
  interval?: number;
}

const PhraseCarousel: React.FC<PhraseCarouselProps> = ({
  phrases = [
    "Veja quais as últimas atividades de ongs!",
    "Seja a mudança que você quer ver no mundo!", 
    "Veja quais escolas estão ajudando a comunidade!",
  ],
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
      <div className="font-semibold text-[#1b1f26c2] max-w-[500px]">
        <blockquote className="leading-relaxed transition-opacity duration-500">
          {phrases[currentIndex]}
        </blockquote>
      </div>
  );
};

export default PhraseCarousel;
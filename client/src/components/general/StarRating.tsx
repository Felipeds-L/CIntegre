"use client";

import React, { useState } from 'react';

interface StarRatingProps {
  initialRating?: number;
  onRate?: (rating: number) => void;
}

function StarRating({ initialRating = 0, onRate }: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  function handleRate(newRating: number) {
    setRating(newRating);
    if (onRate) {
      onRate(newRating);
    }
  }

  return (
    <div
      onMouseLeave={function() { setHoverRating(0); }}
      className="flex gap-1"
      aria-label={`Avaliação de ${rating} de 5 estrelas`}
    >
      {[...Array(5)].map(function(_, index) {
        const starValue = index + 1;
        const isFilled = starValue <= (hoverRating || rating);

        return (
          <span
            key={starValue}
            onClick={function() { handleRate(starValue); }}
            onMouseEnter={function() { setHoverRating(starValue); }}
            className={`cursor-pointer text-4xl transition-colors ${
              isFilled ? 'text-yellow-400' : 'text-gray-400'
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
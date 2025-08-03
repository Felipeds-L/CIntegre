"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import StarRating from '@/components/general/StarRating';
import LargeButton from '@/components/buttons/LargeButton';

interface ValidationResult {
  rating: number;
  comment?: string;
  problem?: string;
}

interface ValidationPopupProps {
  schoolName: string;
  activityName: string;
  schoolAvatarUrl: string;
  period: string;
  onContinue: (result: ValidationResult) => void;
  onFinalize: (result: ValidationResult) => void;
}

export default function ValidationPopup(
{
  schoolName,
  activityName,
  schoolAvatarUrl,
  period,
  onContinue,
  onFinalize
  }: ValidationPopupProps) {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [problem, setProblem] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [showProblemBox, setShowProblemBox] = useState(false);

  function toggleCommentBox() {
    setShowCommentBox(!showCommentBox);
  }

  function toggleProblemBox() {
    setShowProblemBox(!showProblemBox);
  }

  function handleCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  function handleProblemChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setProblem(e.target.value);
  }

  function gatherResults(): ValidationResult {
    const results: ValidationResult = { rating };
    if (showCommentBox && comment.trim() !== '') {
      results.comment = comment;
    }
    if (showProblemBox && problem.trim() !== '') {
      results.problem = problem;
    }
    return results;
    }

  function handleFinalizeClick() {
    onFinalize(gatherResults());

    const simulacao = `
    Nota: ${rating}
    Comentário: ${comment || 'Nenhum comentário.'}
    Problema: ${problem || 'Nenhum problema relatado.'}
    Ação finalizada. A atividade não aparecerá mais no site.
    `;
    alert(simulacao)
  }

  function handleContinueClick() {
    onContinue(gatherResults());

    const simulacao = `
    Nota: ${rating}
    Comentário: ${comment || 'Nenhum comentário.'}
    Problema: ${problem || 'Nenhum problema relatado.'}
    Ação continuada. A atividade permanecerá visível no site.
    `;
    alert(simulacao)
  }

    return (
      <div className="mt-10 bg-white rounded-lg shadow-2xl p-8 max-w-3xl mx-auto">
        
        {/* Título */}
        <h1 className="text-center font-semibold text-gray-800 mb-6">
          Valide a participação da escola <span className="font-bold">{schoolName}</span> na atividade <span className="font-bold">{activityName}</span>.
        </h1>

        {/* Card da Escola */}
        <div className="text-center mb-6">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image src={schoolAvatarUrl} alt={schoolName} fill className="rounded-full object-cover" />
          </div>
          <p className="font-bold text-lg">{schoolName}</p>
          <p className="text-sm text-gray-500">{period}</p>
        </div>

        {/* Botões de Ação Intermediários */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="flex flex-col">
            <LargeButton onClick={toggleCommentBox}>Deixe um comentário </LargeButton>
            {showCommentBox && (
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Digite seu comentário..."
                className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            )}
          </div>

          <div className="flex flex-col">
            <LargeButton variant="secondary" onClick={toggleProblemBox}>Relatar um problema</LargeButton>
              {showProblemBox && (
                <textarea
                  value={problem}
                  onChange={handleProblemChange}
                  placeholder="Descreva o problema ocorrido..."
                  className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-red-500"
                  rows={3}
                />
              )}
          </div>
        </div>
        
        {/* Componente de Estrelas */}
        <div className="flex justify-center mb-8">
          <StarRating initialRating={3} onRate={setRating} />
        </div>

        {/* Botões Finais */}
        <div className="grid grid-cols-2 gap-4 border-t pt-6">
          
          <div className="relative group h-full">
              
              <LargeButton 
              onClick={handleFinalizeClick}
              className="flex items-center h-[36px] w-[344px] justify-center"
              >
              <span>
              Finalizar ação
              </span>

              <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {/* Ícone de Informação */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </div>
              </LargeButton>
              
              {/* caixa de texto que aparece ao passar o mouse */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs 
                          bg-gray-800 text-white text-xs rounded py-1 px-2
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Ao finalizar, a pontuação será enviada e a atividade não aparecerá mais no site.
              </div>

          </div>

          <LargeButton onClick={handleContinueClick}>
              Continuar
          </LargeButton>
          </div>


      </div>
    );
}
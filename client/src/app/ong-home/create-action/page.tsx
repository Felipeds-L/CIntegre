"use client";

import React, { useState } from 'react';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';

import LargeInput from '@/components/input/LargeInput';
import LargeButton from '@/components/buttons/LargeButton';
import SmallButton from '@/components/buttons/SmallButton';
import TagDisplay from '@/components/tags/TagDisplay';
import actionPost from '@/actions/actionPost';
import SetLoading from '@/components/setLoading/setLoading';


interface ActionFormData {
  title: string;
  description: string;
  fieldOfAction: string;
  actionType: string;
  location: string;
  volunteers: string;
  duration: string;
  startDate: string;
  endDate: string;
}

const initialState = {
  ok: false,
  error: "",
  data: null,
};

export default function CreateActionPage() {
  const router = useRouter();
  const [state, action, pending] = useActionState(actionPost, initialState);

  const [formData, setFormData] = useState<ActionFormData>({
    title: '',
    description: '',
    fieldOfAction: '',
    actionType: '',
    location: '',
    volunteers: '',
    duration: '',
    startDate: '',
    endDate: '',
  });

  const [tags, setTags] = useState<string[]>(['Meio Ambiente', 'Educação']);
  const [tagInput, setTagInput] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleAddTag() {
    if (tagInput.trim() !== '' && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  }

  function handleRemoveTag(indexToRemove: number) {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  }

  function handleTagInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTagInput(e.target.value);
  }
  
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
  
      setFiles(function(prevFiles) {
        return [...prevFiles, ...newFiles];
      });
  
      const newPreviews = newFiles.map(function(file) {
        return URL.createObjectURL(file);
      });
  
      setPreviews(function(prevPreviews) {
        return [...prevPreviews, ...newPreviews];
      });
    }
  }

  function handleRemoveFile(indexToRemove: number) {
    URL.revokeObjectURL(previews[indexToRemove]);

    setFiles(files.filter((_, index) => index !== indexToRemove));
    setPreviews(previews.filter((_, index) => index !== indexToRemove));
  }

  React.useEffect(() => {
    if (state?.ok) {
      alert('Ação criada com sucesso!');
      // Opcional: redirecionar para outra página
      // router.push('/dashboard/actions');
  
      setFormData({
        title: '',
        description: '',
        fieldOfAction: '',
        actionType: '',
        location: '',
        volunteers: '',
        duration: '',
        startDate: '',
        endDate: '',
      });
      setTags([]);
      setFiles([]);
      setPreviews([]);
    }
  }, [state?.ok, router]);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <SetLoading/>
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Crie sua próxima ação</h1>
        <p className="text-md text-gray-500 mt-2">
          Preencha os campos abaixo com todas as informações necessárias para continuar com a criação de sua ação.
        </p>
      </header>

      {state?.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm">{state.error}</p>
        </div>
      )}

      <form action={action} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        
        <input type="hidden" name="tags" value={JSON.stringify(tags)} />
        
        {/*coluna 1*/}
        <div className="flex flex-col gap-5">
          <LargeInput 
            name="title" 
            label="Título da Ação" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="Ex: Coleta de lixo na praia." 
            required 
          />

          <div>
            <label htmlFor="description" className="block font-medium mb-1">Descrição</label>
            <textarea 
              id="description" 
              rows={6} 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-md h-auto max-h-48" 
              placeholder="Descreva os objetivos da ação." 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="fieldOfAction" className="block font-medium mb-1">Área de Atuação</label>
            <select 
              id="fieldOfAction" 
              name="fieldOfAction" 
              value={formData.fieldOfAction} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-md" 
              required
            >
              <option value="">Selecione uma área</option>
              <option value="Meio Ambiente">Meio Ambiente</option>
              <option value="Educação">Educação</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>

          <div>
            <div className="items-center">
              <LargeInput 
                label="Tags" 
                name="tag-input" 
                value={tagInput} 
                onChange={handleTagInputChange} 
                placeholder="Digite e clique para adicionar"
              />
              <SmallButton type="button" onClick={handleAddTag}>Adicionar</SmallButton> 
            </div>

            <div className="mt-6">
              <TagDisplay tags={tags} onRemoveTag={handleRemoveTag} />
            </div>
          </div>

          <div>
            <label htmlFor="actionType" className="block font-medium mb-1">Tipo da Ação</label>
            <select 
              id="actionType" 
              name="actionType" 
              value={formData.actionType} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-md" 
              required
            >
              <option value="">Selecione um tipo</option>
              <option value="Voluntariado">Voluntariado</option>
              <option value="Doação">Doação</option>
              <option value="Visita">Visita</option>
            </select>
          </div>

          <LargeInput 
            name="location" 
            label="Localização" 
            value={formData.location} 
            onChange={handleChange} 
            placeholder="Ex: Praia de Boa Viagem." 
            required 
          />
          
        </div>

        {/* coluna 2 */}
        <div className="flex flex-col gap-5">
          
          <LargeInput 
            name="duration" 
            label="Duração Estimada por dia" 
            value={formData.duration} 
            onChange={handleChange} 
            placeholder="Ex: 4 horas" 
            required 
          />

          <div className="grid grid-cols-2 gap-4">
            <LargeInput 
              name="startDate" 
              label="Data de Início" 
              type="date" 
              value={formData.startDate} 
              onChange={handleChange} 
              required 
            />
            <LargeInput 
              name="endDate" 
              label="Data de Fim" 
              type="date" 
              value={formData.endDate} 
              onChange={handleChange} 
            />
          </div>

          <LargeInput 
            name="volunteers" 
            label="Número de Voluntários" 
            type="number" 
            value={formData.volunteers} 
            onChange={handleChange} 
            placeholder="Ex: 10" 
            required 
          />

          <div>
            <label className="block font-medium mb-1">Anexe suas fotos</label>

            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">

              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                >
                <path 
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                </path>
                </svg>

                <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600">
                      <span>Carregue suas fotos</span>
                      <input 
                        id="file-upload" 
                        name="images" 
                        type="file" 
                        className="sr-only" 
                        multiple 
                        accept="image/*"
                        onChange={handleFileChange} 
                      />
                    </label>
                </div>

                <p className="text-xs text-gray-500">PNG ou JPG</p>

              </div>

            </div>

          </div>

          <div className="mt-4">
            
                <h1 className="block font-medium mb-1">Pré-visualização:</h1>

                <div className="mt-2 grid sm:grid-cols-4 md:grid-cols-5 gap-4">

                  {previews.map((previewUrl, index) => (

                    <div key={index} className="relative aspect-square">
                      <img src={previewUrl} alt={`Preview ${index + 1}`} className="h-full w-full object-cover rounded-md" />

                      <button 
                        type="button"
                        onClick={() => handleRemoveFile(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-base font-bold"
                      >
                        ×
                      </button>

                    </div>
                  ))}

                </div>

          </div>

          <div className="mt-0">
            <LargeButton 
              type="submit" 
              className="w-full" 
              disabled={pending}
            >
              {pending ? 'Criando...' : 'Criar'}
            </LargeButton>
          </div>
        </div>

      </form>

    </div>
  );
}
"use client";

import React, { useState } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

import LargeInput from "@/components/input/LargeInput";
import LargeButton from "@/components/buttons/LargeButton";
import SmallButton from "@/components/buttons/SmallButton";
import TagDisplay from "@/components/tags/TagDisplay";
import postActivity from "@/actions/postActivity";
import SetLoading from "@/components/setLoading/setLoading";

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
  const [state, action, pending] = useActionState(postActivity, initialState);

  const [formData, setFormData] = useState<ActionFormData>({
    title: "",
    description: "",
    fieldOfAction: "",
    actionType: "",
    location: "",
    volunteers: "",
    duration: "",
    startDate: "",
    endDate: "",
  });

  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [previews, setPreviews] = useState<string[]>([]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleAddTag() {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  }

  function handleRemoveTag(indexToRemove: number) {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  }

  function handleTagInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTagInput(e.target.value);
  }

  React.useEffect(() => {
    if (state?.ok) {
      alert("Ação criada com sucesso!");
      // Opcional: redirecionar para outra página
      // router.push('/dashboard/actions');

      setFormData({
        title: "",
        description: "",
        fieldOfAction: "",
        actionType: "",
        location: "",
        volunteers: "",
        duration: "",
        startDate: "",
        endDate: "",
      });
      setTags([]);
      setPreviews([]);
    }
  }, [state?.ok, router]);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <SetLoading />
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Crie sua próxima ação</h1>
        <p className="text-md text-gray-500 mt-2">
          Preencha os campos abaixo com todas as informações necessárias para
          continuar com a criação de sua ação.
        </p>
      </header>

      {state?.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm">{state.error}</p>
        </div>
      )}

      <form
        action={action}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      >
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
            <label htmlFor="description" className="block font-medium mb-1">
              Descrição
            </label>
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
            <label htmlFor="fieldOfAction" className="block font-medium mb-1">
              Área de Atuação
            </label>
            <select
              id="fieldOfAction"
              name="fieldOfAction"
              value={formData.fieldOfAction}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Selecione uma área</option>
              <option value="Educação">Educação</option>
              <option value="Saúde">Saúde</option>
              <option value="Meio Ambiente">Meio Ambiente</option>
              <option value="Serviços Sociais">Serviços Sociais</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Segurança Alimentar">Segurança Alimentar</option>
              <option value="Cultura">Cultura</option>
              <option value="Planejamento Urbano">Planejamento Urbano</option>
              <option value="Direitos Humanos">Direitos Humanos</option>
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
              <SmallButton type="button" onClick={handleAddTag}>
                Adicionar
              </SmallButton>
            </div>

            <div className="mt-6">
              <TagDisplay tags={tags} onRemoveTag={handleRemoveTag} />
            </div>
          </div>
        </div>

        {/* coluna 2 */}
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="actionType" className="block font-medium mb-1">
              Tipo da Ação
            </label>
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
          <div className="mt-0">
            <LargeButton type="submit" className="w-full" disabled={pending}>
              {pending ? "Criando..." : "Criar ação"}
            </LargeButton>
          </div>
        </div>
      </form>
    </div>
  );
}

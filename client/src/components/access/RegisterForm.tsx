"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import schoolUsersPost from "@/actions/schoolUsersPost";

function FormStatus() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      style={{ backgroundColor: "#0f57bf" }}
      className="w-full mt-5 text-white py-2 rounded-md hover:opacity-80 transition-colors"
      disabled={pending}
    >
      {pending ? "Registrando..." : "Registrar-se"}
    </button>
  );
}

export default function RegisterForm() {
  const [state, action] = useActionState(schoolUsersPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) {
      window.location.href = "/home";
    }
  }, [state.ok]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Registre-se</h1>
      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Nome
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nome"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="senha" className="block font-medium mb-1">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            name="password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="institute" className="block font-medium mb-1">
            Nome da Instituição
          </label>
          <input
            id="institute"
            type="text"
            name="institute"
            placeholder="Nome da Instituição"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="students" className="block font-medium mb-1">
            Quantidade de Alunos
          </label>
          <input
            id="students"
            type="number"
            name="students"
            placeholder="0"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Número de Telefone
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="(81) 99999-9999"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="street" className="block font-medium mb-1">
            Rua
          </label>
          <input
            id="street"
            type="text"
            name="street"
            placeholder="Avenida exemplo"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="number" className="block font-medium mb-1">
            Número
          </label>
          <input
            id="number"
            type="text"
            name="number"
            placeholder="Número"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="cep" className="block font-medium mb-1">
            CEP
          </label>
          <input
            id="cep"
            type="text"
            name="cep"
            placeholder="00000-000"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="city" className="block font-medium mb-1">
            Cidade
          </label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Cidade"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="state" className="block font-medium mb-1">
            Estado
          </label>
          <input
            id="state"
            type="text"
            name="state"
            placeholder="Estado"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <FormStatus />

        <div className="text-center mt-6">
          <p className="mt-4">
            Lembrou sua conta?{" "}
            <Link href="/login" className="font-bold text-blue-600">
              Voltar para a tela de login.
            </Link>
          </p>
        </div>

        {state.error && (
          <p className="text-center mt-4 text-red-500">
            {state.error}
            {""}
          </p>
        )}
      </form>
    </>
  );
}

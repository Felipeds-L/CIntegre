"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import usersPost from "@/actions/usersPost";

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
  const [state, action] = useActionState(usersPost, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Registre-se</h1>
      <form action={action} className="space-y-4">
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

        {/* <div>
          <label htmlFor="cnpj" className="block font-medium mb-1">
            CNPJ
          </label>
          <input
            id="cnpj"
            type="text"
            placeholder="000.000.000/0000-00"
            name="cnpj"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div> */}

        <div>
          <label htmlFor="nome" className="block font-medium mb-1">
            Nome da Instituição
          </label>
          <input
            id="nome"
            type="text"
            name="name"
            placeholder="Nome da Instituição"
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

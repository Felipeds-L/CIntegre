"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import LargeInput from "../input/LargeInput";
import LargeButton from "../buttons/LargeButton";
import login from "@/actions/login";

import { useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <LargeButton disabled={pending} className="w-full" type="submit">
          Entrando...
        </LargeButton>
      ) : (
        <LargeButton className="w-full" type="submit">
          Entrar
        </LargeButton>
      )}
    </>
  );
}

export default function LoginOngForm() {
  const [state, action] = useActionState(login, {
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
      <Link
        href="/"
        className="inline-block text-black hover:text-gray-800 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>

      <h1 className="text-2xl font-bold mb-3">Faça seu Login</h1>
      <form action={action} className="mb-8">
        {/*executar submit*/}
        <LargeInput
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
        />

        <LargeInput
          label="Senha"
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
        />

        <FormButton />
      </form>

      {state.error && (
        <p className="text-red-500 text-center mb-4">{state.error}</p>
      )}

      <div className="text-center">
        <p className="mt-4">
          É uma ONG nova?{" "}
          <Link
            href="https://conecta.recife.pe.gov.br/acesso"
            className="font-bold text-blue-600"
          >
            Crie sua conta!
          </Link>
        </p>
      </div>
    </>
  );
}

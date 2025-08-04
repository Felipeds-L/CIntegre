"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LargeInput from "../input/LargeInput";
import LargeButton from "../buttons/LargeButton";
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const userType = searchParams.get('type');
  const isOng = userType === 'ong';

  const loginCorrect = email === "teste@teste" && password === "123456";

  function Submit(event: React.FormEvent<HTMLFormElement>) {
    //clicar em entrar
    event.preventDefault();
    alert(`(Simulação) Login com:\n\nUsuário: ${email}\nSenha: ${password}`);
    if (loginCorrect) {
      router.push("/");
    } else {
      setError("Usuário e/ou senha incorretos. Tente novamente.");
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  //------------------------------------------------------------------------------
  return (
    <>
      {/*react fragment*/}
      <Link href="/" className="inline-block text-black hover:text-gray-800 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      
      <h1 className="text-2xl font-bold mb-3">Faça seu Login</h1>
      <form onSubmit={Submit} className="mb-8">
        {/*executar submit*/}
        <LargeInput
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />

        <LargeInput
          label="Senha"
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />

        <LargeButton className="w-full" type="submit">
          Entrar
        </LargeButton>
      </form>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="text-center">
        {!isOng && (
        <Link
          href="/login/recovery"
          className="text-sm text-blue-600 underline"
        >
          Esqueceu a senha?
        </Link>
        )}

        {isOng ? (
        <p className="mt-4">
         É uma ONG nova?{" "}
        <Link href="https://conecta.recife.pe.gov.br/acesso" className="font-bold text-blue-600">
          Crie sua conta!
        </Link>
        </p>
        ) : (

        <p className="mt-4">
          Ainda não criou sua conta?{" "}
          <Link href="/login/register" className="font-bold text-blue-600">
            Crie agora!
          </Link>
        </p>
        )}
      </div>
    </>
  );
}

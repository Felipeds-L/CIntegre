"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Submit(event: React.FormEvent<HTMLFormElement>) {
    //clicar em entrar
    event.preventDefault();
    alert(`(Simulação) Login com:\n\nUsuário: ${email}\nSenha: ${password}`);
    router.push("/");
  }
  //---------------------------------------------------------------------------------------------
  return (
    <>
      {/*react fragment*/}
      <form onSubmit={Submit} className="mb-8">
        {" "}
        {/*executar submit*/}
        <h1 className="text-2xl font-bold mb-6 text-center">Faça seu login:</h1>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            id="email"
            name="email"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-[#0F57BF] rounded-md hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
      <div className="text-center">
        <Link href="/" className="text-sm text-blue-600 underline">
          Esqueceu a senha?
        </Link>
        <p className="mt-4">
          Ainda não criou sua conta?{" "}
          <Link href="/" className="font-bold text-blue-600">
            Crie agora!
          </Link>
        </p>
      </div>
    </>
  );
}

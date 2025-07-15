"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LargeInput from "../input/LargeInput";
import LargeButton from "../buttons/LargeButton";

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

        <LargeButton type="submit">
          Entrar
        </LargeButton>

      </form>
      <div className="text-center">
        <Link href="/" className="text-sm text-blue-600 underline">
          Esqueceu a senha?
        </Link>
        <p className="mt-4">
          Ainda não criou sua conta?{" "}
          <Link href="/login/register" className="font-bold text-blue-600">
            Crie agora!
          </Link>
        </p>
      </div>
    </>
  );
}

"use client";

import React, { useState } from "react";
import LargeInput from "../input/LargeInput";
import LargeButton from "../buttons/LargeButton";

export default function RecoveryForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      setMessage("Por favor, digite o e-mail.");
      return;
    }

    alert(`(Simulação) Pedido de recuperação para o e-mail:\n${email}`);

    setMessage(
      "Caso seu email esteja vinculado a uma conta já existente, enviaremos um e-mail de redefinição de senha dentro de alguns minutos."
    );
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-8">
        <p className="mb-8 text-3xl font-black">Esqueci minha senha:</p>

        <LargeInput
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <LargeButton className="w-full" type="submit">
          Enviar
        </LargeButton>
      </form>

      {message && (
        <p className="mt-4 rounded-md bg-green-100 p-3 text-center text-sm mb-4">
          {message}
        </p>
      )}
    </>
  );
}

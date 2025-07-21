"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [senha, setSenha] = useState("");

  const [error, setError] = useState<string | null>(null);
  const registeredEmailOrCNPJ =
    email === "teste@teste" || cnpj === "12345678901234";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (registeredEmailOrCNPJ) {
      setError("Email ou CNPJ já cadastrado. Tente novamente ou, ");
    } else {
      alert(
        `Cadastro enviado:\nNome: ${nome}\nEmail: ${email}\nCNPJ: ${cnpj}\nSenha: ${senha}`
      );
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Registre-se</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="cnpj" className="block font-medium mb-1">
            CNPJ
          </label>
          <input
            id="cnpj"
            type="text"
            placeholder="000.000.000/0000-00"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="nome" className="block font-medium mb-1">
            Nome da Instituição
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            placeholder="Nome da Instituição"
            onChange={(e) => setNome(e.target.value)}
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
            value={senha}
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#0f57bf" }}
          className="w-full mt-5 text-white py-2 rounded-md hover:opacity-80 transition-colors"
        >
          Registrar-se
        </button>

        {error && (
          <p className="mt-4">
            {error}
            {""}
            <Link href="/login" className="font-bold text-blue-600">
              realize seu login.
            </Link>
          </p>
        )}
      </form>
    </>
  );
}

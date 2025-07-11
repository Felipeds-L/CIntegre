"use client";

import React, { useState } from "react";

export default function RegisterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(
      `Cadastro enviado:\nNome: ${nome}\nEmail: ${email}\nCNPJ: ${cnpj}\nSenha: ${senha}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <h1 className="text-2xl font-bold text-center text-black-600">
          Registre-se
        </h1>

        <div>
          <label htmlFor="nome" className="block font-medium mb-1">
            Nome da Instituição
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
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
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
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
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#0f57bf" }}
          className="w-full text-white font-semibold py-2 rounded-md hover:opacity-80 transition-colors"
        >
          Enviar
        </button>
      </form>
    </>
  );
}

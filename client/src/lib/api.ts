/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// --- USUÁRIOS ---
// Criação de usuário
export function USERS_POST() {
  return {
    url: `${API_URL}/users`,
  };
}

// Listagem de usuários
export function USERS_GET() {
  return {
    url: `${API_URL}/users`,
  };
}

// Listagem de usuário por ID
export function USERS_GET_BY_ID(id: string) {
  return {
    url: `${API_URL}/users/${id}`,
  };
}

// Atualização de usuário
export function USERS_PUT(id: string) {
  return {
    url: `${API_URL}/users/${id}`,
  };
}

// Exclusão de usuário
export function USERS_DELETE(id: string) {
  return {
    url: `${API_URL}/users/${id}`,
  };
}

// --- AUTENTICAÇÃO ---
// Login
export function LOGIN_POST() {
  return {
    url: `${API_URL}/auth/login`,
  };
}

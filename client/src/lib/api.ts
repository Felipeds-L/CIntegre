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

// Criação de usuário com Escola
export function USERS_SCHOOL_POST() {
  return {
    url: `${API_URL}/users-with-school`,
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
    url: `${API_URL}/login`,
  };
}

export function AUTH_USER_GET() {
  return {
    url: `${API_URL}/users/me`,
  };
}

// --- ATIVIDADES ---
// Get all activities
export function ACTIVITIES_GET() {
  return {
    url: `${API_URL}/activities`,
  };
}

// Get activity by ID
export function ACTIVITIES_GET_BY_ID(id: string) {
  return {
    url: `${API_URL}/activities/${id}`,
  };
}

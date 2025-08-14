"use server";
import { SCHOOL_ACTIVITY_UPDATE } from "@/lib/api";
import apiError from "@/lib/apiError";
import { cookies } from "next/headers";

export default async function closeActivity(activity_id: string) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return {
        ok: false,
        error: "Token de autenticação não encontrado. Faça login novamente.",
        data: null,
      };
    }

    const { url } = SCHOOL_ACTIVITY_UPDATE(activity_id);

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({ status: "closed" }),
    });

    if (!response.ok) {
      const data = await response.json();
      return {
        ok: false,
        error: data.error || "Erro ao fechar atividade.",
        data: null,
      };
    }

    return { ok: true, error: "", data: null };
  } catch (err: unknown) {
    return apiError(err);
  }
}

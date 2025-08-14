"use server";
import { SCHOOL_ACTIVITY_POST } from "@/lib/api";
import apiError from "@/lib/apiError";
import { cookies } from "next/headers";

export default async function schoolActivityPost(
  school_id: number,
  activity_id: string,
  status: string,
  pontuation: number
) {
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

    const { url } = SCHOOL_ACTIVITY_POST();
    const body = {
      school_id,
      activity_id,
      status,
      pontuation,
    };
    console.log(body);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        error: data.error || "Erro ao cadastrar escola em atividade.",
        data: null,
      };
    }

    return { data: null, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}

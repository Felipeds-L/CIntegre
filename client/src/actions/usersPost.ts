import { USERS_POST } from "@/lib/api";
import login from "./login";
import apiError from "@/lib/apiError";

interface RegisterState {
  ok: boolean;
  error: string;
  data: null;
}

export default async function usersPost(
  state: RegisterState | undefined,
  formdata: FormData
) {
  const name = formdata.get("name") as string | null;
  const email = formdata.get("email") as string | null;
  const password = formdata.get("password") as string | null;

  try {
    if (!name || !email || !password) {
      return {
        ok: false,
        error: "Preencha todos os campos obrigatórios.",
        data: null,
      };
    }

    const { url } = USERS_POST();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        error: data.error || "Erro ao cadastrar usuário.",
        data: null,
      };
    }

    const { ok } = await login({ data, ok: true, error: "" }, formdata);

    if (!ok) {
      throw new Error("Erro ao logar usuário.");
    }

    return { data: null, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}

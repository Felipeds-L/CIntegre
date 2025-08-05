import { USERS_POST } from "@/lib/api";
import { redirect } from "next/navigation";

interface RegisterState {
  ok: boolean;
  error: string;
  data: null | any;
}

export default async function usersPost(
  state: RegisterState | undefined,
  formdata: FormData
) {
  const name = formdata.get("name") as string | null;
  const email = formdata.get("email") as string | null;
  const password = formdata.get("password") as string | null;

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

  console.log("Response from USERS_POST:", data);

  if (!response.ok) {
    return {
      ok: false,
      error: data.error || "Erro ao cadastrar usuário.",
      data: null,
    };
  }

  redirect("/settings");
}

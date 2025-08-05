"use server";

import { LOGIN_POST } from "@/lib/api";
import apiError from "@/lib/apiError";
import { cookies } from "next/headers";

interface RegisterState {
  ok: boolean;
  error: string;
  data: null;
}

export default async function login(
  state: RegisterState | undefined,
  formdata: FormData
) {
  const email = formdata.get("email") as string | null;
  const password = formdata.get("password") as string | null;

  try {
    if (!email || !password) {
      throw new Error("Preencha todos os campos obrigatórios.");
    }

    const { url } = LOGIN_POST();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid Credentials");
    }

    const data = await response.json();

    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return { data: null, error: "", ok: true };
  } catch (err: unknown) {
    return apiError(err);
  }
}

import { USERS_SCHOOL_POST } from "@/lib/api";
import login from "./login";
import apiError from "@/lib/apiError";

interface RegisterState {
  ok: boolean;
  error: string;
  data: null;
}

export default async function schoolUsersPost(
  state: RegisterState | undefined,
  formdata: FormData
) {
  const name = formdata.get("name") as string | null;
  const email = formdata.get("email") as string | null;
  const password = formdata.get("password") as string | null;
  const institute = formdata.get("institute") as string | null;
  const students = formdata.get("students") as string | null;
  const phone = formdata.get("phone") as string | null;
  const street = formdata.get("street") as string | null;
  const number = formdata.get("number") as string | null;
  const cep = formdata.get("cep") as string | null;
  const city = formdata.get("city") as string | null;
  const stateField = formdata.get("state") as string | null;

  try {
    if (
      !name ||
      !email ||
      !password ||
      !institute ||
      !students ||
      !phone ||
      !street ||
      !number ||
      !cep ||
      !city ||
      !stateField
    ) {
      return {
        ok: false,
        error: "Preencha todos os campos obrigatórios.",
        data: null,
      };
    }

    const { url } = USERS_SCHOOL_POST();

    const body = {
      userData: {
        name,
        email,
        password,
      },
      schoolData: {
        name: institute,
        student_quantity: Number(students),
        score: 0,
        phone_number: phone,
        address: {
          street,
          house_number: number,
          cep,
          city,
          state: stateField,
        },
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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

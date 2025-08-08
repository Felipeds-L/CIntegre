"use server";

import { ACTIVITIES_POST } from "@/lib/api";
import apiError from "@/lib/apiError";
import { cookies } from "next/headers";

interface ActionState {
  ok: boolean;
  error: string;
  data: null;
}

export default async function postActivity(
  state: ActionState | undefined,
  formdata: FormData
) {
  try {
    const title = formdata.get("title") as string | null;
    const description = formdata.get("description") as string | null;
    const fieldOfAction = formdata.get("fieldOfAction") as string | null;
    const actionType = formdata.get("actionType") as string | null;
    const location = formdata.get("location") as string | null;
    const volunteers = formdata.get("volunteers") as string | null;
    const duration = formdata.get("duration") as string | null;
    const startDate = formdata.get("startDate") as string | null;
    const endDate = formdata.get("endDate") as string | null;
    const tagsString = formdata.get("tags") as string | null;

    if (
      !title ||
      !description ||
      !fieldOfAction ||
      !actionType ||
      !location ||
      !volunteers ||
      !duration ||
      !startDate
    ) {
      return {
        ok: false,
        error: "Preencha todos os campos obrigatórios.",
        data: null,
      };
    }

    let tags: string[] = [];
    if (tagsString) {
      try {
        tags = JSON.parse(tagsString);
      } catch {
        tags = [];
      }
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return {
        ok: false,
        error: "Token de autenticação não encontrado. Faça login novamente.",
        data: null,
      };
    }

    const { url } = ACTIVITIES_POST();

    const bodyFormData = new FormData();

    const fieldOfActionFilter = {
      Educação: "education",
      Saúde: "health",
      "Meio Ambiente": "environment",
      "Serviços Sociais": "social_services",
      Tecnologia: "technology",
      Cultura: "culture",
      "Planejamento Urbano": "urban_planning",
      "Direitos Humanos": "human_rights",
      "Segurança Alimentar": "food_security",
    };

    type FieldOfActionKey = keyof typeof fieldOfActionFilter;

    const actionData = {
      title,
      description,
      area_expertise: fieldOfActionFilter[fieldOfAction as FieldOfActionKey],
      category: actionType === "Voluntariado" ? "volunteer" : "donation",
      address: location,
      volunteer_quantity: Number(volunteers),
      duration,
      start_date: startDate,
      end_date: endDate,
      tags,
      status: "open",
      pontuation: (actionType === "volunteer" ? 200 : 100) as number,
      photos: [],
    };

    bodyFormData.append("actionData", JSON.stringify(actionData));

    // const images = formdata.getAll("images") as File[];
    // images.forEach((image, index) => {
    //   if (image && image.size > 0) {
    //     bodyFormData.append(`images`, image);
    //   }
    // });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: bodyFormData,
    });

    const responseData = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        error: responseData.error || "Erro ao criar ação.",
        data: null,
      };
    }

    return {
      ok: true,
      error: "",
      data: responseData,
    };
  } catch (err: unknown) {
    return apiError(err);
  }
}

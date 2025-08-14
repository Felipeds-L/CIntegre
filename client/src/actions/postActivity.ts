"use server";

import { ACTIVITIES_POST } from "@/lib/api";
import apiError from "@/lib/apiError";
import { cookies } from "next/headers";
import getAuthUser from "./getAuthUser";

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
      !startDate ||
      !endDate
    ) {
      return {
        ok: false,
        error: "Preencha todos os campos obrigatórios.",
        data: null,
      };
    }

    const { data: user } = await getAuthUser();
    if (!user?.ong) {
      return {
        ok: false,
        error: "Usuário não autenticado.",
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
    const formattedStartDate = new Date(startDate).toISOString();
    const formattedEndDate = new Date(endDate).toISOString();
    const body = {
      title,
      description,
      area_expertise: [fieldOfActionFilter[fieldOfAction as FieldOfActionKey]],
      category: actionType === "Voluntariado" ? "volunteer" : "donation",
      address: location,
      volunteer_quantity: Number(volunteers),
      duration,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      tags,
      status: "open",
      pontuation: (actionType === "volunteer" ? 200 : 100) as number,
      photos: [
        "https://images.unsplash.com/photo-1576675466684-456bcdeccfbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      ong_id: user.ong.id,
    };

    console.log(body);

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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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

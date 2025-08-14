"use server";
import { SCHOOL_ACTIVITIES_GET } from "@/lib/api";

import apiError from "@/lib/apiError";
import { Activity } from "./getActivities";
import { School } from "./getSchools";
import { cookies } from "next/headers";

export type SchoolActivity = {
  id: number;
  status: "open" | "in_progress" | "closed";
  pontuation: number; // ong avalia
  activity_id: number;
  activity: Activity;
  school_id: number;
  school: School;
};

export default async function getSchoolActivitiesBySchoolId(schoolId: number) {
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
    const { url } = SCHOOL_ACTIVITIES_GET(schoolId);

    const response = await fetch(
      url.replace(":schoolId", schoolId.toString()),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch activities");
    }

    const data = (await response.json()) as SchoolActivity[];

    return { data, error: "", ok: true };
  } catch (err: unknown) {
    return apiError(err);
  }
}

"use server";

import { AUTH_USER_GET } from "@/lib/api";
import apiError from "@/lib/apiError";
import { cookies } from "next/headers";

export type AuthUser = {
  user: {
    id: number;
    name: string;
    email: string;
    school_id: number | null;
    ong_id: number | null;
  };
  school?: {
    id: number;
    name: string;
    student_quantity: number;
    score: number;
    phone_number: string;
    address_id: number;
    address: {
      id: number;
      street: string;
      number: string;
      cep: string;
      complement: string | null;
      city: string;
      state: string;
    };
  };
  ong?: {
    id: number;
    name: string;
    description: string;
    start_year: number;
    phone_number: string;
    social_medias: string[];
  };
};

export default async function getAuthUser() {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) throw new Error("No token found");

    const { url } = AUTH_USER_GET();

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch user");

    const data = (await response.json()) as AuthUser;

    console.log("Fetched auth user:", data);

    return { data, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}

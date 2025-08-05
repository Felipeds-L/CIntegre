"use server";

import { AUTH_USER_GET } from "@/lib/api";
import apiError from "@/lib/apiError";
import { cookies } from "next/headers";

export type User = {
  id: number;
  name: string;
  email: string;
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

    const data = (await response.json()) as User;

    return { data, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}

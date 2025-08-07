"use server"
import { SCHOOLS_GET } from "@/lib/api";
import apiError from "@/lib/apiError";

export type School = {
  id: number;
  name: string;
  student_quantity: number;
  score: number;
  phone_number: string;
  address_id: number;
  address: Address[];
  rank : number;
};

export type Address = {
    id: number;
    street: string;
    house_number: string;
    cep: string;
    complement: string;
    city: string;
    state: string;
};

export default async function getSchools(
) {
  try {
    const { url } = SCHOOLS_GET();

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch schools");
    }

    const data = await response.json() as School[];

    return { data, error: "", ok: true };
  } catch (err: unknown) {
    return apiError(err);
  }
}
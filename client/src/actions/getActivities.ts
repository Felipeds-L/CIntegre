"use server";
import { ACTIVITIES_GET } from "@/lib/api";
import apiError from "@/lib/apiError";

export type Activity = {
  id: number;
  title: string;
  description: string;
  area_expertise: string[];
  tags: string[];
  category: "volunteer" | "donation";
  address: string;
  duration: string;
  start_date: Date;
  end_date: Date;
  volunteer_quantity: number;
  photos: string[];
  status: "open" | "in_progress" | "closed";
  pontuation: number;
  ong_id: number;
  ong: Ong;
};

export type Ong = {
  id: number;
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];
};

export default async function getActivities() {
  try {
    const { url } = ACTIVITIES_GET();

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch activities");
    }

    const data = (await response.json()) as Activity[];

    return { data, error: "", ok: true };
  } catch (err: unknown) {
    return apiError(err);
  }
}

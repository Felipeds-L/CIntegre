import { ACTIVITIES_GET_BY_ID } from "@/lib/api";
import apiError from "@/lib/apiError";
import { Activity } from "./getActivities";
import { cookies } from "next/headers";

export default async function getActivity(id: string) {
  try {
    const { url } = ACTIVITIES_GET_BY_ID(id);

    const token = (await cookies()).get("token")?.value;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60, // Cache for 60 seconds
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching activity with ID ${id}: ${response.statusText}`
      );
    }

    const data = (await response.json()) as Activity;
    console.log("Fetched activity data:", data);

    return { data, ok: true, error: "" };
  } catch (err) {
    return apiError(err);
  }
}

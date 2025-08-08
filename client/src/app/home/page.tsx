import getAuthUser from "@/actions/getAuthUser";
import OngHome from "@/components/homes/OngHome";
import SchoolHome from "@/components/homes/SchoolHome";

export default async function HomePage() {
  const { data: authUser } = await getAuthUser();

  if (!authUser) {
    return <div>Loading...</div>; // Handle loading state or redirect to login
  }

  const userType = authUser?.school ? "school" : "ong";

  if (userType === "ong") return <OngHome authUser={authUser} />;
  if (userType === "school") return <SchoolHome authUser={authUser} />;
}

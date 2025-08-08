import OngHome from "@/components/homes/OngHome";
import SchoolHome from "@/components/homes/SchoolHome";

export default async function HomePage() {
  const userType = "ong"; // This should be dynamically determined based on the logged-in user

  if (userType === "ong") return <OngHome />;
  if (userType === "school") return <SchoolHome />;
}

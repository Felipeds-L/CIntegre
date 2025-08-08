import { AuthUser } from "@/actions/getAuthUser";
import ActivityCard from "@/components/general/ActivityCard";
import SetLoading from "@/components/setLoading/setLoading";

export default function SchoolHome({ authUser }: { authUser: AuthUser }) {
  if (!authUser.school) return null;
  return (
    <>
      <SetLoading />
      <section className="bg-gradient-to-r from-blue-30 to-blue-200 px-8 py-16 text-slate-800">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">
            <span className="block">Boas Vindas,</span>
            <span className="block">{authUser.school.name}</span>
          </h1>
          <p className="mt-2 text-lg">Veja os últimos pedidos de ONGs!</p>
        </div>
      </section>
      <div className="h-5"></div>
      <div className="container mx-auto px-4 py-12 mt-8 mb-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Todas as Minhas Atividades
        </h2>

        <div className="flex justify-center">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sampleActivities.map((activity) => (
              <ActivityCard key={activity.id} apiData={activity} />
            ))}
          </div> */}
        </div>
      </div>

      <div className="h-22"></div>
    </>
  );
}

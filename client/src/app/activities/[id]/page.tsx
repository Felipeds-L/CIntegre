import getActivity from "@/actions/getActivity";
import getAuthUser from "@/actions/getAuthUser";
import ActivityComp from "@/components/activity/Activity";

type ActivityIdParams = {
  params: {
    id: string;
  };
};

export default async function ActionPage({ params }: ActivityIdParams) {
  const { id } = await params;

  const { data: user } = await getAuthUser();

  const { data, error } = await getActivity(id);

  if (!data) return <div className="text-center mt-10">{error}</div>;

  return <ActivityComp initialActivity={data} id={id} user={user} />;
}

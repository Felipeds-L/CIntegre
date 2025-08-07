import RecoveryForm from "@/components/access/RecoveryForm";
import SetLoading from "@/components/setLoading/setLoading";

export default async function Recovery() {
  return (
    <section className="formLogin">
      <SetLoading/>
      <RecoveryForm />
    </section>
  );
}

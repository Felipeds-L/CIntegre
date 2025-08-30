import RegisterForm from "@/components/access/RegisterForm";
import SetLoading from "@/components/setLoading/setLoading";

export const runtime = "nodejs";

export default async function Register() {
  return (
    <section className="formLogin">
      <SetLoading />
      <RegisterForm />
    </section>
  );
}

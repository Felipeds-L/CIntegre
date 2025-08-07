import RegisterForm from "@/components/access/RegisterForm";
import SetLoading from "@/components/setLoading/setLoading";

export default async function Register() {
  return (
    <section className="formLogin">
      <SetLoading />
      <RegisterForm />
    </section>
  );
}

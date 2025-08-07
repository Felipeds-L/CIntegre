import LoginForm from "@/components/access/LoginForm";
import SetLoading from "@/components/setLoading/setLoading";

export default async function Login() {
  return (
    <section className="formLogin">
      <SetLoading />
      <LoginForm />
    </section>
  );
}

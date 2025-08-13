"use client";

import LoginOngForm from "@/components/access/LoginOngForm";
import LoginSchoolForm from "@/components/access/LoginSchoolForm";
import SetLoading from "@/components/setLoading/setLoading";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const seachParams = useSearchParams();
  const userType = seachParams.get("type");
  const isOng = userType === "ong";

  return (
    <section className="formLogin">
      <SetLoading />
      {isOng ? <LoginOngForm /> : <LoginSchoolForm />}
    </section>
  );
}

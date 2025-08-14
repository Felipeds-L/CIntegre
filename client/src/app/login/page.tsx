"use client";

import LoginOngForm from "@/components/access/LoginOngForm";
import LoginSchoolForm from "@/components/access/LoginSchoolForm";
import SetLoading from "@/components/setLoading/setLoading";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginContent() {
  const seachParams = useSearchParams();
  const userType = seachParams.get("type");
  const isOng = userType === "ong";

  return (
    <>
      <SetLoading />
      {isOng ? <LoginOngForm /> : <LoginSchoolForm />}
    </>
  );
}

function LoginFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}

export default function Login() {
  return (
    <section className="formLogin">
      <Suspense fallback={<LoginFallback />}>
        <LoginContent />
      </Suspense>
    </section>
  );
}

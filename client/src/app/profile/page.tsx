"use client";

import SettingsCard from "@/components/settings/SettingsCard";
import Image from "next/image";
import { X } from "lucide-react";
import logout from "@/actions/logout";
import { useUser } from "@/context/userContext";
import SetLoading from "@/components/setLoading/setLoading";

export default function SettingsPage() {
  const { user, setUser } = useUser();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <main className="container mx-auto my-8 min-h-screen p-4">
      <SetLoading />
      <h1 className="text-4xl font-bold my-8">Perfil</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 flex flex-col gap-4">
          <form action={handleLogout}>
            <SettingsCard text="Sair da conta" icon={X} />
          </form>
        </aside>

        <section className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col items-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-gray-300">
              <Image
                src="/no.jpg"
                alt="Avatar da Escola"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className="mt-6 text-3xl font-semibold">
              {user?.school?.name}
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}

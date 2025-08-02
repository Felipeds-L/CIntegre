import SettingsCard from "@/components/settings/SettingsCard";
import Image from "next/image";
import { MdOutlineSettings, MdOutlineReportProblem } from "react-icons/md";

export default function SettingsPage() {
  return (
    <main className="container mx-auto my-8 min-h-screen p-4">
      <h1 className="text-4xl font-bold my-8">Configurações</h1>
      <div className="flex flex-col md:flex-row gap-8">
       
        <aside className="w-full md:w-1/4 flex flex-col gap-4">
          <SettingsCard
            href="/settings"
            text="Relatar um problema"
            icon={MdOutlineReportProblem}
          />
          <SettingsCard
            href="/settings"
            text="Configurações"
            icon={MdOutlineSettings}
          />
        </aside>

       
        <section className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col items-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-gray-300">
              <Image
                src="/miku.jpg"
                alt="Avatar da Escola"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className="mt-6 text-3xl font-semibold">Nome da Escola</h2>
          </div>
        </section>
      </div>
    </main>
  );
}
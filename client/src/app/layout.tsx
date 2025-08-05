import type { Metadata } from "next";
import "./globals.css";
import LayoutManager from "./layoutmanager";
import { Afacad } from "next/font/google";
import getAuthUser from "@/actions/getAuthUser";
import { UserProvider } from "@/context/userContext";

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "CIntegre+",
  description: "CIntegre+",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await getAuthUser();

  return (
    <html lang="pt-BR" className={afacad.className}>
      <body className={`antialiased`}>
        <UserProvider user={user}>
          <div className="App">
            <LayoutManager>{children}</LayoutManager>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}

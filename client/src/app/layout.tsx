import type { Metadata } from "next";
import "./globals.css";
import { Afacad } from "next/font/google";
import getAuthUser from "@/actions/getAuthUser";
import { UserProvider } from "@/context/userContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <Header />
          <div className="App">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

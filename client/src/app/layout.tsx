import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Afacad } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={afacad.className}>
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

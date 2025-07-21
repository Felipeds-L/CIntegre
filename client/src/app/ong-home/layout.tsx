"use client";

import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OngHomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">{children}</main>
      
    </div>
  );
}

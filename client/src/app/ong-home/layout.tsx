"use client";

import { ReactNode } from "react";

export default function OngHomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}

import React from "react";

export default function SchoolHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
}

import React from "react";
import Sidebar from "@/constants/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const LoggedIn = { firstName: "Mahir", lastName: "Labib" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={LoggedIn} />
      SIDEBAR
      {children}
    </main>
  );
}
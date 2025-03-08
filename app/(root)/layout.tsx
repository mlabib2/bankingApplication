import { Main } from "@/node_modules/next/document";
import { Children } from "react";
import Sidebar from "@/constants/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = {firstName: "Mahir", lastName: "Labib"};
  return (
      <main className="flex h-screen w-full font-inter">
          <Sidebar user = {LoggedIn}/>
          {children}
      </main>
  );
}

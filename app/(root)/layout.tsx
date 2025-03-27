import React from "react";
import Sidebar from "@/constants/Sidebar";
import Image from "next/image";
import MobileNav from "@/constants/MobileNav";

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
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNav user={LoggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

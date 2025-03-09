'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ITEMS, sidebarLinks } from "./index"; // Ensure correct import
import { cn } from "@/lib/utils";
import { usePathname } from "@/node_modules/next/navigation";

interface SidebarProps {
  user?: {
    firstName: string;
    lastName: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
    const pathName = usePathname();
  return (
    <section className="sidebar p-4">
      <nav className="flex flex-col gap-4">
        {/* Logo Section */}
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizontal logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {/* Sidebar Navigation Links */}
        {sidebarLinks.map((item) => {
    const isActive = pathName === item.route || pathName.startsWith(item.route);
    return (
      <Link href={item.route} key={item.label} className={cn('sidebar-link flex items-center gap-2 p-2 rounded-md', {
        'bg-bank-gradient': isActive
      })}>
        <Image src={item.imgURL} width={24} height={24} alt={item.label} />
        <span>{item.label}</span>
      </Link>
    );
})}
      </nav>
    </section>
  );
};

export default Sidebar;
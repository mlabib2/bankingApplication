"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { sidebarLinks } from ".";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[265px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizontal logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          {/* Sidebar Navigation Links */}
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(item.route);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "sidebar-link flex items-center gap-2 p-2 rounded-md",
                  {
                    "bg-bank-gradient": isActive,
                  }
                )}
                style={{ color: isActive ? "#ffffff" : "#000000" }} // Explicit inline styling for color
              >
                <Image
                  src={item.imgURL}
                  width={24}
                  height={24}
                  alt={item.label}
                  className={cn({ "brightness-3 invert-0": isActive })}
                />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

"use client";

import React from "react";
import Image from "next/image";
import { Images } from "@/app/utils/contants/Images";
import Link from "next/link";
import { routes } from "@/app/routes";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="p-8 text-center">
        <div className="flex gap-3 border-b-2 pb-3 border-gray-300">
          <Image src={Images.logo} alt="logo" width={22} height={22} />
          <span className="text-white font-semibold text-xl md:text-2xl">
            ADMIN Dashboard
          </span>
        </div>
      </div>
      <div className="px-8">
        {routes.map(({ href, icon, label }, index) => {
          const isActive = pathname === href; 
          return (
            <div
              className={`rounded-md my-2 px-2 py-2 flex items-center gap-3 ${
                isActive
                  ? "bg-primary text-black font-semiBold"
                  : "text-black bg-transparent"
              }`}
              key={index}
            >
              <span className="text-md bg-sidebarColor p-2 rounded-md text-white">
                {icon}
              </span>
              <Link
                href={href}
                className={`flex-grow ${
                  isActive
                    ? "bg-primary text-black font-semiBold"
                    : "text-white bg-transparent"
                }`}
              >
                {label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

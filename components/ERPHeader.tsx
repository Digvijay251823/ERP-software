"use client";
import useThemeStore from "@/context/store";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSession } from "@clerk/nextjs";
import { FaUserCircle } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

function ERPHeader() {
  const pathname = usePathname();
  const { session: data } = useSession();
  return (
    <div
      className={`fixed top-0 left-0 right-0  ${
        pathname === "/" ? "hidden" : "block"
      }`}
    >
      <div className="flex justify-between items-center bg-white py-1 lg:px-10 md:px-5 w-screen px-5">
        <div className="md:w-[20vw] flex items-center gap-2">
          <div className="md:hidden text-2xl">
            <LuMenu />
          </div>
          <Image
            src={Logo}
            alt="Logo"
            height={50}
            width={50}
            className="w-20 drop-shadow-lg shadow-purple-900 fill-slate-500"
            loading="lazy"
          />
        </div>
        <div className="md:w-[80vw] md:flex items-center justify-between">
          <nav className="text-lg text-gray-500 md:flex items-center gap-10  hidden">
            <Link href="/admin/home/employees">
              <p
                className={`transition-colors duration-300 ${
                  pathname.startsWith("/admin/home/employees")
                    ? "text-blue-700"
                    : "text-gray-500"
                }`}
              >
                Home
              </p>
            </Link>
            <Link href="/admin/dashboard">
              <p
                className={`transition-colors duration-300 ${
                  pathname.startsWith("/admin/dashboard")
                    ? "text-blue-700"
                    : "text-gray-500"
                }`}
              >
                Dashboard
              </p>
            </Link>
            <Link href="/admin/analytics">
              <p
                className={`transition-colors duration-300 ${
                  pathname.startsWith("/admin/analytics")
                    ? "text-blue-700"
                    : "text-gray-500"
                }`}
              >
                Analytics
              </p>
            </Link>

            <Link href="/admin/setting">
              <p
                className={`transition-colors duration-300 ${
                  pathname.startsWith("/admin/setting")
                    ? "text-blue-700"
                    : "text-gray-500"
                }`}
              >
                Settings
              </p>
            </Link>
          </nav>
          <div className="flex items-center gap-5">
            <button className="text-2xl text-gray-500">
              <GoSearch />
            </button>
            <button className="text-2xl text-gray-500">
              <IoMdNotificationsOutline />
            </button>
            {data?.publicUserData?.imageUrl ? (
              <div className="flex items-center gap-3 border-l-2 border-l-gray-200 pl-2">
                <Image
                  src={data?.publicUserData?.imageUrl}
                  alt="Avatar_User"
                  height={100}
                  width={100}
                  className="rounded-full h-10 w-10"
                />
                <div className="md:flex flex-col hidden">
                  <p className="font-bold">{`${data?.publicUserData?.firstName} ${data?.publicUserData?.lastName}`}</p>
                  <p className="text-sm font-bold text-gray-500">User</p>
                </div>
              </div>
            ) : (
              <p className="text-2xl text-gray-500">
                <FaUserCircle />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPHeader;

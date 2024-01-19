"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidHome } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";

function ERPHeaderMobile() {
  const pathname = usePathname();
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white flex items-center justify-evenly md:hidden py-3 rounded-t-lg `}
    >
      <Link href={"/admin/home/employees"}>
        <div
          className={`text-2xl ${
            pathname.startsWith("/admin/home")
              ? "text-blue-700"
              : "text-gray-500"
          }`}
        >
          <BiSolidHome />
        </div>
      </Link>
      <Link href={"/admin/dashboard"}>
        <div
          className={`text-2xl ${
            pathname.startsWith("/admin/dashboard")
              ? "text-blue-700"
              : "text-gray-500"
          }`}
        >
          <BiSolidDashboard />
        </div>
      </Link>
      <Link href={"/admin/analytics"}>
        <div
          className={`text-2xl ${
            pathname.startsWith("/admin/analytics")
              ? "text-blue-700"
              : "text-gray-500"
          }`}
        >
          <SiGoogleanalytics />
        </div>
      </Link>
      <Link href={"/admin/settings"}>
        <div
          className={`text-3xl ${
            pathname.startsWith("/admin/settings")
              ? "text-blue-700"
              : "text-gray-500"
          }`}
        >
          <IoIosSettings />
        </div>
      </Link>
    </div>
  );
}

export default ERPHeaderMobile;

"use client";
import React from "react";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { HiTruck } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Link from "next/link";

function MDSideNav() {
  const pathname = usePathname();
  return (
    <div className="fixed h-full left-0 top-14 flex justify-center pt-10 gap-5 w-[20vw]">
      <div className="flex flex-col items gap-10">
        <Link href={"/admin/home/employees"}>
          <div
            className={`flex items-center gap-3 ${
              pathname === "/admin/home/employees"
                ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
            }`}
          >
            <FaUsers className="text-2xl" />
            <p className="text-xl">Employees</p>
          </div>
        </Link>
        <Link href={"/admin/home/partners"}>
          <div
            className={`flex items-center gap-3 ${
              pathname === "/admin/home/partners"
                ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
            }`}
          >
            <FaUserFriends className="text-2xl" />
            <p className="text-xl">Partners</p>
          </div>
        </Link>
        <Link href={"/admin/home/products"}>
          <div
            className={`flex items-center gap-3 ${
              pathname === "/admin/home/products"
                ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
            }`}
          >
            <FaBoxesStacked className="text-2xl" />
            <p className="text-xl">Products</p>
          </div>
        </Link>
        <Link href={"/admin/home/orders"}>
          <div
            className={`flex items-center gap-3 ${
              pathname === "/admin/home/orders"
                ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
            }`}
          >
            <HiTruck className="text-2xl" />
            <p className="text-xl">SalesOrders</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MDSideNav;

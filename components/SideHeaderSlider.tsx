import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { HiTruck } from "react-icons/hi";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Slider: React.FC = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const pathname = usePathname();

  const toggleSlider = () => {
    setSliderOpen((prev) => !prev);
  };

  return (
    <div className={`top-0 left-0 right-0 bottom-0 w-full`}>
      <button onClick={toggleSlider}>
        <MdOutlineMenu size={20} />
      </button>
      <div
        className={
          isSliderOpen
            ? "absolute top-0 left-0 right-0 bottom-0 z-[100] backdrop-brightness-50 h-screen"
            : ""
        }
      >
        <aside
          className={`fixed top-0 left-0 h-full sm:w-2/5 w-4/5 z-[1500] shadow bg-white ${
            isSliderOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          } transition-transform duration-300 ease-in-out `}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full text-xl"
            onClick={toggleSlider}
          >
            <RxCross2 />
          </button>
          <div className="flex justify-center mt-20">
            <nav className="text-lg  flex flex-col gap-10 w-[200px]">
              <Link href="/admin/dashboard">
                <div
                  className={`transition-colors duration-300 w-full flex items-center gap-5 ${
                    pathname.startsWith("/admin/dashboard")
                      ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                      : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                  }`}
                >
                  <FaUsers className="text-2xl" />
                  <p className="text-xl">Employees</p>
                </div>
              </Link>
              <Link href="/admin/analytics">
                <div
                  className={`transition-colors duration-300 w-full flex items-center gap-5 ${
                    pathname.startsWith("/admin/analytics")
                      ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                      : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                  }`}
                >
                  <FaUserFriends className="text-2xl" />
                  <p className="text-xl">Partners</p>
                </div>
              </Link>
              <Link href="/admin/home/employees">
                <div
                  className={`transition-colors duration-300 w-full flex items-center gap-5 ${
                    pathname.startsWith("/admin/home/employees")
                      ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                      : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                  }`}
                >
                  <FaBoxesStacked className="text-2xl" />
                  <p className="text-xl">Products</p>
                </div>
              </Link>
              <Link href="/admin/setting">
                <div
                  className={`transition-colors duration-300 w-full flex items-center gap-5 ${
                    pathname.startsWith("/admin/setting")
                      ? "text-blue-700 bg-blue-100 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                      : "text-gray-500 px-5 py-1.5 hover:bg-blue-200 rounded-full"
                  }`}
                >
                  <HiTruck className="text-2xl" />
                  <p className="text-xl">SalesOrders</p>
                </div>
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Slider;

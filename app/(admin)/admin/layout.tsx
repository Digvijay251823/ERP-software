"use client";

import "./globals.css";
import MDSideNav from "@/components/MDSideNav";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return <section className="mt-16">{children}</section>;
}

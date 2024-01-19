"use client";
import useThemeStore from "@/context/store";
import { useSession } from "@clerk/nextjs";
import React from "react";

function Dashboard() {
  const { session: data } = useSession();
  return <div className="min-h-screen ">Dashboard</div>;
}

export default Dashboard;

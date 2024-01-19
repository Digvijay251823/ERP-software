"use client";
import Image from "next/image";
import ERPHERO from "@/assets/ERPhero.webp";
import { useSession } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { session: data } = useSession();

  return (
    <div>
      <div className="fixed right-0 top-0">
        {data?.publicUserData?.imageUrl && (
          <div className="flex items-center gap-2 m-5 rounded-lg bg-sky-950 border border-sky-900 px-3 py-2">
            <Image
              src={data?.publicUserData?.imageUrl}
              height={50}
              width={50}
              alt="public image "
              className="h-12 w-auto rounded-full"
              loading="lazy"
            />
            <div className="flex items-start flex-col">
              <p className="text-white font-sans text-lg font-bold">{`${data?.publicUserData?.firstName} ${data?.publicUserData?.lastName}`}</p>
              <p className="text-gray-400 text-sm">user</p>
            </div>
          </div>
        )}
      </div>
      <div className="min-h-screen bg-gradient-to-br to-blue-950  from-slate-950 md:flex items-center justify-between lg:px-40 py-10">
        <div className="mb-20 md:flex flex-col items-center gap-5 hidden">
          <p className="text-2xl text-sky-400 font-extralight ">
            ENTERPRISE RESOURSE PLANNING
          </p>
          <Link href={"/admin/dashboard"}>
            <button className="text-white border-2 border-blue-900 px-5 py-2 text-xl rounded-lg transition-colors duration-500 hover:bg-blue-900">
              Explore
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            src={ERPHERO}
            alt="home"
            width={600}
            height={600}
            className="md:h-[80vh] md:w-auto w-[80vw] h-auto"
          />
          <div className="mb-20 flex flex-col items-center gap-5 md:hidden">
            <p className="text-2xl text-sky-400 font-extralight text-center">
              ENTERPRISE RESOURSE PLANNING
            </p>
            <Link href={"/admin/dashboard"}>
              <button className="text-white border-2 border-blue-900 px-5 py-2 text-xl rounded-lg transition-colors duration-500 hover:bg-blue-900">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

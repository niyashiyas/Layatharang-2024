"use client";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col items-center justify-between gap-4 bg-black	object-cover p-24">
      <div className="absolute -mt-28 h-5/6 w-full bg-[url('/group9.png')] bg-contain bg-center bg-no-repeat sm:-mt-24 sm:h-4/5"></div>
      <div className=" mt-80 flex h-full flex-col items-center justify-center sm:mt-96">
        <div className="mt-2 flex rounded-3xl bg-[#151515] font-semibold sm:mt-12 md:mt-8">
          <div
            onClick={() => router.push("scoreboard")}
            // className="cursor-pointer rounded-3xl bg-[#ffa71a] px-8 py-2 text-black hover:bg-[#febe58]"
            className="cursor-pointer rounded-3xl bg-[#fdb43f] px-5 py-1 text-black hover:bg-[#ffa71a] sm:px-8 sm:py-2"
          >
            Score
          </div>
          <div
            onClick={() => router.push("result")}
            className="cursor-pointer rounded-3xl bg-[#151515] px-4 py-1 text-[#febb49] hover:bg-[#202020] sm:px-6 sm:py-2"
          >
            Results
          </div>
        </div>
      </div>
    </main>
  );
}

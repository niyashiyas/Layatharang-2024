"use client";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Stars from "../components/Stars/Stars";

export default function Home() {
  const router = useRouter();

  return (
    <Stars>
      <main className="flex h-screen flex-col items-center justify-between gap-4 bg-black	object-cover p-24">
        <Stars />
        <div className="absolute -mt-28 h-5/6 w-full bg-[url('/group9.png')] bg-contain bg-center bg-no-repeat sm:-mt-24 sm:h-4/5"></div>
        <div className=" mt-80 flex h-full flex-col items-center justify-center sm:mt-96">
          <div className="mt-2 flex rounded-3xl bg-[#151515] font-semibold sm:mt-4 md:mt-3">
            <a href="/scoreboard">
              <div className="cursor-pointer rounded-3xl bg-[#fdb43f] px-5 py-1 text-black hover:bg-[#ffa71a] sm:px-8 sm:py-2">
                Score
              </div>
            </a>
            <a href="/result">
              <div className="cursor-pointer rounded-3xl bg-[#151515] px-4 py-1 text-[#febb49] hover:bg-[#202020] sm:px-6 sm:py-2">
                Results
              </div>
            </a>
          </div>
        </div>
      </main>
    </Stars>
  );
}

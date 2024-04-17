"use client";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Stars from "../components/Stars/Stars";

export default function Home() {
  const router = useRouter();

  return (
    <Stars>
      <main className="flex min-h-screen flex-col items-center justify-start md:pt-16 md:gap-4 sm:gap-0 bg-black	object-cover overflow-hidden">
        <Stars />
        <div className="min-h-[70vh] w-[90vw]  bg-[url('/group14.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className=" max-h-[20vh] z-20 flex  flex-col items-center justify-center">
          <div className=" flex gap-4 rounded-full font-semibold  sm:gap-8">
            <a href="/scoreboard">
              <div
                onclick={() => router.push("/scoreboard")}
                className="cursor-pointer rounded-full border border-[#febb49] px-5 py-1 font-normal text-[#febb49] hover:bg-[#febb49] hover:text-black sm:px-8 sm:py-2"
              >
                Score
              </div>
            </a>
            <a href="/result">
              <div
                onclick={() => router.push("/result")}
                className="cursor-pointer rounded-full border border-[#febb49] px-4 py-1 font-normal text-[#febb49] hover:bg-[#febb49] hover:text-black sm:px-6 sm:py-2"
              >
                Results
              </div>
            </a>
          </div>
        </div>
      </main>
    </Stars>
  );
}

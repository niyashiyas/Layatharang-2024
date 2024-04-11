"use client";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex gap-4 h-screen bg-black flex-col items-center justify-between p-24">
      <div className="h-full w-full bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100">
        <p className="text-white text-center p-2">Scoreboard</p>
      </div>
      <div className="flex w-full h-full gap-4">
        <div className="h-full w-full bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100">
          <p className="text-white text-center p-2">Layatharang Scoreboard</p>
        </div>
        <div className="h-full w-full bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100">
          <p className="text-white text-center p-2">Chakravyuh Scoreboard</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push("/result")}>
        <p className="text-white">Result Page</p>
      </div>
    </main>
  );
}

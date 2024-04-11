"use client";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-screen bg-white flex-col gap-12 items-center p-24">
      <h2 className="">Admin Page</h2>
      <div className="flex flex-col gap-2 text-sm border border-black rounded-lg p-3">
        <p>Login Here</p>
      </div>
    </main>
  );
}

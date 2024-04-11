"use client";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-screen bg-black flex-col items-center justify-between p-24">
      <h2 className="text-white"> Results Page</h2>
    </main>
  );
}

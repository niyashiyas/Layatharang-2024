"use client";
import ResultCard from "@/components/ResultCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h2 className="my-12 text-center text-3xl text-white">Results</h2>
      <div className="mb-8 grid grid-cols-1 place-items-center gap-16 md:grid-cols-3">
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
    </main>
  );
}

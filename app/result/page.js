"use client";
import ResultCard from "@/components/ResultCard/ResultCard";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StarsWhite from "../../components/StarsWhite/StarsWhite";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [layatharangResults, setLayatharangResults] = useState([]);
  const [chakravyuhResults, setChakravyuhResults] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchResults() {
      const chakRes = await supabase
        .from("event")
        .select("*, results: result(* , house(name))")
        .eq("domain", "CHAKRAVYUH")
        .order("created_at", { ascending: false });
      const layaRes = await supabase
        .from("event")
        .select("*, results: result(*)")
        .eq("domain", "LAYATARANG")
        .order("created_at", { ascending: false });

      if (layaRes.error) console.log(layaRes.error);
      if (chakRes.error) console.log(chakRes.error);
      console.log(chakRes.data[0]);
      setLayatharangResults(layaRes.data);
      setChakravyuhResults(chakRes.data);
      setLoading(false);
    }
    fetchResults();
  }, []);
  return (
    // <StarsWhite>
    <main className="h-full bg-black sm:h-screen">
      <StarsWhite />
      <div className={styles.container}>
        <h2 className={styles.text}>RESULTS</h2>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-y-8 px-4 pb-8 sm:gap-y-16 sm:px-12 md:grid-cols-4">
        {chakravyuhResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </main>
    // </StarsWhite>
  );
}

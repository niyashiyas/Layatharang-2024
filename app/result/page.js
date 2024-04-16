"use client";
import ResultCard from "@/components/ResultCard/ResultCard";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [layatharangResults, setLayatharangResults] = useState([]);
  const [chakravyuhResults, setChakravyuhResults] = useState([]);

  /*
    typeOf results
    {
      id: number
      name: string   //event Name
      domain: string //CHAKRAVYUH or LAYATARANG
      results: [
        {
          id: number
          house: {
            name: string
          }
          position: number
          participant: string // single string for all participants
        }
      ]
    }
    */
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
    <main className="h-screen bg-black">
      <div className={styles.container}>
        <h2 className={styles.text}>Results</h2>
      </div>
      <div className="mb-8 grid grid-cols-1 place-items-center gap-y-16 px-0 sm:px-4 md:grid-cols-3">
        {chakravyuhResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
        {/* <ResultCard result={{ name: "Poem writing" }} />
        <ResultCard result={{ name: "Writing competition" }} />
        <ResultCard result={{ name: "Swimming competition" }} />
        <ResultCard result={{ name: "Poem writing" }} />
        <ResultCard result={{ name: "Poem writing" }} /> */}
      </div>
    </main>
  );
}

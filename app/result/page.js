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
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchResults() {
      const chakRes = await supabase
        .from("event")
        .select("*, results: result(*, house(name))")
        .eq("domain", "CHAKRAVYUH")
        .order("created_at", { ascending: false });
      const layaRes = await supabase
        .from("event")
        .select("*, results: result(*, house(name))")
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

  // Function to filter results based on the search query
  const filterResults = (results) => {
    if (!searchQuery) {
      // If there is no search query, return all results
      return results;
    }
    return results.filter((result) => {
      // Check if the event name contains the search query (case-insensitive)
      return (
        result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.domain.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  // Filtered results for Layatharang and Chakravyuh
  const filteredLayatharangResults = filterResults(layatharangResults);
  const filteredChakravyuhResults = filterResults(chakravyuhResults);

  return (
    <main className="h-full bg-black">
      <StarsWhite />
      <div className={styles.container}>
        <h2 className={styles.text}>RESULTS</h2>
        <input
          type="text"
          placeholder="Search results..."
          className={styles.searchBar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>
      <div className="grid grid-cols-1 place-items-center gap-y-8 px-4 pb-8 sm:gap-y-16 sm:px-12 md:grid-cols-4">
        {filteredChakravyuhResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
        {filteredLayatharangResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </main>
  );
}

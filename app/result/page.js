"use client";
import ResultCard from "@/components/ResultCard";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [layatharangResults , setLayatharangResults] = useState([]);
  const [chakravyuhResults , setChakravyuhResults] = useState([]);

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
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    async function fetchResults(){
      const chakRes = await supabase
      .from('event')
      .select('*, results: result(* , house(name))')
      .eq('domain', "CHAKRAVYUH").order('created_at', { ascending: false });
      const layaRes = await supabase
      .from('event')
      .select('*, results: result(*)')
      .eq('domain', "LAYATARANG").order('created_at', { ascending: false });
      
      if (layaRes.error) console.log(layaRes.error);
      if (chakRes.error) console.log(chakRes.error);
      console.log(chakRes.data[0]);
      setLayatharangResults(layaRes.data);
      setChakravyuhResults(chakRes.data);
      setLoading(false);
    }
    fetchResults();
  } , []);
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

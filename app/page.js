"use client";
import supabase from "@/lib/supabase";
import {useRouter} from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [layatarangScoreboard, setLayatarangScoreboard] = useState([]);
  const [chakravyuhScoreboard, setChakravyuhScoreboard] = useState([]);
  const [scoreboard, setScoreboard] = useState([]);
  const [loading, setLoading] = useState(true);
    

  useEffect(() => {
    setLoading(true);
    async function fetchScoreboard() {
        const scoreboard = await supabase.from('house').select('*').order('layatarang_points', {ascending: false});
        if (scoreboard.error){ console.log(scoreboard.error);;
        return
        }
        setLayatarangScoreboard(scoreboard.data);
        setChakravyuhScoreboard([...scoreboard.data].sort((a, b) => b.chakravyuh_points - a.chakravyuh_points));        
        setScoreboard([...scoreboard.data].sort((a, b) => (b.layatharang_points + b.chakravyuh_points) - (a.layatharang_points + a.chakravyuh_points)));      setLoading(false);
      return
    }
    fetchScoreboard();


  }, []);
  return (
    <main className="flex gap-4 h-screen bg-black flex-col items-center justify-between p-24">
      <div className="h-full w-full bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100">
        <div className="text-white text-center p-2">Scoreboard
        </div>
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

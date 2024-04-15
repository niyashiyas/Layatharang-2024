"use client";
import { useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import LeaderboardRow from "@/components/LeaderboardRow";
import Image from "next/image";
import ChakravyuhRow from "@/components/ChakravyuhRow";
import LayatharangRow from "@/components/LayatharangRow";

export default function LeaderboardPage() {
  const [layatarangScoreboard, setLayatarangScoreboard] = useState([]);
  const [chakravyuhScoreboard, setChakravyuhScoreboard] = useState([]);
  const [scoreboard, setScoreboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchScoreboard() {
      const { data, error } = await supabase.from("house").select("*");
      console.log(data);
      if (error) {
        console.error("Error fetching scoreboard:", error.message);
        setLoading(false);
        return;
      }

      // Sort data for chakravyuh scoreboard
      const sortedChakravyuhData = [...data].sort(
        (a, b) =>
          parseFloat(b.chakravyuh_points) - parseFloat(a.chakravyuh_points),
      );

      // Sort data for layatharang scoreboard
      const sortedLayatharangData = [...data].sort(
        (a, b) =>
          parseFloat(b.layatarang_points) - parseFloat(a.layatarang_points),
      );

      // Sort data for scoreboard based on the sum of points
      const sortedScoreboardData = [...data].sort(
        (a, b) =>
          parseFloat(b.layatarang_points) +
          parseFloat(b.chakravyuh_points) -
          (parseFloat(a.layatarang_points) + parseFloat(a.chakravyuh_points)),
      );

      setLayatarangScoreboard(sortedLayatharangData);
      setChakravyuhScoreboard(sortedChakravyuhData);
      setScoreboard(sortedScoreboardData);
      setLoading(false);
    }

    fetchScoreboard();
  }, []);

  return (
    <main className="container mx-auto h-full bg-black p-4 text-white">
      <h1 className="mb-2 mt-8 text-center text-3xl font-semibold sm:mt-6">
        Leaderboard
      </h1>
      <table className="mx-auto w-11/12 border-separate border-spacing-y-4">
        <thead>
          <tr className="font-light">
            <th className="hidden py-3 text-sm font-normal sm:block sm:text-lg">
              Position
            </th>
            <th className="py-3 text-sm font-normal sm:text-lg">House</th>
            <th className="py-2 pr-2 text-sm font-normal sm:text-lg">
              Layatharang
            </th>
            <th className="py-3 pl-1 text-sm font-normal sm:text-lg">
              Chakravyuh
            </th>
            <th className="py-3 text-sm font-normal sm:text-lg">Total</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((row, index) => (
            <LeaderboardRow key={index} rowData={row} />
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <h1 className="mb-0 mt-12 text-center text-3xl font-semibold ">
            Chakravyuh
          </h1>
          <table className="mx-auto border-separate border-spacing-y-4">
            <thead>
              <tr className="font-light">
                <th className="py-2 text-base font-normal sm:text-lg">
                  Position
                </th>
                <th className="py-2 text-base font-normal sm:text-lg">House</th>
                <th className="py-2 text-base font-normal sm:text-lg">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {chakravyuhScoreboard.map((row, index) => (
                <ChakravyuhRow key={index} rowData={row} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full">
          <h1 className="mb-0 mt-12 text-center text-3xl font-semibold ">
            Layatharang
          </h1>
          <table className="mx-auto border-separate border-spacing-y-4">
            <thead>
              <tr className="font-light">
                <th className="py-2 text-sm font-normal sm:text-lg">
                  Position
                </th>
                <th className="py-2 text-sm font-normal sm:text-lg">House</th>
                <th className="py-2 text-sm font-normal sm:text-lg">Points</th>
              </tr>
            </thead>
            <tbody>
              {layatarangScoreboard.map((row, index) => (
                <LayatharangRow key={index} rowData={row} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

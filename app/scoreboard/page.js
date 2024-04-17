"use client";
import { useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import LeaderboardRow from "@/components/LeaderboardRow";
import Image from "next/image";
import ChakravyuhRow from "@/components/ChakravyuhRow";
import LayatharangRow from "@/components/LayatharangRow";
import StarsWhite from "../../components/StarsWhite/StarsWhite";

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
    <main className="container mx-auto h-full bg-black py-2 text-white">
      <StarsWhite />
      <h1
        className="relative p-9 text-center text-4xl font-normal "
        style={{
          background:
            "linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        LEADER BOARD
      </h1>
      <table className="mx-auto -mt-6 w-full border-separate border-spacing-y-4 p-4 px-6 pt-0 sm:w-11/12">
        <thead
          style={{
            background:
              "linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <tr className="border border-white">
            <th className="hidden pb-4 pt-2 text-sm font-normal sm:block sm:text-xl">
              Position
            </th>
            <th className="pb-4 pt-2 text-sm font-normal sm:text-xl">House</th>
            <th className="pb-4 pr-2 pt-2 text-sm font-normal sm:text-xl">
              Layatharang
            </th>
            <th className="pb-4 pl-1 pt-2 text-sm font-normal sm:text-xl">
              Chakravyuh
            </th>
            <th className="pb-4 pt-2 text-sm font-normal sm:text-xl">Total</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((row, index) => (
            <LeaderboardRow key={index} rowData={row} index={index} />
          ))}
        </tbody>
      </table>
      <div className="grid-cols-0 grid md:grid-cols-2 md:gap-x-12">
        <div className="w-full">
          <h1
            className="relative p-8 text-center text-4xl font-normal"
            style={{
              background:
                "linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Chakravyuh
          </h1>
          <table className="mx-auto -mt-7 border-separate border-spacing-y-4 px-6">
            <thead
              style={{
                background:
                  "linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <tr className="">
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
                <ChakravyuhRow key={index} rowData={row} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full">
          <h1
            className="relative p-8 text-center text-4xl font-normal "
            style={{
              background:
                "linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Layatharang
          </h1>
          <table className="mx-auto -mt-7 border-separate border-spacing-y-4 px-6">
            <thead
              style={{
                background:
                  "linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <tr className="">
                <th className="py-2 text-sm font-normal sm:text-lg">
                  Position
                </th>
                <th className="py-2 text-sm font-normal sm:text-lg">House</th>
                <th className="py-2 text-sm font-normal sm:text-lg">Points</th>
              </tr>
            </thead>
            <tbody>
              {layatarangScoreboard.map((row, index) => (
                <LayatharangRow key={index} rowData={row} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

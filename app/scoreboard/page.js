// "use client";
// import { useEffect, useState } from "react";
// import { supabase } from "../../lib/supabase";
// import LeaderboardRow from "../../components/LeaderboardRow";

// export default function LeaderboardPage() {
//   const [leaderboardData, setLeaderboardData] = useState([]);

//   useEffect(() => {
//     async function fetchLeaderboard() {
//       try {
//         // Fetch leaderboard data from Supabase
//         const { data, error } = await supabase
//           .from("leaderboard")
//           .select("*")
//           .order("total", { ascending: false });

//         if (error) {
//           throw error;
//         }

//         setLeaderboardData(data);
//       } catch (error) {
//         console.error("Error fetching leaderboard:", error.message);
//       }
//     }

//     fetchLeaderboard();
//   }, []);

//   return (
//     <div className="container mx-auto h-screen p-4">
//       <h1 className="mb-4 text-3xl font-semibold">Leaderboard</h1>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="text-left">Position</th>
//             <th className="text-left">House Name</th>
//             <th className="text-left">Layatharang</th>
//             <th className="text-left">Chakravyuh</th>
//             <th className="text-left">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboardData.map((row, index) => (
//             <LeaderboardRow key={index} rowData={row} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import LeaderboardRow from "../../components/LeaderboardRow";
import Image from "next/image";

export default function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        // Sample data for demonstration
        const sampleData = [
          {
            position: 1,
            houseName: "Mahaveeras",
            layatharang: 100,
            chakravyuh: 95,
            total: 195,
          },
          {
            position: 2,
            houseName: "Adheeras",
            layatharang: 90,
            chakravyuh: 100,
            total: 190,
          },
          {
            position: 3,
            houseName: "Dhronas",
            layatharang: 85,
            chakravyuh: 90,
            total: 175,
          },
          {
            position: 4,
            houseName: "Brahmas",
            layatharang: 80,
            chakravyuh: 85,
            total: 165,
          },
        ];

        setLeaderboardData(sampleData);
        console.log("leaderboard data set");
      } catch (error) {
        console.error("Error fetching leaderboard:", error.message);
      }
    }

    fetchLeaderboard();
  }, []);

  return (
    <div className="container mx-auto h-full bg-black p-4 text-white">
      <h1 className="mb-4 text-center text-3xl font-semibold">Leaderboard</h1>
      {/* <Image
        className="w-full object-cover"
        src="/bg1.png"
        width={100}
        height={100}
        alt=" Image"
      /> */}
      <table className="mx-auto w-11/12 border-separate border-spacing-y-6">
        <thead>
          <tr className="font-light">
            <th className="py-6 text-lg font-normal">Position</th>
            <th className="py-6 text-lg font-normal">House</th>
            <th className="py-6 text-lg font-normal">Layatharang</th>
            <th className="py-6 text-lg font-normal">Chakravyuh</th>
            <th className="py-6 text-lg font-normal">Total</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((row, index) => (
            <LeaderboardRow key={index} rowData={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

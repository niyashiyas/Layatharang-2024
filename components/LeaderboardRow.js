// LeaderboardRow.js
import React from "react";
import Image from "next/image";

const HouseLogo = ({ name }) => {
  switch (name) {
    case "MAHAVEERAS":
      return (
        <Image
          className="mx-0 object-contain sm:mx-auto sm:object-cover"
          src="/mahav.svg"
          width={100}
          height={100}
          alt=" Mahaveeras Logo"
        />
      );
    case "ADHEERAS":
      return (
        <Image
          className="mx-0 object-contain sm:mx-auto sm:object-cover"
          src="/adheera.svg"
          width={100}
          height={100}
          alt=" Adheeras Logo"
        />
      );
    case "DHRONAS":
      return (
        <Image
          className="mx-0 object-contain sm:mx-auto sm:object-cover"
          src="/drona.svg"
          width={100}
          height={100}
          alt=" Dhronas Logo"
        />
      );
    case "BRAHMAS":
      return (
        <Image
          className="mx-0 object-contain sm:mx-auto sm:object-cover"
          src="/bhramas.svg"
          width={100}
          height={100}
          alt=" Brahmas Logo"
        />
      );
    default:
      return null;
  }
};

export default function LeaderboardRow({ rowData }) {
  const { chakravyuh_points, id, name, layatarang_points } = rowData;

  // Define gradient colors for each house
  const gradientColors = {
    MAHAVEERAS: "bg-gradient-to-b from-[#693F85] to-[#1B0C28]",
    ADHEERAS: "bg-gradient-to-b from-[#D42423] to-[#4D0303]",
    DHRONAS: "bg-gradient-to-b from-[#036938] to-[#26574B]",
    BRAHMAS: "bg-gradient-to-b from-[#03BFF0] to-[#13274A]",
  };

  // Get the gradient color based on the house name
  const houseColor = gradientColors[name];

  return (
    <tr className={`${houseColor} rounded-2xl text-center text-white`}>
      <td className="hidden rounded-l py-4 text-sm sm:block sm:py-8 sm:text-base">
        1
      </td>
      <td className="p-0">
        <HouseLogo name={name} />
      </td>
      <td className="py-4 text-sm sm:py-8 sm:text-base">{layatarang_points}</td>
      <td className="py-4 text-sm sm:py-8 sm:text-base">{chakravyuh_points}</td>
      <td className="rounded-r px-8 py-4 text-sm sm:px-8 sm:py-8 sm:text-base">
        {layatarang_points + chakravyuh_points}
      </td>
    </tr>
  );
}

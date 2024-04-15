// LeaderboardRow.js
import React from "react";
import Image from "next/image";

const HouseLogo = ({ houseName }) => {
  switch (houseName) {
    case "Mahaveeras":
      return (
        <Image
          className="mx-auto object-cover"
          src="/mahav.svg"
          width={100}
          height={100}
          alt=" Mahaveeras Logo"
        />
      );
    case "Adheeras":
      return (
        <Image
          className="mx-auto object-cover"
          src="/adheera.svg"
          width={100}
          height={100}
          alt=" Adheeras Logo"
        />
      );
    case "Dhronas":
      return (
        <Image
          className="mx-auto object-cover"
          src="/drona.svg"
          width={100}
          height={100}
          alt=" Dhronas Logo"
        />
      );
    case "Brahmas":
      return (
        <Image
          className=" mx-auto object-cover"
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

export default function LayatharangRow({ rowData }) {
  const { position, houseName, points } = rowData;

  // Define gradient colors for each house
  const gradientColors = {
    Mahaveeras: "bg-gradient-to-l from-[#693F85] to-[#1B0C28]",
    Adheeras: "bg-gradient-to-l from-[#D42423] to-[#4D0303]",
    Dhronas: "bg-gradient-to-l from-[#26574B] to-[#112A24]",
    Brahmas: "bg-gradient-to-l from-[#03BFF0] to-[#13274A]",
  };

  // Get the gradient color based on the house name
  const houseColor = gradientColors[houseName];

  return (
    <tr className={`${houseColor} rounded-2xl text-center text-white`}>
      <td className="rounded-l px-12 py-7">{position}</td>
      <td className="py-0">
        <HouseLogo houseName={houseName} />
      </td>
      <td className="rounded-r px-10 py-7">{points}</td>
    </tr>
  );
}

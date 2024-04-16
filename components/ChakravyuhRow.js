// LeaderboardRow.js
import React from "react";
import Image from "next/image";

const HouseLogo = ({ name }) => {
  switch (name) {
    case "MAHAVEERAS":
      return (
        <Image
          className="mx-auto object-cover"
          src="/mahav.svg"
          width={100}
          height={100}
          alt=" Mahaveeras Logo"
        />
      );
    case "ADHEERAS":
      return (
        <Image
          className="mx-auto object-cover"
          src="/adheera.svg"
          width={100}
          height={100}
          alt=" Adheeras Logo"
        />
      );
    case "DHRONAS":
      return (
        <Image
          className="mx-auto object-cover"
          src="/drona.svg"
          width={100}
          height={100}
          alt=" Dhronas Logo"
        />
      );
    case "BRAHMAS":
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

export default function ChakravyuhRow({ rowData, index }) {
  const { chakravyuh_points, id, name, layatarang_points } = rowData;

  // Define gradient colors for each house
  const gradientColors = {
    MAHAVEERAS: "bg-gradient-to-b from-[#693F85] to-[#1B0C28]",
    ADHEERAS: "bg-gradient-to-b from-[#D42423] to-[#4D0303]",
    DHRONAS: "bg-gradient-to-b from-[#26574B] to-[#112A24]",
    BRAHMAS: "bg-gradient-to-b from-[#03BFF0] to-[#13274A]",
  };

  // Get the gradient color based on the house name
  const houseColor = gradientColors[name];

  const position = index + 1;

  return (
    <tr className={`${houseColor} rounded-2xl px-16 text-center text-white`}>
      <td className="rounded-l-lg px-14 py-4 sm:py-7">{position}</td>
      <td className="py-0">
        <HouseLogo name={name} />
      </td>
      <td className="rounded-r-lg px-14 py-4 sm:py-7">{chakravyuh_points}</td>
    </tr>
  );
}

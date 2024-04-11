import Image from "next/image";
export default function ResultCard() {
  return (
    <div className="flex h-[300px] w-[300px] flex-col items-center justify-center gap-6 overflow-hidden ">
      <div className="relative h-[300px] w-full">
        <Image
          layout="fill"
          objectFit="contain"
          src={"https://imgflip.com/s/meme/Smiling-Cat.jpg"}
          className="transition-all hover:rotate-6 hover:scale-110"
        />
        <h1 className="absolute bottom-2 left-2 w-max text-2xl font-bold text-black">
          Competition name
        </h1>
      </div>
    </div>
  );
}

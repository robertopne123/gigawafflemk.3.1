import Link from "next/link";

export const HeroBlog = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1250px] mx-auto h-[calc(100vh-82px)] flex flex-col gap-8 justify-center">
        <h1 className="font-parkson lg2:text-9xl lg3:text-9xl lg:text-9xl sm:text-8xl text-7xl">
          The waffle <br />
          corner blog <br />
        </h1>
      </div>
    </div>
  );
};

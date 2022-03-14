export const HeroError = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1250px] mx-auto h-[calc(100vh-82px)] flex flex-col gap-8 justify-center">
        <h1 className="font-parkson lg:text-9xl sm:text-8xl text-7xl">
          OOOPS <br />
          THIS PAGE <br />
          DOESN&apos;T EXIST
        </h1>
        <div className="flex flex-row gap-4">
          <div className="group w-[140px] h-[40px] hover:bg-gigapink hover:border-gigapink border-2 border-black flex flex-col justify-center">
            <p className="font-poppins font-semibold text-center group-hover:text-white">
              Go Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

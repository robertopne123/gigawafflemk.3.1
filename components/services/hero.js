export const HeroServices = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1250px] mx-auto h-[calc(100vh-82px)] flex flex-col gap-8 justify-center">
        <h1 className="font-parkson lg2:text-9xl lg3:text-9xl lg:text-9xl sm:text-8xl text-7xl">
          All the <br />
          SERVICES WITHOUT <br />
          THE WAFFLE
        </h1>
        <div className="flex flex-row gap-4">
          <div className="group w-[140px] h-[40px] bg-gigapink hover:bg-transparent hover:border-black border-2 border-gigapink flex flex-col justify-center">
            <p className="text-white font-poppins font-semibold text-center group-hover:text-black">
              Enquire Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

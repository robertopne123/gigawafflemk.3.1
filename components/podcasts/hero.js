export const HeroPodcasts = () => {
  return (
    <div className="w-full px-4 bg-studio bg-cover">
      <div className="max-w-[1250px] mx-auto h-[calc(100vh-82px)] flex flex-col gap-8 justify-center">
        <h1 className="font-parkson text-9xl text-white">
          The <br />
          Waffle <br />
          Corner
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

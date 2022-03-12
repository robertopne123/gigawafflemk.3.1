export const HomeStats = () => {
  return (
    <div className="bg-gigablue w-full px-4 py-20 relative">
      <div className="absolute top-0 left-0 h-[120px] w-[30px] flex flex-col">
        <div className="bg-gigapink h-[30px] w-[30px]"></div>
        <div className="bg-gigablue h-[30px] w-[30px]"></div>
        <div className="bg-white h-[30px] w-[30px]"></div>
        <div className="bg-black h-[30px] w-[30px]"></div>
      </div>
      <div className="max-w-[1250px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-10">
        <div className="h-[200px] w-[200px] bg-white rounded-full flex flex-col justify-center mx-auto">
          <h3 className="font-parkson text-center text-6xl">+205%</h3>
          <p className="font-parkson text-center text-3xl">Traffic</p>
        </div>
        <div className="h-[200px] w-[200px] bg-gigapink rounded-full flex flex-col justify-center mx-auto">
          <h3 className="font-parkson text-center text-6xl">+333%</h3>
          <p className="font-parkson text-center text-3xl">Reach</p>
        </div>
        <div className="h-[200px] w-[200px] bg-black rounded-full flex flex-col justify-center mx-auto">
          <h3 className="font-parkson text-center text-6xl text-white">
            +155%
          </h3>
          <p className="font-parkson text-center text-3xl text-white">Clicks</p>
        </div>
      </div>
    </div>
  );
};

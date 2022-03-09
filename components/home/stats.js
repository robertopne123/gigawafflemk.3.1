export const HomeStats = () => {
  return (
    <div className="bg-gigablue w-full px-4 py-20">
      <div className="max-w-[1250px] mx-auto grid grid-cols-3">
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

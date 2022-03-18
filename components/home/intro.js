export const HomeIntro = () => {
  return (
    <div className="w-full px-4 bg-gigapink py-20 relative">
      <div className="absolute top-0 right-0 h-[30px] w-[120px] flex flex-row -translate-y-[30px]">
        <div className="bg-gigapink h-[30px] w-[30px]"></div>
        <div className="bg-gigablue h-[30px] w-[30px]"></div>
        <div className="bg-white h-[30px] w-[30px]"></div>
        <div className="bg-black h-[30px] w-[30px]"></div>
      </div>
      <div className="max-w-[1250px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-parkson text-5xl">Gigawaffle</h3>
          <p className="text-white font-poppins font-semibold">Why us?</p>
          <p className="text-white font-poppins text-sm">
            When it comes to marketing, web design and branding, it goes over
            some people’s heads, and we don’t blame you. Understanding all the
            terms, technologies and methods can be a bit mind-boggling, which is
            why we’re here. <br />
            <br />
            At gigawaffle, we love taking businesses to that next level, through
            creating experiences that truly resonate with your customers, whilst
            doing it in a way that removes any of the waffle for you. This
            allows you to fully understand how we can take your business to
            where it should be. <br />
            <br />
            Our team of creatives and strategists are dedicated to showing you
            how we can build your companies digital identity, so you can reach
            your audience in the most efficient ways possible.
          </p>
        </div>
        <div className="flex flex-col justify-center relative">
          <img src="/waffles.png" className="h-[400px] object-contain" />
          <div className="bg-gray-800 aspect-video flex flex-col justify-center relative hidden">
            <div className="absolute top-0 left-0 h-[60px] w-[15px] flex flex-col">
              <div className="bg-gigapink h-[15px] w-[15px]"></div>
              <div className="bg-gigablue h-[15px] w-[15px]"></div>
              <div className="bg-white h-[15px] w-[15px]"></div>
              <div className="bg-black h-[15px] w-[15px]"></div>
            </div>
            <img src="/play.svg" className="w-[60px] h-[60px] mx-auto"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

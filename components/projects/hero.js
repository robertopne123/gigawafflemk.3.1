export const HeroProjects = () => {
  return (
    <div className="w-full bg-black/90 relative">
      <div className="w-full h-[calc(100vh-82px)] overflow-y-clip top-[0px] bg-black/90">
        <div className="max-w-[1250px] mx-auto relative flex flex-row justify-end">
          <div className="absolute left-0 top-0 flex flex-col gap-8 justify-center h-screen">
            <p className="font-poppins text-white w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              ipsum, feugiat at mi eget, varius vulputate nisi. Cras commodo
              nulla et dui tincidunt, ut mattis augue aliquam. Phasellus lorem
              lacus, laoreet sed lacinia non, eleifend eu ligula. Sed sodales
              eros non purus placerat, nec imperdiet tellus commodo. In hac
              habitasse platea dictumst. Aliquam aliquam sit amet ante eget
              iaculis. Phasellus suscipit pulvinar justo luctus accumsan. Sed
              consequat sodales ante.
            </p>
            <h1 className="font-parkson text-9xl text-white" id="">
              OUR PROJECTS
            </h1>
            <div className="flex flex-row gap-4">
              <div className="group w-[140px] h-[40px] hover:bg-gigapink hover:border-gigapink border-2 border-white flex flex-col justify-center">
                <p className="font-poppins text-white font-semibold text-center group-hover:text-white">
                  View Services
                </p>
              </div>
              <div className="group w-[140px] h-[40px] bg-gigapink hover:bg-transparent hover:border-white border-2 border-gigapink flex flex-col justify-center">
                <p className="text-white font-poppins font-semibold text-center group-hover:text-white">
                  Enquire Now
                </p>
              </div>
            </div>
          </div>
          <div className="no-scrollbar bg-contain flex flex-col gap-[100px] mt-[150px] h-screen pb-[410px] overflow-y-scroll relative">
            <img
              src="/projects/PGB.jpg"
              className="w-[40%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/grandvenue.jpg"
              className="w-[40%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/mycabinbed.jpg"
              className="w-[40%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/swapmyenergy.jpg"
              className="w-[40%] self-end border-[5px] border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

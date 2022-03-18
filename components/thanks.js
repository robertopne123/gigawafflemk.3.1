import Link from "next/link";

export const Thanks = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1250px] mx-auto h-[calc(100vh-82px)] flex flex-col gap-8 justify-center">
        <h1 className="font-parkson lg2:text-9xl lg3:text-9xl lg:text-9xl sm:text-8xl text-7xl">
          THANK YOU <br />
          FOR YOUR <br />
          ENQUIRY
        </h1>
        <div className="flex flex-row gap-4">
          <Link href="/">
            <a>
              <div className="group w-[180px] h-[40px] hover:bg-gigapink hover:border-gigapink border-2 border-black flex flex-col justify-center">
                <p className="font-poppins font-semibold text-center group-hover:text-white">
                  Continue Browsing
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

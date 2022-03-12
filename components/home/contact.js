export const Contact = () => {
  return (
    <div className="w-full bg-gigapink py-20 px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-white">Sign up to our mailing list</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="py-2 px-4 font-parkson text-2xl outline-none"
          ></input>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="py-2 px-4 font-parkson text-2xl outline-none"
          ></input>
        </div>
        <div className="flex flex-col gap-4 justify-end">
          <p className="font-poppins text-white">
            Gain access to exclusive offers and tips that help you grow your
            brand.
          </p>
          <div className="group w-[140px] h-[40px] bg-black hover:bg-transparent hover:border-black border-2 border-black flex flex-col justify-center">
            <p className="text-white font-poppins font-semibold text-center group-hover:text-black">
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

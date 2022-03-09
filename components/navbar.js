export const Navbar = (props) => {
  return (
    <div
      className={`w-full px-4 py-4 ${
        props.colour === "black" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-[1250px] mx-auto flex flex-row justify-between">
        <img
          src="/logo.svg"
          className={`w-[50px] h-[50px] ${
            props.colour == "black" ? "invert" : "invert-0"
          }`}
        />
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-between first:gap-1 w-[35px] h-[30px]">
            <div
              className={`h-[5px] w-full ${
                props.colour === "black" ? "bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`bg-black h-[5px] w-full ${
                props.colour === "black" ? "bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`bg-black h-[5px] w-full ${
                props.colour === "black" ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

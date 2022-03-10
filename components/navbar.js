import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: { opacity: 1, y: "-100%" },
};

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full px-4 py-4 ${
        props.colour === "black" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-[1250px] mx-auto flex flex-row justify-between">
        <Link href="/">
          <a>
            <img
              src="/logo.svg"
              className={`w-[50px] h-[50px] ${
                props.colour == "black" ? "invert" : "invert-0"
              }`}
            />
          </a>
        </Link>
        <div className="flex flex-col justify-center">
          <div
            className="flex flex-col justify-between first:gap-1 w-[35px] h-[30px] group cursor-pointer"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <div
              className={`h-[5px] w-full group-hover:bg-gigapink ${
                props.colour === "black" ? "bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`h-[5px] w-full group-hover:bg-gigapink ${
                props.colour === "black" ? "bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`h-[5px] w-full group-hover:bg-gigapink ${
                props.colour === "black" ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="bg-gigapink h-screen w-full absolute left-0 top-0 z-20 overflow-clip"
      >
        <div className="flex flex-row justify-end max-w-[1250px] mx-auto my-10 group z-40">
          <div
            className="h-[45px] w-[45px] flex flex-row cursor-pointer"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group"
            >
              <rect
                x="0.357422"
                y="25.1066"
                width="35"
                height="5"
                transform="rotate(-45 0.357422 25.1066)"
                fill="none"
                className="fill-white group-hover:fill-black"
              />
              <rect
                x="3.89258"
                y="0.357849"
                width="35"
                height="5"
                transform="rotate(45 3.89258 0.357849)"
                fill="none"
                className="fill-white group-hover:fill-black"
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-col justify-center h-full max-w-[1250px] mx-auto -translate-y-10 ">
          <div className="flex flex-row gap-3 -translate-y-20">
            <img src="/logo.svg" className="h-[50px] w-[50px] invert"></img>
            <p className="font-parkson text-5xl text-white">Gigawaffle</p>
          </div>
          <Link href="/">
            <a>
              <h3 className="font-parkson text-white text-8xl hover:text-black -translate-y-20">
                Home
              </h3>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <h3 className="font-parkson text-white text-8xl hover:text-black -translate-y-20">
                Projects
              </h3>
            </a>
          </Link>
          <Link href="/services">
            <a>
              <h3 className="font-parkson text-white text-8xl hover:text-black -translate-y-20">
                Services
              </h3>
            </a>
          </Link>
          <Link href="/ourteam">
            <a>
              <h3 className="font-parkson text-white text-8xl hover:text-black -translate-y-20">
                Our Team
              </h3>
            </a>
          </Link>
          <Link href="/podcasts">
            <a>
              <h3 className="font-parkson text-white text-8xl hover:text-black -translate-y-20">
                Podcasts
              </h3>
            </a>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};
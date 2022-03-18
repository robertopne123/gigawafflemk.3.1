import { animate, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function Counter({ from, to, colour }) {
  const ref = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        ref.current.textContent = "+" + value.toFixed(0) + "%";
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return (
    <motion.h3
      ref={ref}
      className={`font-parkson text-center text-6xl text-${colour}`}
    ></motion.h3>
  );

  // useEffect(() => {
  //   if (inView) {
  //     const controls = animate(from, to, {
  //       duration: 1,
  //       onUpdate(value) {
  //         ref.current.textContent = "+" + value.toFixed(0) + "%";
  //       },
  //     });
  //   }
  //   return () => controls.stop();
  // }, [from, to]);

  // return (
  //   <p
  //     className={`font-parkson text-center text-6xl text-${colour}`}
  //     ref={ref}
  //     animate={controls}
  //   />
  // );
}

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
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[200px] w-[200px] bg-white rounded-full flex flex-col justify-center mx-auto"
        >
          <Counter from={0} to={205} colour="black" />
          {/* <h3 className="font-parkson text-center text-6xl">+205%</h3> */}
          <p className="font-parkson text-center text-3xl">Traffic</p>
        </motion.div>
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[200px] w-[200px] bg-gigapink rounded-full flex flex-col justify-center mx-auto"
        >
          <Counter from={0} to={333} colour="black" />
          {/* <h3 className="font-parkson text-center text-6xl">+333%</h3> */}
          <p className="font-parkson text-center text-3xl">Reach</p>
        </motion.div>
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[200px] w-[200px] bg-black rounded-full flex flex-col justify-center mx-auto"
        >
          <Counter from={0} to={155} colour="white" />
          {/* <h3 className="font-parkson text-center text-6xl text-white">
            +155%
          </h3> */}
          <p className="font-parkson text-center text-3xl text-white">Clicks</p>
        </motion.div>
      </div>
    </div>
  );
};

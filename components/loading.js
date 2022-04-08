import ReactPlayer from "react-player";
import { useState } from "react";
import { motion } from "framer-motion";

export const Loading = (props) => {
  const [visible, setVisible] = useState(true);

  const transition = {
    duration: 2,
    ease: "easeInOut",
  };

  const animateIn = {
    pathLength: 1,
    pathOffset: 0,
  };
  const animateOut = {
    pathLength: 1,
    pathOffset: 1,
  };

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 2,
      },
    },
    closed: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 2,
        delay: 6,
      },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.div
      className="absolute left-0 top-0 w-screen h-screen bg-black z-[100]"
      initial="open"
      animate="closed"
      variants={variants}
    >
      <div className="h-screen w-screen flex flex-col justify-center">
        <ReactPlayer
          url="/logo.mp4"
          className="w-screen h-screen"
          width="100vw"
          height="auto"
          muted
          playing
          config={{
            file: {
              playerVars: {
                start: 2,
              },
            },
          }}
        />
        {/* <motion.svg
          width="1692"
          height="1692"
          viewBox="0 0 1692 1692"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[350px] w-[200px] overflow-visible mx-auto"
        >
          <motion.path
            d="M1630.05 529.877L1473.88 800.23V800.277L1456.39 830.665L1323.91 1060.03L1318 1070.25L1185.62 1299.62L1157.86 1251.55L1053.18 1070.25L1047.28 1060.03V1059.98L1019.56 1012.01L1000.01 978.151L979.605 1013.51L947.529 1069.04V1069.08L946.779 1070.25L841.264 1253.01L809.14 1308.58L671.548 1070.25L670.798 1069.13V1069.08L533.206 830.712L335.166 487.811L216.521 282.034L54.1682 0.8477H330.758L403.071 126.012L515.386 320.629L809.187 829.492L841.264 773.921L861.663 738.609L999.958 499.019L1138.25 738.609L1157.81 772.374L1185.48 820.395L1368.14 504.037C1358.29 489.593 1347.92 475.572 1336.95 462.066C1329.45 452.733 1321.71 443.636 1313.64 434.772C1259.57 374.981 1194.11 325.506 1120.71 289.912C1037.66 249.629 944.481 227.072 845.953 227.072C844.968 227.072 843.983 227.072 842.952 227.119C755.257 227.447 671.783 245.783 596.047 278.516C585.167 283.206 574.475 288.177 563.923 293.57C560.828 295.071 557.78 296.665 554.732 298.259L442.182 103.315C445.184 101.673 448.232 99.9849 451.233 98.3905C461.644 92.9037 472.148 87.6045 482.841 82.4929C555.951 47.6495 634.923 23.0293 717.834 10.4144C759.571 4.03658 802.34 0.753906 845.953 0.753906C1017.17 0.753906 1176.52 51.6825 1309.66 139.237L1309.98 139.424C1352.57 167.421 1392.52 199.216 1429.29 234.341C1437.68 242.407 1445.98 250.614 1454.14 259.055C1465.82 271.107 1477.12 283.581 1488.05 296.337C1534.47 350.501 1574.15 410.668 1605.8 475.525C1614.57 493.392 1622.54 511.494 1630.05 529.877Z"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={visible ? animateIn : animateOut}
            transition={transition}
            className="bg-clip-text stroke-gigapink stroke-[15] m-2"
          />
          <motion.path
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={visible ? animateIn : animateOut}
            transition={transition}
            d="M486.311 839.856L619.354 1070.3H486.311V839.856Z"
            className="bg-clip-text stroke-gigapink stroke-[15] m-2"
          />
          <motion.path
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={visible ? animateIn : animateOut}
            transition={transition}
            d="M486.311 839.856L486.744 839.606L485.811 837.99V839.856H486.311ZM619.354 1070.3V1070.8H620.22L619.787 1070.05L619.354 1070.3ZM486.311 1070.3H485.811V1070.8H486.311V1070.3ZM485.878 840.106L618.921 1070.55L619.787 1070.05L486.744 839.606L485.878 840.106ZM619.354 1069.8H486.311V1070.8H619.354V1069.8ZM486.811 1070.3V839.856H485.811V1070.3H486.811Z"
            className="bg-clip-text stroke-gigapink stroke-[15] m-2"
          />
          <motion.path
            d="M1691.11 846.047C1691.11 871.558 1689.98 896.835 1687.73 921.736C1684.54 957.705 1679.1 993.018 1671.55 1027.58C1668.36 1041.93 1664.84 1056.19 1661 1070.3C1618.23 1225.95 1532.04 1363.73 1416.34 1469.62C1406.07 1479.04 1395.62 1488.14 1384.88 1497.05C1238.61 1618.28 1050.79 1691.11 846 1691.11C379.248 1691.11 0.8479 1312.7 0.8479 846C0.8479 766.324 11.8215 689.275 32.5024 616.165V616.118C59.2798 521.154 102.189 433.037 158.229 354.816V354.769C166.952 342.529 176.05 330.524 185.429 318.8L307.311 529.83C298.916 543.617 291.038 557.733 283.675 572.177C240.015 657.902 215.442 754.929 215.442 857.724C215.442 886.752 217.412 915.218 221.257 943.168V943.214C243.861 1110.58 332.353 1257.09 459.58 1355.94L459.627 1355.99C557.967 1432.43 679.614 1480.26 812.001 1487.25C823.256 1487.86 834.604 1488.19 846 1488.19C973.415 1488.19 1092.06 1450.39 1191.29 1385.25C1201.89 1378.36 1212.3 1371.09 1222.43 1363.45C1290.34 1312.89 1347.69 1248.97 1390.6 1175.58C1410.06 1142.33 1426.57 1107.11 1439.74 1070.25H1370.2L1475.76 887.456L1475.81 887.409L1508.54 830.712H1690.96C1691.06 835.824 1691.11 840.935 1691.11 846.047Z"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={visible ? animateIn : animateOut}
            transition={transition}
            className="bg-clip-text stroke-gigapink stroke-[15] m-2"
          />
          <motion.path
            d="M1012.39 1070.3H985.937L999.161 1047.37L1012.39 1070.3Z"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={visible ? animateIn : animateOut}
            transition={transition}
            className="bg-clip-text stroke-gigapink stroke-[15] m-2"
          />
        </motion.svg> */}
      </div>
    </motion.div>
  );
};
